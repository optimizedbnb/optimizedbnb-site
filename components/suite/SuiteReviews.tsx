"use client";

import { useEffect, useState } from "react";

interface RawReview {
  guest?: string;
  guest_name?: string;
  reviewer_name?: string;
  rating?: number;
  overall_rating?: number;
  text?: string;
  public_review?: string;
  comment?: string;
  date?: string;
  submitted_at?: string;
  created_at?: string;
  tag?: string;
}

interface NormalizedReview {
  guest: string;
  rating: number;
  text: string;
  date?: string;
  tag?: string;
}

function StarRow({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={`text-sm ${i < count ? "text-yellow-400" : "text-[#E5E5E5]"}`}>
          ★
        </span>
      ))}
    </div>
  );
}

function formatDate(date?: string) {
  if (!date) return null;
  const parsed = new Date(date);
  if (isNaN(parsed.getTime())) return null;
  return parsed.toLocaleDateString("en-US", { month: "long", year: "numeric" });
}

interface Props {
  propertyId: string;
  rating?: number;
  reviewCount?: number;
}

export default function SuiteReviews({ propertyId, rating, reviewCount }: Props) {
  const [reviews, setReviews] = useState<NormalizedReview[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    fetch(`/api/reviews?property_id=${propertyId}`)
      .then((res) => res.json())
      .then((json) => {
        if (cancelled) return;
        const raw: RawReview[] = Array.isArray(json?.data) ? json.data : Array.isArray(json) ? json : [];
        const normalized = raw
          .map((r) => ({
            guest: r.guest ?? r.guest_name ?? r.reviewer_name ?? "Verified Guest",
            rating: r.rating ?? r.overall_rating ?? 5,
            text: r.text ?? r.public_review ?? r.comment ?? "",
            date: r.date ?? r.submitted_at ?? r.created_at,
            tag: r.tag,
          }))
          .filter((r) => r.text);
        setReviews(normalized.slice(0, 9));
      })
      .catch(() => setReviews([]))
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [propertyId]);

  const total = reviews.length;
  const counts = [5, 4, 3, 2, 1].map((star) => reviews.filter((r) => Math.round(r.rating) === star).length);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <div className="flex items-center gap-3 mb-8">
        <span className="text-yellow-400 text-2xl">★</span>
        <h2 className="font-display text-2xl font-semibold text-[#111111]">
          {(rating ?? 5).toFixed(2)} · {reviewCount ?? total} review{(reviewCount ?? total) !== 1 ? "s" : ""}
        </h2>
      </div>

      {total > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-10 max-w-md">
          {[5, 4, 3, 2, 1].map((star, i) => (
            <div key={star} className="flex items-center gap-3 text-sm">
              <span className="text-[#666666] w-3">{star}</span>
              <span className="text-yellow-400">★</span>
              <div className="flex-1 h-1.5 bg-[#E5E5E5] rounded-full overflow-hidden">
                <div className="h-full bg-[#E8192C]" style={{ width: `${(counts[i] / total) * 100}%` }} />
              </div>
            </div>
          ))}
        </div>
      )}

      {loading ? (
        <p className="text-[#666666] text-sm">Loading reviews...</p>
      ) : reviews.length === 0 ? (
        <p className="text-[#666666] text-sm">No reviews yet for this property.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {reviews.map((r, i) => {
            const dateLabel = formatDate(r.date);
            return (
              <div key={i} className="border border-[#E5E5E5] rounded-xl p-5">
                <StarRow count={Math.round(r.rating)} />
                <p className="text-[#666666] text-sm leading-relaxed mt-3 mb-4">&ldquo;{r.text}&rdquo;</p>
                <p className="text-[#111111] text-sm font-semibold">{r.guest}</p>
                {(dateLabel || r.tag) && <p className="text-[#666666] text-xs">{dateLabel ?? r.tag}</p>}
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}
