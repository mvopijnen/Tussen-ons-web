import React from 'react';
import { Users, Sparkles, SlidersHorizontal, Smartphone } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  return (
    <section id="hoe-het-werkt" className="py-20 sm:py-28 bg-[#FAF5F0] border-t border-[#EFE6DE]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#EFE6DE] text-xs font-bold uppercase tracking-widest text-[#BD3A53] mb-4 shadow-2xs font-sans">
            <span>Hoe het werkt</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#201A18] tracking-tight mb-4 font-normal">
            Van moment naar gesprek
          </h2>
          <p className="text-base sm:text-lg text-[#6E625D] font-normal leading-relaxed text-balance">
            Geen ingewikkelde instellingen of ellenlange regels. Tussen Ons stemt de vraag af op het moment en laat jullie de rest doen.
          </p>
        </div>

        {/* 3 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          
          {/* Step 1 */}
          <div className="bg-white border border-[#EFE6DE] rounded-3xl p-8 flex flex-col justify-between shadow-xs hover:border-[#BD3A53]/40 transition-all">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#FAF0ED] flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-[#BD3A53]" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#BD3A53] block mb-2 font-sans">
                Stap 01
              </span>
              <h3 className="font-serif text-2xl text-[#201A18] mb-3 font-normal">
                Met wie ben je?
              </h3>
              <p className="text-xs sm:text-sm text-[#6E625D] leading-relaxed">
                Een eerste date vraagt iets anders dan je beste vriend, je partner of je moeder.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-[#EFE6DE]/60 text-xs text-[#BD3A53] font-semibold">
              ✦ Afgestemd op jullie relatie
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
                Waar hebben jullie zin in?
              </h3>
              <p className="text-xs sm:text-sm text-[#6E625D] leading-relaxed">
                Lachen, ontdekken, flirten, verdiepen of gewoon verrast worden.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-[#EFE6DE]/60 text-xs text-[#BD3A53] font-semibold">
              ✦ 5 herkenbare sferen
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-white border border-[#EFE6DE] rounded-3xl p-8 flex flex-col justify-between shadow-xs hover:border-[#BD3A53]/40 transition-all">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#FAF0ED] flex items-center justify-center mb-6">
                <SlidersHorizontal className="w-6 h-6 text-[#BD3A53]" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#BD3A53] block mb-2 font-sans">
                Stap 03
              </span>
              <h3 className="font-serif text-2xl text-[#201A18] mb-3 font-normal">
                Bepaal hoe ver je wilt gaan
              </h3>
              <p className="text-xs sm:text-sm text-[#6E625D] leading-relaxed">
                Houd het luchtig of laat het gesprek langzaam persoonlijker worden. Jullie houden altijd zelf de regie.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-[#EFE6DE]/60 text-xs text-[#BD3A53] font-semibold">
              ✦ Flexibele dieptecontrole
            </div>
          </div>

        </div>

        {/* 4e, kleinere afsluiter */}
        <div className="bg-white border border-[#EFE6DE] rounded-3xl p-6 sm:p-8 max-w-2xl mx-auto text-center shadow-xs">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#BD3A53] mb-2 font-sans">
            <Smartphone className="w-3.5 h-3.5 text-[#BD3A53]" />
            <span>En dan verdwijnt Tussen Ons</span>
          </div>
          <p className="font-serif text-xl sm:text-2xl text-[#201A18] font-normal italic">
            Eén vraag op tafel. Telefoon neer. De rest is van jullie.
          </p>
        </div>

      </div>
    </section>
  );
};
