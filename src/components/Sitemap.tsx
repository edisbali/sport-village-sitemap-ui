
import React, { useState } from 'react';
import { useSitemap } from '@/hooks/useSitemap';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { type NodeStatus, type SitemapNode } from '@/types/sitemap';

export const Sitemap: React.FC = () => {
  const { 
    containerRef, 
    data, 
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
    color: '#31708f'
  });
  
  const selectedNode = selectedNodeId 
    ? data.nodes.find(node => node.id === selectedNodeId)
    : null;
  
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
      color: '#31708f'
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
  
  const handleNodeClick = (node: SitemapNode) => {
    setSelectedNodeId(node.id);
    setNewNodeData({
      label: node.label,
      description: node.description || '',
      status: node.status,
      color: node.color || '#31708f'
    });
    
    // Get current connections for this node
    const nodeConnections = data.edges
      .filter(edge => edge.source === node.id)
      .map(edge => edge.target);
    
    setSelectedConnections(nodeConnections);
    setShowEditDialog(true);
  };
  
  const handleConnectionToggle = (nodeId: string) => {
    setSelectedConnections(prev =>
      prev.includes(nodeId)
        ? prev.filter(id => id !== nodeId)
        : [...prev, nodeId]
    );
  };
  
  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-2xl font-bold">Mappa del Sito Interattiva</h2>
          <p className="text-gray-600">Visualizza e modifica la struttura del sito</p>
        </div>
        <div className="flex gap-2">
          <Button onClick={() => setShowAddDialog(true)}>
            Aggiungi Nodo
          </Button>
          <Button variant="outline" onClick={saveToSupabase}>
            Salva Modifiche
          </Button>
        </div>
      </div>
      
      <div className="flex items-center gap-4 mb-4">
        <div className="flex items-center">
          <div className="w-4 h-4 bg-[#31708f] rounded-full mr-2"></div>
          <span className="text-sm">Sezioni esistenti</span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 bg-[#3c763d] rounded-full mr-2"></div>
          <span className="text-sm">Nuove sezioni</span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 bg-[#a94442] rounded-full mr-2"></div>
          <span className="text-sm">Sezioni da eliminare</span>
        </div>
      </div>
      
      <div 
        id="sitemap-cy" 
        ref={el => containerRef.current = el} 
        className="w-full h-[600px] bg-white rounded border border-gray-200"
        onClick={(e) => {
          const target = e.target as HTMLElement;
          if (target.id === 'sitemap-cy') {
            // Clicked on the background, not a node
          }
        }}
      />
      
      {/* Add Node Dialog */}
      <Dialog open={showAddDialog} onOpenChange={setShowAddDialog}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Aggiungi Nuovo Nodo</DialogTitle>
            <DialogDescription>
              Inserisci i dettagli per il nuovo nodo.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-2">
            <div className="space-y-2">
              <Label htmlFor="name">Nome</Label>
              <Input
                id="name"
                value={newNodeData.label}
                onChange={(e) => setNewNodeData({ ...newNodeData, label: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Descrizione</Label>
              <Textarea
                id="description"
                value={newNodeData.description}
                onChange={(e) => setNewNodeData({ ...newNodeData, description: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label>Stato</Label>
              <RadioGroup 
                value={newNodeData.status} 
                onValueChange={(value) => setNewNodeData({ 
                  ...newNodeData, 
                  status: value as NodeStatus,
                  color: value === 'existing' ? '#31708f' : value === 'new' ? '#3c763d' : '#a94442'
                })}
                className="flex space-x-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="existing" id="existing" />
                  <Label htmlFor="existing">Esistente</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="new" id="new" />
                  <Label htmlFor="new">Nuovo</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="delete" id="delete" />
                  <Label htmlFor="delete">Da Eliminare</Label>
                </div>
              </RadioGroup>
            </div>
            <div className="space-y-2">
              <Label>Colore Personalizzato</Label>
              <div className="flex items-center gap-2">
                <Input 
                  type="color"
                  value={newNodeData.color}
                  onChange={(e) => setNewNodeData({ ...newNodeData, color: e.target.value })}
                  className="w-12 h-10"
                />
                <span className="text-sm text-gray-500">Opzionale, sovrascrive il colore basato sullo stato</span>
              </div>
            </div>
            <div className="space-y-2">
              <Label>Collegato a</Label>
              <div className="space-y-2 max-h-40 overflow-y-auto border rounded p-2">
                {data.nodes.map(node => (
                  <div key={node.id} className="flex items-center space-x-2">
                    <Checkbox
                      id={`connection-${node.id}`}
                      checked={selectedConnections.includes(node.id)}
                      onCheckedChange={() => handleConnectionToggle(node.id)}
                    />
                    <Label htmlFor={`connection-${node.id}`}>{node.label}</Label>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowAddDialog(false)}>
              Annulla
            </Button>
            <Button onClick={handleAddNode} disabled={!newNodeData.label}>
              Aggiungi
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      
      {/* Edit Node Dialog */}
      <Dialog open={showEditDialog} onOpenChange={setShowEditDialog}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Modifica Informazioni</DialogTitle>
            <DialogDescription>
              Aggiorna i dettagli per questo nodo.
            </DialogDescription>
          </DialogHeader>
          {selectedNode && (
            <div className="space-y-4 py-2">
              <div className="space-y-2">
                <Label htmlFor="edit-name">Nome</Label>
                <Input
                  id="edit-name"
                  value={newNodeData.label}
                  onChange={(e) => setNewNodeData({ ...newNodeData, label: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="edit-description">Descrizione</Label>
                <Textarea
                  id="edit-description"
                  value={newNodeData.description}
                  onChange={(e) => setNewNodeData({ ...newNodeData, description: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label>Stato</Label>
                <RadioGroup 
                  value={newNodeData.status} 
                  onValueChange={(value) => setNewNodeData({ 
                    ...newNodeData, 
                    status: value as NodeStatus,
                    color: value === 'existing' ? '#31708f' : value === 'new' ? '#3c763d' : '#a94442'
                  })}
                  className="flex space-x-4"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="existing" id="edit-existing" />
                    <Label htmlFor="edit-existing">Esistente</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="new" id="edit-new" />
                    <Label htmlFor="edit-new">Nuovo</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="delete" id="edit-delete" />
                    <Label htmlFor="edit-delete">Da Eliminare</Label>
                  </div>
                </RadioGroup>
              </div>
              <div className="space-y-2">
                <Label>Colore Personalizzato</Label>
                <div className="flex items-center gap-2">
                  <Input 
                    type="color"
                    value={newNodeData.color}
                    onChange={(e) => setNewNodeData({ ...newNodeData, color: e.target.value })}
                    className="w-12 h-10"
                  />
                  <span className="text-sm text-gray-500">Sovrascrive il colore basato sullo stato</span>
                </div>
              </div>
              <div className="space-y-2">
                <Label>Collegamenti</Label>
                <div className="space-y-2 max-h-40 overflow-y-auto border rounded p-2">
                  {data.nodes
                    .filter(node => node.id !== selectedNodeId)
                    .map(node => (
                      <div key={node.id} className="flex items-center space-x-2">
                        <Checkbox
                          id={`edit-connection-${node.id}`}
                          checked={selectedConnections.includes(node.id)}
                          onCheckedChange={() => handleConnectionToggle(node.id)}
                        />
                        <Label htmlFor={`edit-connection-${node.id}`}>{node.label}</Label>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          )}
          <DialogFooter className="flex justify-between">
            <Button variant="destructive" onClick={handleRemoveNode}>
              Elimina
            </Button>
            <div className="flex gap-2">
              <Button variant="outline" onClick={() => setShowEditDialog(false)}>
                Annulla
              </Button>
              <Button onClick={handleUpdateNode}>
                Aggiorna
              </Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};
