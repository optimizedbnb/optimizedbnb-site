export default function TrustStrip() {
  const items = [
    {
      icon: "⭐",
      title: "5-Star Standards",
      desc: "Hotel-grade cleanliness and comfort in every suite",
    },
    {
      icon: "🔒",
      title: "Secure & Verified",
      desc: "Keycode access, secure buildings, verified properties",
    },
    {
      icon: "👨‍🍳",
      title: "Personal Chef Available",
      desc: "Private dining experiences via our Casa Kit partnership",
    },
  ];

  return (
    <section className="bg-[#F7F7F7] py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#E5E5E5]">
          {items.map((item) => (
            <div key={item.title} className="flex items-start gap-4 py-6 md:py-0 md:px-8 first:md:pl-0 last:md:pr-0">
              <span className="text-3xl shrink-0">{item.icon}</span>
              <div>
                <h3 className="text-[#111111] font-semibold text-sm mb-1">{item.title}</h3>
                <p className="text-[#666666] text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
