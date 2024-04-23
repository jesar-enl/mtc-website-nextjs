'use client';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import Image from 'next/image';
import { FaRegFileAudio, FaRegFilePdf } from 'react-icons/fa6';
import { HiDownload } from 'react-icons/hi';
import { resourcesPage } from '../data';

export default function ResourceComponent() {
  const handlePdfClick = (pdfUrl) => {
    const absolutePdfUrl = new URL(pdfUrl, window.location.origin).href;
    window.open(absolutePdfUrl, '_blank');
  };

  return (
    <div className=" bg-gray-100 grid grid-cols-1 lg:grid-cols-2 gap-2 px-4 py-6">
      {/* TODO: get more books to add to the page via data.js file */}
      {resourcesPage.map(({ image, name, description, pdf }) => (
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
            <div className="flex items-center justify-between mt-6 ml-8">
              <div className="flex items-end gap-2">
                <FaRegFilePdf
                  className="text-red-600 hover:cursor-pointer"
                  onClick={() => handlePdfClick(pdf)}
                />
                <FaRegFileAudio className="text-blue-600 hover:cursor-pointer" />
                <HiDownload className="text-gray-800 hover:cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
