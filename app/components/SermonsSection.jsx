import { merriRegular } from '../styles/fonts';

export default function SermonsSection() {
  return (
    <div className="bg-gray-200 px-4 md:px-16 text-gray-900 pb-8">
      <div className={merriRegular.className}>
        <h1 className="text-white bg-blue-800 rounded-b-xl w-fit mb-4 px-4 py-2 tracking-widest font-semibold">
          Sermons
        </h1>
      </div>
    </div>
  );
}
