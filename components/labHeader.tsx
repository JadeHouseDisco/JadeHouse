import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import DropdownButton from "@/components/ui/dropdownButton"

const LabHeader: React.FC = () => {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-gray-900 text-white sticky top-0 z-40">
      <div className="flex items-center">
        <Link href="/lab">
          <Image
            src="https://res.cloudinary.com/dss5ymotz/image/upload/v1730708697/jadehouse_lab_onig4i.png"
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
      <div className="flex space-x-4 font-bold text-lg">
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
      </div>
    </header>
  );
};

export default LabHeader;