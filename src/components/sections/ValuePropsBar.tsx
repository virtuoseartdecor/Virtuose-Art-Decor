import React, { useRef } from 'react';
import { Sparkles, Compass, Gift, ShieldCheck, MapPin } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';

export const ValuePropsBar: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const props = [
    {
      icon: Sparkles,
      title: 'CURADORIA EXCLUSIVA',
      description: 'Peças selecionadas com olhar apurado e sensível.',
    },
    {
      icon: Compass,
      title: 'PRODUÇÃO ARTESANAL',
      description: 'Feito com tempo, cuidado e intenção consciente.',
    },
    {
      icon: Gift,
      title: 'DESIGN SENSORIAL',
      description: 'Cada detalhe preparado como uma experiência poética.',
    },
    {
      icon: ShieldCheck,
      title: 'ATENDIMENTO PERSONALIZADO',
      description: 'Consultoria e recepção com privacidade e conforto.',
    },
    {
      icon: MapPin,
      title: 'ATELIÊ & ESPAÇO FÍSICO',
      description: 'Receba ou agende uma visita privada ao nosso espaço.',
    },
  ];

  useGSAP(() => {
    if (!gridRef.current) return;
    gsap.fromTo(
      gridRef.current.children,
      { opacity: 0, y: 30, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.85,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 82%',
        },
      }
    );
  }, { scope: sectionRef });

  return (
    <section id="valores" ref={sectionRef} className="bg-[#f7f4ed] text-[#1c241b] py-18 border-t border-b border-[#9ea88b]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {props.map((prop, idx) => {
            const Icon = prop.icon;
            return (
              <div key={idx} className="flex flex-col items-center text-center space-y-3 group cursor-default">
                <div className="w-13 h-13 rounded-full bg-[#9ea88b]/20 border border-[#9ea88b]/40 flex items-center justify-center text-[#1c241b] group-hover:scale-115 group-hover:bg-[#9ea88b] group-hover:text-[#1c241b] transition-all duration-500 ease-out shadow-xs group-hover:shadow-md">
                  <Icon className="w-5 h-5 transition-transform duration-500 group-hover:rotate-6" />
                </div>
                <h4 className="font-sans text-[11px] tracking-[0.2em] group-hover:tracking-[0.24em] font-semibold uppercase text-[#1c241b] transition-all duration-300">
                  {prop.title}
                </h4>
                <p className="font-sans text-xs font-normal text-[#4f584a] max-w-[200px] leading-relaxed">
                  {prop.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
