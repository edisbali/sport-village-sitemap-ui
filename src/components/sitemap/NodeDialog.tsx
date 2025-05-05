
import React from 'react';
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
import { NodeConnectionsList } from './NodeConnectionsList';
import { type NodeStatus, type SitemapNode } from '@/types/sitemap';

interface NodeFormData {
  label: string;
  description: string;
  status: NodeStatus;
  color: string;
}

interface NodeDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description: string;
  formData: NodeFormData;
  onFormChange: (data: Partial<NodeFormData>) => void;
  nodes: SitemapNode[];
  selectedNodeId: string | null;
  selectedConnections: string[];
  onConnectionToggle: (nodeId: string) => void;
  onSave: () => void;
  onDelete?: () => void;
  getColorByStatus: (status: NodeStatus) => string;
}

export const NodeDialog: React.FC<NodeDialogProps> = ({
  open,
  onOpenChange,
  title,
  description,
  formData,
  onFormChange,
  nodes,
  selectedNodeId,
  selectedConnections,
  onConnectionToggle,
  onSave,
  onDelete,
  getColorByStatus
}) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>
            {description}
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-2">
          <div className="space-y-2">
            <Label htmlFor="name">Nome</Label>
            <Input
              id="name"
              value={formData.label}
              onChange={(e) => onFormChange({ label: e.target.value })}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">URL / Descrizione</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => onFormChange({ description: e.target.value })}
            />
          </div>
          <div className="space-y-2">
            <Label>Stato</Label>
            <RadioGroup 
              value={formData.status} 
              onValueChange={(value) => onFormChange({ 
                status: value as NodeStatus,
                color: getColorByStatus(value as NodeStatus)
              })}
              className="flex space-x-4"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="existing" id="status-existing" />
                <Label htmlFor="status-existing">Esistente</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="new" id="status-new" />
                <Label htmlFor="status-new">Nuovo</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="delete" id="status-delete" />
                <Label htmlFor="status-delete">Da Eliminare</Label>
              </div>
            </RadioGroup>
          </div>
          <div className="space-y-2">
            <Label>Colore Personalizzato</Label>
            <div className="flex items-center gap-2">
              <Input 
                type="color"
                value={formData.color}
                onChange={(e) => onFormChange({ color: e.target.value })}
                className="w-12 h-10"
              />
              <span className="text-sm text-gray-500">
                {onDelete ? "Sovrascrive il colore basato sullo stato" : "Opzionale, sovrascrive il colore basato sullo stato"}
              </span>
            </div>
          </div>
          
          <NodeConnectionsList 
            nodes={nodes}
            selectedNodeId={selectedNodeId}
            selectedConnections={selectedConnections}
            onConnectionToggle={onConnectionToggle}
          />
        </div>
        <DialogFooter className={onDelete ? "flex justify-between" : ""}>
          {onDelete && (
            <Button variant="destructive" onClick={onDelete}>
              Elimina
            </Button>
          )}
          <div className="flex gap-2">
            <Button variant="outline" onClick={() => onOpenChange(false)}>
              Annulla
            </Button>
            <Button onClick={onSave} disabled={!formData.label}>
              {onDelete ? "Aggiorna" : "Aggiungi"}
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
