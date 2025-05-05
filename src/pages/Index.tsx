
import React, { useEffect } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { ProjectOverview } from '@/components/ProjectOverview';
import { Sitemap } from '@/components/Sitemap';
import { PricingComparison } from '@/components/PricingComparison';
import { Footer } from '@/components/Footer';

const Index = () => {
  // Add script for cytoscape.js
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/cytoscape@3.23.0/dist/cytoscape.min.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <ProjectOverview />
        <div id="sitemapSection" className="py-16">
          <div className="container mx-auto px-6">
            <Sitemap />
          </div>
        </div>
        <PricingComparison />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
