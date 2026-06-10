"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const STORAGE_KEY = "promo-banner-dismissed";

export default function PromoBanner() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (localStorage.getItem(STORAGE_KEY) === "1") {
      document.documentElement.style.setProperty("--banner-h", "0px");
      setVisible(false);
    }
  }, []);

  function dismiss() {
    setVisible(false);
    localStorage.setItem(STORAGE_KEY, "1");
    document.documentElement.style.setProperty("--banner-h", "0px");
  }

  if (!visible) return null;

  return (
    <div className="fixed top-0 inset-x-0 z-[60] h-10 bg-[#E8192C] text-white">
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center gap-4">
        <p className="text-xs sm:text-sm font-medium text-center">
          <span className="mr-1">💰</span>
          Book direct and save — no Airbnb service fees. Guests save up to 15%.
        </p>
        <Link
          href="/suites"
          className="hidden sm:inline-flex items-center px-3 py-1 bg-white text-[#E8192C] text-xs font-semibold rounded hover:bg-white/90 transition-colors duration-200 shrink-0"
        >
          Book Now
        </Link>
        <button
          onClick={dismiss}
          aria-label="Dismiss banner"
          className="absolute right-4 sm:right-6 lg:right-8 p-1 text-white/80 hover:text-white transition-colors duration-200"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}
