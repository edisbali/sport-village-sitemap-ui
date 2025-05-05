
import { NodeStatus } from '@/types/sitemap';

export const getColorByStatus = (status: NodeStatus): string => {
  switch(status) {
    case 'existing': return '#ff0092';
    case 'new': return '#3c763d';
    case 'delete': return '#a94442';
    default: return '#ff0092';
  }
};

export const getStatusLabel = (status: NodeStatus): string => {
  switch(status) {
    case 'existing': return 'Sezioni esistenti';
    case 'new': return 'Nuove sezioni';
    case 'delete': return 'Sezioni da eliminare';
    default: return 'Sezione';
  }
};

export const generateUniqueId = (): string => {
  return `node_${Date.now()}_${Math.floor(Math.random() * 1000)}`;
};
