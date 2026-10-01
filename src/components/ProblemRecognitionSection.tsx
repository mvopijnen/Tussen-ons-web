import React from 'react';
import { Sparkles, MessageCircle, Heart, Compass, ArrowRight } from 'lucide-react';

interface ProblemRecognitionSectionProps {
  onOpenExperience?: () => void;
}

export const ProblemRecognitionSection: React.FC<ProblemRecognitionSectionProps> = ({ onOpenExperience }) => {
  return (
    <section id="herkenbaar" className="py-20 sm:py-28 bg-[#FAF5F0] border-t border-[#EFE6DE] relative overflow-hidden">
      
      {/* Background Soft Rose Glow */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-[#F7D8D3]/35 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#EFE6DE] text-xs font-bold uppercase tracking-widest text-[#BD3A53] mb-4 shadow-2xs font-sans">
            <span>Herkenbaar?</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#201A18] tracking-tight mb-6 leading-tight text-balance font-normal">
            Je kent iemand. <br className="hidden sm:inline" />
            <span className="italic text-[#BD3A53]">Maar nooit helemaal.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#6E625D] leading-relaxed font-normal">
            We praten de hele dag. Over werk, plannen, boodschappen, vrienden, vakantie en alles wat nog moet. Toch zijn het vaak juist de onverwachte vragen die iets nieuws naar boven halen.
          </p>
        </div>

        {/* 3 Relatable Situations */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          
          {/* Card 1: Eerste ontmoeting */}
          <div className="bg-white border border-[#EFE6DE] rounded-3xl p-8 flex flex-col justify-between shadow-xs hover:border-[#BD3A53]/40 transition-all">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-[#FAF0ED] text-[#BD3A53] flex items-center justify-center font-bold text-xs mb-6">
                01
              </div>
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#BD3A53] block mb-2 font-sans">
                Eerste ontmoeting
              </span>
              <h3 className="font-serif text-2xl text-[#201A18] mb-3 font-normal leading-snug">
                Je wilt iemand leren kennen zonder dat het voelt als een sollicitatiegesprek.
              </h3>
              <p className="text-xs sm:text-sm text-[#6E625D] leading-relaxed">
                Je hebt genoeg vragen, maar niet iedere vraag past bij het moment. Je zoekt iets waardoor het gesprek vanzelf verder gaat.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-[#EFE6DE]/60 text-xs font-semibold text-[#BD3A53]">
              ✦ Licht en ontwapenend
            </div>
          </div>

          {/* Card 2: Je kent elkaar al jaren */}
          <div className="bg-white border border-[#EFE6DE] rounded-3xl p-8 flex flex-col justify-between shadow-xs hover:border-[#BD3A53]/40 transition-all">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-[#FAF0ED] text-[#BD3A53] flex items-center justify-center font-bold text-xs mb-6">
                02
              </div>
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#BD3A53] block mb-2 font-sans">
                Je kent elkaar al jaren
              </span>
              <h3 className="font-serif text-2xl text-[#201A18] mb-3 font-normal leading-snug">
                Je denkt dat je alle verhalen inmiddels wel kent.
              </h3>
              <p className="text-xs sm:text-sm text-[#6E625D] leading-relaxed">
                Tot iemand ineens iets vraagt waar jullie het in al die jaren nog nooit over hebben gehad.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-[#EFE6DE]/60 text-xs font-semibold text-[#BD3A53]">
              ✦ Verdieping in het vertrouwde
            </div>
          </div>

          {/* Card 3: Een gewone avond */}
          <div className="bg-white border border-[#EFE6DE] rounded-3xl p-8 flex flex-col justify-between shadow-xs hover:border-[#BD3A53]/40 transition-all">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-[#FAF0ED] text-[#BD3A53] flex items-center justify-center font-bold text-xs mb-6">
                03
              </div>
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#BD3A53] block mb-2 font-sans">
                Een gewone avond
              </span>
              <h3 className="font-serif text-2xl text-[#201A18] mb-3 font-normal leading-snug">
                Het gesprek is niet slecht. Alleen voorspelbaar.
              </h3>
              <p className="text-xs sm:text-sm text-[#6E625D] leading-relaxed">
                Soms heb je geen serieus gesprek nodig. Alleen iets onverwachts waardoor je weer even anders naar elkaar kijkt.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-[#EFE6DE]/60 text-xs font-semibold text-[#BD3A53]">
              ✦ Speels en ontspannend
            </div>
          </div>

        </div>

        {/* Transformation Block */}
        <div className="bg-white border border-[#EFE6DE] rounded-3xl p-8 sm:p-14 shadow-xs relative overflow-hidden">
          
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#BD3A53] block mb-3 font-sans">
              Het effect van een goede vraag
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl text-[#201A18] mb-3 leading-snug font-normal">
              Nieuwsgierigheid verandert een gewoon moment.
            </h3>
            <p className="text-xs sm:text-sm text-[#6E625D] leading-relaxed">
              Zonder druk, zonder script. Gewoon de ruimte om elkaar iets te vragen wat er anders niet van was gekomen.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-7 pt-2">
            
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-xl bg-[#FAF0ED] text-[#BD3A53] flex items-center justify-center shrink-0 mt-0.5 font-bold text-sm">
                ✓
              </div>
              <div>
                <strong className="text-sm font-bold text-[#201A18] block mb-1">
                  Je ontdekt iets nieuws.
                </strong>
                <p className="text-xs text-[#6E625D] leading-relaxed">
                  Een onverwachte droom, een gekke jeugdherinnering of een perspectief dat je nog niet kende.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-xl bg-[#FAF0ED] text-[#BD3A53] flex items-center justify-center shrink-0 mt-0.5 font-bold text-sm">
                ✓
              </div>
              <div>
                <strong className="text-sm font-bold text-[#201A18] block mb-1">
                  Je lacht om iets onverwachts.
                </strong>
                <p className="text-xs text-[#6E625D] leading-relaxed">
                  Een speels dilemma of een openhartige bekentenis die direct de ontspanning terugbrengt.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-xl bg-[#FAF0ED] text-[#BD3A53] flex items-center justify-center shrink-0 mt-0.5 font-bold text-sm">
                ✓
              </div>
              <div>
                <strong className="text-sm font-bold text-[#201A18] block mb-1">
                  Een klein antwoord opent een groter verhaal.
                </strong>
                <p className="text-xs text-[#6E625D] leading-relaxed">
                  Het gesprek stroomt vanzelf verder zonder dat iemand hoeft na te denken over het volgende onderwerp.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-xl bg-[#FAF0ED] text-[#BD3A53] flex items-center justify-center shrink-0 mt-0.5 font-bold text-sm">
                ✓
              </div>
              <div>
                <strong className="text-sm font-bold text-[#201A18] block mb-1">
                  Je vergeet vanzelf dat de telefoon er nog ligt.
                </strong>
                <p className="text-xs text-[#6E625D] leading-relaxed">
                  Omdat het gesprek op tafel veel interessanter is dan welk scherm dan ook.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
