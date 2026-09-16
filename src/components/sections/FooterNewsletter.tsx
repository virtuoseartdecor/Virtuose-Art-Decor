import React, { useState } from 'react';
import { CheckCircle, Share2, Sparkles } from 'lucide-react';

export const FooterNewsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => {
        setEmail('');
      }, 4000);
    }
  };

  return (
    <footer id="manifesto" className="bg-[#E8E0D3] text-[#1c241b] pt-16 pb-12 border-t border-[#1c241b]/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center pb-12 border-b border-[#1c241b]/10">
          
          {/* Newsletter Box (4 Columns) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-sans text-xs tracking-[0.25em] uppercase font-semibold text-[#1c241b] flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#9EA88B]" />
              RECEBA NOVIDADES EXCLUSIVAS
            </h4>
            <p className="font-sans text-xs text-[#1c241b]/85 font-light leading-relaxed">
              Convites para encontros, edições limitadas e conteúdos inspiradores para transformar o seu cotidiano.
            </p>

            {submitted ? (
              <div className="flex items-center gap-2 bg-[#f7f4ed] text-[#1c241b] p-3 rounded-xs text-xs font-sans border border-[#9EA88B]/30 shadow-xs">
                <CheckCircle className="w-4 h-4 text-[#9EA88B]" />
                <span>Obrigado! Seu e-mail foi registrado com sucesso.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Seu melhor e-mail"
                  required
                  className="bg-[#f7f4ed] border border-[#1c241b]/20 text-[#1c241b] placeholder-[#4f584a]/70 px-4 py-2.5 text-xs font-sans focus:outline-none focus:ring-2 focus:ring-[#9EA88B]/40 focus:border-[#9EA88B] flex-grow shadow-xs transition-all duration-300"
                />
                <button
                  type="submit"
                  className="bg-[#9EA88B] hover:bg-[#8e987b] text-[#1c241b] px-5 py-2.5 text-[11px] font-sans tracking-[0.2em] hover:tracking-[0.24em] font-semibold uppercase transition-all duration-300 shadow-xs hover:shadow-md cursor-pointer"
                >
                  RECEBER
                </button>
              </form>
            )}
          </div>

          {/* Center Brand Quote (5 Columns) */}
          <div className="lg:col-span-5 text-center space-y-3 px-4">
            <p className="font-serif italic text-2xl sm:text-3xl text-[#1c241b] font-light leading-snug">
              "Há casas que apenas existem. E há casas que florescem."
            </p>
            <div className="flex items-center justify-center gap-2 text-[#1c241b]/60">
              <span className="w-6 h-[1px] bg-[#9EA88B]/50" />
              <span className="font-serif italic text-xs tracking-widest text-[#1c241b]/85">Virtuose Sensorial</span>
              <span className="w-6 h-[1px] bg-[#9EA88B]/50" />
            </div>
          </div>

          {/* Social Links (3 Columns) with UI-Motion Hover Physics */}
          <div className="lg:col-span-3 text-center lg:text-right space-y-4">
            <h4 className="font-sans text-xs tracking-[0.25em] uppercase font-semibold text-[#1c241b]">
              SIGA A VIRTUOSE
            </h4>
            <div className="flex items-center justify-center lg:justify-end gap-3 text-[#1c241b]">
              {/* Instagram SVG */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#f7f4ed] hover:bg-[#9EA88B] hover:text-[#1c241b] flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-sm border border-[#9EA88B]/30 text-[#1c241b]"
                aria-label="Instagram da Virtuose"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              {/* Pinterest SVG */}
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#f7f4ed] hover:bg-[#9EA88B] hover:text-[#1c241b] flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-sm border border-[#9EA88B]/30 text-[#1c241b]"
                aria-label="Pinterest da Virtuose"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.217 0-2.361-.633-2.753-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
                </svg>
              </a>
              {/* Share Icon */}
              <button
                onClick={() => navigator.clipboard?.writeText(window.location.href)}
                className="w-9 h-9 rounded-full bg-[#f7f4ed] hover:bg-[#9EA88B] hover:text-[#1c241b] flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-sm border border-[#9EA88B]/30 text-[#1c241b] cursor-pointer"
                aria-label="Compartilhar Virtuose"
                title="Copiar Link"
              >
                <Share2 className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] font-sans font-light text-[#1e291e]/70 gap-4">
          <p>© 2026 Virtuose Boutique Sensorial. Todos os direitos reservados.</p>
          <div className="flex items-center gap-6 tracking-wider">
            <a href="#sobre" className="hover:text-[#1e291e] transition-colors">POLÍTICA DE PRIVACIDADE</a>
            <a href="#sobre" className="hover:text-[#1e291e] transition-colors">TERMOS DE USO</a>
            <a href="#sobre" className="hover:text-[#1e291e] transition-colors">ATELIÊ & CONTATO</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
