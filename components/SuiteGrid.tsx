"use client";

import { useState, useMemo } from "react";
import type { Property } from "@/types";
import SuiteCard from "./SuiteCard";

const FILTER_PILLS = [
  { label: "All Suites", value: "all" },
  { label: "Entire Home", value: "entire-home" },
  { label: "Med Center", value: "Med Center" },
  { label: "Downtown HTX", value: "Downtown" },
  { label: "Cypress", value: "Cypress" },
  { label: "Near Galleria", value: "Galleria" },
  { label: "Sleeps 10+", value: "sleeps-10" },
  { label: "Top Rated", value: "top-rated" },
];

interface Props {
  properties: Property[];
  searchFilter?: { checkIn?: string; checkOut?: string; guests?: number };
}

export default function SuiteGrid({ properties, searchFilter }: Props) {
  const [active, setActive] = useState("all");

  const filtered = useMemo(() => {
    let list = properties;

    if (searchFilter?.guests) {
      list = list.filter((p) => (p.guests ?? 0) >= (searchFilter.guests ?? 0));
    }

    if (active === "all") return list;
    if (active === "sleeps-10") return list.filter((p) => (p.guests ?? 0) >= 10);
    if (active === "top-rated") return list.filter((p) => (p.rating ?? 0) >= 4.9);
    if (active === "entire-home") return list;
    return list.filter((p) => p.neighborhood === active);
  }, [properties, active, searchFilter]);

  return (
    <section id="suites" className="py-12">
      {/* Filter Pills */}
      <div className="flex flex-wrap gap-2 mb-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {FILTER_PILLS.map((pill) => (
          <button
            key={pill.value}
            onClick={() => setActive(pill.value)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
              active === pill.value
                ? "bg-[#E8192C] text-white"
                : "bg-[#202020] text-white/60 hover:text-white hover:bg-[#2a2a2a]"
            }`}
          >
            {pill.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filtered.length === 0 ? (
          <div className="text-center py-16 text-white/45">
            <p className="text-lg">No suites match your filters.</p>
            <button
              className="mt-4 text-[#E8192C] text-sm hover:underline"
              onClick={() => setActive("all")}
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((p) => (
              <SuiteCard key={p.id} property={p} />
            ))}
          </div>
        )}
        <p className="text-white/30 text-sm mt-6 text-center">
          {filtered.length} suite{filtered.length !== 1 ? "s" : ""} available
        </p>
      </div>
    </section>
  );
}
