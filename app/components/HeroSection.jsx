'use client';

import { Carousel } from 'flowbite-react';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <div className="flex flex-col mt-8 md:mt-0">
      <div className="h-56 md:h-[590px]">
        <Carousel>
          <Image
            src="/images/FRONT.jpg"
            alt="front view"
            width={400}
            height={600}
            priority={true}
          />
          <Image
            src="/images/FRONT-LEFT.jpg"
            alt="front view"
            width={400}
            height={600}
          />
          <Image
            src="/images/FRONT-RIGHT.jpg"
            alt="front view"
            width={400}
            height={600}
          />
        </Carousel>
      </div>
      {/* <div className="bg-[url('/images/MONEY.jpg')] bg-no-repeat bg-cover h-40 md:h-auto flex flex-col md:flex-row items-center justify-between gap-4 text-white">
        <div className="relative bg-black bg-opacity-80 flex flex-col items-center justify-center h-full py-24">
          <h1 className="text-xl md:text-3xl font-semibold tracking-wide leading-snug mb-6">
            Join the Mission
          </h1>
          <p className="text-sm md:text-base tracking-wider mx-24 text-center text-gray-400">
            &#39;Each of you should give what you have decided in your heart to
            give, not reluctantly or under compulsion, for God loves a cheerful
            giver.&#39;
          </p>
        </div>
      </div> */}
    </div>

    // <div className="bg-[url('/images/FRONT.jpg')] bg-no-repeat bg-cover h-auto md:h-[36rem] flex flex-col md:flex-row items-center justify-between gap-4 text-white">
    //   <div className="relative flex flex-col justify-center bg-black bg-opacity-90 text-white px-10 py-6 rounded-3xl m-8 h-76 md:h-72 md:w-2/3">
    //     <h1 className="text-xl md:text-3xl tracking-wide leading-snug mb-4">
    //       <span className="text-lg">Welcome to the official website of</span>{' '}
    //       <br />
    //       <span className="text-ming">Seventh-day Adventist Church</span>
    //       <br />
    //       <span className="uppercase">Masaka Town</span>
    //     </h1>
    //     <p className="tracking-wider text-sm">
    //       Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
    //       harum! Id recusandae expedita fugiat suscipit voluptatibus natus enim
    //       et ea deleniti, alias dolorem consectetur repudiandae eum aliquid?
    //       Aspernatur, eius atque.
    //     </p>
    //   </div>
    // </div>
  );
}
