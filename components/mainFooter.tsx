"use client";

import React, { useState } from "react";
import Script from "next/script";
import Image from "next/image";
import Link from "next/link";
import { GithubIcon, LinkedinIcon, MailIcon, TwitterIcon } from "@/components/icons";

const MainFooter: React.FC = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [buttonText, setButtonText] = useState("Send");
  const [cfToken, setCfToken] = useState("");   // Turnstile token
  const [website, setWebsite] = useState("");   // honeypot

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
      return;
    }
    alert("Successfully sent message");
    setButtonText("Send");
  };

  return (
    <footer className="bg-gray-900 text-white py-6">
      {/* Turnstile loader */}
      <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer />
      {/* ...your existing footer content... */}
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

        {/* Honeypot (bots will fill this; humans won't see it) */}
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
    </footer>
  );
};

export default MainFooter;
