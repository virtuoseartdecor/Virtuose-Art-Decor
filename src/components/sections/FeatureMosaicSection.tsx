import React, { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';

export const FeatureMosaicSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const pillars = [
    {
      id: 'flores',
      title: 'Flores',
      description: 'A vida floresce nos detalhes.',
      cta: 'SAIBA MAIS',
      image: '/images/jardim-secreto.webp',
    },
    {
      id: 'aromas',
      title: 'Aroma e bem-estar',
      description: 'Aroma que acolhe, memória que fica.',
      cta: 'CONHECER AROMAS',
      image: '/images/luz-da-alma.webp',
    },
    {
      id: 'mesa',
      title: 'Mesa posta',
      description: 'Cada mesa, um convite ao amor.',
      cta: 'VER COLEÇÃO',
      image: '/images/mesa-memoria.webp',
    },
    {
      id: 'presentes',
      title: 'Presentes',
      description: 'Presentes que contam histórias.',
      cta: 'VER CURADORIA',
      image: '/images/presentes.webp',
    },
  ];

  useGSAP(() => {
    if (!gridRef.current) return;

    gsap.fromTo(
      gridRef.current.children,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
      }
    );
  }, { scope: sectionRef });

  return (
    <section id="experiencias" ref={sectionRef} className="py-24 bg-[#f7f4ed] text-[#1c241b] border-b border-[#9ea88b]/20 relative">
      <span id="mosaic" className="absolute -top-24 left-0" />
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="font-sans text-xs tracking-[0.3em] uppercase text-[#9EA88B] font-bold block">
            EXPERIÊNCIAS & RITUAIS
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#1c241b] tracking-tight">
            Quatro dimensões para{' '}
            <span className="italic font-normal block sm:inline text-[#384332]">despertar o essencial.</span>
          </h2>
          <p className="font-sans text-xs sm:text-sm text-[#4f584a] font-light leading-relaxed">
            Uma curadoria consciente onde cada objeto e aroma é concebido para transformar a rotina em momentos de presença.
          </p>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {/* Introductory Coleções Card (Left Space) */}
          <div className="relative min-h-[400px] rounded-sm p-8 flex flex-col justify-between border border-[#9EA88B]/40 bg-[#E8E0D3] shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1 group overflow-hidden">
            {/* Ambient Watermark Monogram */}
            <div className="absolute top-2 right-2 text-[#9EA88B]/15 select-none pointer-events-none transition-transform duration-700 group-hover:scale-110">
              <span className="font-serif text-8xl font-light italic">V</span>
            </div>

            <div className="relative z-10 space-y-4">
              <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-[#9EA88B] font-bold block">
                CURADORIA AUTORAL
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl font-light text-[#1c241b] tracking-tight leading-tight">
                Coleções
              </h3>
              <div className="w-10 h-[1.5px] bg-[#9EA88B]/70" />
              <p className="font-sans text-xs sm:text-sm text-[#4f584a] font-light leading-relaxed">
                Cada coleção foi criada para despertar sentimentos únicos.
              </p>
            </div>

            <div className="relative z-10 pt-6 border-t border-[#9EA88B]/35">
              <a
                href="/colecoes"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 text-xs font-sans tracking-[0.2em] hover:tracking-[0.24em] uppercase font-bold text-[#1c241b] hover:text-[#9EA88B] transition-all duration-300 group/btn"
              >
                <span>Ver todas as coleções</span>
                <ArrowRight className="w-4 h-4 text-[#9EA88B] transition-transform duration-300 group-hover/btn:translate-x-1.5" />
              </a>
            </div>
          </div>

          {/* Themed Sensory Cards */}
          {pillars.map((pillar) => (
            <div
              key={pillar.id}
              className="relative group min-h-[400px] rounded-sm overflow-hidden flex flex-col justify-end p-8 border border-[#9EA88B]/30 transition-all duration-500 ease-out hover:border-[#9EA88B]/60 hover:-translate-y-2 shadow-md hover:shadow-[0_22px_45px_rgba(28,36,27,0.14)]"
            >
              {/* Background Image with Organic Vignette */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <img
                  src={pillar.image}
                  alt={pillar.title}
                  className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1c241b] via-[#1c241b]/70 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative z-10 space-y-3 text-[#f7f4ed]">
                <h3 className="font-serif text-2xl font-light leading-snug tracking-wide group-hover:text-[#9EA88B] transition-colors duration-300">
                  {pillar.title}
                </h3>
                <p className="font-sans text-xs text-[#f7f4ed]/85 font-light leading-relaxed">
                  {pillar.description}
                </p>
                <div className="pt-2">
                  <a
                    href="#sobre"
                    className="inline-flex items-center gap-2 text-[10px] font-sans tracking-[0.24em] hover:tracking-[0.28em] uppercase font-semibold text-[#9EA88B] group-hover:text-[#ffffff] transition-all duration-300"
                  >
                    <span>{pillar.cta}</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
