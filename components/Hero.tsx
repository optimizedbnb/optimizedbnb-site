"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface Props {
  onSearch?: (params: { checkIn: string; checkOut: string; guests: number }) => void;
}

export default function Hero({ onSearch }: Props) {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(2);
  const router = useRouter();

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    if (onSearch) {
      onSearch({ checkIn, checkOut, guests });
    } else {
      const params = new URLSearchParams();
      if (checkIn) params.set("checkIn", checkIn);
      if (checkOut) params.set("checkOut", checkOut);
      if (guests) params.set("guests", String(guests));
      router.push(`/suites?${params.toString()}`);
    }
    // Scroll to suites
    document.getElementById("suites")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-[#F7F7F7]" />
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 50% 0%, rgba(232,25,44,0.15) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Eyebrow */}
        <p className="text-[#E8192C] text-xs font-semibold tracking-[0.3em] uppercase mb-6">
          Houston · Texas · 5-Star Luxury Stays
        </p>

        {/* Headline */}
        <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-light text-[#111111] leading-tight mb-6">
          Your Home Away From{" "}
          <em className="not-italic text-[#E8192C] font-semibold">Home</em>
        </h1>

        {/* Subtext */}
        <p className="text-[#666666] text-lg sm:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
          Opulent suites, expertly managed. Seamless stays across Houston&apos;s most sought-after neighborhoods.
        </p>

        {/* Search Bar */}
        <form
          onSubmit={handleSearch}
          className="bg-white border border-[#E8192C] rounded-2xl p-2 flex flex-col sm:flex-row items-stretch gap-2 max-w-2xl mx-auto shadow-xl"
        >
          <div className="flex-1 flex flex-col px-4 py-2 border-b sm:border-b-0 sm:border-r border-[#E5E5E5]">
            <label className="text-[#666666] text-xs font-medium uppercase tracking-wider mb-1">Check-in</label>
            <input
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="bg-transparent text-[#111111] text-sm outline-none [color-scheme:light]"
              min={new Date().toISOString().split("T")[0]}
            />
          </div>
          <div className="flex-1 flex flex-col px-4 py-2 border-b sm:border-b-0 sm:border-r border-[#E5E5E5]">
            <label className="text-[#666666] text-xs font-medium uppercase tracking-wider mb-1">Check-out</label>
            <input
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="bg-transparent text-[#111111] text-sm outline-none [color-scheme:light]"
              min={checkIn || new Date().toISOString().split("T")[0]}
            />
          </div>
          <div className="flex-1 flex flex-col px-4 py-2 border-b sm:border-b-0 sm:border-r border-[#E5E5E5]">
            <label className="text-[#666666] text-xs font-medium uppercase tracking-wider mb-1">Guests</label>
            <select
              value={guests}
              onChange={(e) => setGuests(Number(e.target.value))}
              className="bg-transparent text-[#111111] text-sm outline-none"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 15].map((n) => (
                <option key={n} value={n} className="bg-white">
                  {n} guest{n !== 1 ? "s" : ""}
                </option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            className="bg-[#E8192C] hover:bg-[#c9101f] text-white font-semibold px-8 py-3 rounded-xl transition-colors duration-200 whitespace-nowrap text-sm"
          >
            Search
          </button>
        </form>

        {/* Trust badges */}
        <div className="flex flex-wrap items-center justify-center gap-6 mt-10 text-[#666666] text-xs">
          <span>⭐ 500+ Five-Star Reviews</span>
          <span>·</span>
          <span>🏠 21 Properties</span>
          <span>·</span>
          <span>✓ Instant Confirmation</span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-5 h-5 text-[#111111]/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
