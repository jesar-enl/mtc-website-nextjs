import Link from 'next/link';

export const metadata = {
  title: 'Adventurers Ministries - AYM',
  description:
    'These are the ministries that are currently running at MTC. feel free to join and register your child in these ministries for a strong grooming of the child in Christ.',
  icons: '/images/Adventurer_Logo-1.png',
};

export default function AdventurersMinistriesPage() {
  return (
    <div className="p-8 m-8">
      Adventurers Ministries Page
      <Link
        href="/ministries/youth_ministries"
        className="ml-4 text-ming hover:text-blue-600"
      >
        back
      </Link>
    </div>
  );
}
