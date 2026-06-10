import { NextRequest, NextResponse } from "next/server";
import { FEATURED_REVIEWS } from "@/data/reviews";
import { getReviews } from "@/lib/hospitable";

interface HospitableReview {
  listing_id?: string;
  property_id?: string;
  listing?: { id?: string };
  [key: string]: unknown;
}

export async function GET(req: NextRequest) {
  const propertyId = req.nextUrl.searchParams.get("property_id");

  try {
    const data = await getReviews();
    const all: HospitableReview[] = Array.isArray(data?.data) ? data.data : [];

    if (propertyId) {
      const filtered = all.filter(
        (r) => r.listing_id === propertyId || r.property_id === propertyId || r.listing?.id === propertyId
      );
      if (filtered.length > 0) {
        return NextResponse.json({ ...data, data: filtered });
      }
    }

    return NextResponse.json(data);
  } catch {
    return NextResponse.json({ data: FEATURED_REVIEWS });
  }
}

export const revalidate = 86400;
