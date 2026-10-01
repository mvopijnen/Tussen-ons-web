import React, { useState } from 'react';
import { X, Share, PlusSquare, MoreVertical, Smartphone, Check, ArrowRight } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

interface InstallModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const InstallModal: React.FC<InstallModalProps> = ({ isOpen, onClose }) => {
  const [activePlatform, setActivePlatform] = useState<'ios' | 'android'>('ios');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-[#FAF5F0] text-[#201A18] w-full max-w-lg rounded-3xl border border-[#EFE6DE] shadow-2xl flex flex-col overflow-hidden">
        
        {/* Header */}
        <div className="p-6 border-b border-[#EFE6DE] bg-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <BrandLogo size="sm" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#BD3A53] border-l border-[#EFE6DE] pl-3 font-sans">
              Zet op je beginscherm
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-[#FAF5F0] text-[#6E625D] hover:text-[#201A18] transition-colors cursor-pointer"
            aria-label="Sluit installatiegids"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Platform Selector Tabs */}
        <div className="p-4 bg-white border-b border-[#EFE6DE] flex items-center justify-center gap-2">
          <button
            onClick={() => setActivePlatform('ios')}
            className={`px-5 py-2.5 rounded-2xl text-xs font-semibold transition-all cursor-pointer flex items-center gap-2 ${
              activePlatform === 'ios'
                ? 'bg-[#BD3A53] text-white shadow-xs'
                : 'bg-[#FAF5F0] text-[#6E625D] hover:text-[#201A18]'
            }`}
          >
            <span>iPhone (Safari)</span>
          </button>
          <button
            onClick={() => setActivePlatform('android')}
            className={`px-5 py-2.5 rounded-2xl text-xs font-semibold transition-all cursor-pointer flex items-center gap-2 ${
              activePlatform === 'android'
                ? 'bg-[#BD3A53] text-white shadow-xs'
                : 'bg-[#FAF5F0] text-[#6E625D] hover:text-[#201A18]'
            }`}
          >
            <span>Android (Chrome)</span>
          </button>
        </div>

        {/* Body Content */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* iOS Steps */}
          {activePlatform === 'ios' && (
            <div className="space-y-4 animate-fadeIn">
              <div className="flex items-start gap-4 p-4 bg-white rounded-2xl border border-[#EFE6DE]">
                <div className="w-9 h-9 rounded-xl bg-[#FAF0ED] text-[#BD3A53] flex items-center justify-center shrink-0 font-bold text-sm">
                  1
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#201A18] mb-1">
                    Tik op het Deel-icoon in Safari
                  </h4>
                  <p className="text-xs text-[#6E625D] leading-relaxed">
                    Tik onderaan je iPhone-scherm op het vierkantje met het pijltje omhoog (<Share className="w-3.5 h-3.5 inline text-[#BD3A53]" />).
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white rounded-2xl border border-[#EFE6DE]">
                <div className="w-9 h-9 rounded-xl bg-[#FAF0ED] text-[#BD3A53] flex items-center justify-center shrink-0 font-bold text-sm">
                  2
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#201A18] mb-1">
                    Kies &ldquo;Zet op beginscherm&rdquo;
                  </h4>
                  <p className="text-xs text-[#6E625D] leading-relaxed">
                    Scroll iets naar beneden in het menu en tik op <PlusSquare className="w-3.5 h-3.5 inline text-[#BD3A53]" /> <strong>&ldquo;Zet op beginscherm&rdquo;</strong>.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white rounded-2xl border border-[#EFE6DE]">
                <div className="w-9 h-9 rounded-xl bg-[#FAF0ED] text-[#BD3A53] flex items-center justify-center shrink-0 font-bold text-sm">
                  3
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#201A18] mb-1">
                    Tik op &ldquo;Voeg toe&rdquo;
                  </h4>
                  <p className="text-xs text-[#6E625D] leading-relaxed">
                    Tussen Ons staat nu als volwaardige app tussen je apps, zonder browserbalken!
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Android Steps */}
          {activePlatform === 'android' && (
            <div className="space-y-4 animate-fadeIn">
              <div className="flex items-start gap-4 p-4 bg-white rounded-2xl border border-[#EFE6DE]">
                <div className="w-9 h-9 rounded-xl bg-[#FAF0ED] text-[#BD3A53] flex items-center justify-center shrink-0 font-bold text-sm">
                  1
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#201A18] mb-1">
                    Open het Chrome menu
                  </h4>
                  <p className="text-xs text-[#6E625D] leading-relaxed">
                    Tik rechtsboven in Google Chrome op de 3 puntjes (<MoreVertical className="w-3.5 h-3.5 inline text-[#BD3A53]" />).
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white rounded-2xl border border-[#EFE6DE]">
                <div className="w-9 h-9 rounded-xl bg-[#FAF0ED] text-[#BD3A53] flex items-center justify-center shrink-0 font-bold text-sm">
                  2
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#201A18] mb-1">
                    Tik op &ldquo;App installeren&rdquo; of &ldquo;Toevoegen aan startscherm&rdquo;
                  </h4>
                  <p className="text-xs text-[#6E625D] leading-relaxed">
                    Kies <strong>&ldquo;Toevoegen aan startscherm&rdquo;</strong> of <strong>&ldquo;Installeren&rdquo;</strong>.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white rounded-2xl border border-[#EFE6DE]">
                <div className="w-9 h-9 rounded-xl bg-[#FAF0ED] text-[#BD3A53] flex items-center justify-center shrink-0 font-bold text-sm">
                  3
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#201A18] mb-1">
                    Klaar voor gebruik
                  </h4>
                  <p className="text-xs text-[#6E625D] leading-relaxed">
                    Open Tussen Ons direct vanaf je startscherm wanneer jullie samen aan tafel zitten.
                  </p>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Footer CTA */}
        <div className="p-6 border-t border-[#EFE6DE] bg-white flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-[#6E625D]">
            Geen App Store account of download nodig.
          </span>
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-3 rounded-2xl text-xs font-semibold text-white bg-[#BD3A53] hover:bg-[#A72D45] transition-colors shadow-xs cursor-pointer flex items-center justify-center gap-1.5"
          >
            <span>Sluiten</span>
          </button>
        </div>

      </div>
    </div>
  );
};
