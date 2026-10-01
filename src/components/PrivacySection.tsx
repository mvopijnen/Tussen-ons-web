import React from 'react';
import { Lock, EyeOff, ServerOff } from 'lucide-react';

export const PrivacySection: React.FC = () => {
  return (
    <section id="privacy" className="py-20 sm:py-28 bg-[#F8F5EF] border-t border-[#EAE4D9]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        <div className="bg-white border border-[#EAE4D9] rounded-3xl p-8 sm:p-14 shadow-xs relative overflow-hidden">
          
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#C45E4C] mb-3 font-sans">
              <span>Onze Privacybelofte</span>
              <span aria-hidden="true">·</span>
              <span>100% Vertrouwelijk</span>
            </div>
            
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#292523] tracking-tight mb-6 leading-tight font-normal">
              Wat tussen jullie wordt gezegd, <br className="hidden sm:inline" />
              <span className="italic text-[#C45E4C]">blijft tussen jullie.</span>
            </h2>

            <p className="text-base sm:text-lg text-[#292523]/80 leading-relaxed font-normal mb-8 text-balance">
              Tussen Ons hoeft niet te weten wat jullie antwoorden. De app begeleidt het gesprek, niet jullie relatie. Geen audio-opnames, geen antwoord-databases, geen analyse-algoritmes die een oordeel over jullie vellen.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-[#EAE4D9]/60">
            <div className="space-y-2">
              <div className="w-8 h-8 rounded-lg bg-[#F8F5EF] border border-[#EAE4D9] flex items-center justify-center text-[#C45E4C] mb-3">
                <EyeOff className="w-4 h-4" />
              </div>
              <h3 className="font-serif text-lg text-[#292523] font-medium">
                Geen antwoordopslag
              </h3>
              <p className="text-xs text-[#292523]/70 leading-relaxed">
                Jullie antwoorden blijven in de lucht tussen jullie twee. Niets wordt getypt of geüpload.
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-8 h-8 rounded-lg bg-[#F8F5EF] border border-[#EAE4D9] flex items-center justify-center text-[#C45E4C] mb-3">
                <ServerOff className="w-4 h-4" />
              </div>
              <h3 className="font-serif text-lg text-[#292523] font-medium">
                Geen dataverkoop
              </h3>
              <p className="text-xs text-[#292523]/70 leading-relaxed">
                We bouwen een eerlijke gesprekservaring, geen advertentieplatform dat data verhandelt.
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-8 h-8 rounded-lg bg-[#F8F5EF] border border-[#EAE4D9] flex items-center justify-center text-[#C45E4C] mb-3">
                <Lock className="w-4 h-4" />
              </div>
              <h3 className="font-serif text-lg text-[#292523] font-medium">
                Puur client-side
              </h3>
              <p className="text-xs text-[#292523]/70 leading-relaxed">
                De intelligentie die de vragen afstemt draait direct in jullie browser zonder nieuwsgierige servers.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
