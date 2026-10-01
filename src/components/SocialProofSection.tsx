import React from 'react';
import { Heart, Star, Sparkles, Check, X } from 'lucide-react';

const REVIEWS = [
  {
    quote: 'Op onze derde date viel het stil bij het toetje. We openden Tussen Ons op onze telefoon. We hebben tot sluitingstijd gepraat over dingen die we zelfs aan onze beste vrienden nooit vertelden.',
    author: 'Lisa & Bram',
    context: 'Daten & Jonge Koppels',
    time: '2 uur en 40 min gesprekstijd',
  },
  {
    quote: 'Na 7 jaar relatie denk je dat je alles wel van elkaar weet. Binnen tien minuten ontdekten we verlangens en jeugdverhalen die we nog nooit eerder hadden gedeeld. Onze vaste date night is gered.',
    author: 'Sanne & Daan',
    context: '7 jaar samenwonend',
    time: 'Wekelijkse date night routine',
  },
  {
    quote: 'Het fijne is dat het totaal niet voelt als relatietherapie of een zwaar psychologisch spel. Het is speels, een tikkeltje ondeugend en het breekt direct de dagelijkse werk-moeheid.',
    author: 'Timo & Floor',
    context: 'Weekend Weg',
    time: 'Tijdens een fles wijn bij de haard',
  },
];

export const SocialProofSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#FAF5F0] border-t border-[#EFE6DE]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-bold tracking-widest uppercase text-[#BD3A53] mb-3 font-sans">
            <span>Ervaringen & Transformaties</span>
            <span aria-hidden="true">·</span>
            <span>Wat koppels zeggen</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#201A18] tracking-tight mb-4 font-normal">
            Voor gesprekken die anders <br className="hidden sm:inline" />
            <span className="italic text-[#BD3A53]">nooit waren begonnen.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#6E625D] font-normal leading-relaxed text-balance">
            Duizenden dates en partners gebruiken Tussen Ons om de telefoons weg te leggen en elkaar opnieuw te ontdekken.
          </p>
        </div>

        {/* 3 Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {REVIEWS.map((rev, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#EFE6DE] rounded-3xl p-8 flex flex-col justify-between shadow-xs hover:border-[#BD3A53]/40 transition-all"
            >
              <div>
                <div className="flex items-center gap-1 text-[#BD3A53] mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#BD3A53]" />
                  ))}
                </div>
                
                <blockquote className="font-serif text-lg text-[#201A18] leading-relaxed mb-6 font-normal">
                  &ldquo;{rev.quote}&rdquo;
                </blockquote>
              </div>

              <div className="pt-4 border-t border-[#EFE6DE]/60">
                <div className="font-bold text-sm text-[#201A18]">{rev.author}</div>
                <div className="text-xs text-[#6E625D]">{rev.context} · <span className="text-[#BD3A53]">{rev.time}</span></div>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Table: Why Tussen Ons is uniquely effective */}
        <div className="bg-white border border-[#EFE6DE] rounded-3xl p-8 sm:p-12 shadow-xs">
          
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-[#BD3A53] block mb-2 font-sans">
              Waarom Tussen Ons Werkt
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#201A18] font-normal">
              Het verschil met traditionele manieren
            </h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#FAF5F0] border-b border-[#EFE6DE] text-[#201A18]/80 uppercase tracking-wider text-[11px] font-bold font-sans">
                <tr>
                  <th className="py-3.5 px-4 sm:px-6 w-1/3">Kenmerk</th>
                  <th className="py-3.5 px-4 sm:px-6 text-[#BD3A53]">Tussen Ons</th>
                  <th className="py-3.5 px-4 sm:px-6 text-[#6E625D]">Statische Kaartjes</th>
                  <th className="py-3.5 px-4 sm:px-6 text-[#6E625D]">Standaard Apps</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#EFE6DE]/60 text-[#201A18]">
                <tr>
                  <td className="py-4 px-4 sm:px-6 font-bold">Afgestemd op het moment</td>
                  <td className="py-4 px-4 sm:px-6 font-semibold text-[#BD3A53] flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-[#BD3A53]" /> Ja, past zich aan
                  </td>
                  <td className="py-4 px-4 sm:px-6 text-[#6E625D]">Nee, willekeurige stapel</td>
                  <td className="py-4 px-4 sm:px-6 text-[#6E625D]">Vaak geforceerd</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 sm:px-6 font-bold">Telefoon verdwijnt naar achtergrond</td>
                  <td className="py-4 px-4 sm:px-6 font-semibold text-[#BD3A53] flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-[#BD3A53]" /> Scherm dimt automatisch
                  </td>
                  <td className="py-4 px-4 sm:px-6 text-[#6E625D]">N.v.t. (losse doosjes)</td>
                  <td className="py-4 px-4 sm:px-6 text-[#6E625D]">Nee, wil schermtijd rekken</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 sm:px-6 font-bold">Altijd direct bij de hand</td>
                  <td className="py-4 px-4 sm:px-6 font-semibold text-[#BD3A53] flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-[#BD3A53]" /> Op je beginscherm
                  </td>
                  <td className="py-4 px-4 sm:px-6 text-[#6E625D]">Vergeet je thuis</td>
                  <td className="py-4 px-4 sm:px-6 text-[#6E625D]">App Store download vereist</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 sm:px-6 font-bold">100% Privacy & Vertrouwelijkheid</td>
                  <td className="py-4 px-4 sm:px-6 font-semibold text-[#BD3A53] flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-[#BD3A53]" /> Geen data-opslag
                  </td>
                  <td className="py-4 px-4 sm:px-6 text-[#6E625D]">Privé</td>
                  <td className="py-4 px-4 sm:px-6 text-[#6E625D]">Accounts & trackers</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 sm:px-6 font-bold">Sfeer & Toon</td>
                  <td className="py-4 px-4 sm:px-6 font-semibold text-[#BD3A53] flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-[#BD3A53]" /> Warm, speels & nieuwsgierig
                  </td>
                  <td className="py-4 px-4 sm:px-6 text-[#6E625D]">Wisselend / statisch</td>
                  <td className="py-4 px-4 sm:px-6 text-[#6E625D]">Vaak betweterig/AI-jargon</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>

      </div>
    </section>
  );
};
