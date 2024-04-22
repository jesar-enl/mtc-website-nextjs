import { merriRegular } from '@/app/styles/fonts';
import Image from 'next/image';

export default function Welcome({ data }) {
  const { image2 } = data;
  return (
    <div className="flex flex-col md:flex-row justify-between gap-5 m-4 py-6 px-4">
      <div className="bg-white text-gray-800 flex flex-col items-center justify-between gap-4 md:rounded-tr-3xl md:rounded-bl-2xl  shadow-2xl px-4 py-3 w-full h-88">
        <h1 className="text-xl md:text-3xl tracking-wide leading-snug mb-4 flex flex-col items-center gap-3 w-full md:w-1/3">
          <Image
            src={image2}
            alt="AYM"
            width={300}
            height={90}
            className="rounded-lg"
          />
        </h1>
        <div className="w-full md:w-2/3 flex justify-center items-center">
          <div className={merriRegular.className}>
            <div className="text-center">
              {/* TODO: get some intro text to add to this section */}
              <p className="text-sm">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut
                ipsam dignissimos excepturi aperiam quisquam? Eaque temporibus
                facilis maiores earum consectetur eligendi, quasi quisquam
                libero laboriosam nisi sapiente exercitationem tenetur velit?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
