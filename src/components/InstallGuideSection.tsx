import React, { useState } from 'react';
import { Smartphone, Share, PlusSquare, MoreVertical, Check, ArrowRight, ShieldCheck } from 'lucide-react';

interface InstallGuideSectionProps {
  onOpenInstallModal: () => void;
}

export const InstallGuideSection: React.FC<InstallGuideSectionProps> = ({ onOpenInstallModal }) => {
  const [activeTab, setActiveTab] = useState<'ios' | 'android'>('ios');

  return (
    <section id="installeren" className="py-20 sm:py-28 bg-[#FAF5F0] border-t border-[#EFE6DE]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-2 text-xs font-bold tracking-widest uppercase text-[#BD3A53] mb-3 font-sans">
            <span>Progressive Web App</span>
            <span aria-hidden="true">·</span>
            <span>Geen App Store Nodig</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#201A18] tracking-tight mb-4">
            Zet Tussen Ons op je beginscherm
          </h2>
          <p className="text-base sm:text-lg text-[#6E625D] font-normal leading-relaxed text-balance">
            Installeer de app in 10 seconden direct vanuit je browser. Geen account vereist, geen App Store downloads, direct klaar voor jullie date of date night.
          </p>
        </div>

        {/* Interactive Guide Card */}
        <div className="bg-white border border-[#EFE6DE] rounded-3xl p-8 sm:p-12 shadow-xs">
          
          {/* Platform Tab Switcher */}
          <div className="flex items-center justify-center mb-10">
            <div className="flex items-center p-1 bg-[#FAF5F0] rounded-2xl border border-[#EFE6DE]">
              <button
                onClick={() => setActiveTab('ios')}
                className={`px-6 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  activeTab === 'ios'
                    ? 'bg-[#BD3A53] text-white shadow-xs'
                    : 'text-[#6E625D] hover:text-[#201A18]'
                }`}
              >
                 iPhone (Safari)
              </button>
              <button
                onClick={() => setActiveTab('android')}
                className={`px-6 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  activeTab === 'android'
                    ? 'bg-[#BD3A53] text-white shadow-xs'
                    : 'text-[#6E625D] hover:text-[#201A18]'
                }`}
              >
                🤖 Android (Chrome)
              </button>
            </div>
          </div>

          {/* 3 Step Visual Flow */}
          {activeTab === 'ios' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fadeIn">
              
              <div className="p-6 bg-[#FAF5F0] rounded-2xl border border-[#EFE6DE] flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#EFE6DE] text-[#BD3A53] flex items-center justify-center font-bold text-sm mb-4 shadow-2xs">
                    01
                  </div>
                  <h3 className="font-bold text-sm text-[#201A18] mb-2">
                    Open in Safari & tik op Deel
                  </h3>
                  <p className="text-xs text-[#6E625D] leading-relaxed">
                    Tik onderaan op het vierkantje met het pijltje omhoog (<Share className="w-3.5 h-3.5 inline text-[#BD3A53]" />).
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-[#EFE6DE]/60 text-[11px] text-[#6E625D]">
                  Stap 1 van 3
                </div>
              </div>

              <div className="p-6 bg-[#FAF5F0] rounded-2xl border border-[#EFE6DE] flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#EFE6DE] text-[#BD3A53] flex items-center justify-center font-bold text-sm mb-4 shadow-2xs">
                    02
                  </div>
                  <h3 className="font-bold text-sm text-[#201A18] mb-2">
                    Kies &ldquo;Zet op beginscherm&rdquo;
                  </h3>
                  <p className="text-xs text-[#6E625D] leading-relaxed">
                    Scroll in het deelmenu omlaag en selecteer <PlusSquare className="w-3.5 h-3.5 inline text-[#BD3A53]" /> <strong>&ldquo;Zet op beginscherm&rdquo;</strong>.
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-[#EFE6DE]/60 text-[11px] text-[#6E625D]">
                  Stap 2 van 3
                </div>
              </div>

              <div className="p-6 bg-[#FAF5F0] rounded-2xl border border-[#EFE6DE] flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#EFE6DE] text-[#BD3A53] flex items-center justify-center font-bold text-sm mb-4 shadow-2xs">
                    03
                  </div>
                  <h3 className="font-bold text-sm text-[#201A18] mb-2">
                    Tik op &ldquo;Voeg toe&rdquo;
                  </h3>
                  <p className="text-xs text-[#6E625D] leading-relaxed">
                    Het Tussen Ons icoon staat nu direct op je thuisscherm en start zonder browserbalken!
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-[#EFE6DE]/60 text-[11px] font-semibold text-[#BD3A53]">
                  ✓ Klaar voor gebruik
                </div>
              </div>

            </div>
          )}

          {activeTab === 'android' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fadeIn">
              
              <div className="p-6 bg-[#FAF5F0] rounded-2xl border border-[#EFE6DE] flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#EFE6DE] text-[#BD3A53] flex items-center justify-center font-bold text-sm mb-4 shadow-2xs">
                    01
                  </div>
                  <h3 className="font-bold text-sm text-[#201A18] mb-2">
                    Open Chrome Menu
                  </h3>
                  <p className="text-xs text-[#6E625D] leading-relaxed">
                    Tik rechtsboven op de drie puntjes (<MoreVertical className="w-3.5 h-3.5 inline text-[#BD3A53]" />).
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-[#EFE6DE]/60 text-[11px] text-[#6E625D]">
                  Stap 1 van 3
                </div>
              </div>

              <div className="p-6 bg-[#FAF5F0] rounded-2xl border border-[#EFE6DE] flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#EFE6DE] text-[#BD3A53] flex items-center justify-center font-bold text-sm mb-4 shadow-2xs">
                    02
                  </div>
                  <h3 className="font-bold text-sm text-[#201A18] mb-2">
                    Kies &ldquo;App installeren&rdquo;
                  </h3>
                  <p className="text-xs text-[#6E625D] leading-relaxed">
                    Tik op <strong>&ldquo;Toevoegen aan startscherm&rdquo;</strong> of <strong>&ldquo;App installeren&rdquo;</strong>.
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-[#EFE6DE]/60 text-[11px] text-[#6E625D]">
                  Stap 2 van 3
                </div>
              </div>

              <div className="p-6 bg-[#FAF5F0] rounded-2xl border border-[#EFE6DE] flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#EFE6DE] text-[#BD3A53] flex items-center justify-center font-bold text-sm mb-4 shadow-2xs">
                    03
                  </div>
                  <h3 className="font-bold text-sm text-[#201A18] mb-2">
                    Direct geïnstalleerd
                  </h3>
                  <p className="text-xs text-[#6E625D] leading-relaxed">
                    Open de app direct als native ervaring zonder laadtijd of browserkaders.
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-[#EFE6DE]/60 text-[11px] font-semibold text-[#BD3A53]">
                  ✓ Klaar voor gebruik
                </div>
              </div>

            </div>
          )}

          {/* Bottom Action */}
          <div className="mt-10 pt-8 border-t border-[#EFE6DE] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-[#6E625D]">
              <ShieldCheck className="w-4 h-4 text-[#BD3A53]" />
              <span>100% lokaal & privé · Geen advertenties · Altijd direct beschikbaar</span>
            </div>
            <button
              onClick={onOpenInstallModal}
              className="px-6 py-3 rounded-2xl text-xs font-semibold text-white bg-[#BD3A53] hover:bg-[#A72D45] transition-colors shadow-xs cursor-pointer flex items-center gap-2"
            >
              <span>Bekijk stap-voor-stap pop-up</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
