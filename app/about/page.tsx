import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | OptimizedBnB",
  description: "Learn about OptimizedBnB — Houston's premier luxury short-term rental company.",
};

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main className="pt-16 min-h-screen">
        {/* Header */}
        <section className="bg-[#181818] border-b border-white/5 py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-[#E8192C] text-xs font-semibold tracking-[0.3em] uppercase mb-4">Our Story</p>
            <h1 className="font-display text-5xl font-light text-white mb-6">
              Houston&apos;s{" "}
              <em className="not-italic text-[#E8192C]">Premier</em> STR Company
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
              Founded by Keenen and Wale, OptimizedBnB was built on a simple belief: every guest deserves a
              hotel-quality experience in a home that feels truly theirs.
            </p>
          </div>
        </section>

        {/* Story */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="font-display text-3xl font-semibold text-white mb-6">Who We Are</h2>
              <div className="space-y-4 text-white/65 leading-relaxed">
                <p>
                  OptimizedBnB is Houston&apos;s leading short-term rental company, managing 21 luxury properties
                  across the city&apos;s most sought-after neighborhoods — from the Medical Center and Downtown
                  to EaDo and Cypress.
                </p>
                <p>
                  We&apos;re more than just a rental company. Every detail of every stay is curated with care:
                  hotel-grade linens, spotless interiors, seamless keycode access, and a team that&apos;s always
                  available when you need us.
                </p>
                <p>
                  Our 500+ five-star reviews speak to something deeper — guests who felt genuinely welcomed,
                  cared for, and excited to return.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {[
                { stat: "21", label: "Active Properties", desc: "Across Houston's best neighborhoods" },
                { stat: "500+", label: "5-Star Reviews", desc: "The highest rating in Houston STRs" },
                { stat: "2", label: "Years Operating", desc: "Growing fast since 2024" },
                { stat: "24/7", label: "Guest Support", desc: "Always here when you need us" },
              ].map((item) => (
                <div key={item.label} className="bg-[#181818] rounded-xl p-5 border border-white/5">
                  <div className="flex items-center gap-4">
                    <span className="font-display text-3xl font-bold text-[#E8192C]">{item.stat}</span>
                    <div>
                      <p className="text-white font-semibold text-sm">{item.label}</p>
                      <p className="text-white/45 text-xs">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="bg-[#202020] py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl font-semibold text-white mb-10 text-center">What We Stand For</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                {
                  icon: "⭐",
                  title: "Uncompromising Quality",
                  desc: "Hotel-grade standards in every property. We inspect every suite before and after every stay.",
                },
                {
                  icon: "🤝",
                  title: "Genuine Hospitality",
                  desc: "Welcome notes, thoughtful touches, and a team that treats every guest like family.",
                },
                {
                  icon: "🏡",
                  title: "Your Home Away From Home",
                  desc: "Every suite is designed to feel personal, comfortable, and truly yours for the duration of your stay.",
                },
              ].map((v) => (
                <div key={v.title} className="bg-[#181818] rounded-2xl p-6 border border-white/5">
                  <div className="text-3xl mb-4">{v.icon}</div>
                  <h3 className="text-white font-semibold mb-2">{v.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 text-center">
          <h2 className="font-display text-3xl font-light text-white mb-4">
            Ready to Experience It?
          </h2>
          <p className="text-white/50 mb-8">Browse our full collection of luxury Houston suites.</p>
          <Link
            href="/suites"
            className="inline-flex items-center gap-2 bg-[#E8192C] hover:bg-[#c9101f] text-white font-semibold px-10 py-4 rounded-xl transition-colors text-sm"
          >
            View All Suites
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
