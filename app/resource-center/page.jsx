import Image from 'next/image';
import Link from 'next/link';
import { FaRegFileAudio, FaRegFilePdf } from 'react-icons/fa6';
import { HiDownload } from 'react-icons/hi';
import { resourcesPage } from '../data';

export const metadata = {
  title: 'Resources - M.T.C',
  description:
    'You can find the resources from various departments. Feel free to search for the differnt resources here.',
};

export default function ResourcesPage() {
  return (
    <div className="bg-gray-100">
      {/* TODO: change the background color to a open book in the library, on the table */}
      <div className="bg-ming2">
        <div className="h-60 ml-6 flex items-end text-white">
          <h1 className="text-xl md:text-3xl mb-4 tracking-wider">
            Resource Center
          </h1>
        </div>
      </div>
      <div className=" bg-gray-100 grid grid-cols-1 lg:grid-cols-2 gap-2 px-4 py-6">
        {/* TODO: get more books to add to the page via data.js file */}
        {resourcesPage.map(({ image, name, description }) => (
          <div
            key={name}
            className="flex gap-2 justify-center hover:-translate-y-3 mb-4 shadow-xl rounded-2xl px-4 py-5 bg-white"
          >
            <div className="w-1/3">
              <Image
                src={image}
                alt={name}
                width={90}
                height={90}
                className="place-content-center w-full h-auto"
              />
            </div>
            <div className="w-2/3">
              <p className="text-sm tracking-wider leading-normal px-4">
                {description}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex flex-col w-fit px-2 md:px-4 py-1 md:py-2 mt-4 rounded-full border border-ming text-gray-800 text-sm justify-end hover:bg-ming hover:text-white">
                  <Link href="/resource-center">Read more...</Link>
                </div>
                <div className="flex items-end gap-2">
                  <FaRegFilePdf className="text-red-600 hover:cursor-pointer" />
                  <FaRegFileAudio className="text-blue-600 hover:cursor-pointer" />
                  <HiDownload className="text-gray-800 hover:cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
