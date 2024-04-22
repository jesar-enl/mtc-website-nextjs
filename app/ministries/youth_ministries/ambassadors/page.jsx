import DevelopmentMessage from '@/app/components/DevelopmentMessage';

export const metadata = {
  title: 'Ambassadors Ministries - AYM',
  description:
    'These are the ministries that are currently running at MTC. feel free to join and register your child in these ministries for a strong grooming of the child in Christ.',
  icons: '/images/Ambassador_logo.png',
};

export default function AmbassadorsPage() {
  return (
    <div className="bg-gray-100">
      {/* TODO: change the background color */}
      <div className="bg-gradient-to-r from-blue-900 via-gray-300 to-red-900">
        <div className="h-60 ml-6 flex items-end text-white">
          <h1 className="text-xl md:text-3xl mb-4 tracking-wider">
            Ambassadors Ministry
          </h1>
        </div>
      </div>
      <DevelopmentMessage />
    </div>
  );
}
