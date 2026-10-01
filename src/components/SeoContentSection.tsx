import React from 'react';
import { Smartphone, Sparkles, Heart } from 'lucide-react';

export const SeoContentSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 bg-[#FAF5F0] border-t border-[#EFE6DE]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Editorial Container */}
        <article className="bg-white border border-[#EFE6DE] rounded-3xl p-8 sm:p-14 shadow-xs">
          
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#BD3A53] block mb-3 font-sans">
              Inzichten & Gesprekspsychologie
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#201A18] tracking-tight mb-6 leading-tight font-normal">
              Waarom de juiste vraag op het juiste moment het verschil maakt
            </h2>
            <p className="font-serif text-lg text-[#201A18]/85 italic mb-8 leading-relaxed">
              Van oppervlakkige smalltalk naar betekenisvol contact: hoe nieuwsgierigheid dates en relaties verdiept.
            </p>
          </div>

          <div className="space-y-6 text-sm sm:text-base text-[#6E625D] leading-relaxed font-normal">
            <p>
              Iedereen herkent het moment tijdens een eerste date of een etentje na een drukke werkweek: het gesprek valt even stil, of verzandt in de vertrouwde riedel van werk, het weer, de huizenmarkt of wat er gisteren op social media voorbijkwam. We weten vaak oneindig veel feitelijke details <em>over</em> elkaar, maar stellen zelden nog een vraag waarop we het antwoord écht niet kunnen voorspellen.
            </p>

            <h3 className="font-serif text-2xl text-[#201A18] pt-4 font-normal">
              Het probleem met statische vragenkaartjes en standaardlijstjes
            </h3>
            <p>
              Vragenkaartjes zijn populair, maar missen vaak de context van het moment. Een te zware, therapeutische vraag op een speelse eerste date slaat de plank mis, terwijl een oppervlakkige vraag tijdens een intieme date night juist teleurstelt. Een echt goed gesprek vraagt om timing, nuance en afstemming op jullie sfeer.
            </p>

            {/* Feature Grid within Content */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
              <div className="p-5 bg-[#FAF5F0] border border-[#EFE6DE] rounded-2xl">
                <span className="font-serif text-lg text-[#BD3A53] block mb-1">01. Voor Eerste Dates</span>
                <p className="text-xs text-[#6E625D]">
                  Geen interview-achtige vragenlijsten, maar speelse observaties die chemie en humor aanwakkeren.
                </p>
              </div>

              <div className="p-5 bg-[#FAF5F0] border border-[#EFE6DE] rounded-2xl">
                <span className="font-serif text-lg text-[#BD3A53] block mb-1">02. Voor Date Nights</span>
                <p className="text-xs text-[#6E625D]">
                  Breek door de dagelijkse logistiek en routine heen en herontdek elkaars verborgen gedachten.
                </p>
              </div>

              <div className="p-5 bg-[#FAF5F0] border border-[#EFE6DE] rounded-2xl">
                <span className="font-serif text-lg text-[#BD3A53] block mb-1">03. Voor Vriendschappen</span>
                <p className="text-xs text-[#6E625D]">
                  Ga voorbij het gebruikelijke bijpraten en ontdek wat er op dit moment écht in iemand omgaat.
                </p>
              </div>
            </div>

            <h3 className="font-serif text-2xl text-[#201A18] pt-2 font-normal">
              Niet meer schermtijd, maar meer aandacht
            </h3>
            <p>
              Tussen Ons is ontwikkeld met één fundamenteel uitgangspunt: technologie moet mensen niet vasthouden in een digitale feed, maar een vonk geven die het echte fysieke gesprek opent. Zodra de juiste vraag op tafel ligt, verdwijnt de app naar de achtergrond.
            </p>
          </div>

          {/* Adjacent Call to Action */}
          <div className="mt-10 pt-8 border-t border-[#EFE6DE] flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-[#6E625D] font-medium font-sans">
              Klaar voor jullie volgende bijzondere gesprek?
            </span>
            <a
              href="#installeren"
              className="px-6 py-3 rounded-2xl text-xs font-semibold text-white bg-[#BD3A53] hover:bg-[#A72D45] transition-colors shadow-xs"
            >
              Zet op je beginscherm →
            </a>
          </div>

        </article>

      </div>
    </section>
  );
};
