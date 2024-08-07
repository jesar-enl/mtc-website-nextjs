import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook } from 'react-icons/fa';
import { FaTiktok, FaWhatsapp, FaYoutube } from 'react-icons/fa6';
// import { about, connect } from '../links';

export default function FooterSection() {
  return (
    <footer className="bg-gray-700 p-4 text-gray-200 text-center w-full">
      <div className="flex justify-between border border-ming border-r-gray-700 border-l-gray-700">
        <div className="w-1/2 md:w-1/3 flex items-center justify-center p-3 tracking-wider leading-normal border border-ming border-t-gray-700 border-b-gray-700 border-l-gray-700">
          <Link
            href="/"
            className=" flex flex-col md:gap-2 mb-4 text-sm md:text-lg"
          >
            <div className="flex flex-col md:flex-row items-center md:items-end">
              <Image
                src="/images/white.png"
                alt="logo"
                width={50}
                height={50}
              />
              <span className="text-sm">Seventh-day Adventist Church</span>{' '}
              <br />
            </div>
            <span className="uppercase">Masaka Town</span>
          </Link>
        </div>
        <div className="w-1/2 md:w-2/3 flex flex-col">
          {/* <div className="flex justify-start flex-col md:flex-row">
            <div className="w-full text-start md:w-1/2 p-4 md:border md:border-ming md:border-t-gray-700 md:border-b-gray-700 md:border-l-gray-700">
              <h1 className="text-lg md:text-2xl">About</h1>
              <ul className="ml-6 mt-5 flex flex-col items-start">
                {about.map((link) => (
                  <li key={link} className="text-sm md:text-base mb-1">
                    {link}
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full md:w-1/2 p-4">
              <h1 className="text-lg md:text-2xl text-start">Connect</h1>
              <ul className="ml-1 md:ml-6 mt-5 flex flex-col items-start">
                {connect.map((link) => (
                  <li key={link} className="text-sm md:text-base mb-1">
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          </div> */}
          <div className="w-full p-4 flex flex-col items-center border border-ming border-r-gray-700 border-b-gray-700 border-l-gray-700">
            <h1 className="text-lg md:text-2xl mt-2">Worship Services</h1>
            <div className="flex justify-between mb-2">
              <ul className="ml-4 mt-5 text-start tracking-wider leading-normal">
                <li className="text-sm md:text-base mb-4 flex items-center justify-between">
                  <span className="md:mr-16">Wednesday fellowship:</span>
                  <span className="italic">05:30pm - 06:30pm</span>
                </li>
                <li className="text-sm md:text-base mb-4 flex items-center justify-between">
                  <span className="md:mr-16">Friday vespers:</span>
                  <span className="italic">06:00pm - 07:00pm</span>
                </li>
                <li className="text-sm md:text-base flex items-center justify-between">
                  <span className="md:mr-16">Sabbath worship:</span>
                  <span className="italic">08:30am - 05:30pm</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between gap-6 mt-4 mb-4 px-8 w-full md:w-1/3">
        <Link href="https://www.facebook.com/SDAMTC">
          <FaFacebook className="text-blue-500 text-2xl md:text-3xl" />
        </Link>
        <Link href="https://chat.whatsapp.com/CAHDOErkF973vfkTxCFvrE">
          <FaWhatsapp className="text-green-500 text-2xl md:text-3xl" />
        </Link>
        <Link href="https://youtube.com/@SDAMasakaTownChurchMTC?si=bVkSlw6XMjj1v_S_">
          <FaYoutube className="text-red-600 text-2xl md:text-3xl" />
        </Link>
        <Link href="https://www.tiktok.com/@sdamasakatownchurch?_t=8oEVc8M1Xbp&_r=1">
          <FaTiktok className="text-xl" />
        </Link>
      </div>
      <hr className="bg-ming" />
      <div className="text-center mt-3 p-3 antialiased font-light leading-relaxed text-inherit">
        &copy; Copyright reserved {new Date().getFullYear()}
      </div>
    </footer>
  );
}
