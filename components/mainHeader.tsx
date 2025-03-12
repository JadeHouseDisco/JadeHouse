import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import DropdownButton from "@/components/ui/dropdownButton"

const MainHeader: React.FC = () => {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-gray-900 text-white sticky top-0 z-40">
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
      <div className="flex space-x-4 font-bold text-lg">
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
      </div>
    </header>
  );
};

export default MainHeader;