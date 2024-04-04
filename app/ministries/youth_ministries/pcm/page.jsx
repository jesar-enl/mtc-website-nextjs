import Link from 'next/link';
import React from 'react';

export const metadata = {
  title: 'Public Campus Ministries - AYM',
  description:
    'These are the ministries that are currently running at MTC. feel free to join and register your child in these ministries for a strong grooming of the child in Christ.',
  icons: '/images/pcm.jpg'
};

export default function PCMPage() {
  return (
    <div className="p-8 m-8">
      Public Campus Ministries Page
      <Link
        href="/ministries/youth_ministries"
        className="ml-4 text-ming hover:text-blue-600"
      >
        back
      </Link>
    </div>
  );
}
