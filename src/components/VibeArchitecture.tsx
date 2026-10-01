import React, { useState } from 'react';
import { PACKS } from '../data/conversationData';
import { VibeType } from '../types';
import { ArrowRight, Sparkles, Smartphone } from 'lucide-react';

interface VibeArchitectureProps {
  onSelectVibe: (vibe: VibeType) => void;
}

const APP_SFEREN = [
  {
    id: 'date',
    title: 'Date & Nieuwe Ontmoetingen',
    tagline: 'Nieuwsgierig aftasten, lachen & chemie ontdekken.',
    description: 'Voorbij het werk, de woonplaats en het standaardlijstje. Vind snel uit of er echte chemie en speelsheid is.',
    sample: 'Wat is iets dat mensen vaak over jou aannemen, maar totaal niet klopt?',
  },
  {
    id: 'partner',
    title: 'Mijn Partner (Date Night)',
    tagline: 'Samen verdiepen, herinneringen ophalen & herontdekken.',
    description: 'Speciaal ontworpen voor koppels die samen uit eten gaan of thuis op de bank zitten en de telefoons écht willen wegleggen.',
    sample: 'Waarover verander je de laatste tijd langzaam maar zeker van gedachten?',
  },
  {
    id: 'vrienden',
    title: 'Vrienden & Vriendschap',
    tagline: 'Gêne laten vallen, ontwapenende verhalen & loyaliteit.',
    description: 'Ga voorbij het oppervlakkige bijpraten en ontdek wat er op dit moment écht in iemand omgaat.',
    sample: 'Wat is de meest gênante miskoop of hobbyfase die je ooit hebt gehad?',
  },
  {
    id: 'familie',
    title: 'Familie & Generaties',
    tagline: 'Generatiebruggen bouwen & warme anekdotes delen.',
    description: 'Vragen die verhalen uit het verleden naar boven halen en nieuwe verbindingen tussen generaties leggen.',
    sample: 'Op welk moment in je jeugd voelde jij je het meest vrij en zorgeloos?',
  },
];

export const VibeArchitecture: React.FC<VibeArchitectureProps> = ({ onSelectVibe }) => {
  return (
    <section id="vibes" className="py-20 sm:py-28 bg-[#FAF5F0] border-t border-[#EFE6DE]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#BD3A53] mb-3 font-sans">
            <span>Afgestemd op Ieder Moment</span>
            <span aria-hidden="true">·</span>
            <span>Sferen & Thema's</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#201A18] tracking-tight mb-4">
            Voor wie tegenover je zit. <br className="hidden sm:inline" />
            <span className="italic text-[#BD3A53]">Geen willekeurige vragen.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#6E625D] font-normal leading-relaxed">
            De app past de intensiteit, humor en kwetsbaarheid automatisch aan op jullie gezelschap en het moment van de dag.
          </p>
        </div>

        {/* Sferen Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {APP_SFEREN.map((sfeer, idx) => (
            <div
              key={sfeer.id}
              className="bg-white border border-[#EFE6DE] rounded-3xl p-8 shadow-xs flex flex-col justify-between hover:border-[#BD3A53]/50 transition-all group"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-[#6E625D] mb-3 font-sans">
                  <span className="font-bold text-[#BD3A53] uppercase tracking-wider">Sfeer 0{idx + 1}</span>
                  <span>Direct beschikbaar in de app</span>
                </div>

                <h3 className="font-serif text-2xl text-[#201A18] mb-2 group-hover:text-[#BD3A53] transition-colors font-normal">
                  {sfeer.title}
                </h3>
                
                <p className="font-serif text-sm text-[#201A18]/85 italic mb-3">
                  &ldquo;{sfeer.tagline}&rdquo;
                </p>

                <p className="text-xs sm:text-sm text-[#6E625D] leading-relaxed mb-6 font-normal">
                  {sfeer.description}
                </p>

                {/* Sample Question Box */}
                <div className="bg-[#FAF5F0] border border-[#EFE6DE] rounded-2xl p-4 mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#BD3A53] block mb-1 font-sans">
                    Voorbeeldvraag:
                  </span>
                  <p className="font-serif text-sm text-[#201A18] italic">
                    &ldquo;{sfeer.sample}&rdquo;
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-[#EFE6DE]/60 flex items-center justify-between text-xs">
                <span className="text-[#6E625D]">Geen App Store download nodig</span>
                <button
                  onClick={() => onSelectVibe('ontdekken')}
                  className="text-[#BD3A53] font-semibold hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <Smartphone className="w-3.5 h-3.5" />
                  <span>Zet op beginscherm →</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
