import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

export const AnnouncementBar: React.FC = () => {
  return (
    <div className="bg-[#E8E0D3] text-[#1c241b] text-[10px] sm:text-xs tracking-[0.2em] font-sans uppercase py-2 px-4 border-b border-[#1c241b]/10 relative z-40 select-none">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-3 sm:gap-6 flex-wrap font-medium">
        <div className="flex items-center gap-1.5">
          <Phone className="w-3 h-3 text-[#9EA88B]" />
          <span className="text-[#1c241b]/80">TELEFONE:</span>
          <a
            href="tel:+557121327026"
            className="font-semibold text-[#1c241b] hover:text-[#9EA88B] transition-colors"
            title="Ligar para 71 2132-7026"
          >
            71. 2132-7026
          </a>
        </div>

        <span className="text-[#9EA88B] text-[10px] font-bold hidden sm:inline">•</span>

        <div className="flex items-center gap-1.5">
          <MessageCircle className="w-3 h-3 text-[#9EA88B]" />
          <span className="text-[#1c241b]/80">WHATSAPP:</span>
          <a
            href="https://wa.me/5571996241487?text=Ol%C3%A1!%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20as%20cole%C3%A7%C3%B5es%20da%20V%C3%ADrtuose."
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-[#1c241b] hover:text-[#9EA88B] transition-colors"
            title="Enviar mensagem no WhatsApp para 71 99624-1487"
          >
            71. 99624-1487
          </a>
        </div>
      </div>
    </div>
  );
};
