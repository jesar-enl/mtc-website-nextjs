import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import EventsSection from './components/EventsSection';
import GallerySection from './components/GallerySection';
import HeroSection from './components/HeroSection';
import MinistriesSection from './components/MinistriesSection';
import Resources from './components/Resources';
import SermonsSection from './components/SermonsSection';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <MinistriesSection />
      <SermonsSection />
      <ContactSection />
      <EventsSection />
      <GallerySection />
      <Resources />
    </div>
  );
}
