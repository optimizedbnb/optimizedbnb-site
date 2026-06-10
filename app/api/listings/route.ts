import { NextResponse } from "next/server";
import { PROPERTIES } from "@/data/properties";
import { getProperties, getPropertyImages } from "@/lib/hospitable";

export async function GET() {
  try {
    const data = await getProperties();
    const properties = Array.isArray(data?.data) ? data.data : [];

    const withImages = await Promise.all(
      properties.map(async (property: { id: string; [key: string]: unknown }) => {
        try {
          const imagesData = await getPropertyImages(property.id);
          const images = Array.isArray(imagesData?.data) ? imagesData.data : [];
          return { ...property, images };
        } catch {
          return { ...property, images: [] };
        }
      })
    );

    return NextResponse.json({ ...data, data: withImages });
  } catch {
    return NextResponse.json(PROPERTIES);
  }
}
