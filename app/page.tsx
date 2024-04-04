import Image from 'next/image'
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import CounterSection from './components/CounterSection';
import ServicesSection from './components/ServicesSection';
import SermonsSection from './components/SermonsSection';
import EventsSection from './components/EventsSection';

export default function Home() {
  return (
    <div>      
      <HeroSection />
      <AboutSection />
      <CounterSection />
      <ServicesSection />
      <SermonsSection />
      <EventsSection />      
    </div>
  )
}
