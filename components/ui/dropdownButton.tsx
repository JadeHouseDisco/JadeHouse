"use client"

import React, { useState, useRef } from 'react';
import Link from "next/link"

interface DropdownButtonProps {
  href: string;
  options: {
    text: string;
    href: string;
  }[];
  buttonText: string;
}

const DropdownButton: React.FC<DropdownButtonProps> = ({ href, options, buttonText }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = () => {
    setIsOpen(true);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {setIsOpen(false)}, 100); 
  };

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      <Link href={href}>
        <button
          type="button"
          className="inline-flex items-center justify-center h-10 px-6 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-950 bg-gray-50 text-gray-900 hover:bg-[#00a896] transition-colors duration-300 ease-in-out"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {buttonText}
        </button>
      </Link>
      {(isOpen && options.length !== 0)&& (
        <div
          className="absolute grid right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
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
      )}
    </div>
  );
};

export default DropdownButton;