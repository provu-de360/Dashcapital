import type { Metadata } from "next";
import SectionTitle from "@/components/SectionTitle";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Product Distribution | Dash Capital",
  description:
    "Explore Dash Capital's full range of investment and protection products, including mutual funds, fixed deposits, home loans, bonds, and insurance.",
};

export default function ServicesPage() {
  const investmentServices = services.filter((s) => s.category === "Investment");
  const protectionServices = services.filter((s) => s.category === "Protection");

  return (
    <>
      <section className="bg-primary text-white py-14 md:py-20 text-center">
        <div className="w-full max-w-[1600px] mx-auto px-5 sm:px-8">
          <h1 className="text-white text-3xl md:text-4xl lg:text-[2.2rem] font-heading font-bold mb-2.5">
            Product Distribution
          </h1>
          <p className="text-[#d6dde6] text-base md:text-lg max-w-xl mx-auto">
            Investment and protection solutions tailored to your goals.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="w-full max-w-[1600px] mx-auto px-5 sm:px-8">
          <SectionTitle
            eyebrow="Investment"
            title="Grow Your Wealth"
            description="Products designed to help your money grow over time."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {investmentServices.map((service) => (
              <ServiceCard
                key={service.slug}
                title={service.title}
                slug={service.slug}
                description={service.description}
                image={service.image}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-light">
        <div className="w-full max-w-[1600px] mx-auto px-5 sm:px-8">
          <SectionTitle
            eyebrow="Protection"
            title="Protect What Matters"
            description="Insurance solutions that safeguard your family and assets."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {protectionServices.map((service) => (
              <ServiceCard
                key={service.slug}
                title={service.title}
                slug={service.slug}
                description={service.description}
                image={service.image}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
