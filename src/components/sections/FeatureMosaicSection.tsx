import React, { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';

export const FeatureMosaicSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const pillars = [
    {
      id: 'toque',
      title: 'Sinta o toque dos detalhes',
      description: 'Materiais naturais, acabamentos que acolhem, texturas que encantam.',
      cta: 'SAIBA MAIS',
      image: '/images/jardim-secreto.webp',
    },
    {
      id: 'aromas',
      title: 'Aromas que despertam lembranças',
      description: 'Cada fragrância conta uma história única elaborada em pequenos lotes artesanais.',
      cta: 'CONHECER AROMAS',
      image: '/images/luz-da-alma.webp',
    },
    {
      id: 'sabores',
      title: 'Sabores que trazem conforto',
      description: 'Pequenos prazeres e infusões botânicas que nutrem o corpo e acalmam a mente.',
      cta: 'DESCOBRIR INFUSÕES',
      image: '/images/mesa-memoria.webp',
    },
    {
      id: 'presentes',
      title: 'Presentes que falam por você',
      description: 'Mais que uma peça, um gesto profundo de afeto, carinho e elegância.',
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
    <section id="mosaic" ref={sectionRef} className="py-24 bg-[#f7f4ed] text-[#1c241b] border-b border-[#9ea88b]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
