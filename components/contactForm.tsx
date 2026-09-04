"use client";

import Script from "next/script";
import { useEffect, useRef, useState } from "react";

interface TurnstileOptions {
  sitekey: string;
  theme?: "dark" | "light" | "auto";
  size?: "normal" | "compact" | "flexible";
  callback?: (token: string) => void;
  "error-callback"?: () => void;
  "expired-callback"?: () => void;
  "timeout-callback"?: () => void;
}

declare global {
  interface Window {
    turnstile?: {
      render: (element: HTMLElement, options: TurnstileOptions) => string;
      reset: (widgetId: string) => void;
      remove?: (widgetId: string) => void;
    };
  }
}

type SubmissionState = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [website, setWebsite] = useState("");
  const [turnstileToken, setTurnstileToken] = useState("");
  const [submissionState, setSubmissionState] = useState<SubmissionState>("idle");
  const [feedback, setFeedback] = useState("");
  const widgetRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);
  const requestControllerRef = useRef<AbortController | null>(null);

  const resetTurnstile = () => {
    setTurnstileToken("");
    if (widgetIdRef.current && window.turnstile) {
      window.turnstile.reset(widgetIdRef.current);
    }
  };

  const renderTurnstile = () => {
    if (!widgetRef.current || !window.turnstile || widgetIdRef.current) return;

    const sitekey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
    if (!sitekey) {
      setSubmissionState("error");
      setFeedback("The contact form is temporarily unavailable.");
      return;
    }

    widgetIdRef.current = window.turnstile.render(widgetRef.current, {
      sitekey,
      theme: "dark",
      size: "flexible",
      callback: setTurnstileToken,
      "error-callback": () => setTurnstileToken(""),
      "expired-callback": () => setTurnstileToken(""),
      "timeout-callback": () => setTurnstileToken(""),
    });
  };

  useEffect(() => {
    return () => {
      requestControllerRef.current?.abort();
      if (widgetIdRef.current && window.turnstile?.remove) {
        window.turnstile.remove(widgetIdRef.current);
      }
    };
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!turnstileToken || submissionState === "sending") return;

    setSubmissionState("sending");
    setFeedback("");
    const controller = new AbortController();
    requestControllerRef.current = controller;
    const timeoutId = window.setTimeout(() => controller.abort(), 12_000);

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          message,
          cf_token: turnstileToken,
          website,
        }),
        signal: controller.signal,
      });
      const result = (await response.json().catch(() => ({}))) as { error?: string };

      if (!response.ok) {
        throw new Error(result.error || "Failed to send message");
      }

      setEmail("");
      setMessage("");
      setSubmissionState("success");
      setFeedback("Your message was sent successfully.");
    } catch (error) {
      setSubmissionState("error");
      setFeedback(
        error instanceof Error && error.name !== "AbortError"
          ? error.message
          : "The request timed out. Please try again.",
      );
    } finally {
      window.clearTimeout(timeoutId);
      requestControllerRef.current = null;
      resetTurnstile();
    }
  };

  return (
    <>
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
        strategy="afterInteractive"
        onLoad={renderTurnstile}
        onReady={renderTurnstile}
      />
      <form onSubmit={handleSubmit}>
        <label htmlFor="contact-email" className="sr-only">
          Email address
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          className="mb-4 w-full rounded-md bg-gray-800 px-4 py-2 text-white"
          placeholder="Enter your email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          maxLength={320}
          required
        />

        <label htmlFor="contact-message" className="sr-only">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          className="mb-4 w-full rounded-md bg-gray-800 px-4 py-2 text-white"
          rows={4}
          placeholder="Enter your message"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          maxLength={2000}
          required
        />

        <label htmlFor="contact-website" className="sr-only" aria-hidden="true">
          Website
        </label>
        <input
          id="contact-website"
          name="website"
          type="text"
          value={website}
          onChange={(event) => setWebsite(event.target.value)}
          className="absolute -left-[10000px] h-px w-px overflow-hidden"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
        />

        <div ref={widgetRef} className="mb-4 min-h-[65px] max-w-full overflow-hidden" />

        <button
          type="submit"
          disabled={submissionState === "sending" || !turnstileToken}
          className="inline-flex h-10 items-center justify-center rounded-md bg-gray-50 px-4 text-gray-900 transition-colors duration-300 ease-in-out hover:bg-[#00a896] focus:outline-none focus:ring-2 focus:ring-gray-950 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {submissionState === "sending" ? "Sending…" : "Send"}
        </button>

        <p
          className={`mt-3 text-sm ${submissionState === "error" ? "text-red-300" : "text-green-300"}`}
          role="status"
          aria-live="polite"
        >
          {feedback}
        </p>
      </form>
    </>
  );
}
