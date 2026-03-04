"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("yupzee-cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  const handleAccept = () => {
    localStorage.setItem("yupzee-cookie-consent", "accepted");
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("yupzee-cookie-consent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-gray-950/98 backdrop-blur border-t border-gray-800">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-300 text-center sm:text-left leading-relaxed">
          We use cookies to improve your experience and analyse site usage. Read
          our{" "}
          <Link
            href="/legal/cookies"
            className="underline text-teal hover:text-white/60 transition-colors"
          >
            Cookie Policy
          </Link>{" "}
          for details.
        </p>
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={handleDecline}
            className="text-sm text-gray-400 hover:text-white transition-colors px-4 py-2"
          >
            Decline
          </button>
          <button
            onClick={handleAccept}
            className="bg-primary hover:bg-primary-dark text-white text-sm font-semibold px-6 py-2 rounded-full transition-colors"
          >
            Accept all
          </button>
        </div>
      </div>
    </div>
  );
}
