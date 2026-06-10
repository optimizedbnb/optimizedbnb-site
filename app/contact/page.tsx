import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import LeadGenForm from "@/components/LeadGenForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | OptimizedBnB",
  description: "Get in touch with OptimizedBnB — Houston luxury vacation rentals.",
};

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main className="pt-[calc(4rem+var(--banner-h))] min-h-screen">
        <section className="bg-[#F7F7F7] border-b border-[#E5E5E5] py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-[#E8192C] text-xs font-semibold tracking-[0.3em] uppercase mb-3">Get In Touch</p>
            <h1 className="font-display text-5xl font-light text-[#111111] mb-4">
              Contact <em className="not-italic text-[#E8192C]">Us</em>
            </h1>
            <p className="text-[#666666] text-lg">
              Questions, inquiries, or want to book directly? We&apos;re here.
            </p>
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact Details */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 border border-[#E5E5E5]">
                <h2 className="text-[#111111] font-semibold mb-4">Reach Us Directly</h2>
                <div className="space-y-4">
                  <div>
                    <p className="text-[#666666] text-xs uppercase tracking-wider mb-1">Phone</p>
                    <a href="https://wa.me/17138983055" className="text-[#111111] hover:text-[#E8192C] transition-colors">
                      WhatsApp: (713) 898-3055
                    </a>
                  </div>
                  <div>
                    <p className="text-[#666666] text-xs uppercase tracking-wider mb-1">Email</p>
                    <a href="mailto:optimizedbnb@gmail.com" className="text-[#111111] hover:text-[#E8192C] transition-colors text-sm">
                      optimizedbnb@gmail.com
                    </a>
                  </div>
                  <div>
                    <p className="text-[#666666] text-xs uppercase tracking-wider mb-1">Location</p>
                    <p className="text-[#111111] text-sm">Houston, Texas</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-[#E5E5E5]">
                <h2 className="text-[#111111] font-semibold mb-3">Response Time</h2>
                <p className="text-[#666666] text-sm leading-relaxed">
                  We typically respond within 1-2 hours. For urgent matters, please call us directly.
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <LeadGenForm />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
