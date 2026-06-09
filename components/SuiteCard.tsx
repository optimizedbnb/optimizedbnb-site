import Image from "next/image";
import Link from "next/link";
import type { Property } from "@/types";

interface Props {
  property: Property;
}

export default function SuiteCard({ property }: Props) {
  return (
    <Link
      href={`/suite/${property.slug || property.id}`}
      className="group block bg-[#181818] rounded-xl overflow-hidden hover:ring-1 hover:ring-[#E8192C]/40 transition-all duration-300"
    >
      <div className="relative h-52 overflow-hidden">
        <Image
          src={property.photo}
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
        <h3 className="font-display text-lg font-semibold text-white mb-1 leading-tight">{property.name}</h3>
        <p className="text-white/45 text-xs mb-3 truncate">{property.publicName}</p>

        <div className="flex items-center gap-3 text-white/60 text-xs mb-3">
          {property.guests && <span>{property.guests} guests</span>}
          {property.bedrooms && <span>·</span>}
          {property.bedrooms && <span>{property.bedrooms} beds</span>}
          {property.bathrooms && <span>·</span>}
          {property.bathrooms && <span>{property.bathrooms} baths</span>}
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <span className="text-yellow-400 text-xs">★</span>
            <span className="text-white/80 text-xs font-medium">{property.rating?.toFixed(2) ?? "5.00"}</span>
            {property.reviewCount && (
              <span className="text-white/40 text-xs">({property.reviewCount})</span>
            )}
          </div>
          {property.pricePerNight && (
            <div className="text-right">
              <span className="text-white font-semibold text-sm">${property.pricePerNight}</span>
              <span className="text-white/45 text-xs">/night</span>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
