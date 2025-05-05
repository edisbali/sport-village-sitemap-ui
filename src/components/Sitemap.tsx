
import React, { useState, useEffect } from 'react';
import { useSitemap } from '@/hooks/useSitemap';
import { type NodeStatus, type SitemapNode } from '@/types/sitemap';
import { toast } from 'sonner';
import { SitemapHeader } from './sitemap/SitemapHeader';
import { SitemapLegend } from './sitemap/SitemapLegend';
import { SitemapVisualization } from './sitemap/SitemapVisualization';
import { NodeDialog } from './sitemap/NodeDialog';
import { getColorByStatus } from './sitemap/utils';

export const Sitemap: React.FC = () => {
  const { 
    containerRef, 
    data, 
    loading,
    addNode, 
    updateNode, 
    removeNode, 
    updateNodeConnections, 
    saveToSupabase 
  } = useSitemap({ containerId: 'sitemap-cy' });
  
  const [showAddDialog, setShowAddDialog] = useState(false);
  const [showEditDialog, setShowEditDialog] = useState(false);
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null);
  const [selectedConnections, setSelectedConnections] = useState<string[]>([]);
  
  const [newNodeData, setNewNodeData] = useState<{
    label: string;
    description: string;
    status: NodeStatus;
    color: string;
  }>({
    label: '',
    description: '',
    status: 'existing',
    color: '#ff0092'
  });

  useEffect(() => {
    // Listen for node clicks
    const handleNodeClick = (event: Event) => {
      const customEvent = event as CustomEvent;
      const node = customEvent.detail;
      console.log('Node click event received:', node);
      
      setSelectedNodeId(node.id);
      
      // Find node in data to get full details
      const selectedNode = data.nodes.find(n => n.id === node.id);
      if (selectedNode) {
        // Set form data
        setNewNodeData({
          label: selectedNode.label,
          description: selectedNode.description || '',
          status: selectedNode.status,
          color: selectedNode.color || getColorByStatus(selectedNode.status)
        });
        
        // Set connections
        const connections = data.edges
          .filter(edge => edge.source === node.id)
          .map(edge => edge.target);
        setSelectedConnections(connections);
        
        // Show edit dialog
        setShowEditDialog(true);
      }
    };
    
    window.addEventListener('node-click', handleNodeClick);
    
    return () => {
      window.removeEventListener('node-click', handleNodeClick);
    };
  }, [data.edges, data.nodes]);

  const handleSaveToSupabase = async () => {
    try {
      await saveToSupabase();
      toast.success('Modifiche salvate con successo!');
    } catch (error) {
      toast.error('Errore durante il salvataggio: ' + (error as Error).message);
      console.error('Error saving to Supabase:', error);
    }
  };
  
  const handleAddNode = () => {
    addNode({
      label: newNodeData.label,
      description: newNodeData.description,
      status: newNodeData.status,
      color: newNodeData.color
    }, selectedConnections);
    
    setShowAddDialog(false);
    // Reset form
    setNewNodeData({
      label: '',
      description: '',
      status: 'existing',
      color: '#ff0092'
    });
    setSelectedConnections([]);
  };
  
  const handleUpdateNode = () => {
    if (!selectedNodeId) return;
    
    updateNode(selectedNodeId, {
      label: newNodeData.label,
      description: newNodeData.description,
      status: newNodeData.status,
      color: newNodeData.color
    });
    
    updateNodeConnections(selectedNodeId, selectedConnections);
    
    setShowEditDialog(false);
  };
  
  const handleRemoveNode = () => {
    if (!selectedNodeId) return;
    removeNode(selectedNodeId);
    setShowEditDialog(false);
  };
  
  const handleConnectionToggle = (nodeId: string) => {
    setSelectedConnections(prev =>
      prev.includes(nodeId)
        ? prev.filter(id => id !== nodeId)
        : [...prev, nodeId]
    );
  };

  const handleFormChange = (updates: Partial<typeof newNodeData>) => {
    setNewNodeData({ ...newNodeData, ...updates });
  };
  
  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
      <SitemapHeader 
        onAddNodeClick={() => setShowAddDialog(true)}
        onSaveClick={handleSaveToSupabase}
      />
      
      <SitemapLegend />
      
      <SitemapVisualization
        loading={loading}
        containerRef={containerRef}
      />
      
      {/* Add Node Dialog */}
      <NodeDialog
        open={showAddDialog}
        onOpenChange={setShowAddDialog}
        title="Aggiungi Nuovo Nodo"
        description="Inserisci i dettagli per il nuovo nodo."
        formData={newNodeData}
        onFormChange={handleFormChange}
        nodes={data.nodes}
        selectedNodeId={null}
        selectedConnections={selectedConnections}
        onConnectionToggle={handleConnectionToggle}
        onSave={handleAddNode}
        getColorByStatus={getColorByStatus}
      />
      
      {/* Edit Node Dialog */}
      <NodeDialog
        open={showEditDialog}
        onOpenChange={setShowEditDialog}
        title="Modifica Informazioni"
        description="Aggiorna i dettagli per questo nodo."
        formData={newNodeData}
        onFormChange={handleFormChange}
        nodes={data.nodes}
        selectedNodeId={selectedNodeId}
        selectedConnections={selectedConnections}
        onConnectionToggle={handleConnectionToggle}
        onSave={handleUpdateNode}
        onDelete={handleRemoveNode}
        getColorByStatus={getColorByStatus}
      />
    </div>
  );
};
