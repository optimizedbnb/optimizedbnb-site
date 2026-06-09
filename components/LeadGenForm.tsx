"use client";

import { useState } from "react";

export default function LeadGenForm() {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", checkIn: "", checkOut: "", guests: "2", message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  function update(field: string, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, guests: parseInt(form.guests) }),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      setForm({ name: "", email: "", phone: "", checkIn: "", checkOut: "", guests: "2", message: "" });
    } catch {
      setStatus("error");
    }
  }

  const inputCls =
    "w-full bg-[#202020] border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-white/30 focus:outline-none focus:border-[#E8192C]/60 transition-colors";

  return (
    <section className="bg-[#111111] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto text-center mb-10">
        <h2 className="font-display text-4xl font-light text-white mb-3">
          Looking for something <em className="not-italic text-[#E8192C]">specific?</em>
        </h2>
        <p className="text-white/50 text-base">
          Tell us your dates, group size, and preferences. We&apos;ll curate the perfect suite.
        </p>
      </div>

      {status === "success" ? (
        <div className="max-w-2xl mx-auto bg-[#181818] border border-[#E8192C]/20 rounded-2xl p-8 text-center">
          <div className="text-4xl mb-3">✓</div>
          <h3 className="text-white font-semibold text-lg mb-2">Inquiry received!</h3>
          <p className="text-white/50 text-sm">We&apos;ll curate the perfect suite and be in touch shortly.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              required
              type="text"
              placeholder="Your name"
              value={form.name}
              onChange={(e) => update("name", e.target.value)}
              className={inputCls}
            />
            <input
              required
              type="email"
              placeholder="Email address"
              value={form.email}
              onChange={(e) => update("email", e.target.value)}
              className={inputCls}
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="tel"
              placeholder="Phone number"
              value={form.phone}
              onChange={(e) => update("phone", e.target.value)}
              className={inputCls}
            />
            <select
              value={form.guests}
              onChange={(e) => update("guests", e.target.value)}
              className={inputCls}
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 15].map((n) => (
                <option key={n} value={n} className="bg-[#202020]">
                  {n} guest{n !== 1 ? "s" : ""}
                </option>
              ))}
            </select>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1">
              <label className="text-white/40 text-xs uppercase tracking-wider">Check-in</label>
              <input
                type="date"
                value={form.checkIn}
                onChange={(e) => update("checkIn", e.target.value)}
                className={inputCls + " [color-scheme:dark]"}
                min={new Date().toISOString().split("T")[0]}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-white/40 text-xs uppercase tracking-wider">Check-out</label>
              <input
                type="date"
                value={form.checkOut}
                onChange={(e) => update("checkOut", e.target.value)}
                className={inputCls + " [color-scheme:dark]"}
                min={form.checkIn || new Date().toISOString().split("T")[0]}
              />
            </div>
          </div>
          <textarea
            rows={4}
            placeholder="Tell us about your ideal stay — special occasions, preferences, must-haves..."
            value={form.message}
            onChange={(e) => update("message", e.target.value)}
            className={inputCls + " resize-none"}
          />

          {status === "error" && (
            <p className="text-[#E8192C] text-sm text-center">Something went wrong. Please try again.</p>
          )}

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full bg-[#E8192C] hover:bg-[#c9101f] disabled:opacity-50 text-white font-semibold py-4 rounded-xl transition-colors duration-200 text-sm tracking-wide"
          >
            {status === "loading" ? "Sending..." : "Send Inquiry"}
          </button>
        </form>
      )}
    </section>
  );
}
