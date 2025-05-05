
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

export const ProjectOverview: React.FC = () => {
  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-2">Progetto di Restyling</h2>
        <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
          Una panoramica dettagliata del progetto di restyling del sito web di Solerò Sport Village, con focus sulla struttura, funzionalità ed esperienza utente.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold mb-4">Situazione Attuale</h3>
              <p className="text-gray-600">
                Il sito esistente di Solerò Sport Village presenta una struttura funzionale ma migliorabile in termini di user experience, design e performance mobile. La navigazione risulta talvolta confusa e alcuni contenuti necessitano di riorganizzazione.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold mb-4">Obiettivi del Restyling</h3>
              <ul className="text-gray-600 space-y-2 list-disc pl-5">
                <li>Migliorare l'esperienza utente e l'accessibilità</li>
                <li>Ottimizzare la fruizione su dispositivi mobili</li>
                <li>Modernizzare il design mantenendo l'identità del brand</li>
                <li>Riorganizzare i contenuti in modo più intuitivo</li>
                <li>Migliorare le performance SEO del sito</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold mb-4">Tecnologie Utilizzate</h3>
              <ul className="text-gray-600 space-y-2 list-disc pl-5">
                <li>Webflow come piattaforma di sviluppo</li>
                <li>Design responsive per tutti i dispositivi</li>
                <li>Ottimizzazione SEO avanzata</li>
                <li>Sistema CMS per la gestione dei contenuti</li>
                <li>Integrazione con strumenti di analytics</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold mb-4">Vantaggi del CMS</h3>
              <p className="text-gray-600">
                L'implementazione di un sistema CMS permette di gestire facilmente i contenuti del sito, aggiornare informazioni, aggiungere nuovi corsi o servizi e modificare orari senza necessità di intervento tecnico. Questo conferisce autonomia e flessibilità nella gestione quotidiana del sito.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold mb-4">Principali Miglioramenti</h3>
              <ul className="text-gray-600 space-y-2 list-disc pl-5">
                <li>Navigazione più intuitiva e user-friendly</li>
                <li>Design moderno e accattivante</li>
                <li>Caricamento più veloce delle pagine</li>
                <li>Migliore organizzazione delle informazioni sui corsi</li>
                <li>Integrazione diretta con social media</li>
                <li>Form di contatto ottimizzati per la conversione</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold mb-4">Timeline del Progetto</h3>
              <ul className="text-gray-600 space-y-2 list-disc pl-5">
                <li>Analisi e pianificazione: 1-2 settimane</li>
                <li>Design e prototipazione: 2 settimane</li>
                <li>Sviluppo: 3-4 settimane</li>
                <li>Test e ottimizzazione: 1 settimana</li>
                <li>Deployment e training: 1 settimana</li>
              </ul>
              <p className="text-gray-600 mt-2">Tempo totale stimato: 8-10 settimane</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
