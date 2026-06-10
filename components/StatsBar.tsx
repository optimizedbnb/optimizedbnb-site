export default function StatsBar() {
  const stats = [
    { value: "21", label: "Properties" },
    { value: "500+", label: "5-Star Reviews" },
    { value: "#1", label: "Rated STR Host in Houston" },
    { value: "👨‍🍳", label: "Personal Chef Available" },
  ];

  return (
    <section className="bg-[#F2F2F2] border-y border-[#E5E5E5] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="font-display text-3xl font-bold text-[#111111] mb-1">{s.value}</p>
              <p className="text-[#666666] text-xs tracking-wide uppercase">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
