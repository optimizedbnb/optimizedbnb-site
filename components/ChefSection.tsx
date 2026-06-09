import Link from "next/link";

export default function ChefSection() {
  return (
    <section id="chef" className="bg-[#181818] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[#E8192C] text-xs font-semibold tracking-[0.3em] uppercase mb-4">
              Premium Add-On
            </p>
            <h2 className="font-display text-4xl lg:text-5xl font-light text-white leading-tight mb-6">
              Elevate Your Stay with a{" "}
              <em className="not-italic text-[#E8192C]">Private Chef</em>
            </h2>
            <p className="text-white/60 text-base leading-relaxed mb-8">
              Through our exclusive Casa Kit partnership, guests can book a world-class private chef experience
              right in your suite. From intimate dinners to celebratory feasts, our chefs craft unforgettable
              dining experiences tailored to your group.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Custom menus crafted to your preferences",
                "Full setup, cooking, and cleanup included",
                "Available at any OptimizedBnB property",
                "Perfect for birthdays, anniversaries & group trips",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-white/70 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E8192C] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#E8192C] hover:bg-[#c9101f] text-white font-semibold px-8 py-3 rounded-xl transition-colors duration-200 text-sm"
            >
              Book a Chef Experience
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <div className="relative">
            <div className="bg-[#202020] rounded-2xl p-8 border border-white/5">
              <div className="text-6xl mb-4">👨‍🍳</div>
              <blockquote className="text-white/70 text-base italic leading-relaxed mb-4">
                &ldquo;If you have the opportunity to book Chef Caso please do! We ended up staying an additional
                night as we didn&apos;t want to leave.&rdquo;
              </blockquote>
              <p className="text-white font-semibold text-sm">Carly M.</p>
              <p className="text-white/40 text-xs">Interior Design Professional</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
