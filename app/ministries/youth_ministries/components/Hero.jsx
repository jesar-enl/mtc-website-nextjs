'use client';

import { Carousel } from 'flowbite-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <div className="flex flex-col mt-16 md:mt-10">
      <div className="h-96 md:h-[530px]">
        <Carousel>
          <Image
            src="/images/GYD 2024.png"
            alt="front view"
            width={400}
            height={600}
            priority={true}
          />
          {/* TODO: add images to reflect the next days to celebrate in AYM */}
          <Image
            src="/images/WAD 2024.jpg"
            alt="front view"
            width={400}
            height={300}
            className="w-auto h-auto"
          />
        </Carousel>
      </div>
    </div>
  );
}
