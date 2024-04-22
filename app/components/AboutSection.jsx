import React from 'react';

export default function AboutSection() {
  return (
    <div className="bg-gray-800 text-white flex flex-col items-center justify-center px-6 py-10">
      <h1 className="text-xl md:text-3xl tracking-wider leading-snug mb-4 font-semibold text-center md:px-32">
        Welcome to Seventh-day Adventist Church - Masaka Town
      </h1>
      <p className="text-sm md:text-base tracking-wider text-center md:px-32 mb-2">
        Masaka Town Church is a diverse Christian community comprised of
        individuals that seek to love God, each other and the greater community.
      </p>
      <p className="text-sm md:text-base tracking-wider text-center md:px-32 mb-2">
        Our church is a part of the worldwide community of the Seventh-day
        Adventists. We share a love for Jesus and a commitment to demonstrating
        and spreading the good news of His transforming love to our neighboring
        community, city of Masaka, and the world.
      </p>
      <p className="text-sm md:text-base tracking-wider text-center md:px-32">
        All are welcome to worship and fellowship with us.
      </p>
    </div>
  );
}
