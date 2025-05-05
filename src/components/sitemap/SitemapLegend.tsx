
import React from 'react';

export const SitemapLegend: React.FC = () => {
  return (
    <div className="flex items-center gap-4 mb-4">
      <div className="flex items-center">
        <div className="w-4 h-4 bg-[#ff0092] rounded-full mr-2"></div>
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
  );
};
