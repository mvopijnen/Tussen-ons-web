import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProblemRecognitionSection } from './components/ProblemRecognitionSection';
import { HowItWorks } from './components/HowItWorks';
import { VibeArchitecture } from './components/VibeArchitecture';
import { SocialProofSection } from './components/SocialProofSection';
import { InstallGuideSection } from './components/InstallGuideSection';
import { BrandPhilosophy } from './components/BrandPhilosophy';
import { SeoContentSection } from './components/SeoContentSection';
import { ConversationOfTheDay } from './components/ConversationOfTheDay';
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

      {/* Main Marketing Landing Page Flow */}
      <main className="flex-1">
        {/* 1. Hero: Hook, Emotional Statement & Real App Phone Mockups */}
        <Hero
          onOpenInstall={() => setIsInstallModalOpen(true)}
          onExplore={() => scrollToSection('herkenning')}
        />

        {/* 2. Problem, Pain & Emotional Recognition: Herken je dit? */}
        <div id="herkenning">
          <ProblemRecognitionSection
            onOpenInstall={() => setIsInstallModalOpen(true)}
          />
        </div>

        {/* 3. The 3-Step Clear Solution Flow */}
        <HowItWorks />

        {/* 4. Sferen & Themapacks (Date, Partner, Vrienden, Familie) */}
        <VibeArchitecture
          onSelectVibe={() => setIsInstallModalOpen(true)}
        />

        {/* 5. Social Proof: Reviews & Vergelijkingstabel */}
        <SocialProofSection />

        {/* 6. Dedicated "Zet op je beginscherm" PWA Guide */}
        <InstallGuideSection
          onOpenInstallModal={() => setIsInstallModalOpen(true)}
        />

        {/* 7. Brand Philosophy: Niet meer schermtijd, meer gesprekstijd */}
        <BrandPhilosophy />

        {/* 8. SEO Editorial: Inzichten over Nieuwsgierigheid */}
        <SeoContentSection />

        {/* 9. Interactive Conversation of the Day with Freemium Teaser & Paywall Lock */}
        <ConversationOfTheDay
          onOpenInstallModal={() => setIsInstallModalOpen(true)}
        />

        {/* 10. Tussen Ons Plus & Strategische Abonnementen */}
        <TussenOnsPlus
          onOpenInstallModal={() => setIsInstallModalOpen(true)}
        />

        {/* 11. FAQ Accordion (Inclusief installatie & privacy) */}
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
