import Link from 'next/link';

export default function DevelopmentMessage() {
  return (
    <div className="bg-white">
      <div className=" flex flex-col items-center justify-center px-auto py-10">
        <h1 className="text-gray-800 leading-snug tracking-wider mb-4 text-xl md:text-2xl">
          🛠 This page is coming soon!{' '}
          <span className="italic">Thank you. 🛠</span>
        </h1>
        <div className="w-fit text-gray-800 border border-ming px-4 py-2 hover:bg-ming hover:text-white rounded-lg shadow-xl">
          <Link href="/">Back home</Link>
        </div>
      </div>
    </div>
  );
}
