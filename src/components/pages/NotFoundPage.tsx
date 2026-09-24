import React from 'react';
import { Home, Sparkles, MessageCircle } from 'lucide-react';
import { AnnouncementBar } from '../layout/AnnouncementBar';
import { Navbar } from '../layout/Navbar';
import { FooterNewsletter } from '../sections/FooterNewsletter';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#f7f4ed] text-[#1c241b] flex flex-col font-sans selection:bg-[#9ea88b]/40 selection:text-[#1c241b]">
      {/* Top Banner & Header */}
      <AnnouncementBar />
      <Navbar />

      {/* Main 404 Sensory Hero Content */}
      <main className="flex-grow flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Subtle Background Foliage Watermark */}
        <div aria-hidden="true" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-[0.06] select-none pointer-events-none">
          <img
            src="/images/bg-folha-verde.webp"
            alt=""
            width="600"
            height="600"
            className="w-full h-full object-contain"
            loading="lazy"
          />
        </div>

        <div className="max-w-2xl mx-auto text-center space-y-6 relative z-10">
          {/* Brand Emblem */}
          <div className="w-20 h-20 mx-auto rounded-full border-2 border-[#9EA88B] flex items-center justify-center bg-[#E8E0D3] shadow-md animate-float-gentle">
            <span className="font-serif text-3xl text-[#1c241b] font-light italic">V</span>
          </div>

          <span className="font-sans text-xs tracking-[0.3em] uppercase text-[#9EA88B] font-bold flex items-center justify-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-[#9EA88B]" />
            Página Não Encontrada • 404
          </span>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-[#1c241b] tracking-tight leading-[1.15]">
            A beleza permanece, <span className="italic block sm:inline font-normal text-[#384332]">mas este caminho se desfez.</span>
          </h1>

          <p className="font-sans text-sm sm:text-base text-[#4f584a] font-light leading-relaxed max-w-lg mx-auto">
            Assim como um aroma sutil que se dissipa com a brisa, a página que você procura não está mais neste endereço ou nunca existiu.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#9EA88B] hover:bg-[#8e987b] text-[#1c241b] border border-[#1c241b]/20 px-8 py-3.5 min-h-[48px] text-xs tracking-[0.22em] uppercase font-sans font-semibold transition-all duration-300 shadow-md hover:scale-105 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1c241b]"
            >
              <Home className="w-4 h-4 text-[#1c241b]" />
              <span>Voltar ao Início</span>
            </a>

            <a
              href="/colecoes"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#E8E0D3] hover:bg-[#dfd5c5] text-[#1c241b] border border-[#9EA88B]/40 px-6 py-3.5 min-h-[48px] text-xs tracking-[0.2em] uppercase font-sans font-semibold transition-all duration-300 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9EA88B]"
            >
              <span>Explorar Coleções</span>
            </a>

            <a
              href="https://wa.me/5571996241487?text=Ol%C3%A1!%20Estava%20navegando%20no%20site%20da%20V%C3%ADrtuose%20e%20preciso%20de%20ajuda%20para%20encontrar%20uma%20p%C3%A1gina."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-xs font-sans tracking-[0.18em] uppercase font-semibold text-[#1c241b]/80 hover:text-[#9EA88B] min-h-[48px] py-2 transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-[#9EA88B]" />
              <span>Concierge WhatsApp</span>
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <FooterNewsletter />
    </div>
  );
};
