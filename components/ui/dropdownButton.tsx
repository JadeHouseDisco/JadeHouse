import React from 'react';
import Link from "next/link"

interface DropdownButtonProps {
  buttonText: string;
  href: string;
  options?: {
    text: string;
    href: string;
  }[];
}

const DropdownButton: React.FC<DropdownButtonProps> = ({ href, options, buttonText }) => {
  if (!options?.length) {
    return (
      <Link
        href={href}
        className="inline-flex h-10 items-center justify-center rounded-md bg-gray-50 px-6 text-gray-900 transition-colors duration-300 ease-in-out hover:bg-[#00a896] focus:outline-none focus:ring-2 focus:ring-gray-950"
      >
        {buttonText}
      </Link>
    );
  }

  return (
    <div className="group relative inline-block">
      <Link
        href={href}
        className="inline-flex h-10 items-center justify-center rounded-md bg-gray-50 px-6 text-gray-900 transition-colors duration-300 ease-in-out hover:bg-[#00a896] focus:outline-none focus:ring-2 focus:ring-gray-950"
      >
        {buttonText}
      </Link>
      <div className="invisible absolute right-0 z-10 mt-2 grid w-56 origin-top-right rounded-md bg-white opacity-0 shadow-lg ring-1 ring-black ring-opacity-5 transition group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
          <div className="rounded-md" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {options.map((option, index) => (
              <Link
                key={index}
                href={option.href}
                className={`block px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-950 bg-gray-50 text-gray-900 hover:bg-[#00a896] transition-colors duration-300 ease-in-out ${index === 0 ? options.length === 1 ? "rounded-md y-1": "rounded-t-md t-1" : index === options.length - 1 ? "rounded-b-md b-1" : ""}`}
                role="menuitem"
              >
                {option.text}
              </Link>
            ))}
          </div>
      </div>
    </div>
  );
};

export default DropdownButton;
