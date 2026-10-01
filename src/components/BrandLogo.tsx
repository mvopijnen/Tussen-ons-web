import React from 'react';

interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'full' | 'icon' | 'mark-only';
  inverted?: boolean;
  className?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  size = 'md',
  variant = 'full',
  inverted = false,
  className = '',
}) => {
  const iconSize = {
    sm: 'w-5 h-5',
    md: 'w-7 h-7',
    lg: 'w-9 h-9',
    xl: 'w-12 h-12',
  }[size];

  const textSize = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl',
    xl: 'text-4xl sm:text-5xl',
  }[size];

  const primaryFill = inverted ? '#FAF5F0' : '#BD3A53';
  const secondaryFill = inverted ? '#E8DED6' : '#201A18';

  const IconSvg = (
    <div className={`${iconSize} rounded-xl bg-[#FAF0ED] border border-[#F5E2DE] flex items-center justify-center shrink-0 shadow-2xs`}>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-4 h-4"
        aria-hidden="true"
      >
        <path
          d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"
          fill={primaryFill}
          stroke={primaryFill}
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );

  if (variant === 'icon') {
    return (
      <div className={`inline-flex items-center justify-center ${className}`}>
        {IconSvg}
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center gap-2.5 tracking-tight group select-none ${className}`}>
      {IconSvg}
      <span
        className={`font-serif ${textSize} font-medium tracking-tight transition-colors duration-200 ${
          inverted ? 'text-[#FAF5F0]' : 'text-[#201A18]'
        }`}
      >
        <span>Tussen</span>
        <span className="inline-block w-2 text-center text-[#BD3A53] opacity-80"> </span>
        <span>Ons</span>
      </span>
    </div>
  );
};
