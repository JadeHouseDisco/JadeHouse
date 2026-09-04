import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import ContactForm from "@/components/contactForm";

interface FooterLink {
  href: string;
  label: string;
}

interface SocialLink extends FooterLink {
  icon: ReactNode;
}

interface SiteFooterProps {
  homeHref: string;
  logoSrc: string;
  logoAlt: string;
  title: string;
  description: string;
  navigation: FooterLink[];
  socialLinks: SocialLink[];
}

export default function SiteFooter({
  homeHref,
  logoSrc,
  logoAlt,
  title,
  description,
  navigation,
  socialLinks,
}: SiteFooterProps) {
  return (
    <footer className="bg-gray-900 py-6 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href={homeHref} aria-label={`${title} home`}>
              <Image
                src={logoSrc}
                alt={logoAlt}
                width={48}
                height={58}
                className="mb-4"
                sizes="48px"
              />
            </Link>
            <Link href={homeHref}>
              <h2 className="mb-2 text-2xl font-bold">{title}</h2>
            </Link>
            <p className="text-gray-400">{description}</p>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold">Navigation</h3>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-gray-400 hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-4 flex items-center space-x-4">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  className="text-gray-400 hover:text-white"
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-2">
            <h3 className="mb-4 text-lg font-bold">Contact Me</h3>
            <ContactForm />
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} JadeHouse. All rights reserved.
      </div>
    </footer>
  );
}
