import React from 'react';
import { SEO } from '../components/common/SEO';
import { Navbar } from '../components/layout/Navbar';
import { HeroSection } from '../components/sections/HeroSection';
import { HowItWorksSection } from '../components/sections/HowItWorksSection';
import { FeaturesSection } from '../components/sections/FeaturesSection';
import { ProductShowcaseSection } from '../components/sections/ProductShowcaseSection';
// import { RoiCalculatorSection } from '../components/sections/RoiCalculatorSection';
import { PricingSection } from '../components/sections/PricingSection';
import { ContactSection } from '../components/sections/ContactSection';
import { TestimonialsSection } from '../components/sections/TestimonialsSection';
import { FaqSection } from '../components/sections/FaqSection';
import { FinalCtaSection } from '../components/sections/FinalCtaSection';
import { Footer } from '../components/layout/Footer';

export const LandingPage: React.FC = () => {
  return (
    <>
      <SEO
        title="MapFlow AI — Automated Google Maps Lead Discovery & AI Cold Outreach"
        description="Turn Google Maps data into qualified B2B leads. Enrich website contact info, automate AI cold email outreach, and manage your pipeline with Kanban CRM."
      />
      <Navbar />
      <main>
        <HeroSection />
        <HowItWorksSection />
        <FeaturesSection />
        <ProductShowcaseSection />
        {/* <RoiCalculatorSection /> */}
        <PricingSection />
        <ContactSection />
        <TestimonialsSection />
        <FaqSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </>
  );
};
