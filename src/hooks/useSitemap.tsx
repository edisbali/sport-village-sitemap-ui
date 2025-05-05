
import { useRef, useEffect, useState, useCallback } from 'react';
import type { Core, NodeSingular, ElementDefinition, StylesheetStyle } from 'cytoscape';
import type { NodeStatus, SitemapNode, SitemapEdge, SitemapData } from '@/types/sitemap';
import { supabase } from '@/integrations/supabase/client';

// Define a function that maps status to color
const getColorFromStatus = (status: NodeStatus): string => {
  switch(status) {
    case 'existing':
      return '#ff0092'; // Pink color for existing items
    case 'new':
      return '#3c763d'; // Green for new
    case 'delete':
      return '#a94442'; // Red for delete
    default:
      return '#ff0092';
  }
};

// Initial sitemap data structure - will be populated from Supabase
const initialData: SitemapData = {
  nodes: [],
  edges: []
};

interface UseSitemapProps {
  containerId: string;
}

export function useSitemap({ containerId }: UseSitemapProps) {
  const cyRef = useRef<Core | null>(null);
  const containerRef = useRef<HTMLElement | null>(null);
  const [data, setData] = useState<SitemapData>(initialData);
  const [loading, setLoading] = useState(true);
  const [cytoscapeModule, setCytoscapeModule] = useState<any>(null);
  
  // Import Cytoscape dynamically
  useEffect(() => {
    const loadCytoscape = async () => {
      try {
        // Dynamic import instead of static import
        const module = await import('cytoscape');
        setCytoscapeModule(module.default);
        console.log("Cytoscape loaded successfully");
      } catch (error) {
        console.error("Error loading cytoscape:", error);
      }
    };
    
    loadCytoscape();
  }, []);
  
  // Function to fetch data from Supabase
  const fetchFromSupabase = useCallback(async () => {
    try {
      setLoading(true);
      console.log("Fetching data from Supabase...");
      
      // Fetch nodes
      const { data: nodesData, error: nodesError } = await supabase
        .from('sitemap_nodes')
        .select('*');
      
      if (nodesError) {
        console.error("Error fetching nodes:", nodesError);
        return;
      }
      
      // Fetch edges
      const { data: edgesData, error: edgesError } = await supabase
        .from('sitemap_edges')
        .select('*');
      
      if (edgesError) {
        console.error("Error fetching edges:", edgesError);
        return;
      }
      
      // If we have data from Supabase, use it
      if (nodesData && nodesData.length > 0) {
        const loadedData: SitemapData = {
          nodes: nodesData.map((node: any) => ({
            id: node.id.toString(), // Convert number to string here
            label: node.label,
            status: node.status as NodeStatus,
            description: node.description,
            position: node.position_x && node.position_y 
              ? { x: node.position_x, y: node.position_y } 
              : undefined
          })),
          edges: edgesData.map((edge: any) => ({
            id: edge.id.toString(),
            source: edge.source,
            target: edge.target
          }))
        };
        console.log("Loaded data from Supabase:", loadedData);
        setData(loadedData);
      } else {
        console.log("No data in Supabase");
        setData(initialData);
      }
      
    } catch (error) {
      console.error("Error fetching from Supabase:", error);
    } finally {
      setLoading(false);
    }
  }, []);
  
  // Function to save data to Supabase
  const saveToSupabase = useCallback(async () => {
    try {
      console.log("Saving data to Supabase...");
      // First clear existing data
      await supabase.from('sitemap_edges').delete().neq('id', 0);
      await supabase.from('sitemap_nodes').delete().neq('id', 0);
      
      // Get node positions from cytoscape
      if (cyRef.current) {
        const updatedData = { ...data };
        updatedData.nodes = updatedData.nodes.map(node => {
          const cyNode = cyRef.current?.getElementById(node.id);
          if (cyNode) {
            const position = cyNode.position();
            return {
              ...node,
              position: { x: position.x, y: position.y }
            };
          }
          return node;
        });
        setData(updatedData);
        
        console.log("Data to save:", updatedData);
        
        // Insert nodes without id field to let Supabase generate it
        const nodesToInsert = updatedData.nodes.map(node => ({
          label: node.label,
          status: node.status,
          description: node.description || '',
          position_x: node.position ? node.position.x : 0,
          position_y: node.position ? node.position.y : 0
        }));
        
        console.log("Nodes to insert:", nodesToInsert);
        const { data: insertedNodes, error: nodesError } = await supabase
          .from('sitemap_nodes')
          .insert(nodesToInsert)
          .select();
        
        if (nodesError) {
          console.error("Error saving nodes to Supabase:", nodesError);
          throw nodesError;
        }
        
        console.log("Inserted nodes:", insertedNodes);
        
        // Create a mapping of original node IDs to new Supabase IDs
        const idMapping: Record<string, string> = {};
        insertedNodes.forEach((node: any, index: number) => {
          idMapping[updatedData.nodes[index].id] = node.id.toString();
        });
        
        // Insert edges using the new node IDs
        const edgesToInsert = updatedData.edges.map(edge => ({
          source: idMapping[edge.source] || edge.source,
          target: idMapping[edge.target] || edge.target
        }));
        
        console.log("Edges to insert:", edgesToInsert);
        const { error: edgesError } = await supabase
          .from('sitemap_edges')
          .insert(edgesToInsert);
        
        if (edgesError) {
          console.error("Error saving edges to Supabase:", edgesError);
          throw edgesError;
        }
        
        console.log("Data saved to Supabase successfully!");
        return true;
      }
      return false;
    } catch (error) {
      console.error("Error saving to Supabase:", error);
      throw error;
    }
  }, [data]);
  
  // Initialize Cytoscape when the module is loaded
  useEffect(() => {
    if (!cytoscapeModule || !containerRef.current) return;
    
    try {
      if (containerRef.current && !cyRef.current) {
        cyRef.current = cytoscapeModule({
          container: containerRef.current,
          style: [
            {
              selector: 'node',
              style: {
                'label': 'data(label)',
                'text-valign': 'center',
                'text-halign': 'center',
                'color': '#fff',
                'font-size': '12px',
                'text-outline-width': 2,
                'text-outline-color': 'data(color)',
                'background-color': 'data(color)',
                'width': 50,
                'height': 50,
                'text-wrap': 'wrap',
                'text-max-width': '100px',
                'grabbable': true
              } as any // Use any to bypass TypeScript checking for the style
            },
            {
              selector: 'edge',
              style: {
                'width': 2,
                'line-color': '#aaa',
                'target-arrow-color': '#ccc',
                'target-arrow-shape': 'triangle',
                'curve-style': 'bezier'
              }
            }
          ],
          layout: {
            name: 'preset', // Use preset layout to maintain positions
            fit: true,
            padding: 20
          },
          elements: []
        });

        // Set up node click handler for selection
        cyRef.current.on('tap', 'node', function(event) {
          const node = event.target.data();
          console.log('Node clicked:', node);
          // Custom event to notify parent component
          const customEvent = new CustomEvent('node-click', { detail: node });
          window.dispatchEvent(customEvent);
        });
      }
    } catch (error) {
      console.error("Error initializing cytoscape:", error);
    }
    
    // Save reference to container for cleanup
    const container = document.getElementById(containerId);
    if (container) {
      containerRef.current = container;
    }
    
    // Fetch data from Supabase on initial load
    fetchFromSupabase();
    
    return () => {
      if (cyRef.current) {
        cyRef.current.destroy();
        cyRef.current = null;
      }
    };
  }, [containerId, fetchFromSupabase, cytoscapeModule]);
  
  // Update cytoscape when data changes
  useEffect(() => {
    if (!cyRef.current || loading || !cytoscapeModule) return;
    
    // Clear existing elements
    cyRef.current.elements().remove();
    
    // Add nodes with positions if available
    const cyNodes = data.nodes.map(node => ({
      data: {
        id: node.id,
        label: node.label,
        color: node.color || getColorFromStatus(node.status),
        status: node.status,
        description: node.description
      },
      position: node.position || undefined
    }));
    
    // Add edges
    const cyEdges = data.edges.map(edge => ({
      data: {
        id: edge.id,
        source: edge.source,
        target: edge.target
      }
    }));
    
    // Add elements to cytoscape
    cyRef.current.add([...cyNodes, ...cyEdges]);
    
    // If no positions are defined, run a layout
    const nodesWithPositions = data.nodes.filter(node => node.position);
    if (nodesWithPositions.length < data.nodes.length) {
      cyRef.current.layout({
        name: 'breadthfirst',
        directed: true,
        padding: 10,
        fit: true
      }).run();
    }
    
    // Save the positions after layout is complete
    setTimeout(() => {
      if (!cyRef.current) return;
      
      const updatedData = { ...data };
      updatedData.nodes = updatedData.nodes.map(node => {
        const cyNode = cyRef.current?.getElementById(node.id);
        if (cyNode) {
          const position = cyNode.position();
          return {
            ...node,
            position: { x: position.x, y: position.y }
          };
        }
        return node;
      });
      
      setData(updatedData);
    }, 500);
    
  }, [data, loading, cytoscapeModule]);
  
  // Functions to manipulate the sitemap
  const addNode = useCallback((node: Omit<SitemapNode, 'id'>, connections: string[] = []) => {
    setData(prev => {
      // Generate a new ID
      const newId = Date.now().toString();
      
      // Add the new node
      const newNode = {
        id: newId,
        ...node,
        color: node.color || getColorFromStatus(node.status)
      };
      
      // Add new edges for connections
      const newEdges = connections.map(targetId => ({
        id: `e${Date.now()}-${targetId}`,
        source: newId,
        target: targetId
      }));
      
      return {
        nodes: [...prev.nodes, newNode],
        edges: [...prev.edges, ...newEdges]
      };
    });
  }, []);
  
  const updateNode = useCallback((id: string, updates: Partial<SitemapNode>) => {
    setData(prev => {
      const updatedNodes = prev.nodes.map(node => {
        if (node.id === id) {
          return {
            ...node,
            ...updates,
            color: updates.status ? getColorFromStatus(updates.status) : node.color
          };
        }
        return node;
      });
      
      return {
        ...prev,
        nodes: updatedNodes
      };
    });
  }, []);
  
  const removeNode = useCallback((id: string) => {
    setData(prev => {
      // Remove the node
      const filteredNodes = prev.nodes.filter(node => node.id !== id);
      
      // Remove any edges connected to this node
      const filteredEdges = prev.edges.filter(
        edge => edge.source !== id && edge.target !== id
      );
      
      return {
        nodes: filteredNodes,
        edges: filteredEdges
      };
    });
  }, []);
  
  const updateNodeConnections = useCallback((nodeId: string, connectionIds: string[]) => {
    setData(prev => {
      // Remove existing connections for this node
      const filteredEdges = prev.edges.filter(
        edge => edge.source !== nodeId
      );
      
      // Create new edges for the specified connections
      const newEdges = connectionIds.map(targetId => ({
        id: `e${Date.now()}-${targetId}`,
        source: nodeId,
        target: targetId
      }));
      
      return {
        ...prev,
        edges: [...filteredEdges, ...newEdges]
      };
    });
  }, []);

  return {
    containerRef,
    data,
    loading,
    cyRef,
    addNode,
    updateNode,
    removeNode,
    updateNodeConnections,
    saveToSupabase,
    fetchFromSupabase
  };
}
