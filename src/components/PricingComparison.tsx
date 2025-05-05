
import React from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';

export const PricingComparison: React.FC = () => {
  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-2">Opzioni di Sviluppo</h2>
        <p className="text-gray-600 text-center mb-8">Confronta i nostri piani e trova quello più adatto alle tue esigenze.</p>
        
        <Tabs defaultValue="cms" className="max-w-4xl mx-auto">
          <TabsList className="grid grid-cols-2 mb-8">
            <TabsTrigger value="cms">Piano 360 CMS</TabsTrigger>
            <TabsTrigger value="no-cms">Piano 360 NO CMS</TabsTrigger>
          </TabsList>
          
          <TabsContent value="cms">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-center">Piano 360 CMS</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-bold mb-2">Costi di Sviluppo</h3>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-4 border-b pb-4">
                      <div>
                        <h4 className="font-semibold">1.1 Progettazione e pianificazione</h4>
                        <p className="text-sm text-gray-600">Definizione della struttura del sito (sitemap) con sezioni principali: Homepage, Struttura, Servizi, Palestra, Piscina, Fitness, Corsi, News, Contatti. Analisi delle esigenze del cliente e mappatura dei contenuti preesistenti con riorganizzazione logica e visiva.</p>
                      </div>
                      <div className="text-right font-semibold">550 €</div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-4 border-b pb-4">
                      <div>
                        <h4 className="font-semibold">1.2 Sviluppo tecnico</h4>
                        <p className="text-sm text-gray-600">Implementazione delle pagine principali con particolare attenzione alla chiarezza e usabilità: Realizzazione delle pagine principali tramite Webflow. Collegamento ai link esterni (es. PDF orari corsi). Ottimizzazione responsive per dispositivi mobili e compatibilità browser. Sviluppo ottimizzato tramite cms della sitemap.</p>
                      </div>
                      <div className="text-right font-semibold">750 €</div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-4 border-b pb-4">
                      <div>
                        <h4 className="font-semibold">1.3 Inserimento contenuti</h4>
                        <p className="text-sm text-gray-600">Trasferimento delle informazioni presenti sul sito attuale: Inserimento testi, immagini e materiali forniti da Solerò, senza produzione o editing extra. Impaginazione allineata alla nuova struttura visiva.</p>
                      </div>
                      <div className="text-right font-semibold">200 €</div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-4 border-b pb-4">
                      <div>
                        <h4 className="font-semibold">1.4 SEO optimization</h4>
                        <p className="text-sm text-gray-600">Ottimizzazione SEO base per le pagine chiave: Creazione meta tag, URL semantici e descrizioni. Impostazioni minime per indicizzazione e visibilità.</p>
                      </div>
                      <div className="text-right font-semibold">250 €</div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-4 border-b pb-4">
                      <div>
                        <h4 className="font-semibold">1.5 Configurazione privacy policy</h4>
                        <p className="text-sm text-gray-600">Adeguamento del modulo di contatto e del sito alle normative GDPR, con configurazione della privacy policy rispetto a quelle già esistenti.</p>
                      </div>
                      <div className="text-right font-semibold">INCLUSO</div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-4 border-t-2 border-primary pt-4">
                      <div>
                        <h4 className="font-bold text-xl">TOTALE</h4>
                      </div>
                      <div className="text-right font-bold text-xl">1750 € + IVA (22%)</div>
                    </div>
                  </div>
                </div>
                
                <div className="pt-8">
                  <h3 className="font-bold mb-2">Costi di Gestione Mensili</h3>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-4 border-b pb-4">
                      <div>
                        <h4 className="font-semibold">1.5 Gestione privacy policy | Costo Esterno</h4>
                        <p className="text-sm text-gray-600">Revisione periodica e aggiornamento della privacy policy e dei termini di utilizzo in conformità con le normative vigenti. IMPORTANTE: non è un nostro onere diretto, ma rappresenta una spesa esterna necessaria per mantenere aggiornate le privacy policy.</p>
                      </div>
                      <div className="text-right font-semibold">10-20 € / mese</div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-4 border-b pb-4">
                      <div>
                        <h4 className="font-semibold">1.6 Gestione contenuti e modifiche leggere</h4>
                        <p className="text-sm text-gray-600">Inserimento di nuovi contenuti (testi, immagini, aggiornamenti di tariffe o attività) con possibilità di effettuare fino a 2-3 aggiornamenti mensili in caso di sottoscrizione di un piano. Modifiche leggere alle sezioni esistenti per garantire un sito sempre aggiornato e in linea con le esigenze della scuola.</p>
                      </div>
                      <div className="text-right font-semibold">Su richiesta</div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-4 border-b pb-4">
                      <div>
                        <h4 className="font-semibold">1.7 Hosting | Costo Esterno</h4>
                        <p className="text-sm text-gray-600">Questa scelta rappresenta l'opzione migliore, poiché la piattaforma è riconosciuta come il leader del mercato, garantendo prestazioni affidabili, una solida infrastruttura, sicurezza e velocità per il sito. IMPORTANTE: non è un nostro onere diretto, ma rappresenta una spesa esterna necessaria per garantire le prestazioni ottimali del sito.</p>
                      </div>
                      <div className="text-right font-semibold">27 € / mese</div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-4 border-b pb-4">
                      <div>
                        <h4 className="font-semibold">1.8 Dominio | costo esterno</h4>
                        <p className="text-sm text-gray-600">IMPORTANTE: se già in possesso di un dominio non sarà necessario comprarne uno.</p>
                      </div>
                      <div className="text-right font-semibold">0 € / mese</div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-4 border-t-2 border-primary pt-4">
                      <div>
                        <h4 className="font-bold text-xl">TOTALE</h4>
                      </div>
                      <div className="text-right font-bold text-xl">37-47 € / mese</div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-center">
                <a 
                  href="https://cdn.prod.website-files.com/65772a4150fc91181591a1e5/6818a9c5d7e7ad21f5c02069_RIG_PVT_SOLEROSPORTVILLAGE.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button size="lg">
                    Visualizza Preventivo Completo
                  </Button>
                </a>
              </CardFooter>
            </Card>
          </TabsContent>
          
          <TabsContent value="no-cms">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-center">Piano 360 NO CMS</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-bold mb-2">Costi di Sviluppo</h3>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-4 border-b pb-4">
                      <div>
                        <h4 className="font-semibold">1.1 Progettazione e pianificazione</h4>
                        <p className="text-sm text-gray-600">Definizione della struttura del sito (sitemap) con sezioni principali: Homepage, Struttura, Servizi, Palestra, Piscina, Fitness, Corsi, News, Contatti. Analisi delle esigenze del cliente e mappatura dei contenuti preesistenti con riorganizzazione logica e visiva.</p>
                      </div>
                      <div className="text-right font-semibold">550 €</div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-4 border-b pb-4">
                      <div>
                        <h4 className="font-semibold">1.2 Sviluppo tecnico</h4>
                        <p className="text-sm text-gray-600">Implementazione delle pagine principali con particolare attenzione alla chiarezza e usabilità: Realizzazione delle pagine principali tramite Webflow. Collegamento ai link esterni (es. PDF orari corsi). Ottimizzazione responsive per dispositivi mobili e compatibilità browser. Sviluppo singolarmente di tutte le pagine contenute nella sitemap.</p>
                      </div>
                      <div className="text-right font-semibold">1400 €</div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-4 border-b pb-4">
                      <div>
                        <h4 className="font-semibold">1.3 Inserimento contenuti</h4>
                        <p className="text-sm text-gray-600">Trasferimento delle informazioni presenti sul sito attuale: Inserimento testi, immagini e materiali forniti da Solerò, senza produzione o editing extra. Impaginazione allineata alla nuova struttura visiva.</p>
                      </div>
                      <div className="text-right font-semibold">250 €</div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-4 border-b pb-4">
                      <div>
                        <h4 className="font-semibold">1.4 SEO optimization</h4>
                        <p className="text-sm text-gray-600">Ottimizzazione SEO base per le pagine chiave: Creazione meta tag, URL semantici e descrizioni. Impostazioni minime per indicizzazione e visibilità.</p>
                      </div>
                      <div className="text-right font-semibold">250 €</div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-4 border-b pb-4">
                      <div>
                        <h4 className="font-semibold">1.5 Configurazione privacy policy</h4>
                        <p className="text-sm text-gray-600">Adeguamento del modulo di contatto e del sito alle normative GDPR, con configurazione della privacy policy rispetto a quelle già esistenti.</p>
                      </div>
                      <div className="text-right font-semibold">INCLUSO</div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-4 border-t-2 border-primary pt-4">
                      <div>
                        <h4 className="font-bold text-xl">TOTALE</h4>
                      </div>
                      <div className="text-right font-bold text-xl">2450 € + IVA (22%)</div>
                    </div>
                  </div>
                </div>
                
                <div className="pt-8">
                  <h3 className="font-bold mb-2">Costi di Gestione Mensili</h3>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-4 border-b pb-4">
                      <div>
                        <h4 className="font-semibold">1.5 Gestione privacy policy | Costo Esterno</h4>
                        <p className="text-sm text-gray-600">Revisione periodica e aggiornamento della privacy policy e dei termini di utilizzo in conformità con le normative vigenti. IMPORTANTE: non è un nostro onere diretto, ma rappresenta una spesa esterna necessaria per mantenere aggiornate le privacy policy.</p>
                      </div>
                      <div className="text-right font-semibold">10-20 € / mese</div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-4 border-b pb-4">
                      <div>
                        <h4 className="font-semibold">1.6 Gestione contenuti e modifiche leggere</h4>
                        <p className="text-sm text-gray-600">Inserimento di nuovi contenuti (testi, immagini, aggiornamenti di tariffe o attività) con possibilità di effettuare fino a 2-3 aggiornamenti mensili in caso di sottoscrizione di un piano. Modifiche leggere alle sezioni esistenti per garantire un sito sempre aggiornato e in linea con le esigenze della scuola.</p>
                      </div>
                      <div className="text-right font-semibold">Su richiesta</div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-4 border-b pb-4">
                      <div>
                        <h4 className="font-semibold">1.7 Hosting | Costo Esterno</h4>
                        <p className="text-sm text-gray-600">Questa scelta rappresenta l'opzione migliore, poiché la piattaforma è riconosciuta come il leader del mercato, garantendo prestazioni affidabili, una solida infrastruttura, sicurezza e velocità per il sito. IMPORTANTE: non è un nostro onere diretto, ma rappresenta una spesa esterna necessaria per garantire le prestazioni ottimali del sito.</p>
                      </div>
                      <div className="text-right font-semibold">14 € / mese</div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-4 border-b pb-4">
                      <div>
                        <h4 className="font-semibold">1.8 Dominio | costo esterno</h4>
                        <p className="text-sm text-gray-600">IMPORTANTE: se già in possesso di un dominio non sarà necessario comprarne uno.</p>
                      </div>
                      <div className="text-right font-semibold">0 € / mese</div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-4 border-t-2 border-primary pt-4">
                      <div>
                        <h4 className="font-bold text-xl">TOTALE</h4>
                      </div>
                      <div className="text-right font-bold text-xl">24-34 € / mese</div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-center">
                <a 
                  href="https://cdn.prod.website-files.com/65772a4150fc91181591a1e5/6818a9c5d7e7ad21f5c02069_RIG_PVT_SOLEROSPORTVILLAGE.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button size="lg">
                    Visualizza Preventivo Completo
                  </Button>
                </a>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};
