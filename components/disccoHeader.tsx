import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import DropdownButton from "@/components/ui/dropdownButton"

const DiscoHeader: React.FC = () => {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-gray-900 text-white sticky top-0 z-40">
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
      <div className="flex space-x-4 font-bold text-lg">
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
      </div>
    </header>
  );
};

export default DiscoHeader;