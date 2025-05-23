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

export default function AboutPage() {
  return (
    <div className="bg-white">
      <Navbar />
      <main>
        <TeamSection />
        <PartnersSection />
        <FindBookPlaySection />
        <StatsSection />
        <JourneySection />
        <ValuesSection />
      </main>
      <Footer />
    </div>
  );
} 