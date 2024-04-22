import React from 'react'
import DevelopmentMessage from '@/app/components/DevelopmentMessage'

export const metadata = {
  title: 'Bulletins - MTC',
  description:
    'Are you anxious of what is to take place this weekend? Or are you looking for what happened last Sabbath? Look no further! Here are the bulletins for the day!',
};

export default function SermonsPage() {
  return (
    <div className="bg-gray-100">
      {/* TODO: change the background color to image */}
      <div className="bg-ming2">
        <div className="h-60 ml-6 flex items-end text-white">
          <h1 className="text-xl md:text-3xl mb-4 tracking-wider">
            Bulletins Page
          </h1>
        </div>
      </div>
      <DevelopmentMessage />
    </div>
  );
}
