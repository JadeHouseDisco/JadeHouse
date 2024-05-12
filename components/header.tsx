import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import DropdownButton from "@/components/ui/dropdownButton"

interface HeaderProps {
  imageProps: {
    src: string;
    width: number;
    height: number;
  };
  titles: {
    text: string;
    href: string;
  }[];
  dropdownOptions: {
    href: string;
    text: string;
    subOptions?: {
      text: string;
      href: string;
    }[];
  }[];
}

const Header: React.FC<HeaderProps> = ({ imageProps, titles, dropdownOptions }) => {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-gray-900 text-white">
      <div className="flex items-center">
        <Image
          src={imageProps.src}
          width={imageProps.width}
          height={imageProps.height}
          className="h-10 w-9 mr-2"
          alt="logo"
        />
        {titles.map((title, index) => (
          <React.Fragment key={index}>  
            <Link href={title.href}>
                <span className="text-xl font-bold">{title.text}</span>
            </Link>
            {index !== titles.length - 1 && <>&nbsp;</>}
          </React.Fragment>
        ))}
      </div>
      <div className="flex space-x-4 font-bold text-lg">
        {dropdownOptions.map((option, index) => (
          <DropdownButton
            key={index}
            href={option.href}
            options={
              option.subOptions
                ? option.subOptions
                : []
            }
            buttonText={option.text}
          />
        ))}
      </div>
    </header>
  );
};

export default Header;