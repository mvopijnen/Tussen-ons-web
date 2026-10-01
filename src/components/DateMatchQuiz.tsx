import React, { useState } from 'react';
import { Sparkles, ArrowRight, Heart, Check, Smartphone } from 'lucide-react';

interface DateMatchQuizProps {
  onOpenInstallModal: () => void;
}

const QUIZ_STEPS = [
  {
    id: 'occasion',
    question: 'Wat voor soort moment hebben jullie vanavond?',
    options: [
      { label: 'Eerste of tweede date (ijs breken)', vibe: 'Eerste Date Special', desc: 'Spannend, ontwapenend en licht.' },
      { label: 'Samen op de bank / uit eten (vaste relatie)', vibe: 'Date Night Verdieping', desc: 'Dieper praten, lachen en herontdekken.' },
      { label: 'Weekend weg / vakantie bij kaarslicht', vibe: 'Weekend Weg Pack', desc: 'Tijdloos, intiem en verrassend.' },
      { label: 'Gezellig diner met vrienden of familie', vibe: 'Diner & Groep', desc: 'Gêne opzij en onbedaarlijk lachen.' },
    ],
  },
];

export const DateMatchQuiz: React.FC<DateMatchQuizProps> = ({ onOpenInstallModal }) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  const handleSelect = (idx: number) => {
    setSelectedOption(idx);
    setShowResult(true);
  };

  const handleReset = () => {
    setSelectedOption(null);
    setShowResult(false);
  };

  const activeResult = selectedOption !== null ? QUIZ_STEPS[0].options[selectedOption] : null;

  return (
    <section className="py-20 sm:py-28 bg-[#FAF5F0] border-t border-[#EFE6DE] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-2 text-xs font-bold tracking-widest uppercase text-[#BD3A53] mb-3 font-sans">
            <span>Interactieve Matcher</span>
            <span aria-hidden="true">·</span>
            <span>Vind jullie sfeer in 1 klik</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#201A18] tracking-tight mb-4 font-normal">
            Welk type gesprek past bij jullie avond?
          </h2>
          <p className="text-sm sm:text-base text-[#6E625D] font-normal leading-relaxed text-balance">
            Selecteer jullie moment en ontdek direct welk themapack en welke vraag perfect aansluit bij jullie energie vanavond.
          </p>
        </div>

        <div className="bg-white border border-[#EFE6DE] rounded-3xl p-8 sm:p-12 shadow-xs relative overflow-hidden">
          
          {!showResult ? (
            <div className="space-y-6">
              <h3 className="font-serif text-xl sm:text-2xl text-[#201A18] text-center mb-8 font-normal">
                {QUIZ_STEPS[0].question}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {QUIZ_STEPS[0].options.map((opt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelect(idx)}
                    className="p-6 rounded-2xl border border-[#EFE6DE] hover:border-[#BD3A53] hover:bg-[#FAF0ED]/50 transition-all text-left cursor-pointer group flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-[#BD3A53] block mb-1 font-sans">
                        Optie 0{idx + 1}
                      </span>
                      <div className="font-serif text-lg text-[#201A18] group-hover:text-[#BD3A53] transition-colors mb-2">
                        {opt.label}
                      </div>
                      <p className="text-xs text-[#6E625D]">
                        {opt.desc}
                      </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-[#EFE6DE]/60 flex items-center justify-between text-xs font-semibold text-[#BD3A53]">
                      <span>Kies dit moment</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center space-y-6 animate-fadeIn">
              <div className="w-12 h-12 rounded-2xl bg-[#FAF0ED] text-[#BD3A53] flex items-center justify-center mx-auto text-xl font-bold shadow-2xs">
                ✦
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#BD3A53] block mb-2 font-sans">
                  Jullie Perfecte Match
                </span>
                <h3 className="font-serif text-3xl text-[#201A18] mb-2 font-normal">
                  {activeResult?.vibe}
                </h3>
                <p className="text-sm text-[#6E625D] max-w-md mx-auto mb-6">
                  {activeResult?.desc} Dit pakket is speciaal samengesteld om direct de juiste snaar te raken.
                </p>

                {/* Sample Prompt for this match */}
                <div className="bg-[#FAF5F0] border border-[#EFE6DE] rounded-2xl p-6 max-w-lg mx-auto mb-8 text-center">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#BD3A53] block mb-1 font-sans">
                    Voorbeeldvraag uit dit pack
                  </span>
                  <blockquote className="font-serif text-lg text-[#201A18] italic">
                    &ldquo;Wat is iets dat je de afgelopen maand hebt geleerd, waarvan je wou dat je dat eerder wist?&rdquo;
                  </blockquote>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={onOpenInstallModal}
                  className="px-7 py-3.5 rounded-2xl text-xs font-semibold text-white bg-[#BD3A53] hover:bg-[#A72D45] transition-all shadow-xs cursor-pointer flex items-center gap-2"
                >
                  <Smartphone className="w-4 h-4" />
                  <span>Ontgrendel dit pack op je beginscherm</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={handleReset}
                  className="px-5 py-3.5 rounded-2xl text-xs font-medium text-[#6E625D] hover:text-[#201A18] bg-white border border-[#EFE6DE] transition-colors cursor-pointer"
                >
                  Opnieuw kiezen
                </button>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
