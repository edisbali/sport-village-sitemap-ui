
import React from 'react';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { SitemapNode } from '@/types/sitemap';

interface NodeConnectionsListProps {
  nodes: SitemapNode[];
  selectedNodeId: string | null;
  selectedConnections: string[];
  onConnectionToggle: (nodeId: string) => void;
}

export const NodeConnectionsList: React.FC<NodeConnectionsListProps> = ({
  nodes,
  selectedNodeId,
  selectedConnections,
  onConnectionToggle
}) => {
  return (
    <div className="space-y-2">
      <Label>Collegamenti</Label>
      <div className="space-y-2 max-h-40 overflow-y-auto border rounded p-2">
        {nodes
          .filter(node => node.id !== selectedNodeId)
          .map(node => (
            <div key={node.id} className="flex items-center space-x-2">
              <Checkbox
                id={`edit-connection-${node.id}`}
                checked={selectedConnections.includes(node.id)}
                onCheckedChange={() => onConnectionToggle(node.id)}
              />
              <Label htmlFor={`edit-connection-${node.id}`}>{node.label}</Label>
            </div>
          ))}
      </div>
    </div>
  );
};
