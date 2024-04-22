import DevelopmentMessage from '@/app/components/DevelopmentMessage';
import React from 'react';

export const metadata = {
  title: 'Adventist Health Ministry - M.T.C',
  description:
    'This is the official page of the Adventist Health ministry of Masaka Town Church.',
};

export default function HealthMinistry() {
  return (
    <div className="bg-gray-100">
      <div className="bg-[url('/images/health2.jpg')] bg-cover bg-no-repeat h-96">
        
      </div>
      <DevelopmentMessage />
    </div>
  );
}
