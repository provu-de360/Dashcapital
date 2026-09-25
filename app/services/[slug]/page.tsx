import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import CTA from "@/components/CTA";
import { services, getServiceBySlug } from "@/data/services";

type Props = {
  params: { slug: string };
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

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

  if (!service) {
    notFound();
  }

  return (
    <>
      {/* HERO */}
      <section className="bg-primary text-white py-14 md:py-20 text-center">
        <div className="w-full max-w-[1600px] mx-auto px-5 sm:px-8">
          <h1 className="text-white text-3xl md:text-4xl lg:text-[2.2rem] font-heading font-bold mb-2.5">
            {service.title}
          </h1>
          <p className="text-[#d6dde6] text-base md:text-lg max-w-xl mx-auto">
            {service.description}
          </p>
        </div>
      </section>

      {/* INTRODUCTION + IMAGE */}
      <section className="py-12 md:py-20">
        <div className="w-full max-w-[1600px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div>
              <Image
                src={service.image}
                alt={service.title}
                width={560}
                height={380}
                className="w-full h-auto rounded-lg shadow-sm object-cover"
              />
            </div>
            <div>
              <span className="text-secondary uppercase tracking-[1.5px] font-semibold text-xs md:text-sm mb-2.5 block font-heading">
                {service.category}
              </span>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-4 leading-tight">
                About {service.title}
              </h2>
              <p className="text-gray-text text-[0.95rem] leading-relaxed">
                {service.content}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-12 md:py-20 bg-light">
        <div className="w-full max-w-[1600px] mx-auto px-5 sm:px-8">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary text-center mb-8 md:mb-10">
            Key Benefits
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 max-w-[800px] mx-auto">
            {service.benefits.map((benefit) => (
              <div
                key={benefit}
                className="flex gap-3 items-start p-4 bg-white rounded-lg border border-border-ui/80 shadow-sm"
              >
                <CheckCircle2
                  size={20}
                  className="text-secondary flex-shrink-0 mt-0.5"
                />
                <p className="text-dark font-medium text-sm md:text-base leading-snug">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-20">
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
