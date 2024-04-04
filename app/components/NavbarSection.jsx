'use client';

import Image from 'next/image';
import { Dropdown, Navbar } from 'flowbite-react';

export default function NavbarSection() {
  return (
    <Navbar fluid>
      <Navbar.Brand href="/">
        <Image
          src="/images/ming.png"
          alt="logo"
          width={70}
          height={70}
          className="mr-2"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold">
          Masaka Town Church
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="/">Home</Navbar.Link>
        <Navbar.Link href="/">Home</Navbar.Link>
        <Navbar.Link href="/">Home</Navbar.Link>
        <Navbar.Link href="/">Home</Navbar.Link>
        <Navbar.Link href="/">Home</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
