import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#111111] border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex mb-4">
              <Image src="/logo.png" alt="OptimizedBnB" width={140} height={48} className="object-contain" />
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
                <a href="https://wa.me/17138983055" className="hover:text-white transition-colors">
                  WhatsApp: (713) 898-3055
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
