import React from 'react'
import Image from 'next/image';

export default function Sidebar() {
  return (
    <div className="sticky bg-ming w-[11.3%] h-screen top-0 text-white">
      <Image src='/images/white.png' alt='logo' width={250} height={230} className="top-0 right-0" />
    </div>
  )
}
