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
      <HeroSection />
      <PartnersSection />
      <DualFeatureSection />
      <FindBookPlaySection />
      <DashboardFeaturesSection />
      <KeyAdvantagesSection />
      <CustomerTestimonialsSection />
      <Footer />
    </main>
  );
}
