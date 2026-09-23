import React, { useState } from 'react';
import { ArrowLeft, Sparkles, ArrowRight } from 'lucide-react';
import { AnnouncementBar } from '../layout/AnnouncementBar';
import { Navbar } from '../layout/Navbar';
import { FooterNewsletter } from '../sections/FooterNewsletter';
import { AudioPlayer } from '../common/AudioPlayer';
import { WhatsAppButton } from '../common/WhatsAppButton';

interface CollectionItem {
  id: string;
  category: 'todas' | 'flores' | 'aromas' | 'mesa' | 'presentes';
  title: string;
  subtitle: string;
  description: string;
  image: string;
  badge: string;
  itemsCount: string;
}

export const ColecoesPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('todas');

  const collections: CollectionItem[] = [
    {
      id: 'flores',
      category: 'flores',
      title: 'Flores & Botânica Autoral',
      subtitle: 'A vida floresce nos detalhes',
      description: 'Arranjos florais exclusivos, folhagens desidratadas e composições orgânicas que trazem a serenidade e o frescor da natureza para o seu refúgio.',
      image: '/images/jardim-secreto.webp',
      badge: 'Curadoria Exclusiva',
      itemsCount: '12 composições',
    },
    {
      id: 'aromas',
      category: 'aromas',
      title: 'Aroma & Bem-Estar',
      subtitle: 'Aroma que acolhe, memória que fica',
      description: 'Velas aromáticas com cera vegetal, home sprays botânicos e difusores de ambiente desenvolvidos em pequenos lotes com notas olfativas acolhedoras.',
      image: '/images/luz-da-alma.webp',
      badge: 'Artesanal & Natural',
      itemsCount: '8 fragrâncias',
    },
    {
      id: 'mesa',
      category: 'mesa',
      title: 'Mesa Posta & Convivência',
      subtitle: 'Cada mesa, um convite ao amor',
      description: 'Louças artesanais, guardanapos em linho puro, jogos americanos texturizados e castiçais para transformar cada refeição em um ritual de afeto.',
      image: '/images/mesa-memoria.webp',
      badge: 'Edição Especial',
      itemsCount: '16 peças',
    },
    {
      id: 'presentes',
      category: 'presentes',
      title: 'Presentes & Afetos',
      subtitle: 'Presentes que contam histórias',
      description: 'Kits personalizados, caixas presenteáveis com acabamento em fita de gorgurão e seleções sensoriais pensadas para emocionar quem você ama.',
      image: '/images/presentes.webp',
      badge: 'Presenteável',
      itemsCount: '10 seleções',
    },
    {
      id: 'rituais',
      category: 'aromas',
      title: 'Rituais de Cuidar',
      subtitle: 'Momentos de pausa e presença',
      description: 'Incensos naturais, sais botânicos e acessórios de autocuidado para desacelerar o ritmo e reconectar corpo, mente e alma ao essencial.',
      image: '/images/rituais-cuidar.webp',
      badge: 'Autocuidado',
      itemsCount: '6 rituais',
    },
    {
      id: 'atelie',
      category: 'flores',
      title: 'Ateliê & Cúpulas de Vidro',
      subtitle: 'Eternizando a delicadeza botânica',
      description: 'Flores eternizadas sob cúpulas de cristal e bases de madeira nobre torneada, feitas à mão para durar gerações com elegância e poesia.',
      image: '/images/brand-story.webp',
      badge: 'Peças Únicas',
      itemsCount: '5 modelos',
    },
  ];

  const filteredCollections = activeCategory === 'todas'
    ? collections
    : collections.filter((c) => c.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#f7f4ed] text-[#1c241b] flex flex-col font-sans selection:bg-[#9ea88b]/40 selection:text-[#1c241b]">
      {/* Announcement Bar & Navbar */}
      <AnnouncementBar />
      <Navbar />

      {/* Main Page Content */}
      <main className="flex-grow pt-12 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb & Return to Home */}
          <div className="mb-8">
            <a
              href="/"
              className="inline-flex items-center gap-2 text-xs font-sans tracking-[0.2em] uppercase font-semibold text-[#1c241b]/70 hover:text-[#1c241b] transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 text-[#9EA88B] transition-transform duration-300 group-hover:-translate-x-1" />
              <span>Voltar à Página Inicial</span>
            </a>
          </div>

          {/* Page Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="font-sans text-xs tracking-[0.3em] uppercase text-[#9EA88B] font-bold flex items-center justify-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#9EA88B]" />
              Catálogo Autoral
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-[#1c241b] tracking-tight">
              Todas as Coleções
            </h1>
            <p className="font-sans text-sm sm:text-base text-[#4f584a] font-light leading-relaxed">
              Cada coleção foi criada para despertar sentimentos únicos. Explore nossa curadoria de flores, aromas, mesa posta e presentes com alma e propósito.
            </p>

            {/* Filter Tabs */}
            <div className="pt-6 flex flex-wrap justify-center gap-2 sm:gap-3">
              {[
                { id: 'todas', label: 'Todas as Coleções' },
                { id: 'flores', label: 'Flores' },
                { id: 'aromas', label: 'Aroma & Bem-Estar' },
                { id: 'mesa', label: 'Mesa Posta' },
                { id: 'presentes', label: 'Presentes' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id)}
                  className={`px-5 py-2.5 rounded-full text-xs font-sans tracking-[0.16em] uppercase font-semibold transition-all duration-300 cursor-pointer ${
                    activeCategory === tab.id
                      ? 'bg-[#9EA88B] text-[#1c241b] shadow-sm'
                      : 'bg-[#E8E0D3]/70 text-[#1c241b]/80 hover:bg-[#E8E0D3] border border-[#9EA88B]/30'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Collections Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCollections.map((col) => (
              <article
                key={col.id}
                className="group bg-[#E8E0D3]/40 rounded-sm overflow-hidden border border-[#9EA88B]/30 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between"
              >
                {/* Image Container */}
                <div className="relative aspect-[4/3] overflow-hidden bg-[#1c241b]">
                  <img
                    src={col.image}
                    alt={col.title}
                    className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-108"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1c241b]/70 via-transparent to-transparent" />
                  
                  {/* Badge */}
                  <span className="absolute top-4 left-4 bg-[#E8E0D3]/95 backdrop-blur-md text-[#1c241b] text-[10px] font-sans tracking-[0.2em] uppercase font-bold px-3 py-1 rounded-xs border border-[#9EA88B]/40 shadow-xs">
                    {col.badge}
                  </span>

                  {/* Items count */}
                  <span className="absolute bottom-3 right-4 text-[#f7f4ed]/90 text-xs font-sans tracking-widest uppercase">
                    {col.itemsCount}
                  </span>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col justify-between flex-grow space-y-4">
                  <div className="space-y-2">
                    <span className="font-serif text-sm italic text-[#9EA88B] block">
                      {col.subtitle}
                    </span>
                    <h2 className="font-serif text-2xl font-light text-[#1c241b] group-hover:text-[#9EA88B] transition-colors duration-300">
                      {col.title}
                    </h2>
                    <p className="font-sans text-xs text-[#4f584a] font-light leading-relaxed">
                      {col.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#9EA88B]/25">
                    <a
                      href="https://wa.me/5571996241487?text=Ol%C3%A1,%20gostaria%20de%20conhecer%20mais%20detalhes%20sobre%20as%20cole%C3%A7%C3%B5es%20da%20V%C3%ADrtuose."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-sans tracking-[0.2em] uppercase font-bold text-[#1c241b] hover:text-[#9EA88B] transition-all duration-300 group/link"
                    >
                      <span>Consultar Curadoria</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#9EA88B] transition-transform duration-300 group-hover/link:translate-x-1.5" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Bottom Banner */}
          <div className="mt-20 p-10 bg-[#E8E0D3] rounded-sm border border-[#9EA88B]/40 text-center space-y-4 shadow-lg">
            <span className="font-serif text-3xl font-light text-[#1c241b] italic block">
              Vírtuose Boutique Sensorial
            </span>
            <p className="font-sans text-xs sm:text-sm text-[#4f584a] max-w-xl mx-auto font-light">
              Deseja um projeto sensorial personalizado para a sua casa ou evento? Nosso ateliê oferece atendimento sob medida.
            </p>
            <div className="pt-2">
              <a
                href="/"
                className="inline-flex items-center gap-3 bg-[#9EA88B] hover:bg-[#8e987b] text-[#1c241b] border border-[#1c241b]/20 px-7 py-3 text-xs tracking-[0.22em] uppercase font-sans font-semibold transition-all duration-300 shadow-md hover:scale-105"
              >
                <span>Retornar ao Início</span>
                <ArrowRight className="w-4 h-4 text-[#1c241b]" />
              </a>
            </div>
          </div>

        </div>
      </main>

      {/* Footer & Floating Controls */}
      <FooterNewsletter />
      <WhatsAppButton />
      <AudioPlayer />
    </div>
  );
};
