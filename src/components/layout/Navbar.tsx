import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '../../lib/cn';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'HOME', href: '/#inicio' },
    { label: 'SOBRE', href: '/#sobre' },
    { label: 'EXPERIÊNCIAS', href: '/#experiencias' },
    { label: 'COLEÇÕES', href: '/colecoes' },
    { label: 'DIFERENCIAIS', href: '/#diferenciais' },
    { label: 'FALE CONOSCO', href: '/#contato' },
  ];

  return (
    <>
      <header
        className={cn(
          'sticky top-0 z-40 w-full transition-all duration-500 border-b border-[#1c241b]/10',
          isScrolled
            ? 'glass-panel-primary text-[#1c241b] py-2.5 shadow-md'
            : 'bg-[#E8E0D3] text-[#1c241b] py-3.5'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-2">
          {/* Top Row: Perfectly Centered Official Logo */}
          <div className="w-full flex items-center justify-center relative py-0.5 min-h-[44px]">
            {/* Mobile Menu Trigger with >= 48x48px touch target */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden absolute left-0 w-12 h-12 flex items-center justify-center text-[#1c241b] hover:text-[#2d3a27] rounded-full hover:bg-[#1c241b]/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9EA88B]"
              aria-label={mobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav-drawer"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* Center Logo Image with Subtle Scale Physics */}
            <a href="/#inicio" className="flex flex-col items-center group py-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9EA88B] rounded-sm">
              <img
                src="/images/logo-virtuose.png"
                alt="Vírtuose Art Decor — Boutique Sensorial"
                width="160"
                height="56"
                className="h-10 sm:h-12 lg:h-14 w-auto object-contain transition-transform duration-500 ease-out group-hover:scale-105 drop-shadow-xs"
                loading="eager"
                decoding="sync"
              />
            </a>
          </div>

          {/* Bottom Row: 100% Centered Navigation Menu Links with UI-Motion */}
          <nav aria-label="Navegação Principal" className="hidden lg:flex items-center justify-center gap-8 pt-2 border-t border-[#1c241b]/10 w-full text-[11px] font-sans tracking-[0.24em] uppercase text-[#1c241b]/90 font-medium">
            {navLinks.map((link, idx) => (
              <React.Fragment key={link.label}>
                <a
                  href={link.href}
                  className="hover:text-[#1c241b] hover:tracking-[0.28em] transition-all duration-300 relative group py-2 px-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#9EA88B] rounded-sm"
                >
                  {link.label}
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-[1.5px] bg-[#9EA88B] transition-all duration-300 group-hover:w-full" />
                </a>
                {idx < navLinks.length - 1 && (
                  <span className="text-[#9EA88B]/60 text-[8px] font-bold select-none" aria-hidden="true">•</span>
                )}
              </React.Fragment>
            ))}
          </nav>
        </div>
      </header>

      {/* Mobile Drawer Menu with overscroll-contain & body lock */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          role="dialog"
          aria-modal="true"
          aria-label="Menu de Navegação Principal"
          className="fixed inset-0 z-[60] bg-[#E8E0D3] text-[#1c241b] pt-20 px-6 pb-12 flex flex-col justify-between overflow-y-auto overscroll-contain lg:hidden animate-fade-in"
        >
          {/* Header row with Close button in top-right */}
          <div className="flex items-center justify-between pb-6 border-b border-[#1c241b]/10">
            <span className="font-serif italic text-xl text-[#1c241b]">Vírtuose Art Decor</span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="w-12 h-12 flex items-center justify-center text-[#1c241b] hover:text-[#9EA88B] rounded-full hover:bg-[#1c241b]/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9EA88B]"
              aria-label="Fechar menu de navegação"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Links with ergonomic touch targets (min 48px height) */}
          <nav aria-label="Menu Móvel" className="space-y-2 py-8 text-center flex-grow flex flex-col justify-center">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="min-h-[50px] flex items-center justify-center font-serif text-2xl tracking-widest text-[#1c241b] hover:text-[#9EA88B] active:text-[#9EA88B] transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9EA88B]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="text-center pt-6 border-t border-[#1c241b]/15 space-y-2">
            <p className="font-serif italic text-[#1c241b] text-base">Boutique Sensorial & Ateliê</p>
            <div className="flex items-center justify-center gap-4 text-xs font-sans tracking-wider text-[#1c241b]/80">
              <a href="tel:+557121327026" className="py-2 hover:text-[#9EA88B] transition-colors">71. 2132-7026</a>
              <span aria-hidden="true">•</span>
              <a href="https://wa.me/5571996241487" target="_blank" rel="noopener noreferrer" className="py-2 hover:text-[#9EA88B] transition-colors">71. 99624-1487</a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
