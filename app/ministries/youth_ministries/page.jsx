import Departments from './components/Departments';
import Eventscalendar from './components/Eventscalendar';
import Gallery from './components/Gallery';
import Hero from './components/Hero';
import Resources from './components/Resources';
import Welcome from './components/Welcome';

export const metadata = {
  title: 'Adventist Youth Ministries',
  description:
    'These are the ministries that are currently running at MTC. feel free to join and register your child in these ministries for a strong grooming of the child in Christ.',
  icons: '/images/AY-logo.png',
};

export default function YouthMinistriesPage() {
  const youth = {
    image2: '/images/AYM.jpg',
  };
  return (
    <div className="bg-gray-50">
      <Hero />
      <Welcome data={youth} />
      <Departments />
      <Resources />
      <Gallery />
      <Eventscalendar />
    </div>
  );
}
