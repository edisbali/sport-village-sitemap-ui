
export type NodeStatus = 'existing' | 'new' | 'delete';

export interface SitemapNode {
  id: string;
  label: string;
  color?: string;
  status: NodeStatus;
  description?: string;
  position?: {
    x: number;
    y: number;
  };
  url?: string;
}

export interface SitemapEdge {
  id: string;
  source: string;
  target: string;
}

export interface SitemapData {
  nodes: SitemapNode[];
  edges: SitemapEdge[];
}
