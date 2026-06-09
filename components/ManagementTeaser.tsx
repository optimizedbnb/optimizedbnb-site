import Link from "next/link";

export default function ManagementTeaser() {
  return (
    <section className="bg-[#202020] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <p className="text-[#E8192C] text-xs font-semibold tracking-[0.3em] uppercase mb-4">
            For Property Owners
          </p>
          <h2 className="font-display text-4xl lg:text-5xl font-light text-white leading-tight mb-6">
            Let Us Manage Your{" "}
            <em className="not-italic text-[#E8192C]">Investment</em>
          </h2>
          <p className="text-white/60 text-base leading-relaxed mb-8 max-w-2xl">
            OptimizedBnB offers full-service short-term rental management across Houston. We handle everything
            from listing optimization and dynamic pricing to guest communication, cleaning coordination, and
            maintenance — so you earn more without the hassle.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-10">
            {[
              { metric: "30%+", label: "Revenue Increase" },
              { metric: "21", label: "Managed Properties" },
              { metric: "500+", label: "5-Star Reviews" },
              { metric: "24/7", label: "Guest Support" },
            ].map((s) => (
              <div key={s.label} className="bg-[#181818] rounded-xl p-4 border border-white/5">
                <p className="font-display text-2xl font-bold text-[#E8192C] mb-1">{s.metric}</p>
                <p className="text-white/50 text-xs">{s.label}</p>
              </div>
            ))}
          </div>
          <Link
            href="/management"
            className="inline-flex items-center gap-2 text-[#E8192C] font-semibold text-sm hover:gap-3 transition-all duration-200"
          >
            Learn About Our Management Services
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
