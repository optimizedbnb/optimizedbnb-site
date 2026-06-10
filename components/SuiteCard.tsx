import Image from "next/image";
import Link from "next/link";
import type { Property } from "@/types";

interface Props {
  property: Property;
}

export default function SuiteCard({ property }: Props) {
  const imageSrc =
    property.images?.[0]?.url || property.photo.replace("aki_policy=small", "aki_policy=x_large");

  return (
    <Link
      href={`/suite/${property.slug || property.id}`}
      className="group block bg-white border border-[#E5E5E5] rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
    >
      <div className="relative h-52 overflow-hidden">
        <Image
          src={imageSrc}
          alt={property.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 right-3 bg-[#111111]/80 backdrop-blur-sm px-2 py-1 rounded text-xs text-white/80">
          {property.neighborhood}
        </div>
        {property.available === false && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <span className="bg-[#E8192C] text-white text-xs font-semibold px-3 py-1 rounded-full">Booked</span>
          </div>
        )}
      </div>

      <div className="p-4">
        <h3 className="font-display text-lg font-semibold text-[#111111] mb-1 leading-tight">{property.name}</h3>
        <p className="text-[#666666] text-xs mb-3 truncate">{property.publicName}</p>

        <div className="flex items-center gap-3 text-[#666666] text-xs mb-3">
          {property.guests && <span>{property.guests} guests</span>}
          {property.bedrooms && <span>·</span>}
          {property.bedrooms && <span>{property.bedrooms} beds</span>}
          {property.bathrooms && <span>·</span>}
          {property.bathrooms && <span>{property.bathrooms} baths</span>}
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <span className="text-yellow-400 text-xs">★</span>
            <span className="text-[#111111] text-xs font-medium">{property.rating?.toFixed(2) ?? "5.00"}</span>
            {property.reviewCount && (
              <span className="text-[#666666] text-xs">({property.reviewCount})</span>
            )}
          </div>
          {property.pricePerNight && (
            <div className="text-right">
              <span className="text-[#111111] font-semibold text-sm">${property.pricePerNight}</span>
              <span className="text-[#666666] text-xs">/night</span>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
