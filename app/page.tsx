"use client";

import { useState } from "react";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import StatsBar from "@/components/StatsBar";
import SuiteGrid from "@/components/SuiteGrid";
import ReviewsCarousel from "@/components/ReviewsCarousel";
import LeadGenForm from "@/components/LeadGenForm";
import ChefSection from "@/components/ChefSection";
import ManagementTeaser from "@/components/ManagementTeaser";
import Footer from "@/components/Footer";
import { PROPERTIES } from "@/data/properties";
import { FEATURED_REVIEWS } from "@/data/reviews";

export default function HomePage() {
  const [searchFilter, setSearchFilter] = useState<{ checkIn?: string; checkOut?: string; guests?: number }>({});

  function handleSearch(params: { checkIn: string; checkOut: string; guests: number }) {
    setSearchFilter(params);
    setTimeout(() => {
      document.getElementById("suites")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }

  return (
    <>
      <Nav />
      <main>
        <Hero onSearch={handleSearch} />
        <TrustStrip />
        <StatsBar />
        <SuiteGrid properties={PROPERTIES} searchFilter={searchFilter} />
        <ManagementTeaser />
        <ChefSection />

        {/* Reviews Section */}
        <section className="bg-[#202020] py-20 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
            <p className="text-[#E8192C] text-xs font-semibold tracking-[0.3em] uppercase mb-3">
              Guest Experiences
            </p>
            <h2 className="font-display text-4xl font-light text-white">
              What Our Guests Are{" "}
              <em className="not-italic text-[#E8192C]">Saying</em>
            </h2>
          </div>
          <ReviewsCarousel reviews={FEATURED_REVIEWS} />
        </section>

        <LeadGenForm />
      </main>
      <Footer />
    </>
  );
}
