import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    question: 'Wat is Tussen Ons precies?',
    answer: 'Tussen Ons is een interactieve gesprekservaring voor twee mensen. Geen spel met punten of een zware psychologische quiz, maar een intuïtieve gids die vragen, dilemma’s en kleine opdrachten aanreikt afgestemd op wie er tegenover je zit. Eén vraag op tafel, daarna gaat de aandacht weer naar elkaar.',
  },
  {
    question: 'Is het alleen voor koppels?',
    answer: 'Zeker niet. Tussen Ons werkt fantastisch op een eerste date of tijdens date nights, maar heeft even sterke sferen voor goede vrienden, familie en gezelschappen aan tafel. Dezelfde vraag voelt totaal anders afhankelijk van wie er tegenover je zit.',
  },
  {
    question: 'Hoe bepaalt Tussen Ons welke vraag past?',
    answer: 'De app combineert drie intuïtieve lagen: wie er tegenover je zit (Gezelschap: date, partner, vrienden, familie), de gewenste energie (Sfeer: ontdekken, lachen, flirten, verdiepen of verrassen) en de diepte die vandaag goed voelt. Hierdoor voelt iedere vraag raak en natuurlijk.',
  },
  {
    question: 'Kunnen we zelf bepalen hoe diep het gesprek wordt?',
    answer: 'Ja, altijd. Jullie houden de volledige regie. Met één tik wissel je tussen luchtig, nieuwsgierig, persoonlijk en diep. Je kunt tijdens het gesprek op ieder moment kiezen voor „Iets luchtiger” of juist „Iets persoonlijker”.',
  },
  {
    question: 'Moeten we antwoorden in de app invullen?',
    answer: 'Nee, nooit. Er zijn geen invoervelden, formulieren of scores. Tussen Ons geeft alleen het vonkje door de vraag te tonen; het gesprek vindt plaats tussen jullie in de kamer, niet op een scherm.',
  },
  {
    question: 'Worden onze gesprekken opgeslagen?',
    answer: 'Nee, absoluut niet. Wat tussen jullie wordt gezegd, blijft tussen jullie. De app luistert niet mee, slaat geen antwoorden op en bouwt geen dataprofielfiches. Jouw privacy is heilig.',
  },
  {
    question: 'Kunnen we Tussen Ons gratis proberen?',
    answer: 'Ja. Tussen Ons Basis is altijd 100% gratis en direct te gebruiken. Daarnaast kun je Tussen Ons Plus 7 dagen kosteloos uitproberen, zodat je het verschil kunt ervaren van een doordeweekse date tot een weekend met vrienden. Zoek je eenmalig iets voor een specifiek moment? Dan kun je ook losse themapacks aanschaffen voor €3,99 zonder abonnement.',
  },
  {
    question: 'Moeten we een app downloaden?',
    answer: 'Nee, je hebt geen App Store of Google Play Store download nodig. Je bewaart Tussen Ons direct vanuit je mobiele browser (Safari of Chrome) op je beginscherm in tien seconden. De app start daarna direct zonder browserbalken.',
  },
];

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-[#FAF5F0] border-t border-[#EFE6DE]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#EFE6DE] text-xs font-bold uppercase tracking-widest text-[#BD3A53] mb-4 shadow-2xs font-sans">
            <span>Veelgestelde Vragen</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#201A18] tracking-tight mb-4 font-normal">
            Vragen & antwoorden
          </h2>
          <p className="text-base sm:text-lg text-[#6E625D] font-normal leading-relaxed text-balance">
            Alles over hoe de gesprekservaring werkt, de privacy en hoe je begint.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.question}
                className={`bg-white border rounded-2xl transition-all duration-200 overflow-hidden ${
                  isOpen ? 'border-[#BD3A53] shadow-xs' : 'border-[#EFE6DE] hover:border-[#BD3A53]/40'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <h3 className="font-serif text-lg sm:text-xl text-[#201A18] font-normal leading-snug">
                    {faq.question}
                  </h3>
                  <div className={`p-1 rounded-full text-[#BD3A53] transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180' : ''}`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 text-xs sm:text-sm text-[#6E625D] leading-relaxed font-normal border-t border-[#EFE6DE]/60 pt-4 animate-fadeIn">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
