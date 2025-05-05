
import React from 'react';
import { Button } from '@/components/ui/button';

export const Header: React.FC = () => {
  return (
    <header className="bg-black text-white">
      <div className="container mx-auto py-4 px-6 flex justify-between items-center">
        <div className="flex items-center">
          <a href="https://www.wearerighello.com/" target="_blank" rel="noopener noreferrer">
            <img 
              src="https://cdn.prod.website-files.com/65772a4150fc91181591a1e5/65869171f416b931298e21e6_Logo_righello_white.svg" 
              alt="Righello" 
              className="h-8"
            />
          </a>
        </div>
        <div className="flex items-center gap-4">
          <a 
            href="https://cdn.prod.website-files.com/65772a4150fc91181591a1e5/6818a9c5d7e7ad21f5c02069_RIG_PVT_SOLEROSPORTVILLAGE.pdf" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group"
          >
            <Button variant="link" className="text-black hover:text-[#ff0092] transition-colors">
              Visualizza Preventivo
            </Button>
          </a>
          <a 
            href="https://www.wearerighello.com/contact" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button>
              Contatta Righello
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
};
