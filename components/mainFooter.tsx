"use client";

import React, { useEffect, useRef, useState } from "react";
import Script from "next/script";
import Image from "next/image";
import Link from "next/link";
import { GithubIcon, LinkedinIcon, MailIcon, TwitterIcon } from "@/components/icons";

declare global {
  interface Window {
    turnstile?: {
      render: (el: HTMLElement, opts: any) => string;
      reset: (widgetId: string) => void;
    };
  }
}

const MainFooter: React.FC = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [buttonText, setButtonText] = useState("Send");
  const [cfToken, setCfToken] = useState("");     // Turnstile token
  const [website, setWebsite] = useState("");     // honeypot

  const widgetRef = useRef<HTMLDivElement | null>(null);
  const widgetIdRef = useRef<string | null>(null);

  // Explicitly render Turnstile when script loads
  const onTurnstileLoad = () => {
    if (!widgetRef.current || !window.turnstile) return;
    if (widgetIdRef.current) return; // already rendered

    widgetIdRef.current = window.turnstile.render(widgetRef.current, {
      sitekey: process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY,
      theme: "dark",
      callback: (token: string) => setCfToken(token),         // token set here
      "error-callback": () => setCfToken(""),
      "expired-callback": () => setCfToken(""),
      "timeout-callback": () => setCfToken(""),
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Guard: ensure we actually have a token
    if (!cfToken) {
      alert("Please complete the verification.");
      return;
    }

    setButtonText("Sending...");
    const res = await fetch("/api/sendEmail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, message, cf_token: cfToken, website }),
    });

    const data = await res.json();
    if (!res.ok) {
      alert(data.error || "Failed to send message");
      setButtonText("Send");
      // reset token so user can retry
      try {
        if (widgetIdRef.current && window.turnstile) {
          window.turnstile.reset(widgetIdRef.current);
        }
      } catch {}
      return;
    }

    alert("Successfully sent message");
    setButtonText("Send");
    setMessage("");
    // Refresh token for next submission
    try {
      if (widgetIdRef.current && window.turnstile) {
        window.turnstile.reset(widgetIdRef.current);
      }
    } catch {}
  };

  return (
    <footer className="bg-gray-900 text-white py-6">
      {/* Load Turnstile script; call onTurnstileLoad when ready */}
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js"
        strategy="afterInteractive"
        onReady={onTurnstileLoad}
      />

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link href="/lab">
              <Image
                src="https://res.cloudinary.com/dss5ymotz/image/upload/v1758199145/jadehouse_zzn0yl.png"
                alt="JadeHouse logo"
                width={64}
                height={64}
                className="mb-4"
                priority
              />
            </Link>
            <Link href="/lab">
              <h2 className="text-2xl font-bold mb-2">JadeHouse</h2>
            </Link>
            <p className="text-gray-400">House of memory for my professional and personal life</p>
          </div>

          {/* Navigation + Social */}
          <div>
            <h3 className="text-lg font-bold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/lab" className="text-gray-400 hover:text-white">
                  Lab
                </Link>
              </li>
              <li>
                <Link href="/disco" className="text-gray-400 hover:text-white">
                  Disco
                </Link>
              </li>
            </ul>

            <div className="flex items-center space-x-4 mt-4">
              <a
                className="text-gray-400 hover:text-white"
                href="mailto:HYUNWOO001@e.ntu.edu.sg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MailIcon className="h-6 w-6" />
              </a>
              <a
                className="text-gray-400 hover:text-white"
                href="https://twitter.com/JadeHouseDisco"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TwitterIcon className="h-6 w-6" />
              </a>
              <a
                className="text-gray-400 hover:text-white"
                href="https://github.com/JadeHouseDisco"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubIcon className="h-6 w-6" />
              </a>
              <a
                className="text-gray-400 hover:text-white"
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedinIcon className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Contact form */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-bold mb-4">Contact Me</h3>

            <form onSubmit={handleSubmit}>
              <input
                type="email"
                className="w-full bg-gray-800 text-white py-2 px-4 rounded-md mb-4"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <textarea
                className="w-full bg-gray-800 text-white py-2 px-4 rounded-md mb-4"
                rows={4}
                placeholder="Enter your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                maxLength={2000}
                required
              />

              {/* Honeypot (hidden) */}
              <input
                type="text"
                name="website"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              {/* Turnstile container (explicit render target) */}
              <div ref={widgetRef} className="mb-4" />

              <button
                type="submit"
                disabled={buttonText !== "Send" || !cfToken}
                className="inline-flex items-center justify-center h-10 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-950 bg-gray-50 text-gray-900 hover:bg-[#00a896] transition-colors duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
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

export default MainFooter;
