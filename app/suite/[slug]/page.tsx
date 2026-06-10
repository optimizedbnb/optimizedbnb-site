import { notFound } from "next/navigation";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import SuiteCard from "@/components/SuiteCard";
import PhotoGallery from "@/components/suite/PhotoGallery";
import AmenitiesGrid from "@/components/suite/AmenitiesGrid";
import BookingSidebar from "@/components/suite/BookingSidebar";
import SuiteReviews from "@/components/suite/SuiteReviews";
import { PROPERTIES } from "@/data/properties";
import { getPropertyImages } from "@/lib/hospitable";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return PROPERTIES.map((p) => ({ slug: p.slug ?? p.id }));
}

export async function generateMetadata({ params }: Props) {
  const property = PROPERTIES.find((p) => p.slug === params.slug || p.id === params.slug);
  if (!property) return {};
  return {
    title: `${property.name} | OptimizedBnB`,
    description: property.publicName,
  };
}

export default async function SuitePage({ params }: Props) {
  const property = PROPERTIES.find((p) => p.slug === params.slug || p.id === params.slug);
  if (!property) notFound();

  const related = PROPERTIES.filter(
    (p) => p.id !== property.id && p.neighborhood === property.neighborhood
  ).slice(0, 3);

  let photos: { url: string }[] = [];
  try {
    const imagesData = await getPropertyImages(property.id);
    const images = Array.isArray(imagesData?.data) ? imagesData.data : [];
    photos = images.filter((img: { url?: string }) => img?.url).map((img: { url: string }) => ({ url: img.url }));
  } catch {
    photos = [];
  }
  if (photos.length === 0) {
    if (property.photos && property.photos.length > 0) {
      photos = property.photos.map((url) => ({ url }));
    } else {
      photos = [{ url: property.photo.replace("aki_policy=small", "aki_policy=x_large") }];
    }
  }

  const description =
    property.description ??
    `${property.publicName} is a beautifully appointed retreat in ${property.neighborhood}, Houston, comfortably hosting up to ${
      property.guests ?? 4
    } guests across ${property.bedrooms ?? 2} bedrooms and ${
      property.bathrooms ?? 1
    } bathrooms. Thoughtfully designed and meticulously maintained, this suite offers the perfect blend of comfort, style, and convenience for your stay in Houston.`;

  return (
    <>
      <Nav />
      <main className="pt-[calc(4rem+var(--banner-h))] min-h-screen bg-white">
        <PhotoGallery photos={photos} propertyName={property.name} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Listing Info */}
          <div className="lg:col-span-2">
            <p className="text-[#E8192C] text-xs font-semibold tracking-[0.3em] uppercase mb-2">
              {property.neighborhood} · Houston, TX
            </p>
            <h1 className="font-display text-3xl sm:text-4xl font-semibold text-[#111111] mb-2">
              {property.name}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-[#666666] text-sm mb-4">
              {property.guests && <span>{property.guests} guests</span>}
              {property.bedrooms && <span>·</span>}
              {property.bedrooms && <span>{property.bedrooms} bedrooms</span>}
              {property.bathrooms && <span>·</span>}
              {property.bathrooms && <span>{property.bathrooms} bathrooms</span>}
            </div>
            {property.rating && (
              <div className="flex items-center gap-1 text-sm mb-6">
                <span className="text-yellow-400">★</span>
                <span className="text-[#111111] font-medium">{property.rating.toFixed(2)}</span>
                {property.reviewCount && (
                  <span className="text-[#666666]">({property.reviewCount} reviews)</span>
                )}
              </div>
            )}

            <p className="text-[#666666] text-sm leading-relaxed whitespace-pre-line mb-8">{description}</p>

            <div className="border-t border-[#E5E5E5] pt-8">
              <AmenitiesGrid amenities={property.amenities} />
            </div>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <BookingSidebar propertyName={property.name} pricePerNight={property.pricePerNight} />
          </div>
        </div>

        {/* Reviews */}
        <div className="border-t border-[#E5E5E5]">
          <SuiteReviews propertyId={property.id} rating={property.rating} reviewCount={property.reviewCount} />
        </div>

        {/* Similar Properties */}
        {related.length > 0 && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-[#E5E5E5]">
            <h2 className="font-display text-2xl font-semibold text-[#111111] mb-6">
              More in {property.neighborhood}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {related.map((p) => (
                <SuiteCard key={p.id} property={p} />
              ))}
            </div>
          </div>
        )}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
          <Link href="/suites" className="text-[#E8192C] text-sm hover:underline flex items-center gap-2">
            ← All Suites
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
