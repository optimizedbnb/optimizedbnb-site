const HIGHLIGHTS = [
  "NRG Stadium Events",
  "Medical Center Visits",
  "Downtown Nightlife",
  "Astros & Rockets Games",
  "Birthday Celebrations",
  "Group Getaways",
  "Houston Rodeo",
  "Texas Medical Center",
  "Corporate Travel",
];

export default function PerfectForSection() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-display text-3xl sm:text-4xl font-light text-[#111111] mb-8">
          Perfect for Your{" "}
          <em className="not-italic text-[#E8192C]">Houston Trip</em>
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-3">
          {HIGHLIGHTS.map((label) => (
            <span
              key={label}
              className="px-5 py-2.5 rounded-full border border-[#E5E5E5] bg-white text-[#666666] text-sm tracking-wide hover:border-[#E8192C]/50 hover:text-[#111111] transition-colors duration-200"
            >
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
