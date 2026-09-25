import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import CTA from "@/components/CTA";
import { services, getServiceBySlug } from "@/data/services";

type Props = {
  params: { slug: string };
};

// Pre-builds one page per service at build time (e.g. /services/mutual-fund)
export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

// Sets the browser tab title/description for each service page
export function generateMetadata({ params }: Props): Metadata {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    return { title: "Service Not Found | Dash Capital" };
  }

  return {
    title: `${service.title} | Dash Capital`,
    description: service.description,
  };
}

export default function ServiceDetailPage({ params }: Props) {
  const service = getServiceBySlug(params.slug);

  // If someone visits a slug that doesn't exist, show the 404 page
  if (!service) {
    notFound();
  }

  return (
    <>
      {/* HERO */}
      <section className="page-hero">
        <div className="container">
          <h1>{service.title}</h1>
          <p>{service.description}</p>
        </div>
      </section>

      {/* INTRODUCTION + IMAGE */}
      <section className="section">
        <div className="container">
          <div className="two-col">
            <div>
              <Image
                src={service.image}
                alt={service.title}
                width={560}
                height={380}
              />
            </div>
            <div>
              <span className="eyebrow">{service.category}</span>
              <h2 style={{ marginBottom: 16 }}>About {service.title}</h2>
              <p style={{ color: "var(--gray-text)" }}>{service.content}</p>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="section section-light">
        <div className="container">
          <h2 style={{ textAlign: "center", marginBottom: 40 }}>
            Key Benefits
          </h2>
          <div className="grid grid-2" style={{ maxWidth: 800, margin: "0 auto" }}>
            {service.benefits.map((benefit) => (
              <div
                key={benefit}
                style={{ display: "flex", gap: 12, alignItems: "flex-start" }}
              >
                <CheckCircle2
                  size={22}
                  color="var(--secondary-color)"
                  style={{ flexShrink: 0, marginTop: 2 }}
                />
                <p>{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <CTA
          title={`Interested in ${service.title}?`}
          description="Speak to our team to see how this fits into your financial plan."
          buttonText="Contact Us"
          buttonHref="/contact"
        />
      </section>
    </>
  );
}
