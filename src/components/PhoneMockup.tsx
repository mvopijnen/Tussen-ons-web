import React from 'react';
import { Heart, Sparkles, Users, Home, Layers, ArrowRight, ShieldCheck } from 'lucide-react';

interface PhoneMockupProps {
  screen: 'onboarding' | 'selector';
  className?: string;
}

export const PhoneMockup: React.FC<PhoneMockupProps> = ({ screen, className = '' }) => {
  return (
    <div className={`relative mx-auto w-[290px] sm:w-[320px] rounded-[44px] p-3.5 bg-[#201A18] shadow-2xl ring-1 ring-black/20 ${className}`}>
      
      {/* Top Speaker & Camera Notch */}
      <div className="absolute top-5 left-1/2 -translate-x-1/2 w-24 h-4 bg-[#14100F] rounded-full z-30 flex items-center justify-end px-2">
        <div className="w-2.5 h-2.5 rounded-full bg-[#201A18] border border-white/10" />
      </div>

      {/* Screen Container */}
      <div className="relative w-full h-[580px] sm:h-[620px] rounded-[34px] overflow-hidden bg-[#FAF5F0] text-[#201A18] flex flex-col justify-between p-5 select-none app-atmosphere-bg">
        
        {/* Status Bar */}
        <div className="flex items-center justify-between text-[11px] font-semibold text-[#201A18]/80 pt-1 pb-2">
          <span>02:38</span>
          <div className="flex items-center gap-1.5">
            <span className="text-[10px]">5G</span>
            <div className="w-5 h-2.5 border border-current rounded-xs p-0.5 flex items-center">
              <div className="w-full h-full bg-current rounded-2xs" />
            </div>
          </div>
        </div>

        {/* SCREEN 1: Onboarding (Screenshot 1) */}
        {screen === 'onboarding' && (
          <div className="flex-1 flex flex-col justify-between pt-4 pb-2">
            
            {/* Top Bar */}
            <div className="flex items-center justify-between">
              <span className="font-serif text-lg font-medium text-[#201A18]">
                Tussen Ons
              </span>
              <span className="text-xs text-[#6E625D]">Overslaan</span>
            </div>

            {/* Central Content */}
            <div className="my-auto space-y-4">
              <div className="w-11 h-11 rounded-2xl bg-[#FAF0ED] border border-[#F5E2DE] flex items-center justify-center shadow-2xs">
                <Sparkles className="w-5 h-5 text-[#BD3A53]" />
              </div>

              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#BD3A53] block mb-1 font-sans">
                  Stilte & Verbinding
                </span>
                <h3 className="font-serif text-2xl leading-snug font-normal text-[#201A18]">
                  Betere gesprekken beginnen soms met een goede vraag.
                </h3>
              </div>

              <p className="text-xs text-[#6E625D] leading-relaxed">
                Geen regels, geen puntentelling van winnaars. Alleen echte, onverdeelde aandacht voor degene die tegenover je zit.
              </p>
            </div>

            {/* Bottom Controls */}
            <div className="space-y-3 pt-4">
              <div className="flex items-center gap-1.5">
                <div className="w-6 h-1.5 rounded-full bg-[#BD3A53]" />
                <div className="w-1.5 h-1.5 rounded-full bg-[#E6DDD4]" />
                <div className="w-1.5 h-1.5 rounded-full bg-[#E6DDD4]" />
              </div>

              <button className="w-full py-3.5 rounded-2xl text-xs font-semibold text-white bg-[#BD3A53] shadow-xs flex items-center justify-center gap-1.5">
                <span>Volgende</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        )}

        {/* SCREEN 2: Category Selector (Screenshot 2) */}
        {screen === 'selector' && (
          <div className="flex-1 flex flex-col justify-between pt-2 pb-1 overflow-hidden">
            
            {/* Top Segmented Control */}
            <div className="grid grid-cols-2 gap-2 mb-3">
              <div className="py-1.5 px-2 rounded-xl bg-white border border-[#BD3A53] text-[10px] font-semibold text-[#BD3A53] flex items-center justify-center gap-1 shadow-2xs">
                <span>Zelf samenstellen</span>
              </div>
              <div className="py-1.5 px-2 rounded-xl bg-white border border-[#EFE6DE] text-[10px] font-semibold text-[#6E625D] flex items-center justify-center gap-1">
                <span>🎲 Verras ons</span>
              </div>
            </div>

            {/* Header Text */}
            <div className="mb-2">
              <span className="text-[9px] font-bold uppercase tracking-widest text-[#BD3A53] block font-sans">
                Gezelschap
              </span>
              <h4 className="font-serif text-lg leading-tight font-normal text-[#201A18]">
                Met wie praat jij vandaag?
              </h4>
            </div>

            {/* Category Cards */}
            <div className="space-y-1.5 overflow-hidden">
              
              {/* Favorieten */}
              <div className="bg-white border border-[#EFE6DE] rounded-xl p-2 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-[#FAF0ED] flex items-center justify-center shrink-0">
                    <Heart className="w-3.5 h-3.5 text-[#BD3A53] fill-[#BD3A53]" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1">
                      <span className="text-[11px] font-bold text-[#201A18]">Favorieten</span>
                      <span className="w-3.5 h-3.5 rounded-full bg-[#BD3A53] text-white text-[8px] font-bold flex items-center justify-center">2</span>
                    </div>
                    <span className="text-[9px] text-[#6E625D] block truncate max-w-[170px]">Herbeleef bewaarde vragen</span>
                  </div>
                </div>
                <ArrowRight className="w-3 h-3 text-[#BD3A53]" />
              </div>

              {/* Date (Selected Active) */}
              <div className="bg-white border-2 border-[#BD3A53] rounded-xl p-2 flex items-center justify-between shadow-2xs">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-[#FAF0ED] flex items-center justify-center shrink-0">
                    <Heart className="w-3.5 h-3.5 text-[#BD3A53] fill-[#BD3A53]" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-[#201A18]">Date</div>
                    <span className="text-[9px] text-[#6E625D] block truncate max-w-[170px]">Nieuwsgierig aftasten & chemie</span>
                  </div>
                </div>
                <div className="w-4 h-4 rounded-full border-2 border-[#BD3A53] flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-[#BD3A53]" />
                </div>
              </div>

              {/* Mijn partner */}
              <div className="bg-white border border-[#EFE6DE] rounded-xl p-2 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-[#FAF0ED] flex items-center justify-center shrink-0">
                    <Sparkles className="w-3.5 h-3.5 text-[#BD3A53]" />
                  </div>
                  <div>
                    <div className="text-[11px] font-semibold text-[#201A18]">Mijn partner</div>
                    <span className="text-[9px] text-[#6E625D] block truncate max-w-[170px]">Samen verdiepen & herontdekken</span>
                  </div>
                </div>
                <div className="w-4 h-4 rounded-full border-2 border-[#E2D8CE]" />
              </div>

              {/* Vrienden */}
              <div className="bg-white border border-[#EFE6DE] rounded-xl p-2 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-[#FAF0ED] flex items-center justify-center shrink-0">
                    <Users className="w-3.5 h-3.5 text-[#BD3A53]" />
                  </div>
                  <div>
                    <div className="text-[11px] font-semibold text-[#201A18]">Vrienden & Vriendschap</div>
                    <span className="text-[9px] text-[#6E625D] block truncate max-w-[170px]">Ontwapenende verhalen & gêne laten vallen</span>
                  </div>
                </div>
                <div className="w-4 h-4 rounded-full border-2 border-[#E2D8CE]" />
              </div>

            </div>

            {/* Bottom Button & Privacy */}
            <div className="space-y-2 pt-2">
              <button className="w-full py-2.5 rounded-xl text-xs font-semibold text-white bg-[#BD3A53] shadow-xs flex items-center justify-center gap-1">
                <span>Verder</span>
                <ArrowRight className="w-3 h-3" />
              </button>

              <div className="flex items-center justify-between text-[9px] text-[#6E625D] px-1">
                <div className="flex items-center gap-1">
                  <div className="w-3.5 h-1 rounded-full bg-[#BD3A53]" />
                  <div className="w-1 h-1 rounded-full bg-[#E6DDD4]" />
                  <div className="w-1 h-1 rounded-full bg-[#E6DDD4]" />
                </div>
                <span className="flex items-center gap-1 text-[9px]">
                  <ShieldCheck className="w-3 h-3 text-[#BD3A53]" />
                  100% privé tussen jullie
                </span>
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
