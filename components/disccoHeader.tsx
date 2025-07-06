"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import DropdownButton from "@/components/ui/dropdownButton"
import { Menu } from "lucide-react"

const DiscoHeader: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="relative flex items-center justify-between px-6 py-4 bg-gray-900 text-white sticky top-0 z-40">
      <div className="flex items-center">
        <Link href='/disco'>
          <Image
            src='https://res.cloudinary.com/dss5ymotz/image/upload/v1730708696/jadehouse_disco_b1js7e.png'
            width="418"
            height="538"
            className="h-10 w-9 mr-2"
            alt="logo"
            priority={true}
          />
        </Link>
        <Link href='/disco'>
            <span className="text-xl font-bold">JadeHouse Disco</span>
        </Link>
      </div>
      <nav className="hidden md:flex space-x-4 font-bold text-lg">
        <DropdownButton
          href='/disco'
          options={undefined}
          buttonText="Home"
        />
        <DropdownButton
          href='/disco/aboutme'
          options={undefined}
          buttonText="About"
        />
        <DropdownButton
          href='/disco/memories'
          options={undefined}
          buttonText="Memories"
        />
        <DropdownButton
          href='/disco/thoughts'
          options={undefined}
          buttonText="Thoughts"
        />
        <DropdownButton
          href='/disco/music'
          options={undefined}
          buttonText="Music"
        />
      </nav>
      <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
        <Menu className="h-6 w-6" />
      </button>
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-gray-900 flex flex-col items-center space-y-2 py-2 md:hidden">
          <Link href='/disco' className="font-bold" onClick={() => setMobileMenuOpen(false)}>
            Home
          </Link>
          <Link href='/disco/aboutme' className="font-bold" onClick={() => setMobileMenuOpen(false)}>
            About
          </Link>
          <Link href='/disco/memories' className="font-bold" onClick={() => setMobileMenuOpen(false)}>
            Memories
          </Link>
          <Link href='/disco/thoughts' className="font-bold" onClick={() => setMobileMenuOpen(false)}>
            Thoughts
          </Link>
          <Link href='/disco/music' className="font-bold" onClick={() => setMobileMenuOpen(false)}>
            Music
          </Link>
        </div>
      )}
    </header>
  );
};

export default DiscoHeader;