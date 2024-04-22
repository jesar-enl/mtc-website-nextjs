import Gallery from '@/app/components/Gallery';
import { merriRegular } from '@/app/styles/fonts';

export const metadata = {
  title: 'Gallery - MTC',
  description:
    'Are you ready to find some info about the leaders here at MTC, listen to voice of your leaders and learn who they are and what they have in store for you this year.',
};

export default function page() {
  return (
    // TODO: change the background image
    <div className="bg-gray-100">
      <div className="bg-[url('/images/gallerymedia.jpg')] bg-cover bg-no-repeat h-96">
        <div className="relative bg-black bg-opacity-80 h-96 pl-6 flex items-end text-white">
          <div className={merriRegular.className}>
            <h1 className="text-xl md:text-3xl tracking-wider">
              Media - Gallery
            </h1>
          </div>
        </div>
      </div>
      <Gallery />
    </div>
  );
}
