import React from 'react';
import { Heart } from 'lucide-react';

export const BrandPhilosophy: React.FC = () => {
  return (
    <section id="filosofie" className="py-20 sm:py-28 bg-[#FAF5F0] border-t border-[#EFE6DE]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Editorial Section Kicker */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#EFE6DE] text-xs font-bold uppercase tracking-widest text-[#BD3A53] mb-4 shadow-2xs font-sans">
            <span>Waarom Tussen Ons bestaat</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#201A18] tracking-tight mb-6 leading-tight text-balance font-normal">
            We weten steeds meer <span className="italic">óver</span> elkaar, maar vragen steeds minder <span className="text-[#BD3A53] italic">áán</span> elkaar.
          </h2>
          <p className="text-base sm:text-lg text-[#6E625D] leading-relaxed font-normal">
            Instagram vertelt waar iemand is geweest. LinkedIn vertelt wat iemand doet. Spotify vertelt wat iemand luistert. Datingapps vertellen hobby’s en sterrenbeelden. Maar hoe iemand zich écht voelt wanneer niemand kijkt? Dat ontdek je pas als je de juiste vraag stelt.
          </p>
        </div>

        {/* 3 Core Philosophical Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          
          {/* Pillar 1 */}
          <div className="bg-white border border-[#EFE6DE] rounded-3xl p-8 flex flex-col justify-between shadow-xs">
            <div>
              <span className="font-serif text-3xl text-[#BD3A53]/30 block mb-4">01</span>
              <h3 className="font-serif text-2xl text-[#201A18] mb-3 font-normal">
                Nieuwsgierigheid als kompas
              </h3>
              <p className="text-xs sm:text-sm text-[#6E625D] leading-relaxed">
                Tussen Ons zegt nooit: <em>&ldquo;jullie praten te weinig&rdquo;</em> of <em>&ldquo;jullie relatie moet verbeteren&rdquo;</em>. We zeggen simpelweg: er valt waarschijnlijk nog iets te ontdekken. Nieuwsgierigheid voelt positief en werkt bij een eerste date evengoed als bij een vriendschap of relatie van twintig jaar.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-[#EFE6DE]/60 text-xs text-[#6E625D] italic">
              Geen therapie. Pure nieuwsgierigheid.
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="bg-white border border-[#EFE6DE] rounded-3xl p-8 flex flex-col justify-between shadow-xs">
            <div>
              <span className="font-serif text-3xl text-[#BD3A53] block mb-4">02</span>
              <h3 className="font-serif text-2xl text-[#201A18] mb-3 font-normal">
                Niet meer schermtijd. Meer gesprekstijd.
              </h3>
              <p className="text-xs sm:text-sm text-[#6E625D] leading-relaxed">
                Een goede sessie is niet de sessie waarin je lang naar Tussen Ons kijkt. Het is de sessie waarin je vergeet dat Tussen Ons nog openstaat. De app opent het gesprek, waarna jullie de rest samen doen.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-[#EFE6DE]/60 text-xs font-semibold text-[#BD3A53]">
              De app verdwijnt naar de achtergrond.
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="bg-white border border-[#EFE6DE] rounded-3xl p-8 flex flex-col justify-between shadow-xs">
            <div>
              <span className="font-serif text-3xl text-[#BD3A53]/30 block mb-4">03</span>
              <h3 className="font-serif text-2xl text-[#201A18] mb-3 font-normal">
                Wat tussen jullie is, blijft tussen jullie
              </h3>
              <p className="text-xs sm:text-sm text-[#6E625D] leading-relaxed">
                Tussen Ons slaat geen antwoorden op en luistert niet mee. We begeleiden het gesprek met sociale intelligentie, maar wat er gezegd wordt is uitsluitend van de twee mensen aan tafel.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-[#EFE6DE]/60 text-xs text-[#6E625D] italic">
              Absolute privacy als kernwaarde.
            </div>
          </div>

        </div>

        {/* The Brand Manifesto Quote Block */}
        <div className="bg-white border border-[#EFE6DE] rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto shadow-xs relative overflow-hidden">
          <div className="w-11 h-11 rounded-2xl bg-[#FAF0ED] flex items-center justify-center mx-auto mb-6">
            <Heart className="w-5 h-5 text-[#BD3A53]" />
          </div>
          <blockquote className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#201A18] leading-snug tracking-tight mb-6 text-balance font-normal">
            &ldquo;Het gaat niet om wat er op het scherm gebeurt. <br className="hidden sm:inline" />
            <span className="text-[#BD3A53] italic">Het gaat om wat er tussen jullie gebeurt.</span>&rdquo;
          </blockquote>
          <p className="text-xs text-[#6E625D] uppercase tracking-widest font-bold font-sans">
            Tussen Ons — Het Productmanifest
          </p>
        </div>

      </div>
    </section>
  );
};
