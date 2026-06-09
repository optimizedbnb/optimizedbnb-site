import Image from "next/image";
import Link from "next/link";

const PHOTOS = [
  {
    src: "https://a0.muscache.com/im/pictures/hosting/Hosting-1111148403794961823/original/698b3007-d951-43c8-b340-369d6fc58311.jpeg?aki_policy=x_large",
    alt: "Luxury Escape Med Center",
  },
  {
    src: "https://a0.muscache.com/im/pictures/miso/Hosting-802246106406607214/original/f632c52f-f5ad-43da-bca5-cf978e7ec09c.jpeg?aki_policy=x_large",
    alt: "FIFA Pool House Cypress",
  },
  {
    src: "https://a0.muscache.com/im/pictures/hosting/Hosting-1156547796144288990/original/f9533d3d-0d43-47f2-9be3-c94e2edbafdf.jpeg?aki_policy=x_large",
    alt: "Wheatley 4BR Downtown",
  },
  {
    src: "https://a0.muscache.com/im/pictures/hosting/Hosting-1162686546820324178/original/fe0118f0-654d-4efd-a4fa-157ccf737d61.jpeg?aki_policy=x_large",
    alt: "Seabrook Hot Tub Downtown",
  },
];

export default function PhotoStrip() {
  return (
    <Link href="/suites" className="flex w-full" aria-label="View all suites">
      {PHOTOS.map((photo, i) => (
        <div key={i} className="relative flex-1 h-[220px] overflow-hidden group">
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            sizes="25vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
        </div>
      ))}
    </Link>
  );
}
