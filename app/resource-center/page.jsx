import ResourceComponent from '../components/ResourceComponent';

export const metadata = {
  title: 'Resources - M.T.C',
  description:
    'You can find the resources from various departments. Feel free to search for the differnt resources here.',
};

export default function ResourcesPage() {
  return (
    <div className="bg-gray-100">
      <div className="bg-[url('/images/resourcemedia.jpg')] bg-cover bg-no-repeat h-96">
        <div className="relative bg-black bg-opacity-80 h-96 pl-6 flex items-end text-white">
          <h1 className="text-xl md:text-3xl mb-4 tracking-wider">
            Resource Center
          </h1>
        </div>
      </div>
      <ResourceComponent />
    </div>
  );
}
