"use client";

import React, { useState } from "react";
import Script from "next/script";
import Image from "next/image";
import Link from "next/link";
import {
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  YoutubeIcon,
  GoogleScholarIcon,
  ORCIDIcon,
} from "@/components/icons";

const LabFooter: React.FC = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [buttonText, setButtonText] = useState("Send");

  // Turnstile + honeypot
  const [cfToken, setCfToken] = useState("");
  const [website, setWebsite] = useState(""); // honeypot

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setButtonText("Sending...");

    const res = await fetch("/api/sendEmail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        message,
        cf_token: cfToken,
        website,
      }),
    });

    const data = await res.json();
    if (!res.ok) {
      alert(data.error || "Failed to send message");
      setButtonText("Send");
      return;
    }
    alert("Successfully sent message");
    setButtonText("Send");
    setMessage("");
    // optional: keep email so user doesn’t need to retype
  };

  return (
    <footer className="bg-gray-900 text-white py-6">
      {/* Turnstile loader */}
      <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer />

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link href="/lab">
              <Image
                src="https://res.cloudinary.com/dss5ymotz/image/upload/v1758199144/lab_ookoc5.png"
                alt="lab logo"
                width={64}
                height={64}
                className="mb-4"
                priority
              />
            </Link>
            <Link href="/lab">
              <h2 className="text-2xl font-bold mb-2">JadeHouse Lab</h2>
            </Link>
            <p className="text-gray-400">Portfolio of my professional life</p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/lab" className="text-gray-400 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/lab/aboutme" className="text-gray-400 hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="/lab/experiences" className="text-gray-400 hover:text-white">
                  Experiences
                </Link>
              </li>
              <li>
                <Link href="/lab/ideas" className="text-gray-400 hover:text-white">
                  Ideas
                </Link>
              </li>
              <li>
                <Link href="/lab/litrev" className="text-gray-400 hover:text-white">
                  Literature Reviews
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
              <a
                className="text-gray-400 hover:text-white"
                href="https://www.youtube.com/@JadeHouseCinema"
                target="_blank"
                rel="noopener noreferrer"
              >
                <YoutubeIcon className="h-6 w-6" />
              </a>
              <a
                className="text-gray-400 hover:text-white"
                href="https://scholar.google.com/citations?hl=en&user=G5N12aYAAAAJ"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GoogleScholarIcon className="h-6 w-6" />
              </a>
              <a
                className="text-gray-400 hover:text-white"
                href="https://orcid.org/0009-0004-2586-0493"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ORCIDIcon className="h-6 w-6" />
              </a>
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

              {/* Turnstile widget */}
              <div
                className="cf-turnstile mb-4"
                data-sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}
                data-callback={(token: string) => setCfToken(token)}
              />

              <button
                type="submit"
                disabled={buttonText !== "Send"}
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

export default LabFooter;
