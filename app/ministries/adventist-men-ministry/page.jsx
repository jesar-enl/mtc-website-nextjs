import DevelopmentMessage from '@/app/components/DevelopmentMessage';

export const metadata = {
  title: 'Adventist Men Ministry - M.T.C',
  description:
    'This is the official page of the Adventist Men ministry of Masaka Town Church.',
};

export default function MenMinistry() {
  return (
    <div className="bg-gray-100">
      {/* TODO: change the background color */}
      <div className="bg-gradient-to-r from-gray-900 via-gray-200 to-red-600">
        <div className="h-60 ml-6 flex items-end text-white">
          <h1 className="text-xl md:text-3xl mb-4 tracking-wider">
            Adventist Men Ministry
          </h1>
        </div>
      </div>
      <DevelopmentMessage />
    </div>
  );
}
