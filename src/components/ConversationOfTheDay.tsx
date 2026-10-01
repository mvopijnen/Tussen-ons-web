import React, { useState } from 'react';
import { Share2, Check, ArrowRight, Sparkles, Feather, Compass, HeartHandshake } from 'lucide-react';

interface QuestionItem {
  id: string;
  text: string;
  depth: 'luchtig' | 'nieuwsgierig' | 'persoonlijk';
  label: string;
}

const QUESTIONS: Record<'luchtig' | 'nieuwsgierig' | 'persoonlijk', string[]> = {
  luchtig: [
    'Wat is een eigenaardige gewoonte van jezelf die bijna niemand anders ziet?',
    'Welke kleine, onbenullige ergernis vind je stiekem heerlijk om over te klagen?',
    'Als we nu zonder plan in de auto stappen, waar rijden we dan naartoe?',
  ],
  nieuwsgierig: [
    'Wat is iets kleins waardoor jij je direct op je gemak voelt bij iemand?',
    'Welke herinnering van de afgelopen maand tovert meteen een glimlach op je gezicht?',
    'Waarover verander je de laatste tijd langzaam maar zeker van gedachten?',
  ],
  persoonlijk: [
    'Wat is een droom die je al lang met je meedraagt, maar zelden hardop uitspreekt?',
    'Wanneer voelde jij je de afgelopen tijd echt even oprecht gezien?',
    'Wat is iets waarin jij jezelf de afgelopen jaren het meest hebt zien veranderen?',
  ],
};

export const ConversationOfTheDay: React.FC = () => {
  const [currentDepth, setCurrentDepth] = useState<'luchtig' | 'nieuwsgierig' | 'persoonlijk'>('nieuwsgierig');
  const [questionIndices, setQuestionIndices] = useState<Record<string, number>>({
    luchtig: 0,
    nieuwsgierig: 0,
    persoonlijk: 0,
  });
  const [copied, setCopied] = useState(false);

  const activeQuestionList = QUESTIONS[currentDepth];
  const activeIndex = questionIndices[currentDepth];
  const activeQuestion = activeQuestionList[activeIndex % activeQuestionList.length];

  const handleNext = () => {
    setQuestionIndices((prev) => ({
      ...prev,
      [currentDepth]: (prev[currentDepth] + 1) % activeQuestionList.length,
    }));
  };

  const handleSetDepth = (depth: 'luchtig' | 'nieuwsgierig' | 'persoonlijk') => {
    setCurrentDepth(depth);
    setQuestionIndices((prev) => ({
      ...prev,
      [depth]: (prev[depth] + 1) % QUESTIONS[depth].length,
    }));
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(`"${activeQuestion}" — Tussen Ons`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section id="probeer-het" className="py-20 sm:py-28 bg-[#FAF5F0] border-t border-[#EFE6DE] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#EFE6DE] text-xs font-bold uppercase tracking-widest text-[#BD3A53] mb-4 shadow-2xs font-sans">
            <span>Probeer het</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#201A18] tracking-tight mb-4 font-normal">
            Genoeg over Tussen Ons. <br className="hidden sm:inline" />
            <span className="italic text-[#BD3A53]">Probeer het.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#6E625D] font-normal leading-relaxed text-balance">
            Eén vraag kan genoeg zijn om een gesprek een onverwachte kant op te sturen.
          </p>
        </div>

        {/* Card Component */}
        <div className="bg-white border border-[#EFE6DE] rounded-3xl p-8 sm:p-14 shadow-xs text-center relative overflow-hidden transition-all">
          
          {/* Depth Indicator Pill */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FAF0ED] text-[#BD3A53] text-xs font-semibold tracking-wider font-sans">
              {currentDepth === 'luchtig' && <Feather className="w-3.5 h-3.5" />}
              {currentDepth === 'nieuwsgierig' && <Compass className="w-3.5 h-3.5" />}
              {currentDepth === 'persoonlijk' && <HeartHandshake className="w-3.5 h-3.5" />}
              <span className="capitalize">{currentDepth}</span>
            </span>
          </div>

          {/* The Question */}
          <blockquote className="font-serif text-2xl sm:text-4xl text-[#201A18] leading-snug tracking-tight mb-10 text-balance max-w-2xl mx-auto font-normal min-h-[100px] flex items-center justify-center">
            &ldquo;{activeQuestion}&rdquo;
          </blockquote>

          {/* Action Row: Nog één + Iets luchtiger + Iets persoonlijker */}
          <div className="flex items-center justify-center gap-3 pt-6 border-t border-[#EFE6DE]/60 flex-wrap">
            
            {/* Nog één */}
            <button
              onClick={handleNext}
              className="px-6 py-3 rounded-2xl text-xs font-semibold text-white bg-[#BD3A53] hover:bg-[#A72D45] transition-all cursor-pointer shadow-xs flex items-center gap-1.5"
            >
              <span>Nog één</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            {/* Iets luchtiger */}
            <button
              onClick={() => handleSetDepth('luchtig')}
              className={`px-4 py-3 rounded-2xl text-xs font-semibold border transition-all cursor-pointer flex items-center gap-1.5 ${
                currentDepth === 'luchtig'
                  ? 'bg-[#FAF0ED] border-[#BD3A53] text-[#BD3A53]'
                  : 'bg-white border-[#EFE6DE] hover:border-[#BD3A53] text-[#201A18]'
              }`}
            >
              <Feather className="w-3.5 h-3.5 text-[#BD3A53]" />
              <span>Iets luchtiger</span>
            </button>

            {/* Iets persoonlijker */}
            <button
              onClick={() => handleSetDepth('persoonlijk')}
              className={`px-4 py-3 rounded-2xl text-xs font-semibold border transition-all cursor-pointer flex items-center gap-1.5 ${
                currentDepth === 'persoonlijk'
                  ? 'bg-[#FAF0ED] border-[#BD3A53] text-[#BD3A53]'
                  : 'bg-white border-[#EFE6DE] hover:border-[#BD3A53] text-[#201A18]'
              }`}
            >
              <HeartHandshake className="w-3.5 h-3.5 text-[#BD3A53]" />
              <span>Iets persoonlijker</span>
            </button>

            {/* Share / Copy (quietly kept for utility) */}
            <button
              onClick={handleShare}
              className="p-3 rounded-2xl text-xs font-medium border border-[#EFE6DE] hover:border-[#BD3A53] bg-white text-[#6E625D] hover:text-[#201A18] transition-colors cursor-pointer"
              title="Kopieer vraag"
            >
              {copied ? <Check className="w-4 h-4 text-[#BD3A53]" /> : <Share2 className="w-4 h-4" />}
            </button>

          </div>

          {/* Micro text on depth control */}
          <div className="mt-6 text-[11px] text-[#6E625D]">
            Jullie bepalen altijd zelf de diepte van het gesprek.
          </div>

        </div>

      </div>
    </section>
  );
};
