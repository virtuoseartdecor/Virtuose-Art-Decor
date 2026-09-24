import React, { useRef, useState, useEffect } from 'react';
import { Eye, Flower2, UtensilsCrossed, Sparkles, Volume2, Heart, ArrowRight } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';

export const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const phraseRef = useRef<HTMLParagraphElement>(null);
  const [activeSense, setActiveSense] = useState(0);

  const senses = [
    {
      id: 'visao',
      icon: Eye,
      title: 'VISÃO',
      subtitle: 'que encanta',
      description: 'Cenas compostas por luz suave, arranjos orgânicos e harmonia de formas artesanais.',
    },
    {
      id: 'olfato',
      icon: Flower2,
      title: 'OLFATO',
      subtitle: 'que desperta',
      description: 'Fragrâncias autorais de notas botânicas, resinas preciosas e memórias olfativas.',
    },
    {
      id: 'paladar',
      icon: UtensilsCrossed,
      title: 'PALADAR',
      subtitle: 'que acolhe',
      description: 'Infusões artesanais e pequenos prazeres degustativos que desaceleram o tempo.',
    },
    {
      id: 'tato',
      icon: Sparkles,
      title: 'TATO',
      subtitle: 'que abraça',
      description: 'Texturas de linho puro, cerâmica natural e superfícies que aquecem ao toque.',
    },
    {
      id: 'audicao',
      icon: Volume2,
      title: 'AUDIÇÃO',
      subtitle: 'que acalma',
      description: 'Frequências serenas e a melodia tranquila dos ambientes acolhedores.',
    },
    {
      id: 'emocao',
      icon: Heart,
      title: 'EMOÇÃO',
      subtitle: 'que fica',
      description: 'A sensação duradoura de pertencimento, conforto e propósito em cada detalhe.',
    },
  ];

  // Hero text staggered entrance
  useGSAP(() => {
    if (!textRef.current) return;
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.fromTo(
      textRef.current.children,
      { y: 35, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, stagger: 0.18, delay: 0.2 }
    );
  }, { scope: heroRef });

  // UI-Motion: Smooth fluid transition when active sense changes
  useEffect(() => {
    if (!phraseRef.current) return;
    gsap.fromTo(
      phraseRef.current,
      { opacity: 0, y: 8 },
      { opacity: 1, y: 0, duration: 0.55, ease: 'power2.out' }
    );
  }, [activeSense]);

  return (
    <section id="inicio" ref={heroRef} className="relative min-h-[92vh] flex flex-col justify-between overflow-hidden bg-[#20291d]">
      {/* Parallax Hero Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-bg.webp"
          alt="Ateliê atmosférico da Vírtuose Art Decor com arranjos botânicos, aromas e luz aconchegante"
          width="1920"
          height="1080"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000"
          loading="eager"
          decoding="sync"
          fetchPriority="high"
        />
        {/* Soft Organic Vignette & Gradient Protection */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1c241b]/85 via-[#1c241b]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#E8E0D3]/30 via-transparent to-black/35" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 lg:pt-32 pb-12 w-full flex-grow flex items-center">
        <div ref={textRef} className="max-w-xl text-[#f7f4ed] space-y-6">
          <p className="font-sans text-xs sm:text-sm tracking-[0.3em] uppercase text-[#E8E0D3] font-medium flex items-center gap-2">
            <span className="w-8 h-[1px] bg-[#9EA88B]" />
            Boutique Sensorial & Ateliê
          </p>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl leading-[1.15] font-light tracking-wide drop-shadow-md">
            Beleza que toca a alma
          </h1>

          <p className="font-sans text-sm sm:text-base text-[#f7f4ed]/85 font-light leading-relaxed max-w-md">
            Flores, aromas, objetos e momentos selecionados para uma vida com mais propósito e poesia.
          </p>

          <div className="pt-2">
            <a
              href="#experiencias"
              className="inline-flex items-center justify-center gap-3 bg-[#9EA88B] hover:bg-[#8e987b] text-[#1c241b] border border-[#1c241b]/20 px-7 py-3.5 min-h-[48px] text-xs tracking-[0.24em] hover:tracking-[0.28em] uppercase font-sans font-semibold transition-all duration-300 group shadow-2xl backdrop-blur-md hover:scale-105 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8E0D3]"
            >
              <span>DESCOBRIR A VÍRTUOSE</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Sensory Dimensions Bar (Warm Cashmere #E8E0D3 with #9EA88B Accents) */}
      <div className="relative z-10 bg-[#E8E0D3] text-[#1c241b] border-t border-[#1c241b]/10 py-8 px-4 sm:px-6 lg:px-8 shadow-xl">
        <div className="max-w-6xl mx-auto">
          {/* Active Sense Highlight Description Banner with GSAP Motion */}
          <div className="text-center mb-8 min-h-[64px] sm:min-h-[76px] flex items-center justify-center max-w-3xl mx-auto">
            <p
              ref={phraseRef}
              className="font-serif italic text-xl sm:text-2xl lg:text-3xl text-[#1c241b] font-light leading-snug tracking-wide"
            >
              "{senses[activeSense].description}"
            </p>
          </div>

          {/* Senses Navigation - Clean Typographic & Borderless Minimalist Layout with UI-Motion */}
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 sm:gap-6 pt-2 border-t border-[#1c241b]/10">
            {senses.map((sense, index) => {
              const Icon = sense.icon;
              const isActive = activeSense === index;
              return (
                <button
                  key={sense.id}
                  onClick={() => setActiveSense(index)}
                  className={`flex flex-col items-center justify-center py-3 px-2 sm:px-3 text-center transition-all duration-300 relative group cursor-pointer focus:outline-none min-h-[56px] ${
                    isActive
                      ? 'text-[#1c241b] opacity-100 scale-105'
                      : 'text-[#1c241b]/60 hover:text-[#1c241b] hover:opacity-95 hover:-translate-y-0.5'
                  }`}
                  aria-pressed={isActive}
                  aria-label={`Sentido: ${sense.title} - ${sense.subtitle}`}
                >
                  <Icon
                    className={`w-4 h-4 sm:w-5 sm:h-5 mb-1.5 transition-transform duration-300 group-hover:scale-110 ${
                      isActive ? 'text-[#9EA88B]' : 'text-[#1c241b]/70'
                    }`}
                  />
                  <span className="font-sans text-[11px] sm:text-xs tracking-[0.24em] group-hover:tracking-[0.26em] font-semibold uppercase transition-all duration-300">
                    {sense.title}
                  </span>
                  <span className="font-serif italic text-[10px] sm:text-[11px] text-[#1c241b]/85 mt-0.5">
                    {sense.subtitle}
                  </span>
                  
                  {/* Subtle Minimalist Active Indicator Line in #9EA88B */}
                  <span
                    className={`h-[2.5px] transition-all duration-300 mt-2 rounded-full ${
                      isActive ? 'w-8 bg-[#9EA88B]' : 'w-0 bg-transparent group-hover:w-4 group-hover:bg-[#9EA88B]/40'
                    }`}
                  />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
