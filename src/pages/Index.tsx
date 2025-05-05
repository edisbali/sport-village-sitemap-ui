
import React from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { ProjectOverview } from '@/components/ProjectOverview';
import { Sitemap } from '@/components/Sitemap';
import { PricingComparison } from '@/components/PricingComparison';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <ProjectOverview />
        <div id="sitemapSection" className="py-16 bg-white">
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
