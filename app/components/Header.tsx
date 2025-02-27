'use client';

import {
  AlignLeft,
  House,
  Info,
  Instagram,
  MessageCircleMore,
  SquareStack,
  Twitter,
} from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Button from './Button';
import SideMenu from './SideMenu';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const pathname = usePathname();

  const pages = [
    { name: 'home', url: '/#intro', icon: <House size={16} /> },
    { name: 'about us', url: '/#about', icon: <Info size={16} /> },
    {
      name: 'services',
      url: '/#services',
      icon: <SquareStack size={16} />,
    },
    { name: 'contact us', url: '/#contact', icon: <MessageCircleMore size={16} /> },
  ];

  return (
    <header
      className={`sticky top-0 z-50 bg-background py-2 flex items-center justify-between border-b border-foreground-faded`}>
      {/* menu & logo */}
      <div className="menu-logo md:w-1/3 flex items-center gap-2">
        <button
          className={`md:hidden p-1`}
          onClick={() => setMenuOpen(!menuOpen)}>
          <AlignLeft size={20} />
        </button>

        <Link href={'/'} className="">
          <Image
            src={`/images/logo.webp`}
            alt="GuardCore Technologies"
            width={1000}
            height={1000}
            className="object-contain h-12 w-auto md:h-20"
          />
        </Link>
      </div>

      {/* desktop navigation */}
      <nav className="hidden md:flex items-center justify-center gap-8">
        {pages.map((page, index) => (
          <Link
            key={index}
            href={page.url}
            className={`uppercase text-sm border-b-2 ${
              pathname.match(page.url)
                ? 'border-foreground'
                : 'border-transparent'
            } hover:border-foreground transition-all duration-500`}>
            {page.name}
          </Link>
        ))}
      </nav>

      {/* right menu: contact */}
      <div className="w-1/3 hidden md:flex items-center justify-end gap-4">
        <Link href={'/#contact'}>
          <Button label="get in touch" />
        </Link>
      </div>

      {/* Mobile-nav Side Menu */}
      <SideMenu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        position="left">
        <nav className="h-full flex flex-col gap-4">
          <Link href={'/#intro'} className="" onClick={() => setMenuOpen(false)}>
            <Image
              src={`/images/logo.webp`}
              alt="GuardCore Technologies"
              width={1000}
            height={1000}
            className="object-contain h-12 w-auto"
            />
          </Link>

          <hr className="border-foreground-faded" />

          {pages.map((page, index) => (
            <Link
              key={index}
              href={page.url}
              onClick={() => setMenuOpen(false)}
              className={`flex items-center gap-2 uppercase text-sm bg-foreground-faded p-4 rounded-2xl border ${
                pathname === page.url ? 'border-accent' : 'border-transparent'
              } transition-all duration-500`}>
              {page.icon}
              {page.name}
            </Link>
          ))}

          <div className="bottom mt-auto flex items-center justify-center gap-4">
            <Link href="/" className="">
              <Instagram size={20} />
            </Link>
            <Link href="/" className="">
              <Twitter size={20} />
            </Link>
          </div>
        </nav>
      </SideMenu>
    </header>
  );
};

export default Header;
