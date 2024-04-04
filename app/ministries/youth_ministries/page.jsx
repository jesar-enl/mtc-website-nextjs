import Eventscalendar from '../components/Eventscalendar';
import Gallery from '../components/Gallery';
import Hero from '../components/Hero';
import Welcome from '../components/Welcome';

export const metadata = {
  title: 'Adventist Youth Ministries',
  description:
    'These are the ministries that are currently running at MTC. feel free to join and register your child in these ministries for a strong grooming of the child in Christ.',
  icons: '/images/Adventist Youth logo.png',
};

export default function YouthMinistriesPage() {
  const youth = {
    title: 'Welcome to the',
    title2: 'Youth Ministries',
    title3: 'Masaka Town Church',
    description:
      'This is the ministry that encompasses the ages from 4 - 35 years. These are categorized into the following sectors:',
    category: ['Adventurers', 'Pathfinders', 'Ambassadors', 'PCM', 'Senior Youth', 'Young Adults'],
    image: 'image1',
    image2: '/images/AYM.jpg',
  };
  return (
    <div className="bg-gray-50">
      <Hero data={youth} />
      <Welcome data={youth} />
      <Gallery />
      <Eventscalendar />
    </div>
  );
}
