import { NextResponse } from "next/server";
import { PROPERTIES } from "@/data/properties";
import { getProperties } from "@/lib/hospitable";

export async function GET() {
  try {
    const data = await getProperties();
    return NextResponse.json(data);
  } catch {
    return NextResponse.json(PROPERTIES);
  }
}
