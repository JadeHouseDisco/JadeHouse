import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface MiniAboutProps {
  profileImage: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  name: string;
  bio: string;
  socialLinks: {
    href: string;
    icon: React.ReactNode;
  }[];
  button: {
    text: string;
    href: string;
  }
}

const MiniAbout: React.FC<MiniAboutProps> = ({
  profileImage,
  name,
  bio,
  socialLinks,
  button = {text: "", href: ""}
}) => {
  return (
    <React.Fragment>
      <section className="py-16">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex items-center justify-center">
            <Image
              alt={profileImage.alt}
              className="rounded-full w-64 h-64 object-cover"
              height={profileImage.height}
              src={profileImage.src}
              style={{ aspectRatio: '256/256', objectFit: 'cover' }}
              width={profileImage.width}
            />
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">{name}</h2>
            <p className="text-gray-400">{bio}</p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  className="text-gray-400 hover:text-gray-50"
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.icon}
                </a>
              ))}
            </div>
            {button.text !== "" ? 
            <Link
                className="inline-flex items-center justify-center h-10 px-6 rounded-md focus:outline-none focus:ring-2 bg-gray-50 text-gray-900 hover:bg-[#00a896] focus:ring-gray-300 transition-colors duration-300 ease-in-out"
                href={button.href}
            >
              {button.text}
            </Link> : null }
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default MiniAbout;