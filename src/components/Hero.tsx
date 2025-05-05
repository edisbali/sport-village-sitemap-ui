
import React from 'react';
import { Button } from '@/components/ui/button';

export const Hero: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-black text-white py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            Restyling del sito web <span className="text-[#ff0092]">Solerò Sport Village</span>
          </h1>
          <p className="text-xl mb-8 text-gray-300">
            Una soluzione moderna, funzionale e completamente responsive per migliorare la presenza online del centro sportivo e offrire un'esperienza utente di alto livello.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="https://cdn.prod.website-files.com/65772a4150fc91181591a1e5/6818a9c5d7e7ad21f5c02069_RIG_PVT_SOLEROSPORTVILLAGE.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button size="lg">
                Visualizza Preventivo
              </Button>
            </a>
            <a href="#sitemapSection" className="inline-block">
              <Button variant="outline" size="lg">
                Esplora la Sitemap
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
