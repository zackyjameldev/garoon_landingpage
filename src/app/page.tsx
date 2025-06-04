import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import FindBookPlaySection from '@/components/FindBookPlaySection';
import KeyAdvantagesSection from '@/components/KeyAdvantagesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import PartnersSection from '@/components/PartnersSection';
import StatsSection from '@/components/StatsSection';
import FaqSection from '@/components/FaqSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import DualFeatureSection from '@/components/DualFeatureSection';
import DashboardFeaturesSection from '@/components/DashboardFeaturesSection';
import CustomerTestimonialsSection from '@/components/CustomerTestimonialsSection';

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col">
    
      <Navbar />
      
      <div className='m-2 mb-0'>

      </div>
      <div className='m-2 md:mx-5 my-2 '>

      <HeroSection />
      </div>
      <PartnersSection />
      <DualFeatureSection />
      <FindBookPlaySection />
      <DashboardFeaturesSection />
      <KeyAdvantagesSection />
      <CustomerTestimonialsSection />
      <div className='md:m-5 mb-0'>
      <Footer />

      </div>
    </main>
  );
}
