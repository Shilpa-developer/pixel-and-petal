import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BrandStory } from './components/BrandStory';
import { FounderSection } from './components/FounderSection';
import { BusinessCardSection } from './components/BusinessCardSection';
import { WhatICreate } from './components/WhatICreate';
import { SelectedWork } from './components/SelectedWork';
import { MadeWithLove } from './components/MadeWithLove';
import { ApproachSection } from './components/ApproachSection';
import { ProcessSection } from './components/ProcessSection';
import { CurrentlySection } from './components/CurrentlySection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const handleOpenContact = () => {
    setIsContactOpen(true);
  };

  const handleCloseContact = () => {
    setIsContactOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1C1B1F] flex flex-col font-sans selection:bg-[#F3C2D2] selection:text-[#1C1B1F]">
      {/* Navigation Header */}
      <Navbar onOpenContact={handleOpenContact} />

      {/* Main Content Sections in Narrative Order */}
      <main className="flex-1">
        {/* 01 — HERO */}
        <Hero onOpenContact={handleOpenContact} />

        {/* 02 — WHAT IS PIXEL & PETAL? */}
        <BrandStory />

        {/* 03 — MEET THE FOUNDER */}
        <FounderSection />

        {/* 04 — MY BUSINESS CARD */}
        <BusinessCardSection />

        {/* 05 — WHAT I CREATE */}
        <WhatICreate onOpenContact={handleOpenContact} />

        {/* 06 — SELECTED WORK */}
        <SelectedWork />

        {/* 07 — MADE WITH LOVE */}
        <MadeWithLove />

        {/* 08 — MY APPROACH */}
        <ApproachSection />

        {/* 09 — PROCESS */}
        <ProcessSection />

        {/* 10 — ABOUT / CURRENTLY */}
        <CurrentlySection />

        {/* 11 — FINAL CTA */}
        <FinalCTA onOpenContact={handleOpenContact} />
      </main>

      {/* 12 — FOOTER */}
      <Footer onOpenContact={handleOpenContact} />

      {/* Interactive Contact & Project Inquiry Modal */}
      <ContactModal isOpen={isContactOpen} onClose={handleCloseContact} />
    </div>
  );
}
