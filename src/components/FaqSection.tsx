import React, { useState } from 'react';
import { ChevronDown, Smartphone } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

const FAQS: FaqItem[] = [
  {
    category: 'Installatie & Beginscherm',
    question: 'Hoe zet ik Tussen Ons op mijn beginscherm (iPhone & Android)?',
    answer: 'Op iPhone open je deze website in Safari, tik je onderaan op het Deel-icoon (vierkantje met pijl omhoog) en kies je „Zet op beginscherm”. Op Android open je Chrome, tik je rechtsboven op de 3 puntjes en kies je „App installeren” of „Toevoegen aan startscherm”. De app start vervolgens direct fullscreen zonder browserbalken.',
  },
  {
    category: 'Installatie & Beginscherm',
    question: 'Heb ik een App Store of Google Play Store download nodig?',
    answer: 'Nee. Tussen Ons is gebouwd als een moderne Progressive Web App (PWA). Je hoeft niets te downloaden uit de App Store, hebt geen account nodig en het kost geen opslagruimte. Je voegt hem direct toe vanuit je browser.',
  },
  {
    category: 'Werking & Ervaring',
    question: 'Wat is Tussen Ons en hoe verschilt het van traditionele vragenkaartjes?',
    answer: 'Traditionele vragenkaartjes zijn statisch, zwaar om mee te nemen en houden geen rekening met wie er tegenover je zit. Tussen Ons stemt de vragen, dilemma’s en opdrachten af op jullie sfeer (ontdekken, lachen, flirten, verdiepen of groepsijsbrekers). Zodra de vraag op tafel ligt, nodigt de app uit om de telefoon plat te leggen.',
  },
  {
    category: 'Voor Dates & Koppels',
    question: 'Welke sferen werken het beste voor een eerste date of date night?',
    answer: 'Voor een eerste date kies je ‘Date’ en de sfeer ‘Ontdekken’ of ‘Lachen’ voor een ontspannen, speelse sfeer zonder sollicitatiegevoel. Voor koppels tijdens een etentje of op de bank zijn ‘Mijn partner’, ‘Flirten’ en ‘Verdiepen’ ideaal om voorbij de dagelijkse logistiek te komen.',
  },
  {
    category: 'Privacy & Veiligheid',
    question: 'Worden onze gesprekken of antwoorden ergens opgeslagen?',
    answer: 'Nee, absoluut niet. Wat tussen jullie wordt gezegd, blijft tussen jullie. Tussen Ons bewaart geen antwoorden, heeft geen microfoontoegang en verkoopt geen gegevens. De app draait 100% discreet en lokaal.',
  },
  {
    category: 'Toegang & Kosten',
    question: 'Is Tussen Ons gratis te gebruiken?',
    answer: 'Ja, de basiservaring is volledig gratis en direct te openen. Met Tussen Ons Plus ontgrendel je daarnaast exclusieve themapacks (zoals Weekend Weg) en speciale verdiepende interacties.',
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
          <div className="flex items-center justify-center gap-2 text-xs font-bold tracking-widest uppercase text-[#BD3A53] mb-3 font-sans">
            <span>Veelgestelde Vragen</span>
            <span aria-hidden="true">·</span>
            <span>Alles over Tussen Ons</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#201A18] tracking-tight mb-4 font-normal">
            Veelgestelde vragen
          </h2>
          <p className="text-sm sm:text-base text-[#6E625D] font-normal leading-relaxed text-balance">
            Alles over het installeren op je beginscherm, privacy en hoe de gesprekservaring werkt.
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
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#BD3A53] block mb-1 font-sans">
                      {faq.category}
                    </span>
                    <h3 className="font-serif text-lg sm:text-xl text-[#201A18] font-normal leading-snug">
                      {faq.question}
                    </h3>
                  </div>
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

        {/* Bottom prompt */}
        <div className="mt-10 text-center text-xs text-[#6E625D]">
          <span>Klaar om te beginnen? </span>
          <a href="#installeren" className="text-[#BD3A53] font-semibold hover:underline">
            Zet Tussen Ons op je beginscherm →
          </a>
        </div>

      </div>
    </section>
  );
};
