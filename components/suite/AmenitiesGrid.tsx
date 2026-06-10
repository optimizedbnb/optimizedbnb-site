const AMENITY_ICONS: Record<string, string> = {
  WiFi: "📶",
  Kitchen: "🍳",
  Parking: "🅿️",
  "Hot Tub": "🛁",
  Pool: "🏊",
  Backyard: "🌿",
  "Big Backyard": "🌳",
  BBQ: "🔥",
  "BBQ Grill": "🔥",
  "Game Room": "🎮",
  "Washer/Dryer": "🧺",
  "Air Conditioning": "❄️",
  TV: "📺",
  "Coffee Maker": "☕",
  Rooftop: "🏙️",
  "City Views": "🌆",
  "Mini Golf": "⛳",
  "Outdoor Dining": "🍽️",
  Patio: "☀️",
  Fireplace: "🔥",
  "Fire Pit": "🔥",
  Games: "🎲",
  "Board Games": "🎲",
  "King Bed": "🛏️",
  "Pool Table": "🎱",
};

const STANDARD_AMENITIES = [
  "WiFi",
  "Kitchen",
  "Parking",
  "Washer/Dryer",
  "Air Conditioning",
  "TV",
  "Coffee Maker",
];

interface Props {
  amenities?: string[];
}

export default function AmenitiesGrid({ amenities = [] }: Props) {
  const all = [...STANDARD_AMENITIES, ...amenities.filter((a) => !STANDARD_AMENITIES.includes(a))];

  return (
    <div>
      <h2 className="font-display text-2xl font-semibold text-[#111111] mb-6">What this place offers</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {all.map((a) => (
          <div key={a} className="flex items-center gap-3 text-[#111111] text-sm">
            <span className="text-xl shrink-0">{AMENITY_ICONS[a] ?? "✓"}</span>
            <span>{a}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
