import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Property Management | OptimizedBnB",
  description: "Full-service short-term rental management in Houston. Let OptimizedBnB maximize your investment.",
};

export default function ManagementPage() {
  return (
    <>
      <Nav />
      <main className="pt-[calc(4rem+var(--banner-h))] min-h-screen">
        {/* Hero */}
        <section className="bg-[#F7F7F7] border-b border-[#E5E5E5] py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <p className="text-[#E8192C] text-xs font-semibold tracking-[0.3em] uppercase mb-4">
              For Property Owners
            </p>
            <h1 className="font-display text-5xl lg:text-6xl font-light text-[#111111] leading-tight mb-6">
              Full-Service STR{" "}
              <em className="not-italic text-[#E8192C]">Management</em>
            </h1>
            <p className="text-[#666666] text-xl max-w-2xl leading-relaxed mb-8">
              We turn your Houston property into a high-performing, hands-off investment. You earn more.
              We handle everything.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#E8192C] hover:bg-[#c9101f] text-white font-semibold px-8 py-4 rounded-xl transition-colors text-sm"
            >
              Get a Free Consultation
            </Link>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-display text-3xl font-semibold text-[#111111] mb-12 text-center">
              Everything Taken Care Of
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: "📈", title: "Dynamic Pricing", desc: "AI-powered pricing that maximizes revenue across seasons, events, and demand spikes." },
                { icon: "📸", title: "Professional Photography", desc: "Studio-quality photos and optimized listings across Airbnb, VRBO, and direct channels." },
                { icon: "🧹", title: "Cleaning & Turnover", desc: "Vetted, hotel-trained cleaning crews for every single checkout." },
                { icon: "💬", title: "Guest Communication", desc: "24/7 guest messaging, screening, and concierge-level support handled for you." },
                { icon: "🔧", title: "Maintenance Coordination", desc: "Trusted contractor network for fast repairs and proactive property upkeep." },
                { icon: "📊", title: "Revenue Reporting", desc: "Monthly statements, performance dashboards, and market benchmarks — always transparent." },
              ].map((s) => (
                <div key={s.title} className="bg-white rounded-2xl p-6 border border-[#E5E5E5]">
                  <div className="text-3xl mb-4">{s.icon}</div>
                  <h3 className="text-[#111111] font-semibold mb-2">{s.title}</h3>
                  <p className="text-[#666666] text-sm leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="bg-[#F2F2F2] py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-3xl font-semibold text-[#111111] mb-10">Our Track Record</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { metric: "30%+", label: "Avg Revenue Increase" },
                { metric: "21", label: "Managed Properties" },
                { metric: "500+", label: "5-Star Reviews" },
                { metric: "98%", label: "Occupancy Rate" },
              ].map((s) => (
                <div key={s.label} className="bg-white rounded-2xl p-6 border border-[#E5E5E5]">
                  <p className="font-display text-4xl font-bold text-[#E8192C] mb-2">{s.metric}</p>
                  <p className="text-[#666666] text-xs uppercase tracking-wider">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-3xl font-semibold text-[#111111] mb-10 text-center">
              Getting Started is Simple
            </h2>
            <div className="space-y-6">
              {[
                { step: "01", title: "Free Consultation", desc: "We assess your property, location, and earning potential — no commitment required." },
                { step: "02", title: "Property Setup", desc: "We handle photography, listing creation, pricing setup, and onboarding in as little as 7 days." },
                { step: "03", title: "Launch & Optimize", desc: "Your property goes live across all major platforms. We continuously optimize for maximum returns." },
                { step: "04", title: "Sit Back & Earn", desc: "Monthly payouts, transparent reporting, and zero day-to-day involvement required from you." },
              ].map((s) => (
                <div key={s.step} className="flex gap-6 items-start bg-white rounded-2xl p-6 border border-[#E5E5E5]">
                  <span className="font-display text-3xl font-bold text-[#E8192C]/30 shrink-0">{s.step}</span>
                  <div>
                    <h3 className="text-[#111111] font-semibold mb-1">{s.title}</h3>
                    <p className="text-[#666666] text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#E8192C]/10 border-t border-[#E8192C]/20 py-20 px-4 text-center">
          <h2 className="font-display text-3xl font-light text-[#111111] mb-4">
            Ready to Maximize Your Property?
          </h2>
          <p className="text-[#666666] mb-8 max-w-lg mx-auto">
            Book a free consultation and find out what your Houston property could earn with OptimizedBnB management.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#E8192C] hover:bg-[#c9101f] text-white font-semibold px-10 py-4 rounded-xl transition-colors text-sm"
            >
              Get a Free Consultation
            </Link>
            <a
              href="https://wa.me/17138983055"
              className="inline-flex items-center gap-2 bg-white border border-[#E5E5E5] hover:bg-[#F7F7F7] text-[#111111] font-semibold px-10 py-4 rounded-xl transition-colors text-sm"
            >
              WhatsApp: (713) 898-3055
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
