import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import SuiteCard from "@/components/SuiteCard";
import { PROPERTIES } from "@/data/properties";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return PROPERTIES.map((p) => ({ slug: p.slug ?? p.id }));
}

export async function generateMetadata({ params }: Props) {
  const property = PROPERTIES.find((p) => p.slug === params.slug || p.id === params.slug);
  if (!property) return {};
  return {
    title: `${property.name} | OptimizedBnB`,
    description: property.publicName,
  };
}

const AMENITY_ICONS: Record<string, string> = {
  "Hot Tub": "🛁",
  "Pool": "🏊",
  "Backyard": "🌿",
  "BBQ Grill": "🔥",
  "Game Room": "🎮",
  "Rooftop": "🏙️",
  "Mini Golf": "⛳",
  "Outdoor Dining": "🍽️",
  "King Bed": "🛏️",
  "Pool Table": "🎱",
  "Fire Pit": "🔥",
  "Patio": "☀️",
  "City Views": "🌆",
  "Board Games": "🎲",
};

export default function SuitePage({ params }: Props) {
  const property = PROPERTIES.find((p) => p.slug === params.slug || p.id === params.slug);
  if (!property) notFound();

  const related = PROPERTIES.filter(
    (p) => p.id !== property.id && p.neighborhood === property.neighborhood
  ).slice(0, 3);

  return (
    <>
      <Nav />
      <main className="pt-16 min-h-screen">
        {/* Hero Photo */}
        <div className="relative h-[50vh] lg:h-[60vh] bg-[#181818]">
          <Image
            src={property.photo}
            alt={property.name}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent" />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10">
          {/* Suite Header */}
          <div className="bg-[#181818] rounded-2xl p-6 sm:p-8 border border-white/5 mb-8">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
              <div>
                <p className="text-[#E8192C] text-xs font-semibold tracking-[0.3em] uppercase mb-2">
                  {property.neighborhood} · Houston, TX
                </p>
                <h1 className="font-display text-3xl sm:text-4xl font-semibold text-white mb-2">
                  {property.name}
                </h1>
                <p className="text-white/50 text-sm mb-4">{property.publicName}</p>
                <div className="flex flex-wrap items-center gap-4 text-white/60 text-sm">
                  {property.guests && <span>👥 {property.guests} guests</span>}
                  {property.bedrooms && <span>🛏️ {property.bedrooms} bedrooms</span>}
                  {property.bathrooms && <span>🚿 {property.bathrooms} bathrooms</span>}
                  {property.rating && (
                    <span className="flex items-center gap-1">
                      <span className="text-yellow-400">★</span>
                      {property.rating.toFixed(2)}
                      {property.reviewCount && (
                        <span className="text-white/40">({property.reviewCount} reviews)</span>
                      )}
                    </span>
                  )}
                </div>
              </div>
              <div className="sm:text-right shrink-0">
                {property.pricePerNight && (
                  <p className="text-white text-2xl font-bold mb-1">
                    ${property.pricePerNight}
                    <span className="text-white/40 text-sm font-normal">/night</span>
                  </p>
                )}
                <a
                  href="tel:+18323537040"
                  className="inline-flex items-center gap-2 bg-[#E8192C] hover:bg-[#c9101f] text-white font-semibold px-6 py-3 rounded-xl transition-colors duration-200 text-sm"
                >
                  Reserve Now
                </a>
              </div>
            </div>
          </div>

          {/* Amenities */}
          {property.amenities && property.amenities.length > 0 && (
            <div className="bg-[#181818] rounded-2xl p-6 sm:p-8 border border-white/5 mb-8">
              <h2 className="text-white font-semibold text-lg mb-4">Amenities</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                {property.amenities.map((a) => (
                  <div key={a} className="flex items-center gap-2 text-white/70 text-sm bg-[#202020] rounded-lg px-3 py-2">
                    <span>{AMENITY_ICONS[a] ?? "✓"}</span>
                    <span>{a}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Book CTA */}
          <div className="bg-[#E8192C]/10 border border-[#E8192C]/20 rounded-2xl p-6 sm:p-8 mb-8 text-center">
            <h2 className="font-display text-2xl font-semibold text-white mb-2">Ready to Book?</h2>
            <p className="text-white/50 text-sm mb-6">
              Contact us to check availability and reserve this suite.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="tel:+18323537040"
                className="inline-flex items-center gap-2 bg-[#E8192C] hover:bg-[#c9101f] text-white font-semibold px-8 py-3 rounded-xl transition-colors text-sm"
              >
                📞 Call (832) 353-7040
              </a>
              <a
                href="mailto:optimizedbnb@gmail.com"
                className="inline-flex items-center gap-2 bg-[#202020] hover:bg-[#2a2a2a] text-white font-semibold px-8 py-3 rounded-xl transition-colors text-sm"
              >
                ✉️ Email Us
              </a>
            </div>
          </div>

          {/* Related Suites */}
          {related.length > 0 && (
            <div className="mb-16">
              <h2 className="font-display text-2xl font-semibold text-white mb-6">
                More in {property.neighborhood}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {related.map((p) => (
                  <SuiteCard key={p.id} property={p} />
                ))}
              </div>
            </div>
          )}

          <div className="mb-8">
            <Link href="/suites" className="text-[#E8192C] text-sm hover:underline flex items-center gap-2">
              ← All Suites
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
