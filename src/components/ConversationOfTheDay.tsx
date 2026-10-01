import React, { useState } from 'react';
import { Heart, Share2, Check, Sparkles, Lock, Smartphone, ArrowRight } from 'lucide-react';

const TEASER_ITEMS = [
  {
    type: 'Vraag',
    tag: 'Vraag van Vandaag',
    question: 'Wat is iets kleins waardoor jij je direct op je gemak voelt bij iemand?',
    hint: 'Ideaal om het ijs te breken en elkaar te ontspannen.',
  },
  {
    type: 'Dilemma',
    tag: 'Date Dilemma',
    question: 'Zou jij liever willen dat je partner altijd hardop denkt, of dat jullie elkaars gedachten voor één dag kunnen lezen?',
    hint: 'Gegarandeerd onbedaarlijk lachen en onverwachte discussies.',
  },
  {
    type: 'Opdracht',
    tag: 'Spannende Opdracht',
    question: 'Kijk elkaar 10 seconden lang diep in de ogen zonder te praten of te glimlachen. Wie begint als eerste te lachen?',
    hint: 'Brengt de fysieke spanning en chemie direct terug.',
  },
  {
    type: 'Herinnering',
    tag: 'Herinneringsmoment',
    question: 'Wat is een moment van de afgelopen tijd samen waarop je dacht: “Ja, wij passen echt perfect bij elkaar”?',
    hint: 'Haalt warme herinneringen naar boven en verdiept de verbinding.',
  },
];

interface ConversationOfTheDayProps {
  onOpenInstallModal: () => void;
}

export const ConversationOfTheDay: React.FC<ConversationOfTheDayProps> = ({ onOpenInstallModal }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);
  const [likes, setLikes] = useState(248);
  const [copied, setCopied] = useState(false);

  const currentItem = TEASER_ITEMS[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TEASER_ITEMS.length);
  };

  const handleLike = () => {
    if (!hasLiked) {
      setLikes((p) => p + 1);
      setHasLiked(true);
    } else {
      setLikes((p) => p - 1);
      setHasLiked(false);
    }
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(`"${currentItem.question}" — Tussen Ons Voorproefje`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section className="py-20 sm:py-28 bg-[#FAF5F0] border-t border-[#EFE6DE]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-2 text-xs font-bold tracking-widest uppercase text-[#BD3A53] mb-3 font-sans">
            <span>Interactief Voorproefje</span>
            <span aria-hidden="true">·</span>
            <span>Probeer 3 gratis vragen</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#201A18] tracking-tight mb-4 font-normal">
            Ervaar zelf waarom de content het gesprek is
          </h2>
          <p className="text-sm sm:text-base text-[#6E625D] font-normal leading-relaxed text-balance">
            Dit is pas het topje van de ijsberg. Klik door de eerste vragen en dilemma’s. Wil je de overige 500+ vragen ontgrendelen? Zet Tussen Ons op je beginscherm of start Plus.
          </p>
        </div>

        {/* Interactive Free Teaser Card */}
        <div className="bg-white border border-[#EFE6DE] rounded-3xl p-8 sm:p-12 shadow-xs text-center relative overflow-hidden mb-8">
          
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="px-3 py-1 bg-[#FAF0ED] text-[#BD3A53] rounded-full text-[11px] font-bold uppercase tracking-wider font-sans">
              {currentItem.tag} ({currentIndex + 1} van {TEASER_ITEMS.length} gratis voorproefjes)
            </span>
          </div>

          <blockquote className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#201A18] leading-snug tracking-tight mb-4 text-balance max-w-2xl mx-auto font-normal">
            &ldquo;{currentItem.question}&rdquo;
          </blockquote>

          <p className="text-xs text-[#6E625D] mb-8 italic">
            💡 {currentItem.hint}
          </p>

          <div className="flex items-center justify-center gap-3 pt-6 border-t border-[#EFE6DE]/60 flex-wrap">
            <button
              onClick={handleLike}
              className={`flex items-center gap-1.5 px-4 py-2.5 rounded-2xl text-xs font-semibold border transition-colors cursor-pointer ${
                hasLiked
                  ? 'bg-[#FAF0ED] border-[#BD3A53] text-[#BD3A53]'
                  : 'bg-white border-[#EFE6DE] hover:border-[#BD3A53] text-[#201A18]'
              }`}
            >
              <Heart className={`w-3.5 h-3.5 ${hasLiked ? 'fill-[#BD3A53] text-[#BD3A53]' : ''}`} />
              <span>{likes}</span>
            </button>

            <button
              onClick={handleShare}
              className="flex items-center gap-1.5 px-4 py-2.5 rounded-2xl text-xs font-semibold border border-[#EFE6DE] hover:border-[#BD3A53] bg-white text-[#201A18] transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-[#BD3A53]" /> : <Share2 className="w-3.5 h-3.5" />}
              <span>{copied ? 'Gekopieerd!' : 'Deel vraag'}</span>
            </button>

            <button
              onClick={handleNext}
              className="px-5 py-2.5 rounded-2xl text-xs font-semibold text-white bg-[#BD3A53] hover:bg-[#A72D45] transition-colors cursor-pointer shadow-xs flex items-center gap-1.5"
            >
              <span>Volgende gratis vraag</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Locked Teaser Cards Preview (The "Jaaaa dit moet ik hebben" Paywall Hook) */}
        <div className="relative rounded-3xl p-8 bg-white border border-[#EFE6DE] overflow-hidden shadow-xs">
          
          <div className="absolute inset-0 bg-[#FAF5F0]/80 backdrop-blur-xs z-10 flex flex-col items-center justify-center p-6 text-center">
            <div className="w-12 h-12 rounded-2xl bg-[#FAF0ED] text-[#BD3A53] flex items-center justify-center mb-4 shadow-2xs">
              <Lock className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#201A18] mb-2 font-normal">
              De overige 500+ vragen & themapacks staan voor je klaar
            </h3>
            <p className="text-xs sm:text-sm text-[#6E625D] max-w-md mx-auto mb-6 leading-relaxed">
              Van Eerste Date Specials tot Weekend Weg en diepgaande koppelsessies. Ontgrendel alle sferen en start direct op je beginscherm.
            </p>
            <button
              onClick={onOpenInstallModal}
              className="px-8 py-4 rounded-2xl text-xs font-semibold text-white bg-[#BD3A53] hover:bg-[#A72D45] transition-all shadow-sm cursor-pointer flex items-center gap-2"
            >
              <Smartphone className="w-4 h-4" />
              <span>Zet op beginscherm & ontgrendel alles</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Blurred background locked items */}
          <div className="space-y-4 filter blur-xs select-none opacity-40 pointer-events-none">
            <div className="p-5 bg-[#FAF5F0] rounded-2xl border border-[#EFE6DE]">
              <span className="text-[10px] font-bold text-[#BD3A53] uppercase tracking-wider">🔒 Weekend Weg Pack</span>
              <h4 className="font-serif text-lg text-[#201A18] mt-1">&ldquo;Wat is een droom die we samen nog nooit hebben durven uitspreken?&rdquo;</h4>
            </div>
            <div className="p-5 bg-[#FAF5F0] rounded-2xl border border-[#EFE6DE]">
              <span className="text-[10px] font-bold text-[#BD3A53] uppercase tracking-wider">🔒 Eerste Date Chemie</span>
              <h4 className="font-serif text-lg text-[#201A18] mt-1">&ldquo;Wat is de grappigste misvatting die mensen vaak over jou hebben?&rdquo;</h4>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
