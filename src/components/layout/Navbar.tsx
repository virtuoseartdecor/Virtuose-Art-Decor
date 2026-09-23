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

  const navLinksLeft = [
    { label: 'INÍCIO', href: '/' },
    { label: 'COLEÇÕES', href: '/colecoes' },
    { label: 'EXPERIÊNCIAS', href: '/#mosaic' },
  ];

  const navLinksRight = [
    { label: 'SOBRE A VÍRTUOSE', href: '/#sobre' },
    { label: 'VALORES', href: '/#valores' },
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
          <div className="w-full flex items-center justify-center relative py-0.5">
            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden absolute left-0 p-2 text-[#1c241b] hover:text-[#2d3a27] transition-colors"
              aria-label="Abrir menu principal"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* Center Logo Image with Subtle Scale Physics */}
            <a href="#" className="flex flex-col items-center group py-0.5">
              <img
                src="/images/logo-virtuose.png"
                alt="Vírtuose - Boutique Sensorial"
                className="h-10 sm:h-12 lg:h-14 w-auto object-contain transition-transform duration-500 ease-out group-hover:scale-105 drop-shadow-xs"
                loading="eager"
              />
            </a>
          </div>

          {/* Bottom Row: 100% Centered Navigation Menu Links with UI-Motion */}
          <nav className="hidden lg:flex items-center justify-center gap-8 pt-2 border-t border-[#1c241b]/10 w-full text-[11px] font-sans tracking-[0.24em] uppercase text-[#1c241b]/90 font-medium">
            {[...navLinksLeft, ...navLinksRight].map((link, idx) => (
              <React.Fragment key={link.label}>
                <a
                  href={link.href}
                  className="hover:text-[#1c241b] hover:tracking-[0.28em] transition-all duration-300 relative group py-1"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1.5px] bg-[#9EA88B] transition-all duration-300 group-hover:w-full" />
                </a>
                {idx < navLinksLeft.length + navLinksRight.length - 1 && (
                  <span className="text-[#9EA88B]/60 text-[8px] font-bold">•</span>
                )}
              </React.Fragment>
            ))}
          </nav>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#E8E0D3] text-[#1c241b] pt-24 px-6 pb-12 flex flex-col justify-between overflow-y-auto lg:hidden">
          <div className="space-y-6 text-center">
            {[...navLinksLeft, ...navLinksRight].map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block font-serif text-2xl tracking-widest text-[#1c241b] hover:text-[#9EA88B] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="text-center pt-8 border-t border-[#1c241b]/15">
            <p className="font-serif italic text-[#1c241b] text-lg mb-2">Vírtuose Boutique Sensorial</p>
            <p className="font-sans text-xs text-[#1c241b]/70 tracking-wider">ATENDIMENTO EXCLUSIVO & ATELIÊ</p>
          </div>
        </div>
      )}
    </>
  );
};
