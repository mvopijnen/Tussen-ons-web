import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ConversationOfTheDay } from './components/ConversationOfTheDay';
import { ProblemRecognitionSection } from './components/ProblemRecognitionSection';
import { HowItWorks } from './components/HowItWorks';
import { VibeArchitecture } from './components/VibeArchitecture';
import { SocialProofSection } from './components/SocialProofSection';
import { BrandPhilosophy } from './components/BrandPhilosophy';
import { TussenOnsPlus } from './components/TussenOnsPlus';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { InstallModal } from './components/InstallModal';

export default function App() {
  const [isInstallModalOpen, setIsInstallModalOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF5F0] text-[#201A18] selection:bg-[#BD3A53]/20 selection:text-[#201A18]">
      {/* Top Bar Navigation */}
      <Header
        onOpenInstallModal={() => setIsInstallModalOpen(true)}
      />

      {/* Main Authentic Marketing Story Flow */}
      <main className="flex-1">
        {/* 1. Hero: Hook, Pure Purpose, Emotive H1 & Mockups */}
        <Hero
          onTryQuestion={() => scrollToSection('probeer-het')}
          onExplore={() => scrollToSection('hoe-het-werkt')}
        />

        {/* 2. ConversationOfTheDay: DIRECTLY UNDER THE HERO (Laat het voelen) */}
        <ConversationOfTheDay />

        {/* 3. ProblemRecognitionSection: Herkenbaar? Je kent iemand, maar nooit helemaal */}
        <ProblemRecognitionSection />

        {/* 4. HowItWorks: Van moment naar gesprek */}
        <HowItWorks />

        {/* 5. VibeArchitecture: Drie Lagen (Wie zit tegenover je? Welke sfeer? Hoe diep?) */}
        <VibeArchitecture />

        {/* 6. SocialProofSection: Voor gesprekken die een andere kant op gingen dan verwacht */}
        <SocialProofSection />

        {/* 7. BrandPhilosophy: We weten steeds meer óver elkaar... */}
        <BrandPhilosophy />

        {/* 8. TussenOnsPlus: Meer om samen te ontdekken (Begin gratis. Verdiep wanneer jullie willen) */}
        <TussenOnsPlus
          onOpenInstallModal={() => setIsInstallModalOpen(true)}
        />

        {/* 9. FaqSection: 8 heldere vragen over gezelschap, sfeer en diepte */}
        <FaqSection />
      </main>

      {/* Quiet Footer */}
      <Footer
        onOpenInstallModal={() => setIsInstallModalOpen(true)}
      />

      {/* Interactive Install Modal (iPhone & Android) */}
      <InstallModal
        isOpen={isInstallModalOpen}
        onClose={() => setIsInstallModalOpen(false)}
      />
    </div>
  );
}
