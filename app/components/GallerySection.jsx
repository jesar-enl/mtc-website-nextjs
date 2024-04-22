'use client';

import Image from 'next/image';
import Link from 'next/link';
import { grid1, grid2, grid3, grid4 } from '../data';
import { merriRegular } from '../styles/fonts';

export default function GallerySection() {
  return (
    <div className="bg-gray-50 px-4 md:px-16 text-gray-900 pb-8">
      <div className={merriRegular.className}>
        <h1 className="text-white bg-blue-800 rounded-b-xl w-fit mb-4 px-4 py-2 tracking-widest font-semibold">
          Gallery
        </h1>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="grid gap-4">
          {grid3.map((grid3) => (
            <div key={grid3}>
              <Image
                src={grid3}
                alt=""
                width="400"
                className="h-auto max-w-full rounded-lg"
                height="200"
              />
            </div>
          ))}
        </div>
        <div className="grid gap-4">
          {grid4.map((grid4) => (
            <div key={grid4}>
              <Image
                className="h-auto max-w-full rounded-lg"
                src={grid4}
                alt=""
                width="400"
                height={200}
              />
            </div>
          ))}
        </div>
        <div className="grid gap-4">
          {grid1.map((grid1) => (
            <div key={grid1}>
              <Image
                className="h-auto max-w-full rounded-lg"
                src={grid1}
                alt=""
                width="400"
                height={200}
              />
            </div>
          ))}
        </div>
        <div className="grid gap-4">
          {grid2.map((grid2) => (
            <div key={grid2}>
              <Image
                className="h-auto max-w-full rounded-lg"
                src={grid2}
                alt=""
                width="400"
                height={200}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="w-fit border border-ming text-gray-800 hover:bg-ming hover:text-white rounded-full text-sm md:text-base px-4 py-1 mt-4 flex justify-end">
        <Link href='/media/gallery'>
          More...
        </Link>      
      </div>
    </div>
  );
}
