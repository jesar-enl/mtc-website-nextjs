import { adventSans, merriRegular } from '../styles/fonts';

export default function Mission() {
  return (
    <div className="bg-gray-900 text-white px-8 py-10 flex flex-col justify-center items-center gap-4">
      <div className="flex flex-col md:flex-row justify-between gap-4 items-center">
        <div className="w-full md:w-1/3 flex flex-col px-3 py-4 shadow-xl h-full border border-gray-700 rounded-lg">
          <h1 className="text-lg md:text-2xl tracking-wider text-gray-400">
            Our Mission:
          </h1>
          <div className={merriRegular.className}>
            <p className="text-sm lg:text-base tracking-wider ml-3 mt-3">
              Make disciples of Jesus Christ who live as His loving witnesses
              and proclaim to all people the everlasting gospel of the Three
              Angels&#39; Messages in preparation for His soon return.
            </p>
            <small className="italic tracking-wider">
              <strong className="text-gray-400 mt-10">
                Matt.28:18-20, Acts 1:8, Rev.14:6-12
              </strong>
            </small>
          </div>
        </div>
        <div className="w-full md:w-1/3 flex flex-col px-3 py-4 shadow-xl h-full border border-gray-700 rounded-lg">
          <h1 className="text-lg md:text-2xl tracking-wider text-gray-400">
            Our Method:
          </h1>
          <div className={merriRegular.className}>
            <p className="text-sm lg:text-base tracking-wider ml-3 mt-3">
              Guided by the Bible and the Holy Spirit,{' '}
              <span className={adventSans.className}>
                Seventh-day Adventist
              </span>{' '}
              pursue this mission through Christ-like living, communicating,
              discipling, teaching, healing and serving.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/3 flex flex-col px-3 py-4 shadow-xl h-full border border-gray-700 rounded-lg">
          <h1 className="text-lg md:text-2xl tracking-wider text-gray-400">
            Our Vision:
          </h1>
          <div className={merriRegular.className}>
            <p className="text-sm lg:text-base tracking-wider ml-3 mt-3">
              In harmony with Bible revelation,{' '}
              <span className={adventSans.className}>
                Seventh-day Adventists
              </span>{' '}
              see as the climax of God&#39;s plan the restoration of all His
              creation to full harmony with His perfect will and righteousness.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full">
        {/* TODO: add a map element to this div */}
        map element
      </div>
    </div>
  );
}
