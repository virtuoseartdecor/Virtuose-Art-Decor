import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

export const AnnouncementBar: React.FC = () => {
  return (
    <div className="bg-[#E8E0D3] text-[#1c241b] text-[10px] sm:text-xs tracking-[0.16em] sm:tracking-[0.2em] font-sans uppercase py-2 px-3 sm:px-4 border-b border-[#1c241b]/10 relative z-40">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-x-4 gap-y-1.5 sm:gap-6 flex-wrap font-medium">
        <a
          href="tel:+557121327026"
          className="inline-flex items-center gap-1.5 py-1 px-1.5 text-[#1c241b] hover:text-[#9EA88B] transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#9EA88B]"
          title="Ligar para 71 2132-7026"
        >
          <Phone className="w-3.5 h-3.5 text-[#9EA88B] flex-shrink-0" />
          <span className="text-[#1c241b]/80">TEL:</span>
          <span className="font-semibold text-[#1c241b]">71. 2132-7026</span>
        </a>

        <span className="text-[#9EA88B] text-[10px] font-bold hidden sm:inline" aria-hidden="true">•</span>

        <a
          href="https://wa.me/5571996241487?text=Ol%C3%A1!%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20as%20cole%C3%A7%C3%B5es%20da%20V%C3%ADrtuose."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 py-1 px-1.5 text-[#1c241b] hover:text-[#9EA88B] transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#9EA88B]"
          title="Enviar mensagem no WhatsApp para 71 99624-1487"
        >
          <MessageCircle className="w-3.5 h-3.5 text-[#9EA88B] flex-shrink-0" />
          <span className="text-[#1c241b]/80">WHATSAPP:</span>
          <span className="font-semibold text-[#1c241b]">71. 99624-1487</span>
        </a>
      </div>
    </div>
  );
};
