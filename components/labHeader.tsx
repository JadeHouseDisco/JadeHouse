"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import DropdownButton from "@/components/ui/dropdownButton"
import { Menu } from "lucide-react"

const LabHeader: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-gray-900 text-white sticky top-0 z-40">
      <div className="flex items-center">
        <Link href="/lab">
          <Image
            src="https://res.cloudinary.com/dss5ymotz/image/upload/v1758199144/lab_ookoc5.png"
            width="418"
            height="538"
            className="h-10 w-9 mr-2"
            alt="logo"
            priority={true}
          />
        </Link>
        <Link href='/lab'>
            <span className="text-xl font-bold">JadeHouse Lab</span>
        </Link>
      </div>
      <nav className="hidden md:flex space-x-4 font-bold text-lg">
          <DropdownButton
            href="/lab"
            options={undefined}
            buttonText="Home"
          />
           <DropdownButton
            href="/lab/aboutme"
            options={undefined}
            buttonText="About"
          />
           <DropdownButton
            href="/lab/experiences"
            options={undefined}
            buttonText="Experiences"
          />
           <DropdownButton
            href="/lab/ideas"
            options={undefined}
            buttonText='Ideas'
          />
           <DropdownButton
           href='/lab/litrev'
           options={undefined}
           buttonText='Literature Reviews'
          />
      </nav>
      <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
        <Menu className="h-6 w-6" />
      </button>
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-gray-900 flex flex-col items-center space-y-2 py-2 md:hidden">
          <Link href='/lab' className="font-bold" onClick={() => setMobileMenuOpen(false)}>
            Home
          </Link>
          <Link href='/lab/aboutme' className="font-bold" onClick={() => setMobileMenuOpen(false)}>
            About
          </Link>
          <Link href='/lab/experiences' className="font-bold" onClick={() => setMobileMenuOpen(false)}>
            Experiences
          </Link>
          <Link href='/lab/ideas' className="font-bold" onClick={() => setMobileMenuOpen(false)}>
            Ideas
          </Link>
          <Link href='/lab/litrev' className="font-bold" onClick={() => setMobileMenuOpen(false)}>
            Literature Reviews
          </Link>
        </div>
      )}
    </header>
  );
};

export default LabHeader;