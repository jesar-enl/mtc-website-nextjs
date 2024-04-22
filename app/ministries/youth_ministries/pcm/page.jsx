import DevelopmentMessage from '@/app/components/DevelopmentMessage';
import React from 'react';

export const metadata = {
  title: 'Public Campus Ministries - AYM',
  description:
    'These are the ministries that are currently running at MTC. feel free to join and register your child in these ministries for a strong grooming of the child in Christ.',
  icons: '/images/pcm-logo.png',
};

export default function PCMPage() {
  return (
    <div className="bg-gray-100">
      {/* TODO: change the background color */}
      <div className="bg-gradient-to-r from-light-blue-400 via-blue-700 to-red-600">
        <div className="h-60 ml-6 flex items-end text-white">
          <h1 className="text-xl md:text-3xl mb-4 tracking-wider">
            Public Campus Ministry
          </h1>
        </div>
      </div>
      <DevelopmentMessage />
    </div>
  );
}
