"use client";

import { useState } from "react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/newsletter", {
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

  return (
    <section className="bg-[#202020] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="font-display text-3xl sm:text-4xl font-light text-white mb-3">
          Get Exclusive Deals &amp; <em className="not-italic text-[#E8192C]">Early Access</em>
        </h2>
        <p className="text-white/50 text-base mb-8">
          Be first to know about new properties, special rates, and Houston event availability.
        </p>

        {status === "success" ? (
          <p className="text-white font-semibold">✓ You&apos;re on the list — check your inbox soon!</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              required
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-[#181818] border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-white/30 focus:outline-none focus:border-[#E8192C]/60 transition-colors"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="bg-[#E8192C] hover:bg-[#c9101f] disabled:opacity-50 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200 text-sm whitespace-nowrap"
            >
              {status === "loading" ? "Sending..." : "Get Access →"}
            </button>
          </form>
        )}
        {status === "error" && (
          <p className="text-[#E8192C] text-sm mt-3">Something went wrong. Please try again.</p>
        )}
      </div>
    </section>
  );
}
