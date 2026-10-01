import React from 'react';
import { PhoneMockup } from './PhoneMockup';
import { ArrowRight, MessageSquareHeart } from 'lucide-react';

interface HeroProps {
  onTryQuestion: () => void;
  onExplore: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onTryQuestion,
  onExplore,
}) => {
  return (
    <section className="relative pt-12 pb-20 sm:pt-18 sm:pb-28 overflow-hidden bg-[#FAF5F0]">
      
      {/* Soft Ethereal Atmospheric Background Glows */}
      <div className="absolute top-0 right-1/4 w-[650px] h-[550px] bg-[#F7D8D3]/50 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[550px] h-[450px] bg-[#FAE6E0]/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Hero Top Copy */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#EFE6DE] text-xs font-bold uppercase tracking-widest text-[#BD3A53] mb-6 shadow-2xs font-sans">
            <span>Voor gesprekken die anders misschien nooit waren begonnen</span>
          </div>

          {/* H1 */}
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight text-[#201A18] leading-[1.08] mb-6 text-balance">
            De juiste vraag. <br />
            <span className="italic text-[#BD3A53]">Op het juiste moment.</span>
          </h1>

          {/* Subheadline */}
          <p className="font-serif text-xl sm:text-2xl text-[#201A18]/90 italic mb-6 max-w-2xl mx-auto leading-relaxed">
            Soms heb je elkaar al jaren tegenover je. Soms pas tien minuten. Er valt bijna altijd nog iets te ontdekken.
          </p>

          {/* Explanation */}
          <p className="text-base sm:text-lg text-[#6E625D] max-w-2xl mx-auto leading-relaxed mb-10 text-balance font-normal">
            Tussen Ons stemt vragen, dilemma’s en kleine opdrachten af op wie er tegenover je zit, jullie sfeer en hoeveel diepgang op dat moment goed voelt. Eén vraag opent het gesprek. Daarna gaat de aandacht weer naar elkaar.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <button
              onClick={onTryQuestion}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl text-xs font-semibold uppercase tracking-wider text-white bg-[#BD3A53] hover:bg-[#A72D45] transition-all duration-200 shadow-xs hover:shadow-md cursor-pointer flex items-center justify-center gap-2 group"
            >
              <MessageSquareHeart className="w-4 h-4" />
              <span>Probeer een vraag</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </button>

            <button
              onClick={onExplore}
              className="w-full sm:w-auto px-7 py-4 rounded-2xl text-xs font-semibold text-[#201A18] bg-white border border-[#EFE6DE] hover:border-[#BD3A53] hover:bg-[#FAF0ED] transition-all duration-200 shadow-2xs cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Ontdek hoe Tussen Ons werkt ↓</span>
            </button>
          </div>

          {/* Trustregel */}
          <div className="text-xs sm:text-sm text-[#6E625D] font-medium">
            Geen antwoorden invullen · Geen scores · Geen oordeel · Alleen jullie gesprek
          </div>

        </div>

        {/* Hero Visual: Two Phone Mockups Side-by-Side with Natural Labels */}
        <div className="relative max-w-4xl mx-auto pt-2">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-center">
            
            {/* Phone 1: Onboarding Screen */}
            <div className="flex flex-col items-center">
              <span className="text-xs font-semibold tracking-wider text-[#6E625D] mb-3 font-sans">
                Een moment voor jullie
              </span>
              <PhoneMockup screen="onboarding" />
            </div>

            {/* Phone 2: Gezelschap Kiezer */}
            <div className="flex flex-col items-center">
              <span className="text-xs font-semibold tracking-wider text-[#6E625D] mb-3 font-sans">
                Met wie ben je vandaag?
              </span>
              <PhoneMockup screen="selector" />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
