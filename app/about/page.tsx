import Image from "next/image";
import type { Metadata } from "next";
import SectionTitle from "@/components/SectionTitle";
import TeamCard from "@/components/TeamCard";
import Stats from "@/components/Stats";
import CTA from "@/components/CTA";
import { team } from "@/data/team";
import { FileSearch, Handshake, LineChart } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Dash Capital",
  description:
    "Learn about Dash Capital — AMFI-registered mutual fund distributors and IRDA broking license holders serving Kolkata since 2003.",
};

export default function AboutPage() {
  return (
    <>
      {/* PAGE HERO */}
      <section className="bg-primary text-white py-14 md:py-20 text-center">
        <div className="w-full max-w-[1600px] mx-auto px-5 sm:px-8">
          <h1 className="text-white text-3xl md:text-4xl lg:text-[2.2rem] font-heading font-bold mb-2.5">
            About Dash Capital
          </h1>
          <p className="text-[#d6dde6] text-base md:text-lg max-w-xl mx-auto">
            21 years of helping clients grow wealth and secure their future.
          </p>
        </div>
      </section>

      {/* COMPANY INFO */}
      <section className="py-12 md:py-20">
        <div className="w-full max-w-[1600px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div>
              <Image
                src="/images/services/about-image.svg"
                alt="About Dash Capital"
                width={560}
                height={420}
                className="w-full h-auto rounded-lg shadow-sm"
              />
            </div>
            <div>
              <span className="text-secondary uppercase tracking-[1.5px] font-semibold text-xs md:text-sm mb-2.5 block font-heading">
                Who We Are
              </span>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-4 leading-tight">
                Committed To Your Financial Future
              </h2>
              <p className="text-gray-text text-[0.95rem] leading-relaxed mb-4">
                We are AMFI-registered mutual fund distributors (MFD) and IRDA
                broking license holders, solely committed to empowering
                customers with diverse financial solutions. We started our
                journey in 2003, and since then we have been helping our
                clients grow their wealth and secure their future.
              </p>
              <p className="text-gray-text text-[0.95rem] leading-relaxed">
                Our home loan offerings provide flexible financing options for
                homeownership aspirations, while our bond services offer
                stable investment opportunities. Trust us to help you achieve
                your financial goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE / STATISTICS */}
      <Stats />

      {/* HOW IT WORKS */}
      <section className="py-12 md:py-20 bg-light">
        <div className="w-full max-w-[1600px] mx-auto px-5 sm:px-8">
          <SectionTitle
            eyebrow="How It Works"
            title="Our Simple 3-Step Process"
            description="Getting started with Dash Capital is straightforward."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white border border-border-ui rounded-lg p-7 md:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
              <div className="w-12 h-12 rounded-full bg-light text-secondary flex items-center justify-center mb-4">
                <FileSearch size={22} />
              </div>
              <h3 className="text-xl font-heading font-semibold text-primary mb-2.5">
                1. Understand Your Goals
              </h3>
              <p className="text-gray-text text-[0.95rem] leading-relaxed">
                We start by understanding your income, goals, and risk
                appetite.
              </p>
            </div>

            <div className="bg-white border border-border-ui rounded-lg p-7 md:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
              <div className="w-12 h-12 rounded-full bg-light text-secondary flex items-center justify-center mb-4">
                <LineChart size={22} />
              </div>
              <h3 className="text-xl font-heading font-semibold text-primary mb-2.5">
                2. Build A Plan
              </h3>
              <p className="text-gray-text text-[0.95rem] leading-relaxed">
                We recommend a mix of investment and protection products
                suited to you.
              </p>
            </div>

            <div className="bg-white border border-border-ui rounded-lg p-7 md:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
              <div className="w-12 h-12 rounded-full bg-light text-secondary flex items-center justify-center mb-4">
                <Handshake size={22} />
              </div>
              <h3 className="text-xl font-heading font-semibold text-primary mb-2.5">
                3. Ongoing Support
              </h3>
              <p className="text-gray-text text-[0.95rem] leading-relaxed">
                Our team reviews and adjusts your plan as your life and goals
                change.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="py-12 md:py-20">
        <div className="w-full max-w-[1600px] mx-auto px-5 sm:px-8">
          <SectionTitle
            eyebrow="Our Team"
            title="Meet The People Behind Dash Capital"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {team.map((member) => (
              <TeamCard
                key={member.name + member.role}
                name={member.name}
                role={member.role}
                image={member.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-20 bg-light">
        <CTA
          title="Ready To Start Your Financial Journey?"
          description="Talk to our team today and take the first step toward your goals."
          buttonText="Contact Us"
          buttonHref="/contact"
        />
      </section>
    </>
  );
}
