
import React from 'react';
import { getColorByStatus, getStatusLabel } from './utils';
import { NodeStatus } from '@/types/sitemap';

export const SitemapLegend: React.FC = () => {
  const statuses: NodeStatus[] = ['existing', 'new', 'delete'];
  
  return (
    <div className="flex items-center gap-4 mb-4">
      {statuses.map((status) => (
        <div key={status} className="flex items-center">
          <div 
            className="w-4 h-4 rounded-full mr-2" 
            style={{ backgroundColor: getColorByStatus(status) }}
          />
          <span className="text-sm">{getStatusLabel(status)}</span>
        </div>
      ))}
    </div>
  );
};
