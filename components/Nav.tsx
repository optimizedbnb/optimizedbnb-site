"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#111111]/95 backdrop-blur-sm border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo + Wordmark */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <Image src="/logo.svg" alt="OptimizedBnB Logo" width={36} height={36} className="object-contain" unoptimized />
          <span className="font-display text-lg font-semibold tracking-wide">
            <span style={{ color: "#E8192C" }}>OPTIMIZED</span>
            <span className="text-white">BNB</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { label: "Suites", href: "/suites" },
            { label: "About", href: "/about" },
            { label: "Management", href: "/management" },
            { label: "Personal Chef", href: "/#chef" },
            { label: "Contact", href: "/contact" },
          ].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-white/70 hover:text-white transition-colors duration-200 tracking-wide"
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-3">
          <Link
            href="/suites"
            className="hidden sm:inline-flex items-center px-5 py-2 bg-[#E8192C] text-white text-sm font-semibold rounded hover:bg-[#c9101f] transition-colors duration-200"
          >
            Book Now
          </Link>
          <button
            className="md:hidden p-2 text-white/70 hover:text-white"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#181818] border-t border-white/5 px-4 py-4 space-y-3">
          {[
            { label: "Suites", href: "/suites" },
            { label: "About", href: "/about" },
            { label: "Management", href: "/management" },
            { label: "Personal Chef", href: "/#chef" },
            { label: "Contact", href: "/contact" },
          ].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="block py-2 text-white/70 hover:text-white text-sm"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/suites"
            className="block w-full text-center py-2 bg-[#E8192C] text-white text-sm font-semibold rounded"
            onClick={() => setOpen(false)}
          >
            Book Now
          </Link>
        </div>
      )}
    </nav>
  );
}
