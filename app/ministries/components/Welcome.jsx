import Image from 'next/image';
import { FaCircleCheck } from 'react-icons/fa6';

export default function Welcome({ data }) {
  const { title, title2, title3, description, image2, category } = data;
  return (
    <div className="flex flex-col md:flex-row justify-between gap-5 m-4 p-4">
      <div className="w-full md:w-1/2 shadow-2xl  md:rounded-tl-3xl md:rounded-br-2xl  h-88 bg-white flex items-center justify-center px-4">
        <Image
          src={image2}
          alt="AYM"
          width={440}
          height={340}
          className="w-full rounded-lg"
          layout="responsive"
        />
      </div>
      <div className="bg-white text-gray-800 flex flex-col md:rounded-tr-3xl md:rounded-bl-2xl  shadow-2xl px-8 py-4 w-full md:w-1/2 h-88">
        <h1 className="text-xl md:text-3xl tracking-wide leading-snug mb-4 text-center">
          <span className="text-lg">{title}</span> <br />
          <span className="text-ming">{title2}</span>
          <br />
          <span className="uppercase text-sm md:text-lg">{title3}</span>
        </h1>
        <p className="text-sm">{description}</p>
        <ul className="ml-6 mt-2">
          {category.map((cat) => (
            <li className="mb-2 flex gap-2 items-center" key={cat}>
              <FaCircleCheck />
              {cat}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
