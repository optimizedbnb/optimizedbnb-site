"use client";

import { useState } from "react";
import Image from "next/image";

interface Photo {
  url: string;
}

interface Props {
  photos: Photo[];
  propertyName: string;
}

export default function PhotoGallery({ photos, propertyName }: Props) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  if (photos.length === 0) return null;

  const rest = photos.slice(1);

  function openLightbox(index: number) {
    setActiveIndex(index);
    setLightboxOpen(true);
  }

  function next() {
    setActiveIndex((i) => (i + 1) % photos.length);
  }

  function prev() {
    setActiveIndex((i) => (i - 1 + photos.length) % photos.length);
  }

  return (
    <div className="relative">
      {/* Hero */}
      <button
        onClick={() => openLightbox(0)}
        className="relative block w-full h-[50vh] lg:h-[65vh] overflow-hidden"
      >
        <Image src={photos[0].url} alt={propertyName} fill priority sizes="100vw" className="object-cover" />
      </button>

      {/* Grid of remaining photos */}
      {rest.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 sm:-mt-12 relative z-10">
          <div className="grid grid-cols-2 gap-2 sm:gap-3 bg-white rounded-2xl p-2 sm:p-3 border border-[#E5E5E5] shadow-sm">
            {rest.slice(0, 4).map((photo, i) => (
              <button
                key={i}
                onClick={() => openLightbox(i + 1)}
                className="relative block w-full h-40 sm:h-56 rounded-xl overflow-hidden"
              >
                <Image
                  src={photo.url}
                  alt={`${propertyName} photo ${i + 2}`}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </button>
            ))}
          </div>
          {photos.length > 1 && (
            <button
              onClick={() => openLightbox(0)}
              className="mt-3 inline-flex items-center gap-2 bg-white border border-[#E5E5E5] hover:border-[#E8192C]/40 text-[#111111] text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
            >
              Show all {photos.length} photos
            </button>
          )}
        </div>
      )}

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex flex-col">
          <div className="flex items-center justify-between px-4 sm:px-6 py-4">
            <p className="text-white text-sm">
              {activeIndex + 1} / {photos.length}
            </p>
            <button onClick={() => setLightboxOpen(false)} className="text-white p-2 hover:opacity-70" aria-label="Close">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="relative flex-1 flex items-center justify-center px-4 pb-4">
            <div className="relative w-full h-full max-w-5xl">
              <Image
                src={photos[activeIndex].url}
                alt={`${propertyName} photo ${activeIndex + 1}`}
                fill
                sizes="100vw"
                className="object-contain"
              />
            </div>
            {photos.length > 1 && (
              <>
                <button
                  onClick={prev}
                  aria-label="Previous photo"
                  className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 text-white p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={next}
                  aria-label="Next photo"
                  className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 text-white p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
