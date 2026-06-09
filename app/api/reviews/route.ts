import { NextResponse } from "next/server";
import { FEATURED_REVIEWS } from "@/data/reviews";
import { getReviews } from "@/lib/hospitable";

export async function GET() {
  try {
    const data = await getReviews();
    return NextResponse.json(data);
  } catch {
    return NextResponse.json(FEATURED_REVIEWS);
  }
}

export const revalidate = 86400;
