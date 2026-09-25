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
      <section className="page-hero">
        <div className="container">
          <h1>About Dash Capital</h1>
          <p>21 years of helping clients grow wealth and secure their future.</p>
        </div>
      </section>

      {/* COMPANY INFO */}
      <section className="section">
        <div className="container">
          <div className="two-col">
            <div>
              <Image
                src="/images/services/about-image.svg"
                alt="About Dash Capital"
                width={560}
                height={420}
              />
            </div>
            <div>
              <span className="eyebrow">Who We Are</span>
              <h2 style={{ marginBottom: 16 }}>
                Committed To Your Financial Future
              </h2>
              <p style={{ color: "var(--gray-text)", marginBottom: 16 }}>
                We are AMFI-registered mutual fund distributors (MFD) and IRDA
                broking license holders, solely committed to empowering
                customers with diverse financial solutions. We started our
                journey in 2003, and since then we have been helping our
                clients grow their wealth and secure their future.
              </p>
              <p style={{ color: "var(--gray-text)" }}>
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
      <section className="section section-light">
        <div className="container">
          <SectionTitle
            eyebrow="How It Works"
            title="Our Simple 3-Step Process"
            description="Getting started with Dash Capital is straightforward."
          />
          <div className="grid grid-3">
            <div className="feature-card">
              <div className="feature-icon">
                <FileSearch size={22} />
              </div>
              <h3>1. Understand Your Goals</h3>
              <p>
                We start by understanding your income, goals, and risk
                appetite.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <LineChart size={22} />
              </div>
              <h3>2. Build A Plan</h3>
              <p>
                We recommend a mix of investment and protection products
                suited to you.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <Handshake size={22} />
              </div>
              <h3>3. Ongoing Support</h3>
              <p>
                Our team reviews and adjusts your plan as your life and goals
                change.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="Our Team"
            title="Meet The People Behind Dash Capital"
          />
          <div className="grid grid-3">
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
      <section className="section section-light">
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
