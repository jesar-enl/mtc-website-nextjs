import Image from 'next/image';
import Link from 'next/link';
import { ministryLogos } from '../data';
import { merriRegular } from '../styles/fonts';

export default function MinistriesSection() {
  return (
    <div className="bg-gray-100 px-4 md:px-16 text-gray-900 pb-16 mt-1">
      <div className={merriRegular.className}>
        <h1 className="text-white bg-blue-800 rounded-b-xl w-fit mb-4 px-4 py-2 tracking-widest font-semibold">
          Ministries
        </h1>
      </div>
      <p className="text-gray-800 text-center tracking-wider leading-normal mb-4 px-4 md:px-16 text-sm md:text-base">
        Here are the ministries under the leadership of Masaka Town Church.
        Click on the logo to find out more about that ministry.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
        {ministryLogos.map(({ name, logo, href }) => (
          <Link
            href={href}
            key={name}
            className="hover:-translate-y-3 mb-4 shadow-xl rounded-2xl px-4 py-5 bg-gray-50 hover:ease-in-out"
          >
            <div className="flex flex-col items-center justify-between h-full">
              <Image
                src={logo}
                alt={name}
                width={90}
                height={90}
                className="place-content-center w-auto h-auto"
              />
              <p className="text-sm text-center tracking-wider leading-snug">
                {name}
              </p>
            </div>
          </Link>
        ))}
      </div>
      {/**
      <div className="flex flex-col w-fit px-4 py-2 mt-4 rounded-full bg-blue-600 text-white hover:bg-blue-700">
        <Link href="/ministries">Read more...</Link>
      </div>
    */}
    </div>
  );
}
