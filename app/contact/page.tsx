import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, ShieldCheck, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | Dash Capital",
  description:
    "Get in touch with Dash Capital for mutual fund, insurance, and financial planning support in Kolkata.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-primary text-white py-14 md:py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#c9932e_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="w-full max-w-[1600px] mx-auto px-5 sm:px-8 relative z-10">
          <span className="text-secondary uppercase tracking-[1.8px] font-semibold text-xs md:text-sm mb-2.5 block font-heading">
            Connect With Our Wealth Advisors
          </span>
          <h1 className="text-white text-3xl md:text-4xl lg:text-[2.6rem] font-heading font-bold mb-3">
            Contact Information
          </h1>
          <p className="text-[#d6dde6] text-base md:text-lg max-w-2xl mx-auto">
            We are always here to assist with your investments, retirement planning, and insurance portfolio.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-[#f8fafc]">
        <div className="w-full max-w-[1600px] mx-auto px-5 sm:px-8">
          {/* Quick Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* Phone Card */}
            <div className="bg-white p-7 sm:p-8 rounded-2xl border border-border-ui shadow-card hover:-translate-y-1 transition-all duration-300">
              <div className="w-13 h-13 rounded-2xl bg-secondary/15 text-secondary flex items-center justify-center mb-5 border border-secondary/30">
                <Phone size={24} />
              </div>
              <h3 className="text-xl font-heading font-bold text-primary mb-2">
                Call Us Directly
              </h3>
              <p className="text-gray-text text-sm mb-4 leading-relaxed">
                Speak directly with an advisor regarding your investments and portfolios.
              </p>
              <div className="space-y-1.5 font-medium text-base text-primary">
                <div>
                  <a
                    href="tel:+918293172246"
                    className="hover:text-secondary transition-colors inline-flex items-center gap-1.5"
                  >
                    +91 82931 72246
                  </a>
                </div>
                <div>
                  <a
                    href="tel:+919073184838"
                    className="hover:text-secondary transition-colors inline-flex items-center gap-1.5"
                  >
                    +91 90731 84838
                  </a>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-white p-7 sm:p-8 rounded-2xl border border-border-ui shadow-card hover:-translate-y-1 transition-all duration-300">
              <div className="w-13 h-13 rounded-2xl bg-secondary/15 text-secondary flex items-center justify-center mb-5 border border-secondary/30">
                <Mail size={24} />
              </div>
              <h3 className="text-xl font-heading font-bold text-primary mb-2">
                Email Us
              </h3>
              <p className="text-gray-text text-sm mb-4 leading-relaxed">
                Send queries, portfolio statements, or advisory requests any time.
              </p>
              <div className="font-medium text-base text-primary">
                <a
                  href="mailto:service@dashcapital.in"
                  className="hover:text-secondary transition-colors break-all"
                >
                  service@dashcapital.in
                </a>
              </div>
            </div>

            {/* Office Location Card */}
            <div className="bg-white p-7 sm:p-8 rounded-2xl border border-border-ui shadow-card hover:-translate-y-1 transition-all duration-300">
              <div className="w-13 h-13 rounded-2xl bg-secondary/15 text-secondary flex items-center justify-center mb-5 border border-secondary/30">
                <MapPin size={24} />
              </div>
              <h3 className="text-xl font-heading font-bold text-primary mb-2">
                Visit Our Office
              </h3>
              <p className="text-gray-text text-sm mb-4 leading-relaxed">
                Conveniently located in Gariahat, Kolkata for in-person advisory sessions.
              </p>
              <p className="text-primary font-medium text-sm leading-relaxed">
                208/8, Rashbehari Avenue, Gariahat,
                <br />
                Kolkata - 700029, West Bengal
              </p>
            </div>
          </div>

          {/* Details & Interactive Map Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Office Hours & Compliance Info */}
            <div className="lg:col-span-5 bg-white p-7 sm:p-9 rounded-2xl border border-border-ui shadow-card flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-heading font-bold text-primary mb-6">
                  Working Hours &amp; Advisory
                </h3>

                <div className="space-y-5 text-sm">
                  <div className="flex items-start gap-3.5">
                    <Clock size={20} className="text-secondary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-primary">Business Hours</p>
                      <p className="text-gray-text mt-0.5">
                        Monday – Saturday: 10:00 AM – 6:30 PM
                      </p>
                      <p className="text-gray-text">Sunday: Closed</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <ShieldCheck size={20} className="text-secondary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-primary">Registered Credentials</p>
                      <p className="text-gray-text mt-0.5">
                        AMFI-Registered Mutual Fund Distributor (ARN Holder)
                      </p>
                      <p className="text-gray-text">
                        IRDA Broking License Holders
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-border-ui">
                <p className="text-xs text-gray-text leading-relaxed">
                  Mutual Fund investments are subject to market risks, read all scheme related documents carefully.
                </p>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="lg:col-span-7 bg-white rounded-2xl border border-border-ui shadow-card overflow-hidden min-h-[380px] flex flex-col">
              <div className="p-5 border-b border-border-ui flex items-center justify-between">
                <div>
                  <h4 className="font-heading font-bold text-primary text-base">
                    Location Map
                  </h4>
                  <p className="text-xs text-gray-text">
                    208/8, Rashbehari Avenue, Gariahat, Kolkata-700029
                  </p>
                </div>
                <a
                  href="https://maps.google.com/?q=208/8,+Rashbehari+Avenue,+Gariahat,+Kolkata-700029"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-secondary hover:underline inline-flex items-center gap-1"
                >
                  <span>Open in Maps</span>
                  <ArrowRight size={13} />
                </a>
              </div>
              <div className="relative w-full flex-1 min-h-[320px] bg-slate-100">
                <iframe
                  title="Dash Capital Location"
                  src="https://www.google.com/maps?q=208/8+Rashbehari+Avenue+Gariahat+Kolkata+700029&output=embed"
                  className="w-full h-full min-h-[320px] border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
