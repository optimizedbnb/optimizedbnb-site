"use client";

import type { Review } from "@/types";

interface Props {
  reviews: Review[];
}

function StarRow({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="text-yellow-400 text-sm">★</span>
      ))}
    </div>
  );
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="w-80 shrink-0 bg-white rounded-xl p-6 mx-3 border border-[#E5E5E5]">
      <StarRow count={review.rating} />
      <p className="text-[#666666] text-sm leading-relaxed mt-3 mb-4 line-clamp-5">
        &ldquo;{review.text}&rdquo;
      </p>
      <div>
        <p className="text-[#111111] text-sm font-semibold">{review.guest}</p>
        <p className="text-[#666666] text-xs">{review.tag}</p>
      </div>
    </div>
  );
}

export default function ReviewsCarousel({ reviews }: Props) {
  const doubled = [...reviews, ...reviews];

  return (
    <div className="overflow-hidden">
      <div className="carousel-track">
        {doubled.map((review, i) => (
          <ReviewCard key={i} review={review} />
        ))}
      </div>
    </div>
  );
}
