
import React from 'react';
import { SitemapData } from '@/types/sitemap';

interface SitemapVisualizationProps {
  loading: boolean;
  containerRef: React.RefObject<HTMLElement | null>;
}

export const SitemapVisualization: React.FC<SitemapVisualizationProps> = ({ 
  loading,
  containerRef
}) => {
  return loading ? (
    <div className="w-full h-[600px] bg-white rounded border border-gray-200 flex items-center justify-center">
      <p className="text-gray-500">Caricamento mappa del sito...</p>
    </div>
  ) : (
    <div 
      id="sitemap-cy" 
      ref={el => {
        if (containerRef.current !== el) {
          containerRef.current = el;
        }
      }} 
      className="w-full h-[600px] bg-white rounded border border-gray-200"
    />
  );
};
