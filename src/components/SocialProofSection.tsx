import React from 'react';
import { Star, Check, Sparkles } from 'lucide-react';

const REVIEWS = [
  {
    quote: 'Op onze derde date viel het stil bij het toetje. We kregen één vraag over onze raarste jeugddromen en hebben tot sluitingstijd zitten lachen en praten.',
    author: 'Lisa & Bram',
    context: 'Eerste date',
    detail: 'IJs gebroken in 2 minuten',
  },
  {
    quote: 'We zijn zeven jaar samen en dachten dat we alle verhalen wel kenden. Binnen tien minuten ontdekten we dingen waar we het in al die jaren nog nooit over hadden gehad.',
    author: 'Sanne & Daan',
    context: '7 jaar samen',
    detail: 'Nieuwe verhalen in het vertrouwde',
  },
  {
    quote: 'Tijdens een weekend weg met vrienden ging het gesprek eindelijk eens voorbij werk en het standaard bijpraten. Veel gelachen en oprecht contact.',
    author: 'Timo & Julian',
    context: 'Beste vrienden',
    detail: 'Gêne laten vallen',
  },
];

export const SocialProofSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#FAF5F0] border-t border-[#EFE6DE]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#EFE6DE] text-xs font-bold uppercase tracking-widest text-[#BD3A53] mb-4 shadow-2xs font-sans">
            <span>Zo kan één vraag een moment veranderen</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#201A18] tracking-tight mb-4 font-normal">
            Voor gesprekken die een andere kant op gingen <br className="hidden sm:inline" />
            <span className="italic text-[#BD3A53]">dan verwacht.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#6E625D] font-normal leading-relaxed text-balance">
            Of je elkaar net kent of al jaren liefhebt: een onverwachte vraag brengt altijd iets nieuws op gang.
          </p>
        </div>

        {/* 3 Review Cards across different contexts */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {REVIEWS.map((rev, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#EFE6DE] rounded-3xl p-8 flex flex-col justify-between shadow-xs hover:border-[#BD3A53]/40 transition-all"
            >
              <div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#BD3A53] block mb-4 font-sans">
                  {rev.context}
                </span>
                
                <blockquote className="font-serif text-lg text-[#201A18] leading-relaxed mb-6 font-normal">
                  &ldquo;{rev.quote}&rdquo;
                </blockquote>
              </div>

              <div className="pt-4 border-t border-[#EFE6DE]/60">
                <div className="font-bold text-sm text-[#201A18]">{rev.author}</div>
                <div className="text-xs text-[#6E625D]">{rev.detail}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Table: Niet meer vragen. Beter afgestemde vragen. */}
        <div className="bg-white border border-[#EFE6DE] rounded-3xl p-8 sm:p-12 shadow-xs">
          
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-[#BD3A53] block mb-2 font-sans">
              Vergelijking
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#201A18] font-normal">
              Niet meer vragen. Beter afgestemde vragen.
            </h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#FAF5F0] border-b border-[#EFE6DE] text-[#201A18]/80 uppercase tracking-wider text-[11px] font-bold font-sans">
                <tr>
                  <th className="py-3.5 px-4 sm:px-6 w-1/3">Eigenschap</th>
                  <th className="py-3.5 px-4 sm:px-6 text-[#BD3A53]">Tussen Ons</th>
                  <th className="py-3.5 px-4 sm:px-6 text-[#6E625D]">Vragenkaarten</th>
                  <th className="py-3.5 px-4 sm:px-6 text-[#6E625D]">Veel gesprek/apps</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#EFE6DE]/60 text-[#201A18]">
                <tr>
                  <td className="py-4 px-4 sm:px-6 font-bold">Past bij gezelschap</td>
                  <td className="py-4 px-4 sm:px-6 font-semibold text-[#BD3A53] flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-[#BD3A53]" /> Ja
                  </td>
                  <td className="py-4 px-4 sm:px-6 text-[#6E625D]">Meestal vaste set</td>
                  <td className="py-4 px-4 sm:px-6 text-[#6E625D]">Wisselend</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 sm:px-6 font-bold">Sfeer zelf kiezen</td>
                  <td className="py-4 px-4 sm:px-6 font-semibold text-[#BD3A53] flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-[#BD3A53]" /> Ja
                  </td>
                  <td className="py-4 px-4 sm:px-6 text-[#6E625D]">Beperkt</td>
                  <td className="py-4 px-4 sm:px-6 text-[#6E625D]">Wisselend</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 sm:px-6 font-bold">Diepte tijdens gesprek aanpassen</td>
                  <td className="py-4 px-4 sm:px-6 font-semibold text-[#BD3A53] flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-[#BD3A53]" /> Ja
                  </td>
                  <td className="py-4 px-4 sm:px-6 text-[#6E625D]">Niet direct</td>
                  <td className="py-4 px-4 sm:px-6 text-[#6E625D]">Wisselend</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 sm:px-6 font-bold">Fysiek meenemen</td>
                  <td className="py-4 px-4 sm:px-6 text-[#6E625D]">Nee (op telefoon)</td>
                  <td className="py-4 px-4 sm:px-6 text-[#6E625D]">Ja (doosje)</td>
                  <td className="py-4 px-4 sm:px-6 text-[#6E625D]">Nee</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 sm:px-6 font-bold">Antwoorden invoeren</td>
                  <td className="py-4 px-4 sm:px-6 font-semibold text-[#BD3A53]">Nee (100% privé)</td>
                  <td className="py-4 px-4 sm:px-6 text-[#6E625D]">Nee</td>
                  <td className="py-4 px-4 sm:px-6 text-[#6E625D]">Vaak</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 sm:px-6 font-bold">Gericht op gesprek buiten scherm</td>
                  <td className="py-4 px-4 sm:px-6 font-semibold text-[#BD3A53] flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-[#BD3A53]" /> Ja
                  </td>
                  <td className="py-4 px-4 sm:px-6 text-[#6E625D]">Ja</td>
                  <td className="py-4 px-4 sm:px-6 text-[#6E625D]">Wisselend</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>

      </div>
    </section>
  );
};
