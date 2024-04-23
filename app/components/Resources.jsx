'use client';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import Image from 'next/image';
import Link from 'next/link';
import { FaFilePdf, FaRegFileAudio } from 'react-icons/fa6';
import { HiDownload } from 'react-icons/hi';
import { resources } from '../data';
import { lato, merriRegular } from '../styles/fonts';

export default function Resources() {
  const handlePdfClick = (pdfUrl) => {
    const absolutePdfUrl = new URL(pdfUrl, window.location.origin).href;
    window.open(absolutePdfUrl, '_blank');
  };

  return (
    <div className="bg-gray-200 px-4 md:px-16 text-gray-900 pb-8">
      <div className={merriRegular.className}>
        <h1 className="text-white bg-blue-800 rounded-b-xl w-fit mb-4 px-4 py-2 tracking-widest font-semibold">
          Resources
        </h1>
      </div>
      <p className="text-gray-800 text-center tracking-wider leading-normal mb-4 px-4 md:px-16 text-sm md:text-base">
        Are you in search of a Christian educational book to read and enrich
        your knowledge? Look no further! We&#39;ve got you covered. Find more
        from the books listed below.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
        {resources.map(({ image, name, description, pdf }) => (
          <div
            key={name}
            className="flex flex-col md:flex-row gap-2 justify-center hover:-translate-y-3 mb-4 shadow-xl rounded-2xl px-4 py-5 bg-white"
          >
            <div className="w-full md:w-1/3">
              <Image
                src={image}
                alt={name}
                width={90}
                height={90}
                className="place-content-center w-full h-auto"
              />
            </div>
            <div className="w-full md:w-2/3">
              <div className={lato.className}>
                <p className="text-sm tracking-wider leading-normal px-4">
                  {description}
                </p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-end gap-2">
                  <FaFilePdf
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
      <div className="flex flex-col justify-end w-fit px-4 py-2 mt-4 rounded-full bg-blue-600 text-white hover:bg-blue-700">
        <Link href="/resource-center">Find more...</Link>
      </div>
    </div>
  );
}
