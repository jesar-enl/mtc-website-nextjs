import DevelopmentMessage from '@/app/components/DevelopmentMessage';
import React from 'react';

export const metadata = {
  title: 'Sabbath School & Personal Ministries',
  description:
    'This is the official page of the Sabbath School & Personal Ministries of Masaka Town Church.',
};

export default function SabbathSchPersonalMinistry() {
  return (
    <div className="bg-gray-100">
      {/* TODO: change the background color */}
      <div className="bg-ming2">
        <div className="h-60 ml-6 flex items-end text-white">
          <h1 className="text-xl md:text-3xl mb-4 tracking-wider">
            Sabbath School & Personal Ministries
          </h1>
        </div>
      </div>
      <DevelopmentMessage />
    </div>
  );
}
