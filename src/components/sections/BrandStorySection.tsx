import React, { useRef } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';

export const BrandStorySection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    gsap.fromTo(
      containerRef.current.children,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.1,
        stagger: 0.25,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
      }
    );
  }, { scope: sectionRef });

  return (
    <section id="sobre" ref={sectionRef} className="py-24 bg-[#E8E0D3] text-[#1c241b] border-b border-[#1c241b]/10 relative overflow-hidden">
      {/* Botanical Foliage Arabesques along the whole section */}
      <div aria-hidden="true" className="absolute -top-12 -left-16 w-[420px] sm:w-[580px] lg:w-[680px] opacity-[0.22] pointer-events-none select-none z-0 transform -rotate-12 scale-x-[-1]">
        <img
          src="/images/bg-folha-verde.webp"
          alt=""
          width="680"
          height="480"
          className="w-full h-auto object-contain"
          loading="lazy"
          decoding="async"
        />
      </div>

      <div aria-hidden="true" className="absolute -bottom-16 -right-20 w-[450px] sm:w-[620px] lg:w-[740px] opacity-[0.24] pointer-events-none select-none z-0 transform rotate-[168deg]">
        <img
          src="/images/bg-folha-verde.webp"
          alt=""
          width="740"
          height="520"
          className="w-full h-auto object-contain"
          loading="lazy"
          decoding="async"
        />
      </div>

      <div aria-hidden="true" className="absolute top-1/2 -left-24 -translate-y-1/2 w-[360px] sm:w-[500px] opacity-[0.14] pointer-events-none select-none z-0 transform rotate-[32deg]">
        <img
          src="/images/bg-folha-verde.webp"
          alt=""
          width="500"
          height="350"
          className="w-full h-auto object-contain"
          loading="lazy"
          decoding="async"
        />
      </div>

      <div aria-hidden="true" className="absolute -top-20 right-1/4 w-[380px] sm:w-[540px] opacity-[0.16] pointer-events-none select-none z-0 transform rotate-[195deg] scale-y-[-1]">
        <img
          src="/images/bg-folha-verde.webp"
          alt=""
          width="540"
          height="380"
          className="w-full h-auto object-contain"
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={containerRef} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          
          {/* Left Narrative Block (7 Columns) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Monogram Crest Emblem with #9EA88B border and UI-Motion Gentle Float */}
            <div className="relative w-20 h-20 rounded-full border-2 border-[#9EA88B] flex items-center justify-center bg-[#f7f4ed] shadow-md animate-float-gentle">
              <span className="font-serif text-3xl text-[#1c241b] font-light italic">V</span>
              <div className="absolute inset-1 rounded-full border border-dashed border-[#9EA88B]/60" />
            </div>

            <span className="font-sans text-xs tracking-[0.3em] uppercase text-[#9EA88B] font-bold flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#9EA88B]" />
              Sobre a Vírtuose
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#1c241b] leading-[1.15]">
              Mais que uma boutique, <span className="italic block font-normal text-[#1c241b]/90">um estilo de vida.</span>
            </h2>

            <p className="font-sans text-sm sm:text-base text-[#1c241b]/85 font-light leading-relaxed">
              A Vírtuose nasceu do desejo profundo de transformar o cotidiano em arte. Selecionamos minuciosamente cada detalhe para que você viva experiências únicas, com beleza, significado e alma.
            </p>

            <div className="pt-2">
              <a
                href="#diferenciais"
                className="inline-flex items-center gap-3 min-h-[44px] py-2 font-sans text-xs tracking-[0.24em] hover:tracking-[0.28em] uppercase font-semibold text-[#1c241b] hover:text-[#9EA88B] transition-all duration-300 group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#9EA88B] rounded-sm"
              >
                <span>CONHEÇA NOSSA HISTÓRIA</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5 text-[#9EA88B]" />
              </a>
            </div>
          </div>

          {/* Right Linen Highlight Card (5 Columns) in Soft-Pastel */}
          <div className="lg:col-span-5">
            <div className="bg-[#f7f4ed] text-[#1c241b] p-8 sm:p-10 rounded-sm shadow-xl space-y-5 border border-[#9EA88B]/25 relative overflow-hidden group transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
              <div className="absolute top-0 right-0 transform translate-x-4 -translate-y-4 text-[#9EA88B]/20 select-none pointer-events-none">
                <span className="font-serif text-8xl font-light italic">V</span>
              </div>

              <span className="font-sans text-[10px] tracking-[0.3em] uppercase font-bold text-[#9EA88B] block">
                EDIÇÕES LIMITADAS
              </span>

              <h3 className="font-serif text-2xl sm:text-3xl font-light leading-snug text-[#1c241b]">
                Produção sensorial em pequena escala.
              </h3>

              <p className="font-sans text-xs sm:text-sm font-normal text-[#4f584a] leading-relaxed">
                Nossas criações são elaboradas em quantidades restritas para preservar a exclusividade, o cuidado manual e a integridade botânica de cada ingrediente.
              </p>

              <div className="pt-2">
                <a
                  href="#experiencias"
                  className="inline-flex items-center gap-2 min-h-[44px] py-2 font-sans text-[10px] tracking-[0.22em] hover:tracking-[0.26em] uppercase font-bold text-[#1c241b] hover:text-[#9EA88B] border-b border-[#9EA88B]/40 pb-1 group-hover:border-[#9EA88B] transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#9EA88B]"
                >
                  <span>CONHECER EXPERIÊNCIAS</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1.5 text-[#9EA88B]" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
