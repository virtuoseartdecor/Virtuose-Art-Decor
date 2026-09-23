import React from 'react';
import { Phone, Mail, MapPin, ExternalLink, Share2 } from 'lucide-react';

export const FooterNewsletter: React.FC = () => {
  return (
    <footer id="contato" className="bg-[#E8E0D3] text-[#1c241b] pt-16 pb-12 border-t border-[#1c241b]/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid: 3 Balanced Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-[#1c241b]/10">
          
          {/* Column 1: Fale Conosco & Atendimento (4 Columns) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="space-y-1">
              <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-[#9EA88B] font-bold block">
                ATENDIMENTO & CONCIERGE
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#1c241b] tracking-wide">
                Fale conosco
              </h3>
            </div>

            <p className="font-sans text-xs text-[#1c241b]/80 font-light leading-relaxed">
              Dúvidas sobre nossas peças, pedidos sob medida ou curadoria para o seu espaço. Será um prazer acolher você.
            </p>

            {/* Dialers */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#f7f4ed] border border-[#9EA88B]/40 flex items-center justify-center flex-shrink-0 text-[#1c241b] mt-0.5 shadow-xs">
                  <Phone className="w-3.5 h-3.5 text-[#9EA88B]" />
                </div>
                <div className="space-y-0.5">
                  <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-[#1c241b]/60 font-semibold block">
                    Telefone & Atendimento
                  </span>
                  <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-sans font-medium text-[#1c241b]">
                    <a
                      href="tel:+557121327026"
                      className="hover:text-[#9EA88B] hover:underline underline-offset-4 transition-colors"
                      title="Ligar para 71 2132-7026"
                    >
                      71. 2132-7026
                    </a>
                    <span className="text-[#9EA88B] font-bold">|</span>
                    <a
                      href="tel:+5571996241487"
                      className="hover:text-[#9EA88B] hover:underline underline-offset-4 transition-colors"
                      title="Ligar para 71 99624-1487"
                    >
                      71. 99624-1487
                    </a>
                  </div>
                </div>
              </div>

              {/* Mailto */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#f7f4ed] border border-[#9EA88B]/40 flex items-center justify-center flex-shrink-0 text-[#1c241b] mt-0.5 shadow-xs">
                  <Mail className="w-3.5 h-3.5 text-[#9EA88B]" />
                </div>
                <div className="space-y-0.5">
                  <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-[#1c241b]/60 font-semibold block">
                    E-mail
                  </span>
                  <a
                    href="mailto:falecom@virtuoseartdecor.com.br"
                    className="block text-xs sm:text-sm font-sans font-medium text-[#1c241b] hover:text-[#9EA88B] hover:underline underline-offset-4 transition-colors break-all"
                    title="Enviar e-mail para falecom@virtuoseartdecor.com.br"
                  >
                    falecom@virtuoseartdecor.com.br
                  </a>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#f7f4ed] hover:bg-[#9EA88B] hover:text-[#1c241b] flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-sm border border-[#9EA88B]/30 text-[#1c241b]"
                aria-label="Instagram da Vírtuose"
                title="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#f7f4ed] hover:bg-[#9EA88B] hover:text-[#1c241b] flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-sm border border-[#9EA88B]/30 text-[#1c241b]"
                aria-label="Pinterest da Vírtuose"
                title="Pinterest"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.217 0-2.361-.633-2.753-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
                </svg>
              </a>
              <button
                onClick={() => navigator.clipboard?.writeText(window.location.href)}
                className="w-9 h-9 rounded-full bg-[#f7f4ed] hover:bg-[#9EA88B] hover:text-[#1c241b] flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-sm border border-[#9EA88B]/30 text-[#1c241b] cursor-pointer"
                aria-label="Compartilhar Vírtuose"
                title="Copiar Link"
              >
                <Share2 className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Column 2: Endereço & Visitação (4 Columns) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="space-y-1">
              <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-[#9EA88B] font-bold block">
                LOCALIZAÇÃO & ATELIÊ
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#1c241b] tracking-wide">
                Nosso Endereço
              </h3>
            </div>

            <div className="p-6 rounded-sm bg-[#f7f4ed] border border-[#9EA88B]/30 space-y-3 shadow-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#9EA88B] flex-shrink-0 mt-1" />
                <div className="space-y-1 text-xs sm:text-sm font-sans text-[#1c241b]/90 leading-relaxed">
                  <p className="font-semibold text-[#1c241b]">
                    Rua Professor Sabino Silva, 836 Loja 207
                  </p>
                  <p>
                    Piso L2 - Apipema Center | Ondina
                  </p>
                  <p className="text-[#1c241b]/80">
                    Salvador - Bahia - CEP.: 40.169-610
                  </p>
                </div>
              </div>

              <div className="pt-2 border-t border-[#9EA88B]/20">
                <a
                  href="https://maps.google.com/?q=Rua+Professor+Sabino+Silva+836+Apipema+Center+Ondina+Salvador+BA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[11px] font-sans tracking-[0.18em] uppercase font-bold text-[#1c241b] hover:text-[#9EA88B] transition-colors group/map"
                >
                  <span>Abrir no Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#9EA88B] transition-transform duration-300 group-hover/map:translate-x-1" />
                </a>
              </div>
            </div>

            <p className="font-serif italic text-base sm:text-lg text-[#1c241b]/90 font-light leading-snug pt-1">
              "Há casas que apenas existem. E há casas que florescem."
            </p>
          </div>

          {/* Column 3: Mapa Harmonizado (4 Columns) */}
          <div className="lg:col-span-4 space-y-3">
            <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-[#9EA88B] font-bold block">
              COMO CHEGAR
            </span>
            <div className="relative rounded-sm overflow-hidden border-2 border-[#9EA88B]/40 shadow-md bg-[#f7f4ed] group aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:h-[260px]">
              <iframe
                title="Localização Vírtuose Art Decor - Apipema Center Ondina Salvador"
                src="https://maps.google.com/maps?q=Rua+Professor+Sabino+Silva+836+Apipema+Center+Ondina+Salvador+BA&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full filter saturate-[80%] contrast-[95%] sepia-[12%] group-hover:filter-none transition-all duration-700"
              />
              <div className="absolute top-2 right-2 pointer-events-none">
                <span className="bg-[#E8E0D3]/95 backdrop-blur-md text-[#1c241b] text-[9px] font-sans tracking-[0.2em] uppercase font-bold px-2 py-0.5 rounded-xs border border-[#9EA88B]/40 shadow-xs">
                  Apipema Center
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] font-sans font-light text-[#1c241b]/70 gap-4">
          <p>© 2026 Vírtuose Art Decor • Boutique Sensorial. Todos os direitos reservados.</p>
          <div className="flex items-center gap-6 tracking-wider">
            <a href="/#sobre" className="hover:text-[#1c241b] transition-colors">SOBRE</a>
            <a href="/colecoes" className="hover:text-[#1c241b] transition-colors">COLEÇÕES</a>
            <a href="#contato" className="hover:text-[#1c241b] transition-colors">ATELIÊ & CONTATO</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
