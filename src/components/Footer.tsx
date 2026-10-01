import React from 'react';
import { BrandLogo } from './BrandLogo';
import { ShieldCheck } from 'lucide-react';

interface FooterProps {
  onOpenInstallModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenInstallModal }) => {
  return (
    <footer className="bg-[#FAF5F0] border-t border-[#EFE6DE] py-16 text-[#201A18] relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-10 pb-12 border-b border-[#EFE6DE]">
          
          {/* Brand Info */}
          <div className="max-w-sm space-y-4">
            <BrandLogo size="md" />
            <p className="font-serif text-lg text-[#201A18]/90 italic">
              &ldquo;De juiste vraag. Op het juiste moment.&rdquo;
            </p>
            <p className="text-xs text-[#6E625D] leading-relaxed font-normal">
              Een interactieve gesprekservaring voor twee mensen. Niet om méér op je telefoon te zitten, maar om meer met elkaar te zijn.
            </p>
          </div>

          {/* Nav Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 text-xs">
            <div>
              <span className="font-bold uppercase tracking-wider text-[#BD3A53] block mb-3 font-sans">
                Navigatie
              </span>
              <ul className="space-y-2 text-[#6E625D]">
                <li><a href="#herkenning" className="hover:text-[#BD3A53] transition-colors">Waarom Tussen Ons</a></li>
                <li><a href="#hoe-het-werkt" className="hover:text-[#BD3A53] transition-colors">Hoe het werkt</a></li>
                <li><a href="#vibes" className="hover:text-[#BD3A53] transition-colors">Sferen & Packs</a></li>
                <li><a href="#plus" className="hover:text-[#BD3A53] transition-colors">Plus & Abonnementen</a></li>
              </ul>
            </div>

            <div>
              <span className="font-bold uppercase tracking-wider text-[#BD3A53] block mb-3 font-sans">
                Installatie & Privacy
              </span>
              <ul className="space-y-2 text-[#6E625D]">
                <li><a href="#installeren" className="hover:text-[#BD3A53] transition-colors">Zet op beginscherm</a></li>
                <li><a href="#faq" className="hover:text-[#BD3A53] transition-colors">Veelgestelde Vragen</a></li>
                <li><a href="#privacy" className="hover:text-[#BD3A53] transition-colors">100% Privacybelofte</a></li>
              </ul>
            </div>

            <div>
              <span className="font-bold uppercase tracking-wider text-[#BD3A53] block mb-3 font-sans">
                Direct Starten
              </span>
              <ul className="space-y-2 text-[#6E625D]">
                <li>
                  <button
                    onClick={onOpenInstallModal}
                    className="hover:text-[#BD3A53] transition-colors text-left cursor-pointer font-medium"
                  >
                    Open Web App
                  </button>
                </li>
                <li>Geen App Store vereist</li>
                <li>Werkt op iPhone & Android</li>
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6E625D]">
          <p>© {new Date().getFullYear()} Tussen Ons. Alle rechten voorbehouden.</p>
          <p className="flex items-center gap-1.5 text-center sm:text-right">
            <ShieldCheck className="w-3.5 h-3.5 text-[#BD3A53]" />
            <span>Wat tussen jullie wordt gezegd, blijft tussen jullie.</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
