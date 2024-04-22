'use client';

import { Timeline } from 'flowbite-react';
import Image from 'next/image';
import { HiCalendar } from 'react-icons/hi';
import { merriRegular } from '../styles/fonts';

export default function EventsSection() {
  return (
    <div className="bg-gray-50 px-4 md:px-16 text-gray-900 pb-8">
      <div className={merriRegular.className}>
        <h1 className="text-white bg-blue-800 rounded-b-xl w-fit mb-4 px-4 py-2 tracking-widest font-semibold">
          Events Timeline
        </h1>
      </div>

      <Timeline>
        <Timeline.Item>
          <Timeline.Point icon={HiCalendar} />
          <Timeline.Content>
            <Timeline.Time className="text-xl">
              April {new Date().getFullYear()}
            </Timeline.Time>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Point icon={HiCalendar} />
          <Timeline.Content>
            <Timeline.Time>
              13th - 19th April {new Date().getFullYear()}
            </Timeline.Time>
            <Timeline.Title>Literature Evangelism Week</Timeline.Title>
            <Timeline.Body>
              <span className="uppercase font-semibold">I will go</span>. <br />
              We are all called upon to embrace Literature evangelism as we
              apread the gospel to the nations around us. <br />
              Join in now and share your faith with your neighbor through
              Adventist Literature.
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Point icon={HiCalendar} />
          <Timeline.Content>
            <Timeline.Time>April {new Date().getFullYear()}</Timeline.Time>
            <Timeline.Title className="flex gap-2 items-center">
              <Image
                src="/images/Sabbath School ministries.png"
                alt="adventurer logo"
                width="40"
                height="40"
              />
              Visitors&#39; Sabbaths
            </Timeline.Title>
            <Timeline.Body>
              Call your workmate, your dearest friends to the visitors Sabbaths
              this month of April as we share our faith through the Evangelism
              Department.
              <br />
              These shall run from <strong>13th April</strong> till{' '}
              <strong>27th April</strong>.
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Point icon={HiCalendar} />
          <Timeline.Content>
            <Timeline.Time className="text-xl">
              May {new Date().getFullYear()}
            </Timeline.Time>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Point icon={HiCalendar} />
          <Timeline.Content>
            <Timeline.Time>18th May {new Date().getFullYear()}</Timeline.Time>
            <Timeline.Title className="flex gap-2 items-center">
              <Image
                src="/images/Adventurer_Logo-1.png"
                alt="adventurer logo"
                width="40"
                height="40"
              />
              Global Adventurer&#39;s Day
            </Timeline.Title>
            <Timeline.Body>
              Let us celebrate, together with the world wide Seventh-day
              Adventist Church, the Global Adventurer Day. <br />
              We shall have different activities displayed by the{' '}
              <span className="font-semibold">Emerald Adventurer Club</span>
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Point icon={HiCalendar} />
          <Timeline.Content>
            <Timeline.Time>June {new Date().getFullYear()}</Timeline.Time>
          </Timeline.Content>
        </Timeline.Item>
      </Timeline>
    </div>
  );
}
