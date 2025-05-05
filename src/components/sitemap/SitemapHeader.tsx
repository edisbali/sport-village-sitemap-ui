
import React from 'react';
import { Button } from '@/components/ui/button';

interface SitemapHeaderProps {
  onAddNodeClick: () => void;
  onSaveClick: () => void;
}

export const SitemapHeader: React.FC<SitemapHeaderProps> = ({ 
  onAddNodeClick,
  onSaveClick
}) => {
  return (
    <div className="flex justify-between items-center mb-4">
      <div>
        <h2 className="text-2xl font-bold">Mappa del Sito Interattiva</h2>
        <p className="text-gray-600">Visualizza e modifica la struttura del sito</p>
      </div>
      <div className="flex gap-2">
        <Button onClick={onAddNodeClick}>
          Aggiungi Nodo
        </Button>
        <Button variant="outline" onClick={onSaveClick}>
          Salva Modifiche
        </Button>
      </div>
    </div>
  );
};
