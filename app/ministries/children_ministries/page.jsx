import DevelopmentMessage from '@/app/components/DevelopmentMessage';
import React from 'react';

export const metadata = {
  title: 'MTC Children Ministries',
  description:
    'Find out more about the Children Ministries in Masaka Town Church.',
};

export default function ChildrenMinistriesPage() {
  return (
    <div className="bg-gray-100">
      {/* TODO: change the background color */}
      <div className="bg-ming">
        <div className="h-60 ml-6 flex items-end text-white">
          <h1 className="text-xl md:text-3xl mb-4 tracking-wider">
            Adventist Children Ministry
          </h1>
        </div>
      </div>
      <DevelopmentMessage />
    </div>
  );
}
