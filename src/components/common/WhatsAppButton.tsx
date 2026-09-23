import React from 'react';
import { MessageCircle } from 'lucide-react';

export const WhatsAppButton: React.FC = () => {
  return (
    <div className="fixed bottom-22 right-6 z-50">
      <a
        href="https://wa.me/5571996241487?text=Ol%C3%A1!%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20as%20cole%C3%A7%C3%B5es%20e%20atendimento%20da%20V%C3%ADrtuose."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Atendimento via WhatsApp"
        title="Fale Conosco pelo WhatsApp da Vírtuose (71 99624-1487)"
        className="group relative flex items-center gap-3 bg-[#E8E0D3]/95 backdrop-blur-xl border border-[#9EA88B]/40 text-[#1c241b] px-4.5 py-3 rounded-full shadow-[0_15px_35px_rgba(28,36,27,0.12)] transition-all duration-500 hover:scale-105 hover:bg-[#E8E0D3] hover:border-[#9EA88B] cursor-pointer"
      >
        <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-[#9EA88B]/20 text-[#1c241b] transition-transform duration-300 group-hover:scale-110">
          <MessageCircle className="w-4 h-4 text-[#1c241b]" />
          {/* Pulsing Boutique Online Indicator */}
          <span className="absolute top-0 right-0 w-2.5 h-2.5 rounded-full bg-[#9EA88B] border-2 border-[#E8E0D3] animate-pulse" />
        </span>

        <span className="font-sans text-xs tracking-[0.2em] uppercase font-semibold hidden sm:inline-block text-[#1c241b]">
          WhatsApp
        </span>
      </a>
    </div>
  );
};
