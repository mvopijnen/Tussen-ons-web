import React from 'react';
import { BrandLogo } from './BrandLogo';
import { Smartphone } from 'lucide-react';

interface HeaderProps {
  onOpenInstallModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenInstallModal,
}) => {
  return (
    <header className="sticky top-0 z-40 w-full bg-[#FAF5F0]/95 backdrop-blur-md border-b border-[#EFE6DE] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-18 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2 group cursor-pointer" aria-label="Tussen Ons Startpagina">
          <BrandLogo size="md" />
        </a>

        {/* Clean Consumer Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-[#6E625D]">
          <a
            href="#probeer-het"
            className="hover:text-[#BD3A53] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#BD3A53] hover:after:w-full after:transition-all whitespace-nowrap"
          >
            Probeer een vraag
          </a>
          <a
            href="#herkenbaar"
            className="hover:text-[#BD3A53] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#BD3A53] hover:after:w-full after:transition-all whitespace-nowrap"
          >
            Herkenbaar?
          </a>
          <a
            href="#hoe-het-werkt"
            className="hover:text-[#BD3A53] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#BD3A53] hover:after:w-full after:transition-all whitespace-nowrap"
          >
            Hoe het werkt
          </a>
          <a
            href="#vibes"
            className="hover:text-[#BD3A53] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#BD3A53] hover:after:w-full after:transition-all whitespace-nowrap"
          >
            Sferen & Diepte
          </a>
          <a
            href="#plus"
            className="hover:text-[#BD3A53] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#BD3A53] hover:after:w-full after:transition-all whitespace-nowrap"
          >
            Tussen Ons Plus
          </a>
          <a
            href="#faq"
            className="hover:text-[#BD3A53] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#BD3A53] hover:after:w-full after:transition-all whitespace-nowrap"
          >
            FAQ
          </a>
        </nav>

        {/* Primary Action Button */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenInstallModal}
            className="px-5 py-2.5 text-xs font-semibold text-white bg-[#BD3A53] hover:bg-[#A72D45] rounded-xl transition-colors whitespace-nowrap shadow-xs cursor-pointer flex items-center gap-1.5"
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span>Zet op beginscherm</span>
          </button>
        </div>

      </div>
    </header>
  );
};
