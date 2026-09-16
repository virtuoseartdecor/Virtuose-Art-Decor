import React from 'react';

export const AnnouncementBar: React.FC = () => {
  return (
    <div className="bg-[#E8E0D3] text-[#1c241b] text-[10px] sm:text-xs tracking-[0.22em] font-sans uppercase py-2.5 px-4 text-center border-b border-[#1c241b]/10 relative z-40 select-none">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 sm:gap-6 flex-wrap font-medium">
        <span>EXPERIÊNCIA SENSORIAL</span>
        <span className="text-[#9EA88B] text-[10px] font-bold">•</span>
        <span>ATENDIMENTO EXCLUSIVO & ATELIÊ</span>
        <span className="text-[#9EA88B] text-[10px] font-bold">•</span>
        <span>CURADORIA AUTORAL</span>
      </div>
    </div>
  );
};
