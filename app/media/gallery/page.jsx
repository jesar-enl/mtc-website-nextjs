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
    <div className="bg-blue-600">
      <div className={merriRegular.className}>
        <div className="h-32 mt-40 ml-6 text-white">
          <h1 className="text-xl md:text-3xl tracking-wider">
            Media - Gallery
          </h1>
        </div>
      </div>
      <Gallery />
    </div>
  );
}
