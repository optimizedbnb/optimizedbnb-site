import Link from "next/link";

const WHATSAPP_URL = "https://wa.me/17138983055";

export default function WhatsAppButton() {
  return (
    <>
      {/* Desktop floating button */}
      <div className="hidden md:block fixed bottom-6 right-6 z-50 group">
        <Link
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with us on WhatsApp"
          className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] shadow-lg hover:scale-105 transition-transform duration-200"
        >
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-75" />
          <WhatsAppIcon className="relative w-7 h-7 text-white" />
        </Link>

        {/* Tooltip */}
        <span className="absolute right-full top-1/2 -translate-y-1/2 mr-3 whitespace-nowrap rounded bg-[#181818] px-3 py-1.5 text-sm text-white opacity-0 translate-x-2 pointer-events-none transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0">
          Chat with us on WhatsApp
        </span>
      </div>

      {/* Mobile bottom bar */}
      <Link
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Book via WhatsApp"
        className="md:hidden fixed bottom-0 left-0 right-0 z-50 flex items-center justify-center gap-2 bg-[#25D366] py-3 text-white font-semibold text-sm shadow-[0_-2px_10px_rgba(0,0,0,0.25)]"
      >
        <WhatsAppIcon className="w-5 h-5" />
        Book via WhatsApp
      </Link>
    </>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.85 9.85 0 0 0 12.04 2Zm0 18.15a8.23 8.23 0 0 1-4.19-1.15l-.3-.17-3.12.82.83-3.04-.19-.32a8.18 8.18 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.26.86 5.83 2.42a8.18 8.18 0 0 1 2.41 5.79c-.01 4.54-3.71 8.27-8.26 8.27Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.16.25-.63.81-.77.97-.14.17-.28.19-.53.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.39-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.28.37-.42.13-.14.17-.24.26-.4.08-.17.04-.31-.02-.43-.06-.13-.56-1.34-.77-1.83-.2-.49-.4-.42-.56-.43-.14-.01-.31-.01-.47-.01-.16 0-.43.06-.65.31-.23.25-.85.83-.85 2.04 0 1.21.87 2.37 1 2.54.12.16 1.71 2.6 4.15 3.65.58.25 1.03.4 1.38.51.58.18 1.11.16 1.53.1.47-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.1-.22-.16-.47-.28Z" />
    </svg>
  );
}
