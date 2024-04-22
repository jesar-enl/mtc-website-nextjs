import DevelopmentMessage from '@/app/components/DevelopmentMessage';
import React from 'react';

export const metadata = {
  title: 'MTC Women Ministries',
  description: 'Find out more about the mighty Women Ministries of MTC.',
};

export default function WomenMinistriesPage() {
  return (
    <div className="bg-gray-100">
      {/* TODO: change the background color */}
      <div className="bg-gradient-to-r from-light-blue-600 to-gray-900">
        <div className="h-60 ml-6 flex items-end text-white">
          <h1 className="text-xl md:text-3xl mb-4 tracking-wider">
            Adventist Women Ministries
          </h1>
        </div>
      </div>
      <DevelopmentMessage />
    </div>
  );
}
