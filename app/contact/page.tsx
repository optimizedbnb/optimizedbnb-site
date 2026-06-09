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
      <main className="pt-16 min-h-screen">
        <section className="bg-[#181818] border-b border-white/5 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-[#E8192C] text-xs font-semibold tracking-[0.3em] uppercase mb-3">Get In Touch</p>
            <h1 className="font-display text-5xl font-light text-white mb-4">
              Contact <em className="not-italic text-[#E8192C]">Us</em>
            </h1>
            <p className="text-white/50 text-lg">
              Questions, inquiries, or want to book directly? We&apos;re here.
            </p>
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact Details */}
            <div className="space-y-6">
              <div className="bg-[#181818] rounded-2xl p-6 border border-white/5">
                <h2 className="text-white font-semibold mb-4">Reach Us Directly</h2>
                <div className="space-y-4">
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Phone</p>
                    <a href="tel:+18323537040" className="text-white hover:text-[#E8192C] transition-colors">
                      (832) 353-7040
                    </a>
                  </div>
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Email</p>
                    <a href="mailto:optimizedbnb@gmail.com" className="text-white hover:text-[#E8192C] transition-colors text-sm">
                      optimizedbnb@gmail.com
                    </a>
                  </div>
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Location</p>
                    <p className="text-white text-sm">Houston, Texas</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#181818] rounded-2xl p-6 border border-white/5">
                <h2 className="text-white font-semibold mb-3">Response Time</h2>
                <p className="text-white/50 text-sm leading-relaxed">
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
