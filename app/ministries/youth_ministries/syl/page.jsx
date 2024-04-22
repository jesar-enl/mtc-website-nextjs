import DevelopmentMessage from '@/app/components/DevelopmentMessage';
import Link from 'next/link';

export const metadata = {
  title: 'Pathfinder Ministries - AYM',
  description:
    'These are the ministries that are currently running at MTC. feel free to join and register your child in these ministries for a strong grooming of the child in Christ.',
  icons: '/images/SYL-Logo.jpg',
};

export default function SYLMinistriesPage() {
  return (
    <div className="bg-gray-100">
      {/* TODO: change the background color */}
      <div className="bg-red-900">
        <div className="h-60 ml-6 flex items-end text-white">
          <h1 className="text-xl md:text-3xl mb-4 tracking-wider">
            Senior Youth Leadership Ministry
          </h1>
        </div>
      </div>
      <DevelopmentMessage />
    </div>
  );
}
