"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
interface FooterProps {
  footerProps: {
    logo: {
      src: string;
      alt: string;
      width: number;
      height: number;
    };
    title: string;
    description: string;
    navLinks: {
      text: string;
      href: string;
    }[];
    socialLinks: {
      href: string;
      icon: React.ReactNode;
    }[];
  }
}

const Footer: React.FC<FooterProps> = ({footerProps}) => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [buttonText, setButtonText] = useState("Send");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setButtonText("Sending...")
     
    const res = await fetch("/api/sendEmail", {
      body: JSON.stringify({
        email: email,
        message: message,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const { error } = await res.json();
    if (error) {
      console.log(error);
      alert("Failed to send message")
      setButtonText("Send");
      return;
    }
    alert("Succesfully sent message")
    setButtonText("Send");
  };
  
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Image
              src={footerProps.logo.src}
              alt={footerProps.logo.alt}
              width={footerProps.logo.width}
              height={footerProps.logo.height}
              className="mb-4"
              priority={true}
            />
            <h2 className="text-2xl font-bold mb-2">{footerProps.title}</h2>
            <p className="text-gray-400">{footerProps.description}</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Navigation</h3>
            <ul className="space-y-2">
              {footerProps.navLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-gray-400 hover:text-white">
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex items-center space-x-4 mt-4">
              {footerProps.socialLinks.map((link, index) => (
                <a
                  key={index}
                  className="text-gray-400 hover:text-white"
                  href={link.href}
                  target="_blank"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          <div className="md:col-span-2">
            <h3 className="text-lg font-bold mb-4">Contact Me</h3>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                className="w-full bg-gray-800 text-white py-2 px-4 rounded-md mb-4"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <textarea
                className="w-full bg-gray-800 text-white py-2 px-4 rounded-md mb-4"
                rows={4}
                placeholder="Enter your message"
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center h-10 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-950 bg-gray-50 text-gray-900 hover:bg-[#00a896] transition-colors duration-300 ease-in-out"
              >
                {buttonText}
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
        © 2024 Jadeouse. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;