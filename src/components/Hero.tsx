import React from 'react';
import { PhoneMockup } from './PhoneMockup';
import { Sparkles, ArrowRight, Smartphone, ShieldCheck, Check } from 'lucide-react';

interface HeroProps {
  onOpenInstall: () => void;
  onExplore: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenInstall,
  onExplore,
}) => {
  return (
    <section className="relative pt-10 pb-20 sm:pt-16 sm:pb-28 overflow-hidden bg-[#FAF5F0]">
      
      {/* Soft Ethereal Atmospheric Background Glows matching the screenshots */}
      <div className="absolute top-0 right-1/4 w-[650px] h-[550px] bg-[#F7D8D3]/50 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[550px] h-[450px] bg-[#FAE6E0]/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Hero Top Copy */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#EFE6DE] text-xs font-bold uppercase tracking-widest text-[#BD3A53] mb-6 shadow-2xs font-sans">
            <Sparkles className="w-3.5 h-3.5 text-[#BD3A53]" />
            <span>Slimme Gesprekservaring voor Twee Mensen</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight text-[#201A18] leading-[1.08] mb-6 text-balance">
            Betere gesprekken beginnen <br className="hidden sm:inline" />
            <span className="italic text-[#BD3A53]">met de juiste vraag.</span>
          </h1>

          <p className="font-serif text-xl sm:text-2xl text-[#201A18]/85 italic mb-6 max-w-2xl mx-auto">
            De juiste vraag. Op het juiste moment.
          </p>

          <p className="text-base sm:text-lg text-[#6E625D] max-w-2xl mx-auto leading-relaxed mb-10 text-balance font-normal">
            Geen regels, geen puntentelling van winnaars. Alleen echte, onverdeelde aandacht voor degene die tegenover je zit. Installeer direct op je beginscherm zonder App Store download.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <button
              onClick={onOpenInstall}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl text-xs font-semibold uppercase tracking-wider text-white bg-[#BD3A53] hover:bg-[#A72D45] transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer flex items-center justify-center gap-2 group"
            >
              <Smartphone className="w-4 h-4" />
              <span>Zet op je beginscherm</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </button>

            <button
              onClick={onExplore}
              className="w-full sm:w-auto px-7 py-4 rounded-2xl text-xs font-semibold text-[#201A18] bg-white border border-[#EFE6DE] hover:border-[#BD3A53] hover:bg-[#FAF0ED] transition-all duration-200 shadow-2xs cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Bekijk hoe het werkt ↓</span>
            </button>
          </div>

          {/* Trust points */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-[#6E625D]">
            <span className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-[#BD3A53]" />
              Geen download of App Store nodig
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#BD3A53]" />
              100% privé & vertrouwelijk
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-[#BD3A53]" />
              Werkt op iPhone & Android
            </span>
          </div>

        </div>

        {/* Hero Visual: Two Phone Mockups Side-by-Side displaying the actual App UI */}
        <div className="relative max-w-4xl mx-auto pt-4">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-center">
            
            {/* Phone 1: Onboarding Screen */}
            <div className="flex flex-col items-center">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#6E625D] mb-3 font-sans">
                Scherm 1: Stilte & Verbinding
              </span>
              <PhoneMockup screen="onboarding" />
            </div>

            {/* Phone 2: Gezelschap Kiezer */}
            <div className="flex flex-col items-center">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#6E625D] mb-3 font-sans">
                Scherm 2: Met wie praat jij vandaag?
              </span>
              <PhoneMockup screen="selector" />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
