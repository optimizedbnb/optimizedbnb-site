import { NextRequest, NextResponse } from "next/server";
import { getPropertyCalendar } from "@/lib/hospitable";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const propertyId = searchParams.get("property_id");
  const startDate = searchParams.get("start_date");
  const endDate = searchParams.get("end_date");

  if (!propertyId || !startDate || !endDate) {
    return NextResponse.json({ error: "Missing required params" }, { status: 400 });
  }

  try {
    const data = await getPropertyCalendar(propertyId, startDate, endDate);
    return NextResponse.json(data);
  } catch {
    return NextResponse.json({ available: true, dates: [] });
  }
}
