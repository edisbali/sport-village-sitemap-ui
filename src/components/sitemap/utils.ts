
import { NodeStatus } from '@/types/sitemap';

export const getColorByStatus = (status: NodeStatus): string => {
  switch(status) {
    case 'existing': return '#ff0092';
    case 'new': return '#3c763d';
    case 'delete': return '#a94442';
    default: return '#ff0092';
  }
};
