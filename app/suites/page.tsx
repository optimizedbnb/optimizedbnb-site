"use client";

import { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import SuiteCard from "@/components/SuiteCard";
import { PROPERTIES } from "@/data/properties";

const NEIGHBORHOODS = ["All", "Med Center", "Downtown", "EaDo", "Cypress", "Houston"];
const AMENITIES = ["Hot Tub", "Pool", "Backyard", "BBQ Grill", "Game Room", "Rooftop", "Mini Golf", "Outdoor Dining"];

function SuitesContent() {
  const searchParams = useSearchParams();
  const guestsParam = parseInt(searchParams.get("guests") || "1");

  const [neighborhood, setNeighborhood] = useState("All");
  const [minGuests, setMinGuests] = useState(guestsParam);
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);
  const [sort, setSort] = useState("top-rated");

  function toggleAmenity(a: string) {
    setSelectedAmenities((prev) =>
      prev.includes(a) ? prev.filter((x) => x !== a) : [...prev, a]
    );
  }

  const filtered = useMemo(() => {
    let list = PROPERTIES;
    if (neighborhood !== "All") list = list.filter((p) => p.neighborhood === neighborhood);
    if (minGuests > 1) list = list.filter((p) => (p.guests ?? 0) >= minGuests);
    if (selectedAmenities.length > 0) {
      list = list.filter((p) =>
        selectedAmenities.every((a) => p.amenities?.includes(a))
      );
    }
    if (sort === "price-asc") list = [...list].sort((a, b) => (a.pricePerNight ?? 0) - (b.pricePerNight ?? 0));
    if (sort === "price-desc") list = [...list].sort((a, b) => (b.pricePerNight ?? 0) - (a.pricePerNight ?? 0));
    if (sort === "top-rated") list = [...list].sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0));
    return list;
  }, [neighborhood, minGuests, selectedAmenities, sort]);

  return (
    <>
      <Nav />
      <main className="pt-[calc(4rem+var(--banner-h))] min-h-screen">
        <div className="bg-[#181818] border-b border-white/5 py-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <p className="text-[#E8192C] text-xs font-semibold tracking-[0.3em] uppercase mb-2">
              Houston, Texas
            </p>
            <h1 className="font-display text-4xl lg:text-5xl font-light text-white">
              All <em className="not-italic text-[#E8192C]">Suites</em>
            </h1>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <aside className="w-full lg:w-60 shrink-0 space-y-8">
              {/* Neighborhood */}
              <div>
                <h3 className="text-white text-xs font-semibold tracking-widest uppercase mb-3">Neighborhood</h3>
                <div className="space-y-1">
                  {NEIGHBORHOODS.map((n) => (
                    <button
                      key={n}
                      onClick={() => setNeighborhood(n)}
                      className={`block w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                        neighborhood === n
                          ? "bg-[#E8192C]/10 text-[#E8192C] font-medium"
                          : "text-white/60 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      {n}
                    </button>
                  ))}
                </div>
              </div>

              {/* Guests */}
              <div>
                <h3 className="text-white text-xs font-semibold tracking-widest uppercase mb-3">Min. Guests</h3>
                <select
                  value={minGuests}
                  onChange={(e) => setMinGuests(Number(e.target.value))}
                  className="w-full bg-[#202020] border border-white/10 rounded-lg px-3 py-2 text-white text-sm outline-none focus:border-[#E8192C]/60"
                >
                  {[1, 2, 4, 6, 8, 10, 12, 15].map((n) => (
                    <option key={n} value={n} className="bg-[#202020]">
                      {n}+ guests
                    </option>
                  ))}
                </select>
              </div>

              {/* Amenities */}
              <div>
                <h3 className="text-white text-xs font-semibold tracking-widest uppercase mb-3">Amenities</h3>
                <div className="space-y-2">
                  {AMENITIES.map((a) => (
                    <label key={a} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedAmenities.includes(a)}
                        onChange={() => toggleAmenity(a)}
                        className="accent-[#E8192C]"
                      />
                      <span className="text-white/60 text-sm">{a}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Reset */}
              {(neighborhood !== "All" || minGuests > 1 || selectedAmenities.length > 0) && (
                <button
                  onClick={() => { setNeighborhood("All"); setMinGuests(1); setSelectedAmenities([]); }}
                  className="text-[#E8192C] text-sm hover:underline"
                >
                  Clear all filters
                </button>
              )}
            </aside>

            {/* Grid */}
            <div className="flex-1">
              <div className="flex items-center justify-between mb-6">
                <p className="text-white/50 text-sm">{filtered.length} suites</p>
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="bg-[#202020] border border-white/10 rounded-lg px-3 py-2 text-white text-sm outline-none focus:border-[#E8192C]/60"
                >
                  <option value="top-rated" className="bg-[#202020]">Top Rated</option>
                  <option value="price-asc" className="bg-[#202020]">Price: Low to High</option>
                  <option value="price-desc" className="bg-[#202020]">Price: High to Low</option>
                </select>
              </div>
              {filtered.length === 0 ? (
                <div className="text-center py-16 text-white/45">
                  <p>No suites match your filters.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                  {filtered.map((p) => (
                    <SuiteCard key={p.id} property={p} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default function SuitesPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#111111]" />}>
      <SuitesContent />
    </Suspense>
  );
}
