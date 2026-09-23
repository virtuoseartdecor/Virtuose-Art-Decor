import { useLenis } from './hooks/useLenis';
import { AnnouncementBar } from './components/layout/AnnouncementBar';
import { Navbar } from './components/layout/Navbar';
import { HeroSection } from './components/sections/HeroSection';
import { FeatureMosaicSection } from './components/sections/FeatureMosaicSection';
import { BrandStorySection } from './components/sections/BrandStorySection';
import { ValuePropsBar } from './components/sections/ValuePropsBar';
import { FooterNewsletter } from './components/sections/FooterNewsletter';
import { AudioPlayer } from './components/common/AudioPlayer';
import { WhatsAppButton } from './components/common/WhatsAppButton';
import { ColecoesPage } from './components/pages/ColecoesPage';

export function App() {
  // Initialize Lenis smooth scroll synchronized with GSAP ScrollTrigger
  useLenis();

  const isColecoesPage = typeof window !== 'undefined' && 
    (window.location.pathname.includes('/colecoes') || window.location.hash === '#todas-colecoes');

  if (isColecoesPage) {
    return <ColecoesPage />;
  }

  return (
    <div className="min-h-screen bg-[#f7f4ed] text-[#1c241b] flex flex-col font-sans selection:bg-[#9ea88b]/40 selection:text-[#1c241b]">
      {/* Top Banner */}
      <AnnouncementBar />

      {/* Main Navbar Header */}
      <Navbar />

      {/* Main Page Sections */}
      <main className="flex-grow">
        <HeroSection />
        <FeatureMosaicSection />
        <BrandStorySection />
        <ValuePropsBar />
      </main>

      {/* Footer & Newsletter */}
      <FooterNewsletter />

      {/* Floating Concierge WhatsApp Button */}
      <WhatsAppButton />

      {/* Floating Ambient Sound Audio Player */}
      <AudioPlayer />
    </div>
  );
}

export default App;
