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
      {/* TODO: change the background color */}
      <div className="bg-ming2">
        <div className="h-60 ml-6 flex items-end text-white">
          <h1 className="text-xl md:text-3xl mb-4 tracking-wider">
            Media - Sermons page
          </h1>
        </div>
      </div>
      <DevelopmentMessage />
    </div>
  );
}
