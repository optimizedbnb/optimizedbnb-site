"use client";

import { useMemo, useState } from "react";

interface Props {
  propertyName: string;
  pricePerNight?: number;
}

export default function BookingSidebar({ propertyName, pricePerNight }: Props) {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(2);

  const nights = useMemo(() => {
    if (!checkIn || !checkOut) return 0;
    const inDate = new Date(checkIn);
    const outDate = new Date(checkOut);
    const diff = Math.round((outDate.getTime() - inDate.getTime()) / (1000 * 60 * 60 * 24));
    return diff > 0 ? diff : 0;
  }, [checkIn, checkOut]);

  const subtotal = pricePerNight ? pricePerNight * (nights || 1) : 0;

  const whatsappMessage = encodeURIComponent(
    `Hi! I'd like to book ${propertyName}.${checkIn ? ` Check-in: ${checkIn}.` : ""}${
      checkOut ? ` Check-out: ${checkOut}.` : ""
    } Guests: ${guests}.`
  );

  return (
    <div
      className="bg-white border border-[#E5E5E5] rounded-2xl p-6 shadow-sm lg:sticky"
      style={{ top: "calc(5rem + var(--banner-h))" }}
    >
      {pricePerNight && (
        <p className="text-[#111111] text-2xl font-bold mb-4">
          ${pricePerNight}
          <span className="text-[#666666] text-sm font-normal"> / night</span>
        </p>
      )}

      <div className="grid grid-cols-2 gap-2 mb-3">
        <div className="border border-[#E5E5E5] rounded-lg px-3 py-2">
          <label className="block text-[#666666] text-[10px] uppercase tracking-wider mb-1">Check-in</label>
          <input
            type="date"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            min={new Date().toISOString().split("T")[0]}
            className="w-full bg-transparent text-[#111111] text-sm outline-none [color-scheme:light]"
          />
        </div>
        <div className="border border-[#E5E5E5] rounded-lg px-3 py-2">
          <label className="block text-[#666666] text-[10px] uppercase tracking-wider mb-1">Check-out</label>
          <input
            type="date"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            min={checkIn || new Date().toISOString().split("T")[0]}
            className="w-full bg-transparent text-[#111111] text-sm outline-none [color-scheme:light]"
          />
        </div>
      </div>

      <div className="border border-[#E5E5E5] rounded-lg px-3 py-2 mb-4">
        <label className="block text-[#666666] text-[10px] uppercase tracking-wider mb-1">Guests</label>
        <select
          value={guests}
          onChange={(e) => setGuests(Number(e.target.value))}
          className="w-full bg-transparent text-[#111111] text-sm outline-none"
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 15].map((n) => (
            <option key={n} value={n} className="bg-white">
              {n} guest{n !== 1 ? "s" : ""}
            </option>
          ))}
        </select>
      </div>

      {pricePerNight && (
        <div className="space-y-2 mb-4 pb-4 border-b border-[#E5E5E5] text-sm">
          <div className="flex justify-between text-[#666666]">
            <span>
              ${pricePerNight} x {nights || 1} night{(nights || 1) !== 1 ? "s" : ""}
            </span>
            <span>${subtotal}</span>
          </div>
          <div className="flex justify-between text-[#666666]">
            <span>Service fee</span>
            <span className="text-[#E8192C] font-medium">$0 — No service fee</span>
          </div>
        </div>
      )}

      {pricePerNight && (
        <div className="flex justify-between items-center mb-5">
          <span className="text-[#111111] font-semibold">Total</span>
          <span className="text-[#111111] font-semibold text-lg">${subtotal}</span>
        </div>
      )}

      <a
        href={`https://wa.me/17138983055?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 w-full bg-[#E8192C] hover:bg-[#c9101f] text-white font-semibold py-3.5 rounded-xl transition-colors duration-200 text-sm"
      >
        Reserve via WhatsApp
      </a>
      <p className="text-[#666666] text-xs text-center mt-3">You won&apos;t be charged yet</p>
    </div>
  );
}
