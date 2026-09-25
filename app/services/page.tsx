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
      <section className="page-hero">
        <div className="container">
          <h1>Product Distribution</h1>
          <p>Investment and protection solutions tailored to your goals.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="Investment"
            title="Grow Your Wealth"
            description="Products designed to help your money grow over time."
          />
          <div className="grid grid-3">
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

      <section className="section section-light">
        <div className="container">
          <SectionTitle
            eyebrow="Protection"
            title="Protect What Matters"
            description="Insurance solutions that safeguard your family and assets."
          />
          <div className="grid grid-3">
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
