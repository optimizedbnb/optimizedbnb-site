import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#111111] border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image src="/logo.svg" alt="OptimizedBnB" width={40} height={40} className="object-contain" unoptimized />
              <span className="font-display text-xl font-semibold">
                <span style={{ color: "#E8192C" }}>OPTIMIZED</span>
                <span className="text-white">BNB</span>
              </span>
            </Link>
            <p className="text-white/45 text-sm leading-relaxed">
              Houston&apos;s premier luxury short-term rental company. 21 properties, 500+ five-star reviews.
            </p>
          </div>

          {/* Nav */}
          <div>
            <h3 className="text-white text-sm font-semibold mb-4 tracking-widest uppercase">Navigation</h3>
            <ul className="space-y-2">
              {[
                { label: "All Suites", href: "/suites" },
                { label: "About Us", href: "/about" },
                { label: "Management", href: "/management" },
                { label: "Contact", href: "/contact" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-white/45 hover:text-white text-sm transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-sm font-semibold mb-4 tracking-widest uppercase">Contact</h3>
            <ul className="space-y-2 text-sm text-white/45">
              <li>
                <a href="tel:+18323537040" className="hover:text-white transition-colors">
                  (832) 353-7040
                </a>
              </li>
              <li>
                <a href="mailto:optimizedbnb@gmail.com" className="hover:text-white transition-colors">
                  optimizedbnb@gmail.com
                </a>
              </li>
              <li>Houston, TX</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 text-center text-white/30 text-sm">
          © 2026 OptimizedBnB · Houston, TX
        </div>
      </div>
    </footer>
  );
}
