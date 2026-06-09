import { NextRequest, NextResponse } from "next/server";
import type { InquiryPayload } from "@/types";

export async function POST(req: NextRequest) {
  try {
    const body: InquiryPayload = await req.json();
    const { name, email, phone, checkIn, checkOut, guests, message } = body;

    if (!name || !email) {
      return NextResponse.json({ error: "Name and email required" }, { status: 400 });
    }

    console.log("New inquiry:", { name, email, phone, checkIn, checkOut, guests, message });

    return NextResponse.json({ success: true, message: "Inquiry received. We'll be in touch shortly!" });
  } catch {
    return NextResponse.json({ error: "Failed to process inquiry" }, { status: 500 });
  }
}
