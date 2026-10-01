import React from 'react';
import { Sliders, Moon, MessageSquare, ArrowRight, Heart, Sparkles, ShieldCheck } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  return (
    <section id="hoe-het-werkt" className="py-20 sm:py-28 bg-[#FAF5F0] border-t border-[#EFE6DE]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-bold tracking-widest uppercase text-[#BD3A53] mb-3 font-sans">
            <span>Eenvoudig & Intiem</span>
            <span aria-hidden="true">·</span>
            <span>Hoe het werkt</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#201A18] tracking-tight mb-4">
            In 3 stappen naar een echt gesprek
          </h2>
          <p className="text-base sm:text-lg text-[#6E625D] font-normal leading-relaxed text-balance">
            Geen ingewikkelde instellingen of ellenlange regels. Tussen Ons opent de interactie en laat jullie de rest doen.
          </p>
        </div>

        {/* 3 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Step 1 */}
          <div className="bg-white border border-[#EFE6DE] rounded-3xl p-8 flex flex-col justify-between shadow-xs hover:border-[#BD3A53]/40 transition-all">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#FAF0ED] flex items-center justify-center mb-6">
                <Sliders className="w-6 h-6 text-[#BD3A53]" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#BD3A53] block mb-2 font-sans">
                Stap 01
              </span>
              <h3 className="font-serif text-2xl text-[#201A18] mb-3 font-normal">
                Kies wie er tegenover je zit
              </h3>
              <p className="text-xs sm:text-sm text-[#6E625D] leading-relaxed">
                Date, vaste partner, vrienden of familie? Tussen Ons past de toon, diepgang en het tempo direct aan op jullie gezelschap.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-[#EFE6DE]/60 text-xs text-[#6E625D]">
              ✦ Met één tik de juiste sfeer
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-white border border-[#EFE6DE] rounded-3xl p-8 flex flex-col justify-between shadow-xs hover:border-[#BD3A53]/40 transition-all">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#FAF0ED] flex items-center justify-center mb-6">
                <Sparkles className="w-6 h-6 text-[#BD3A53]" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#BD3A53] block mb-2 font-sans">
                Stap 02
              </span>
              <h3 className="font-serif text-2xl text-[#201A18] mb-3 font-normal">
                Ontvang de juiste vraag
              </h3>
              <p className="text-xs sm:text-sm text-[#6E625D] leading-relaxed">
                Geen cliché sollicitatievragen, maar onverwachte dilemma’s, speelse uitdagingen en eerlijke observaties die de nieuwsgierigheid wekken.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-[#EFE6DE]/60 text-xs text-[#6E625D]">
              ✦ Soms luchtig, soms diepgaand
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-white border border-[#EFE6DE] rounded-3xl p-8 flex flex-col justify-between shadow-xs hover:border-[#BD3A53]/40 transition-all">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#FAF0ED] flex items-center justify-center mb-6">
                <Moon className="w-6 h-6 text-[#BD3A53]" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#BD3A53] block mb-2 font-sans">
                Stap 03
              </span>
              <h3 className="font-serif text-2xl text-[#201A18] mb-3 font-normal">
                Telefoon plat & praten
              </h3>
              <p className="text-xs sm:text-sm text-[#6E625D] leading-relaxed">
                Leg de telefoon op tafel. Het scherm dimt, de app verdwijnt naar de achtergrond en alle aandacht gaat naar degene die tegenover je zit.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-[#EFE6DE]/60 text-xs text-[#6E625D]">
              ✦ Niet meer schermtijd. Meer gesprekstijd.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
