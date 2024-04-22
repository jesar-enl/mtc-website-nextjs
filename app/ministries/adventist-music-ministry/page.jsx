import DevelopmentMessage from '@/app/components/DevelopmentMessage';
import React from 'react';

export const metadata = {
  title: 'Adventist Music Ministry - M.T.C',
  description:
    'This is the official page of the Adventist Music ministry of Masaka Town Church.',
};

export default function MusicMinistry() {
  return (
    <div className="bg-gray-100">
      {/* TODO: change the background color */}
      <div className="bg-ming2">
        <div className="h-60 ml-6 flex items-end text-white">
          <h1 className="text-xl md:text-3xl mb-4 tracking-wider">
            Adventist Music Ministry
          </h1>
        </div>
      </div>
      <DevelopmentMessage />
    </div>
  );
}
