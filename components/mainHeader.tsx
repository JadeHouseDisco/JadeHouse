"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import DropdownButton from "@/components/ui/dropdownButton"
import { Menu } from "lucide-react"

const MainHeader: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="relative flex items-center justify-between px-6 py-4 bg-gray-900 text-white sticky top-0 z-40">
      <div className="flex items-center">
        <Link href='/'>
          <Image
            src='https://res.cloudinary.com/dss5ymotz/image/upload/v1730708696/jadehouse_bfqaxt.png'
            width="406"
            height="526"
            className="h-10 w-9 mr-2"
            alt="logo"
            priority={true}
          />
        </Link>
        <Link href='/'>
            <span className="text-xl font-bold">JadeHouse</span>
        </Link>
      </div>
      <nav className="hidden md:flex space-x-4 font-bold text-lg">
        <DropdownButton
          href='/lab'
          options={undefined}
          buttonText="Lab"
        />
        <DropdownButton
          href='/disco'
          options={undefined}
          buttonText="Disco"
        />
      </nav>
      <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
        <Menu className="h-6 w-6" />
      </button>
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-gray-900 flex flex-col items-center space-y-2 py-2 md:hidden">
          <Link href='/lab' className="font-bold" onClick={() => setMobileMenuOpen(false)}>
            Lab
          </Link>
          <Link href='/disco' className="font-bold" onClick={() => setMobileMenuOpen(false)}>
            Disco
          </Link>
        </div>
      )}
    </header>
  );
};

export default MainHeader;