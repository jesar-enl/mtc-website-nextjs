'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Dropdown, Navbar } from 'flowbite-react';
import { navLinks, nav, ministries, media } from '@/app/data';

export default function NavbarSection() {
  return (
    <Navbar
      fluid
      className="p-2 fixed z-20 bg-gray-400 bg-opacity-95 w-[88.7%]"
    >
      <Navbar.Brand href="/" className="flex flex-col">
        <span className="self-center whitespace-nowrap text-base md:text-xl text-ming">
          Seventh-day Adventist Church
        </span>
        <span className="self-start uppercase whitespace-nowrap text-sm md:text-base font-semibold tracking-widest">
          Masaka Town
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse className="text-gray-900">
        {navLinks.map(({ name, href }) => (
          <Navbar.Link href={href} key={href} className="text-base text-gray-900">
            {name}
          </Navbar.Link>
        ))}
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Navbar.Link className="text-base text-gray-900">
              Ministries
            </Navbar.Link>
          }
        >
          {ministries.map(({ name, href }) => (
            <Dropdown.Item key={href}>
              <Link href={href}>{name}</Link>
            </Dropdown.Item>
          ))}
        </Dropdown>
        {nav.map(({ name, href }) => (
          <Navbar.Link href={href} key={href} className="text-base text-gray-900">
            {name}
          </Navbar.Link>
        ))}
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Navbar.Link className="text-base text-gray-900">
              Media
            </Navbar.Link>
          }
        >
          {media.map(({ name, href }) => (
            <Dropdown.Item key={href}>
              <Link href={href}>{name}</Link>
            </Dropdown.Item>
          ))}
        </Dropdown>
      </Navbar.Collapse>
    </Navbar>
  );
}
