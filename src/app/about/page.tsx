'use client';
import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import TeamSection from "../../components/TeamSection";
import StatsSection from "../../components/StatsSection";
import JourneySection from "../../components/JourneySection";
import ValuesSection from "../../components/ValuesSection";
import PartnersSection from "../../components/PartnersSection";
import FindBookPlaySection from "../../components/FindBookPlaySection";
import CustomerTestimonialsSection from "@/components/CustomerTestimonialsSection";

export default function AboutPage() {
  return (
    <div className="bg-white">
      <Navbar />
     
      <main>
        <TeamSection />
        {/* <PartnersSection /> */}
        <StatsSection />
        <JourneySection />
      <div className=' mb-20 mx-10  '>

        <ValuesSection />
      </div>
        <FindBookPlaySection />
      </main>
      <CustomerTestimonialsSection />
      <div className='md:m-5 mb-0'>
      <Footer />

      </div>
    </div>
  );
} 