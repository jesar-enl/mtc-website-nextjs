import Link from 'next/link';
import { FaLocationDot, FaPhone, FaRegEnvelope } from 'react-icons/fa6';
import { merriRegular } from '../styles/fonts';

export default function ContactSection() {
  return (
    <div className="bg-gray-300 px-4 md:px-16 text-gray-900 pb-8">
      <div className={merriRegular.className}>
        <h1 className="text-white bg-blue-800 rounded-b-xl w-fit mb-4 px-4 py-2 tracking-widest font-semibold">
          Contact Us
        </h1>
      </div>

      <div className="px-0 md:px-2 py-10">
        <div className="flex flex-col md:flex-row gap-2">
          <div className="w-full md:w-1/3">
            <div className="text-blue-800 rounded-lg shadow-xl mb-4 p-3 border border-gray-50 bg-gray-100 text-sm md:text-base tracking-wider leading-normal pb-10 w-fit">
              <div className="flex items-center gap-2 mb-3">
                <FaLocationDot className="text-sm" />
                <span>
                  Location: Plot 2, Block ___ Along Kolijja Street, Masaka City
                </span>
              </div>
              <div className="flex items-center gap-2 mb-3">
                <FaPhone className="text-sm" />
                <span>(+256) 777 123456</span>
              </div>
              <div className="flex items-center gap-2 mb-3">
                <FaRegEnvelope className="text-sm" />
                <span>requests@masakatownchurch.org</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full md:w-2/3 md:ml-16">
            <p className="tracking-wider leading-snug text-sm md:text-base">
              Every Christian goes through challenges in this world we live in.
              The Church is a safe place for all, including non-members, to get
              help. All cases will be treated confidentially.
            </p>
            {/* TODO: add more content to this section */}
            <div className="md:ml-5 flex gap-4 mt-6 text-sm flex-col md:flex-row">
              <Link
                href="/contact"
                className="w-fit px-2 py-1 hover:-translate-y-2 hover:bg-blue-900 bg-blue-800 text-white rounded-lg shadow-xl flex items-center text-center"
              >
                Submit Prayer Request
              </Link>
              <Link
                href="/contact"
                className="w-fit px-2 py-1 hover:-translate-y-2 hover:bg-blue-900 bg-blue-800 text-white rounded-lg shadow-xl flex items-center text-center"
              >
                Request for a Pastoral Visit
              </Link>
              <Link
                href="/contact"
                className="w-fit px-2 py-1 hover:-translate-y-2 hover:bg-blue-900 bg-blue-800 text-white rounded-lg shadow-xl flex items-center text-center"
              >
                Get Personal Counseling
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
