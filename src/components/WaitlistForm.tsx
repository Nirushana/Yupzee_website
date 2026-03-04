"use client";

import { useState } from "react";

interface WaitlistFormProps {
  /** Visual variant — "default" for light backgrounds, "outline" for dark/coloured backgrounds */
  variant?: "default" | "outline";
  className?: string;
}

export default function WaitlistForm({
  variant = "default",
  className = "",
}: WaitlistFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className={`flex items-center gap-2 ${variant === "outline" ? "text-white/90" : "text-gray-700"} ${className}`}>
        <svg className="w-5 h-5 text-green-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
        <span className="text-sm font-medium">You&apos;re on the list. We&apos;ll be in touch.</span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`flex flex-col sm:flex-row gap-3 ${className}`}>
      <input
        type="email"
        required
        placeholder="your@uni.ac.uk"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={status === "loading"}
        className={`flex-1 min-w-0 px-4 py-3 rounded-full text-sm outline-none transition-all disabled:opacity-60 ${
          variant === "outline"
            ? "bg-white/10 border border-white/30 text-white placeholder-white/50 focus:border-white/60 focus:bg-white/20"
            : "bg-white border border-gray-200 text-gray-900 placeholder-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/20"
        }`}
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className={`shrink-0 px-6 py-3 rounded-full text-sm font-semibold transition-colors disabled:opacity-60 ${
          variant === "outline"
            ? "bg-white text-primary-dark hover:bg-primary-light"
            : "bg-primary hover:bg-primary-dark text-white"
        }`}
      >
        {status === "loading" ? "Joining…" : "Join waitlist"}
      </button>
      {status === "error" && (
        <p className={`text-xs mt-1 sm:mt-0 sm:self-center ${variant === "outline" ? "text-red-300" : "text-red-500"}`}>
          Something went wrong. Try again.
        </p>
      )}
    </form>
  );
}
