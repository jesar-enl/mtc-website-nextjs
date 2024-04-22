import React from 'react'
import DevelopmentMessage from '@/app/components/DevelopmentMessage';

export const metadata = {
  title: '🎧 Sermons - MTC',
  description:
    'All sermons can be found here. You can listen online or download and listen to the gospel offline.',
};

export default function SermonsPage() {
  return (
    <div className="bg-gray-100">
      <div className="bg-[url('/images/sermonsmedia.jpg')] bg-cover bg-no-repeat h-96">
        <div className="relative bg-black bg-opacity-80 h-96 pl-6 flex items-end text-white">
          <h1 className="text-xl md:text-3xl mb-4 tracking-wider">
            Media - Sermons page
          </h1>
        </div>
      </div>
      <DevelopmentMessage />
    </div>
  );
}
