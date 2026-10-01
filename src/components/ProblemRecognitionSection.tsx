import React from 'react';
import { Smartphone, Eye, Sparkles, Heart, ArrowRight, ShieldCheck, Flame, Moon, BellOff } from 'lucide-react';

interface ProblemRecognitionSectionProps {
  onOpenInstall: () => void;
}

export const ProblemRecognitionSection: React.FC<ProblemRecognitionSectionProps> = ({ onOpenInstall }) => {
  return (
    <section className="py-20 sm:py-28 bg-[#FAF5F0] border-t border-[#EFE6DE] relative overflow-hidden">
      
      {/* Background Soft Rose Glow */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-[#F7D8D3]/35 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#BD3A53] mb-3 font-sans">
            <span>De Stille Verwijdering</span>
            <span aria-hidden="true">·</span>
            <span>Waarom we elkaar kwijtraken</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#201A18] tracking-tight mb-6 leading-tight text-balance font-normal">
            Je zit tegenover elkaar aan tafel, <br className="hidden sm:inline" />
            <span className="italic text-[#BD3A53]">maar jullie zijn allebei ergens anders.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#6E625D] leading-relaxed font-normal">
            Het begint met één oplichtend schermpje. Een snelle blik op een melding. Voor je het weet zit je tegenover de persoon die je leuk vindt of van wie je houdt, maar is de echte aandacht verdampt in een zee van notificaties, feeds en fantoomtrillingen.
          </p>
        </div>

        {/* 3 Relatable Pain Points: Schermverslaving & Verbroken Aandacht */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          
          {/* Pain Point 1 */}
          <div className="bg-white border border-[#EFE6DE] rounded-3xl p-8 flex flex-col justify-between shadow-xs hover:border-[#BD3A53]/40 transition-all">
            <div>
              <div className="w-11 h-11 rounded-2xl bg-[#FAF0ED] text-[#BD3A53] flex items-center justify-center font-bold text-sm mb-6">
                <BellOff className="w-5 h-5 text-[#BD3A53]" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#BD3A53] block mb-2 font-sans">
                De verbroken blik
              </span>
              <h3 className="font-serif text-2xl text-[#201A18] mb-3 font-normal">
                Het oplichtende scherm als stoorzender
              </h3>
              <p className="text-xs sm:text-sm text-[#6E625D] leading-relaxed">
                Elke keer dat de telefoon oplicht, wordt het oogcontact verbroken. De ander praat door, maar voelt dat je maar voor de helft luistert. De intimiteit en de chemie sterven op het moment dat de blik naar beneden glijdt.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-[#EFE6DE]/60 text-xs font-semibold text-[#BD3A53]">
              ✦ Voel weer hoe het is om 100% gezien te worden
            </div>
          </div>

          {/* Pain Point 2 */}
          <div className="bg-white border border-[#EFE6DE] rounded-3xl p-8 flex flex-col justify-between shadow-xs hover:border-[#BD3A53]/40 transition-all">
            <div>
              <div className="w-11 h-11 rounded-2xl bg-[#FAF0ED] text-[#BD3A53] flex items-center justify-center font-bold text-sm mb-6">
                <Smartphone className="w-5 h-5 text-[#BD3A53]" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#BD3A53] block mb-2 font-sans">
                Samen en toch alleen
              </span>
              <h3 className="font-serif text-2xl text-[#201A18] mb-3 font-normal">
                De leegte van samen gedachteloos scrollen
              </h3>
              <p className="text-xs sm:text-sm text-[#6E625D] leading-relaxed">
                Niets voelt zo eenzaam als naast elkaar op de bank of tegenover elkaar in een restaurant zitten terwijl jullie beiden opgeslokt worden door een eigen algoritme. Je deelt dezelfde fysieke ruimte, maar mist elkaars aanwezigheid.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-[#EFE6DE]/60 text-xs font-semibold text-[#BD3A53]">
              ✦ Doorbreek de digitale muur tussen jullie
            </div>
          </div>

          {/* Pain Point 3 */}
          <div className="bg-white border border-[#EFE6DE] rounded-3xl p-8 flex flex-col justify-between shadow-xs hover:border-[#BD3A53]/40 transition-all">
            <div>
              <div className="w-11 h-11 rounded-2xl bg-[#FAF0ED] text-[#BD3A53] flex items-center justify-center font-bold text-sm mb-6">
                <Flame className="w-5 h-5 text-[#BD3A53]" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#BD3A53] block mb-2 font-sans">
                Vluchtige prikkels vs. Diepe chemie
              </span>
              <h3 className="font-serif text-2xl text-[#201A18] mb-3 font-normal">
                We zijn verleerd hoe we elkaar écht ontdekken
              </h3>
              <p className="text-xs sm:text-sm text-[#6E625D] leading-relaxed">
                We weten precies wat iemand op social media deelt, maar durven elkaar geen vraag meer te stellen die écht raakt. Een goed gesprek — met spanning, een ontwapenende lach en verwondering — vraagt om oprechte nieuwsgierigheid.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-[#EFE6DE]/60 text-xs font-semibold text-[#BD3A53]">
              ✦ Eén rake vraag ontsteekt het vuur opnieuw
            </div>
          </div>

        </div>

        {/* The Emotional Transformation: Reclaiming Attention */}
        <div className="bg-white border border-[#EFE6DE] rounded-3xl p-8 sm:p-14 shadow-md relative overflow-hidden">
          
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#BD3A53] block mb-3 font-sans">
              Het Terugwinnen van Elkaar
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl text-[#201A18] mb-6 leading-snug font-normal">
              Wat er gebeurt als je de telefoon neerlegt <br className="hidden sm:inline" />
              <span className="italic text-[#BD3A53]">en alle aandacht weer naar elkaar gaat:</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-7 pt-2">
            
            <div className="flex items-start gap-4">
              <div className="w-9 h-9 rounded-xl bg-[#FAF0ED] text-[#BD3A53] flex items-center justify-center shrink-0 mt-0.5 font-bold">
                ✓
              </div>
              <div>
                <strong className="text-sm font-bold text-[#201A18] block mb-1">
                  Onverdeelde aanwezigheid zonder afleiding
                </strong>
                <p className="text-xs text-[#6E625D] leading-relaxed">
                  Geen stiekeme blikken op je scherm. Je voelt direct dat degene tegenover je er voor 100% is — met hoofd, ogen en hart.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-9 h-9 rounded-xl bg-[#FAF0ED] text-[#BD3A53] flex items-center justify-center shrink-0 mt-0.5 font-bold">
                ✓
              </div>
              <div>
                <strong className="text-sm font-bold text-[#201A18] block mb-1">
                  De vonk en spanning van echt oogcontact
                </strong>
                <p className="text-xs text-[#6E625D] leading-relaxed">
                  Elkaar weer tien seconden aankijken zonder weg te kijken. De lach die volgt, de speelse chemie die direct door de ruimte voelbaar is.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-9 h-9 rounded-xl bg-[#FAF0ED] text-[#BD3A53] flex items-center justify-center shrink-0 mt-0.5 font-bold">
                ✓
              </div>
              <div>
                <strong className="text-sm font-bold text-[#201A18] block mb-1">
                  Nieuwe verhalen ontdekken na jaren samen
                </strong>
                <p className="text-xs text-[#6E625D] leading-relaxed">
                  Zelfs over iemand die je door en door dacht te kennen, hoor je ineens dromen, kwetsbaarheden en jeugdherinneringen die je nog nooit wist.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-9 h-9 rounded-xl bg-[#FAF0ED] text-[#BD3A53] flex items-center justify-center shrink-0 mt-0.5 font-bold">
                ✓
              </div>
              <div>
                <strong className="text-sm font-bold text-[#201A18] block mb-1">
                  Herinneringen die je over jaren nog bijblijven
                </strong>
                <p className="text-xs text-[#6E625D] leading-relaxed">
                  Over vijf jaar herinner je je geen enkele Instagram-post of e-mail. Maar wel het gesprek, het gelach en de blik van vanavond.
                </p>
              </div>
            </div>

          </div>

          {/* Direct CTA Bar inside Card */}
          <div className="mt-10 pt-8 border-t border-[#EFE6DE] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-[#6E625D]">
              <strong className="text-[#201A18]">Leg de telefoon vanavond plat op tafel.</strong> Geen app store download vereist.
            </div>
            <button
              onClick={onOpenInstall}
              className="px-7 py-3.5 rounded-2xl text-xs font-semibold text-white bg-[#BD3A53] hover:bg-[#A72D45] transition-all shadow-xs cursor-pointer flex items-center gap-2"
            >
              <Smartphone className="w-4 h-4" />
              <span>Zet op je beginscherm</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
