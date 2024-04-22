import DevelopmentMessage from '@/app/components/DevelopmentMessage';

export const metadata = {
  title: 'Adventist Family Ministry - M.T.C',
  description:
    'This is the official page of the Family Life ministry of Masaka Town Church.',
};

export default function FamilyMinistry() {
  return (
    <div className="bg-gray-100">
      <div className="bg-[url('/images/adventistFamily.jpg')] bg-cover bg-no-repeat h-96">
        <div className="relative bg-black bg-opacity-80 h-96 pl-6 flex items-end text-white">
          <h1 className="text-xl md:text-3xl mb-4 tracking-wider">
            Adventist Family Life Ministry
          </h1>
        </div>
      </div>
      <DevelopmentMessage />
    </div>
  );
}
