"use client";

import { useEffect, useId, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import DropdownButton from "@/components/ui/dropdownButton";

interface SiteHeaderProps {
  homeHref: string;
  logoSrc: string;
  title: string;
  links: { href: string; label: string }[];
  id?: string;
}

const SiteHeader: React.FC<SiteHeaderProps> = ({ homeHref, logoSrc, title, links, id }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const generatedId = useId().replace(/:/g, "");
  const navigationId = `${generatedId}-mobile-navigation`;

  useEffect(() => {
    if (!mobileMenuOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileMenuOpen(false);
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [mobileMenuOpen]);

  return (
    <header id={id} className="sticky top-0 z-40 border-b border-white/5 bg-gray-900/95 text-white shadow-lg backdrop-blur">
      <div className="mx-auto flex min-h-16 w-full max-w-[1920px] items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href={homeHref} className="flex min-w-0 items-center rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00a896]">
          <Image
            src={logoSrc}
            width={48}
            height={58}
            className="mr-2 h-10 w-auto shrink-0 object-contain"
            alt=""
            priority
            sizes="34px"
          />
          <span className="truncate text-lg font-bold sm:text-xl">{title}</span>
        </Link>

        <nav aria-label={`${title} navigation`} className="hidden items-center gap-1 font-bold lg:flex xl:gap-3 xl:text-lg">
          {links.map((link) => (
            <DropdownButton key={link.href} href={link.href} options={undefined} buttonText={link.label} />
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00a896] lg:hidden"
          onClick={() => setMobileMenuOpen((open) => !open)}
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileMenuOpen}
          aria-controls={navigationId}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <nav
          id={navigationId}
          aria-label={`${title} mobile navigation`}
          className="absolute inset-x-0 top-full max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-white/10 bg-gray-900 px-4 py-3 shadow-xl lg:hidden"
        >
          <div className="mx-auto grid w-full max-w-xl gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-md px-4 py-3 font-bold hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00a896]"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default SiteHeader;
