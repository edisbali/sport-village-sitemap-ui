
import React from 'react';
import { Button } from '@/components/ui/button';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#131313] text-white pt-12 pb-6">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Avvia il Progetto</h3>
            <p className="text-gray-300 mb-4">
              Sei pronto a portare il sito di Solerò Sport Village al livello successivo? 
              Contattaci per iniziare il progetto di restyling.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a 
                href="https://www.wearerighello.com/contact" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button>Contatta Righello</Button>
              </a>
              <a 
                href="https://cdn.prod.website-files.com/65772a4150fc91181591a1e5/6818a9c5d7e7ad21f5c02069_RIG_PVT_SOLEROSPORTVILLAGE.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button variant="outline">Visualizza Preventivo</Button>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contatti</h3>
            <p className="mb-2">Hello@wearerighello.com</p>
            <p className="mb-2">+39 339 399 8351</p>
            <p className="mb-2">Cordenons, Italy</p>
            <p className="mb-4">PIVA 01979970934</p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/wearerighello/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="hover:text-[#ff0092] transition-colors">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="https://www.facebook.com/profile.php?id=61555504917325" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="hover:text-[#ff0092] transition-colors">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/101447512/admin/dashboard/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="hover:text-[#ff0092] transition-colors">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="https://www.tiktok.com/login?redirect_url=https%3A%2F%2Fwww.tiktok.com%2F%40wearerighello&lang=en&enter_method=mandatory" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="hover:text-[#ff0092] transition-colors">
                  <path d="M9 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"></path>
                  <path d="M15 8h.01"></path>
                  <path d="M9 2h6"></path>
                  <path d="M13 2v6.4c-.33-.04-.66-.13-1-.3-.34.17-.67.26-1 .3V2"></path>
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">© 2025 Righello. Tutti i diritti riservati.</p>
          <div className="flex mt-4 md:mt-0">
            <a href="https://www.wearerighello.com/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-white transition-colors">
              Privacy & Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
