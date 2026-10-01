import React, { useState, useEffect, useMemo } from 'react';
import { SAMPLE_QUESTIONS, STAGES, VIBES, THEME_CONFIG } from '../data/conversationData';
import { VibeType, ThemeType, QuestionCard } from '../types';
import { 
  Heart, 
  Sparkles, 
  Users, 
  Home, 
  Layers, 
  Sliders, 
  Shuffle, 
  ArrowRight, 
  Moon, 
  Clock, 
  Share2, 
  Check, 
  ShieldCheck,
  Bookmark
} from 'lucide-react';

interface InteractiveExperienceProps {
  initialStage?: string;
  initialVibe?: VibeType;
}

export const InteractiveExperience: React.FC<InteractiveExperienceProps> = ({
  initialStage = 'datum',
  initialVibe = 'ontdekken',
}) => {
  const [activeMode, setActiveMode] = useState<'custom' | 'direct'>('custom');
  const [selectedStage, setSelectedStage] = useState<string>(initialStage);
  const [selectedVibe, setSelectedVibe] = useState<VibeType>(initialVibe);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isPhoneDownMode, setIsPhoneDownMode] = useState<boolean>(false);
  const [conversationSeconds, setConversationSeconds] = useState<number>(184);
  const [copied, setCopied] = useState<boolean>(false);

  // Map icon component
  const getStageIcon = (iconName?: string) => {
    switch (iconName) {
      case 'Heart': return <Heart className="w-5 h-5 text-[#BD3A53] fill-[#BD3A53]" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-[#BD3A53]" />;
      case 'Users': return <Users className="w-5 h-5 text-[#BD3A53]" />;
      case 'Home': return <Home className="w-5 h-5 text-[#BD3A53]" />;
      case 'Layers': return <Layers className="w-5 h-5 text-[#BD3A53]" />;
      default: return <Sparkles className="w-5 h-5 text-[#BD3A53]" />;
    }
  };

  const availableQuestions = useMemo(() => {
    let list = SAMPLE_QUESTIONS;
    if (selectedVibe !== 'verrassen') {
      list = list.filter((q) => q.vibe === selectedVibe);
    }
    const matched = list.filter((q) => q.stage.includes(selectedStage as any));
    return matched.length > 0 ? matched : SAMPLE_QUESTIONS;
  }, [selectedStage, selectedVibe]);

  const currentQuestion: QuestionCard = availableQuestions[currentIndex % availableQuestions.length] || SAMPLE_QUESTIONS[0];

  useEffect(() => {
    const timer = setInterval(() => {
      setConversationSeconds((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  const handleSurpriseDirect = () => {
    setActiveMode('direct');
    const randomVibes: VibeType[] = ['ontdekken', 'lachen', 'flirten', 'verdiepen'];
    const nextVibe = randomVibes[Math.floor(Math.random() * randomVibes.length)];
    setSelectedVibe(nextVibe);
    setCurrentIndex((prev) => prev + Math.floor(Math.random() * 3) + 1);
  };

  const handleCopy = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(`"${currentQuestion.question}" — Tussen Ons (https://tussenons.app)`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const formatTime = (totalSeconds: number) => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <section id="ervaring" className="relative py-16 sm:py-24 border-t border-[#EFE6DE] bg-[#FAF5F0] overflow-hidden">
      
      {/* Soft Rose Glow Ambience matching app */}
      <div className="absolute top-10 right-0 w-[500px] h-[500px] bg-[#F7D8D3]/45 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-0 w-[450px] h-[450px] bg-[#FAE6E0]/35 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Intro */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-2 text-xs font-bold tracking-widest uppercase text-[#BD3A53] mb-3 font-sans">
            <span>Interactieve App Ervaring</span>
            <span aria-hidden="true">·</span>
            <span>Live Simulator</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#201A18] tracking-tight mb-4">
            Met wie praat jij vandaag?
          </h2>
          <p className="text-base sm:text-lg text-[#6E625D] font-normal leading-relaxed text-balance">
            We stemmen de toon, intensiteit en interacties nauwkeurig af op wie er tegenover je zit.
          </p>
        </div>

        {/* Experience Dual Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: App Screen Navigation exactly as in Screenshot */}
          <div className="lg:col-span-6 space-y-4">
            
            {/* Top Segmented Tabs as in screenshot 2 */}
            <div className="grid grid-cols-2 gap-3 mb-2">
              <button
                onClick={() => setActiveMode('custom')}
                className={`py-3 px-4 rounded-2xl border text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                  activeMode === 'custom'
                    ? 'bg-white border-[#BD3A53] text-[#BD3A53] shadow-xs'
                    : 'bg-white/80 border-[#EFE6DE] text-[#6E625D] hover:bg-white'
                }`}
              >
                <Sliders className="w-4 h-4 text-[#BD3A53]" />
                <span>Zelf samenstellen</span>
              </button>

              <button
                onClick={handleSurpriseDirect}
                className={`py-3 px-4 rounded-2xl border text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                  activeMode === 'direct'
                    ? 'bg-white border-[#BD3A53] text-[#BD3A53] shadow-xs'
                    : 'bg-white/80 border-[#EFE6DE] text-[#6E625D] hover:bg-white'
                }`}
              >
                <Shuffle className="w-4 h-4 text-[#BD3A53]" />
                <span>🎲 Verras ons direct</span>
              </button>
            </div>

            {/* Stage Selector Cards matching IMG_2313.jpeg */}
            <div className="space-y-2.5">
              
              {/* Favorites Card */}
              <div className="bg-white border border-[#EFE6DE] rounded-2xl p-4 flex items-center justify-between shadow-2xs hover:border-[#BD3A53]/40 transition-colors cursor-pointer group">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-2xl bg-[#FAF0ED] flex items-center justify-center shrink-0">
                    <Heart className="w-5 h-5 text-[#BD3A53] fill-[#BD3A53]" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-[#201A18]">Favorieten</span>
                      <span className="w-4 h-4 rounded-full bg-[#BD3A53] text-white text-[10px] font-bold flex items-center justify-center">2</span>
                    </div>
                    <span className="text-xs text-[#6E625D]">Herbeleef of speel direct jullie bewaarde vragen</span>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-[#BD3A53] opacity-60 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Main Stages List */}
              {STAGES.map((stage) => {
                const isSelected = selectedStage === stage.id;
                return (
                  <div
                    key={stage.id}
                    onClick={() => {
                      setSelectedStage(stage.id);
                      setCurrentIndex(0);
                    }}
                    className={`bg-white rounded-2xl p-4 flex items-center justify-between transition-all cursor-pointer shadow-2xs ${
                      isSelected
                        ? 'border-2 border-[#BD3A53] shadow-xs'
                        : 'border border-[#EFE6DE] hover:border-[#BD3A53]/50'
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="w-11 h-11 rounded-2xl bg-[#FAF0ED] flex items-center justify-center shrink-0">
                        {getStageIcon(stage.icon)}
                      </div>
                      <div>
                        <div className="text-sm font-bold text-[#201A18]">{stage.label}</div>
                        <div className="text-xs text-[#6E625D]">{stage.subtext}</div>
                      </div>
                    </div>

                    {/* Radio indicator */}
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center transition-all ${
                      isSelected ? 'border-2 border-[#BD3A53]' : 'border-2 border-[#E2D8CE]'
                    }`}>
                      {isSelected && <div className="w-2.5 h-2.5 rounded-full bg-[#BD3A53]" />}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Quick action button below selector */}
            <button
              onClick={handleNext}
              className="w-full py-4 rounded-2xl text-sm font-semibold text-white bg-[#BD3A53] hover:bg-[#A72D45] transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer mt-2"
            >
              <span>Verder</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Bottom trust footer bar matching screenshot 2 */}
            <div className="flex items-center justify-between pt-2 px-2 text-xs text-[#6E625D]">
              <div className="flex items-center gap-1.5">
                <div className="w-4 h-1.5 rounded-full bg-[#BD3A53]" />
                <div className="w-1.5 h-1.5 rounded-full bg-[#E6DDD4]" />
                <div className="w-1.5 h-1.5 rounded-full bg-[#E6DDD4]" />
                <div className="w-1.5 h-1.5 rounded-full bg-[#E6DDD4]" />
              </div>
              <span className="flex items-center gap-1 text-[11px] font-medium text-[#6E625D]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#BD3A53]" />
                100% privé tussen jullie
              </span>
            </div>

          </div>

          {/* Right Column: The Active Live Conversation Card */}
          <div className="lg:col-span-6 sticky top-24">
            <div className="bg-white border border-[#EFE6DE] rounded-3xl p-6 sm:p-10 shadow-lg relative min-h-[460px] sm:min-h-[500px] flex flex-col justify-between overflow-hidden">
              
              {/* Phone Down Focus Mode Overlay */}
              {isPhoneDownMode && (
                <div className="absolute inset-0 z-30 flex flex-col items-center justify-center p-8 text-center bg-white/98 backdrop-blur-md transition-all duration-500 animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-[#FAF0ED] flex items-center justify-center mb-6 animate-pulse">
                    <Moon className="w-7 h-7 text-[#BD3A53]" />
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#201A18] font-normal mb-3">
                    Telefoon ligt plat op tafel.
                  </h3>
                  <p className="text-sm max-w-sm mb-6 text-[#6E625D] leading-relaxed">
                    Kijk degene tegenover je aan en luister zonder afleiding.
                  </p>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#BD3A53]/20 bg-[#FAF0ED] text-xs font-medium tracking-wide mb-8 text-[#201A18]">
                    <Clock className="w-3.5 h-3.5 text-[#BD3A53]" />
                    <span>Gesprekstijd: {formatTime(conversationSeconds)}</span>
                  </div>
                  <button
                    onClick={() => setIsPhoneDownMode(false)}
                    className="px-6 py-3 rounded-2xl text-xs font-semibold text-white bg-[#BD3A53] hover:bg-[#A72D45] transition-colors shadow-xs cursor-pointer"
                  >
                    Scherm weer activeren
                  </button>
                </div>
              )}

              {/* Card Top Bar */}
              <div className="flex items-center justify-between border-b border-[#EFE6DE] pb-4 mb-4">
                <div className="flex items-center gap-2 text-xs font-semibold">
                  <span className="text-[#BD3A53] uppercase tracking-wider font-sans">
                    {currentQuestion.vibeLabel}
                  </span>
                  <span aria-hidden="true" className="text-[#E6DDD4]">·</span>
                  <span className="text-[#6E625D] font-normal">
                    {STAGES.find(s => s.id === selectedStage)?.label || 'Gesprek'}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopy}
                    aria-label="Kopieer vraag"
                    title="Kopieer vraag"
                    className="p-2 rounded-xl opacity-70 hover:opacity-100 hover:bg-[#FAF0ED] text-[#201A18] transition-all cursor-pointer"
                  >
                    {copied ? <Check className="w-4 h-4 text-[#BD3A53]" /> : <Share2 className="w-4 h-4" />}
                  </button>
                  <button
                    onClick={() => setIsPhoneDownMode(true)}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium border border-[#EFE6DE] hover:border-[#BD3A53] text-[#201A18] hover:bg-[#FAF0ED] transition-all cursor-pointer"
                    title="Dim het scherm en leg de telefoon plat op tafel"
                  >
                    <Moon className="w-3.5 h-3.5 text-[#BD3A53]" />
                    <span className="hidden sm:inline">Telefoon neerleggen</span>
                  </button>
                </div>
              </div>

              {/* Central Question Display in Editorial Serif */}
              <div className="my-auto py-6 sm:py-8">
                <div className="w-9 h-9 rounded-xl bg-[#FAF0ED] flex items-center justify-center mb-4">
                  <Sparkles className="w-4 h-4 text-[#BD3A53]" />
                </div>
                <span className="inline-block text-[11px] uppercase tracking-widest text-[#BD3A53] mb-3 font-bold font-sans">
                  Vraag {currentIndex + 1}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl leading-snug tracking-tight mb-5 font-normal text-[#201A18] text-balance">
                  &ldquo;{currentQuestion.question}&rdquo;
                </h3>
                {currentQuestion.subtext && (
                  <p className="text-sm sm:text-base text-[#6E625D] font-normal italic leading-relaxed">
                    {currentQuestion.subtext}
                  </p>
                )}
              </div>

              {/* Card Footer Actions */}
              <div className="pt-6 border-t border-[#EFE6DE] flex flex-col sm:flex-row items-center justify-between gap-4">
                {/* Conversation metric */}
                <div className="flex items-center gap-2 text-xs text-[#6E625D] font-sans">
                  <div className="w-2 h-2 rounded-full bg-[#BD3A53]" />
                  <span>Actieve gespreksminuten: <strong className="font-mono text-[#201A18]">{formatTime(conversationSeconds)}</strong></span>
                </div>

                {/* Primary navigation buttons */}
                <div className="flex items-center gap-2.5 w-full sm:w-auto">
                  <button
                    onClick={handleSurpriseDirect}
                    className="px-4 py-2.5 rounded-2xl border border-[#EFE6DE] hover:border-[#BD3A53] text-xs font-semibold text-[#201A18] transition-all flex items-center justify-center gap-1.5 flex-1 sm:flex-initial hover:bg-[#FAF0ED] cursor-pointer"
                  >
                    <Shuffle className="w-3.5 h-3.5 text-[#BD3A53]" />
                    <span>Verras ons</span>
                  </button>
                  <button
                    onClick={handleNext}
                    className="px-6 py-2.5 rounded-2xl text-xs font-semibold text-white bg-[#BD3A53] hover:bg-[#A72D45] transition-all flex items-center justify-center gap-2 shadow-xs flex-1 sm:flex-initial cursor-pointer"
                  >
                    <span>Volgende</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>

            {/* Bottom footnote */}
            <div className="mt-4 px-3 flex items-center justify-between text-xs text-[#6E625D]">
              <span>✦ Geen antwoorden worden opgeslagen</span>
              <span className="hidden sm:inline">De app verdwijnt naar de achtergrond</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
