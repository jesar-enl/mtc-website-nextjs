import { merriRegular } from '@/app/styles/fonts';
import Image from 'next/image';
import Link from 'next/link';

export default function Departments() {
  const logos = [
    {
      name: 'Adventurers Logo',
      image: '/images/Adventurer_Logo-1.png',
      department: 'Emerald Adventurers Club',
      href: '/ministries/youth_ministries/adventurers',
    },
    {
      name: 'Ambassadors Logo',
      image: '/images/Ambassador_logo.png',
      department: 'Ambassadors Club',
      href: '/ministries/youth_ministries/ambassadors',
    },
    {
      name: 'Pathfinders Logo',
      image: '/images/Pathfinder_logo.png',
      department: 'Emerald Pathfinders Club',
      href: '/ministries/youth_ministries/pathfinders',
    },
    {
      name: 'Master Guide Logo',
      image: '/images/MG_Logo_Small.png',
      department: 'Emerald Master Guide Club',
      href: '/ministries/youth_ministries/master_guide',
    },
    {
      name: 'PCM Logo',
      image: '/images/pcm-logo.png',
      department: 'Public Campus Ministries',
      href: '/ministries/youth_ministries/pcm',
    },
    {
      name: 'SYL Logo',
      image: '/images/SYL-Logo.jpg',
      department: 'Senior Youth Leader',
      href: '/ministries/youth_ministries/syl',
    },
  ];
  return (
    <div className="bg-gray-100 px-4 py-2">
      {logos.map(({ name, image, department, href }) => (
        <div
          className="flex flex-col md:flex-row items-center justify-center gap-4 mb-6 px-4 py-6 rounded-lg shadow-xl"
          key={name}
        >
          <Image src={image} alt={name} width={150} height={100} />
          <div className="flex flex-col gap-2">
            <h1
              className="text-base md:text-lg font-semibold text-center md:text-left"
              key={department}
            >
              {department}
            </h1>
            {/* TODO: get some better notes for each ministry to display here */}
            <div className={merriRegular.className}>
              <p className="text-sm text-gray-600 tracking-wider leading-snug">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Temporibus dolor laborum iusto voluptates rem impedit labore
                reiciendis necessitatibus natus nihil dolorum cupiditate soluta
                tempora eveniet distinctio tenetur odio, atque ullam.
              </p>
            </div>
            <div className="w-fit text-gray-800 px-3 py-1 mt-4 rounded-lg border border-ming2 hover:bg-blue-600 hover:text-white text-sm">
              <Link href={href}>Read more...</Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
