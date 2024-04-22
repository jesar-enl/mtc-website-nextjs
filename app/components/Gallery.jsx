import { grid1, grid2, grid3, grid4 } from '@/app/data';
import Image from 'next/image';

export default function Gallery() {
  return (
    <div className="bg-gray-300 px-4 py-3">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="grid gap-4">
          {grid1.map((grid1) => (
            <div key={grid1}>
              <Image
                src={grid1}
                alt=""
                width="400"
                className="h-auto max-w-full rounded-lg"
                height="200"
              />
            </div>
          ))}
        </div>
        <div className="grid gap-4">
          {grid2.map((grid2) => (
            <div key={grid2}>
              <Image
                className="h-auto max-w-full rounded-lg"
                src={grid2}
                alt=""
                width="400"
                height={200}
              />
            </div>
          ))}
        </div>
        <div className="grid gap-4">
          {grid3.map((grid3) => (
            <div key={grid3}>
              <Image
                className="h-auto max-w-full rounded-lg"
                src={grid3}
                alt=""
                width="400"
                height={200}
              />
            </div>
          ))}
        </div>
        <div className="grid gap-4">
          {grid4.map((grid4) => (
            <div key={grid4}>
              <Image
                className="h-auto max-w-full rounded-lg"
                src={grid4}
                alt=""
                width="400"
                height={200}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
