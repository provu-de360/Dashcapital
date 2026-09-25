import Image from "next/image";
import Link from "next/link";
import {
  TrendingUp,
  Target,
  PiggyBank,
  Users,
  ShieldCheck,
  Compass,
  PieChart,
} from "lucide-react";

import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import SectionTitle from "@/components/SectionTitle";
import ServiceCard from "@/components/ServiceCard";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";

import { services } from "@/data/services";
import { faqs } from "@/data/faq";

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* MAIN FEATURES */}
      <section className="section">
        <div className="container">
          <div className="grid grid-4">
            <div className="feature-card">
              <div className="feature-icon">
                <TrendingUp size={22} />
              </div>
              <h3>Financial Distribution Approach</h3>
              <p>
                Comprehensive financial plans matched with the best suited
                funds for stability and inflation-beating returns.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <Target size={22} />
              </div>
              <h3>Goal Achievement Programme</h3>
              <p>
                Identifying your future financial goals and different
                insurance needs.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <PiggyBank size={22} />
              </div>
              <h3>Save Interest &amp; Tax</h3>
              <p>
                Financial services that support investors in saving interest
                and tax.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <Users size={22} />
              </div>
              <h3>Dedicated Service Team</h3>
              <p>
                A proficient team helps you invest in the best possible way
                to achieve your financial goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT DASH CAPITAL */}
      <section className="section section-light">
        <div className="container">
          <div className="two-col">
            <div>
              <span className="eyebrow">Best Retirement Solution In Kolkata</span>
              <h2 style={{ marginBottom: 16 }}>What is Dash Capital?</h2>
              <p style={{ color: "var(--gray-text)", marginBottom: 24 }}>
                We are AMFI-registered mutual fund distributors (MFD) and IRDA
                broking license holders, solely committed to empowering
                customers with diverse solutions. We started our journey in
                2003, and since then we have helped our clients grow their
                wealth and secure their future through our investment and
                protection services. Our home loan offerings provide flexible
                financing options for homeownership, while our bond services
                offer stable investment opportunities.
              </p>
              <Link href="/about" className="btn btn-outline">
                Discover More
              </Link>
            </div>
            <div>
              <div className="video-embed-wrapper">
                <iframe
                  src="https://www.youtube.com/embed/G_2DKOTVd_4"
                  title="What is Dash Capital"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATISTICS */}
      <Stats />

      {/* PRODUCT DISTRIBUTION / SERVICES */}
      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="Product Distribution"
            title="The Best Service We Offer"
            description="A financial journey with expert guidance, investment strategies, and personalized solutions to achieve your financial goals."
          />
          <div className="grid grid-3">
            {services.map((service) => (
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

      {/* INVESTMENT / FINANCIAL CTA */}
      <section className="section section-light">
        <div className="container">
          <div className="two-col">
            <div>
              <Image
                src="/images/hero/hero-image.jpg"
                alt="Making the best out of your income"
                width={560}
                height={420}
              />
            </div>
            <div>
              <span className="eyebrow">Reliable Company</span>
              <h2 style={{ marginBottom: 16 }}>
                Making The Best Out Of Your Income
              </h2>
              <p style={{ color: "var(--gray-text)", marginBottom: 24 }}>
                We are here to help you with the best possible financial
                remedies to safeguard your assets, ensuring comprehensive
                financial goal coverage as per your needs.
              </p>
              <div className="grid grid-2" style={{ marginBottom: 24 }}>
                <div>
                  <div className="feature-icon">
                    <Compass size={20} />
                  </div>
                  <h3 style={{ fontSize: "1rem" }}>Expert Service Team</h3>
                  <p style={{ color: "var(--gray-text)", fontSize: "0.9rem" }}>
                    Comprehensive financial guidance tailored to your goals.
                  </p>
                </div>
                <div>
                  <div className="feature-icon">
                    <PieChart size={20} />
                  </div> 
                  <h3 style={{ fontSize: "1rem" }}>Experience</h3>
                  <p style={{ color: "var(--gray-text)", fontSize: "0.9rem" }}>
                    Over two decades of market insight and risk management.
                  </p>
                </div>
              </div>
              <Link href="/contact" className="btn btn-primary">
                Start Investing Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="Why Choose Us"
            title="An Investment That Takes You To Great Heights"
            description="We provide clients with robust financial plans and recommendations for asset management and capital distribution."
          />
          <div className="grid grid-3">
            <div className="feature-card">
              <div className="feature-icon">
                <ShieldCheck size={22} />
              </div>
              <h3>Comprehensive Financial Plan</h3>
              <p>
                A suitable financial roadmap built by analysing your assets,
                liabilities, goals, and expenditures.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <Target size={22} />
              </div>
              <h3>Identify Future Goals</h3>
              <p>
                Depending on wealth accumulation and risk management, we help
                identify your different financial needs.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <PieChart size={22} />
              </div>
              <h3>Asset Allocation Centric Approach</h3>
              <p>
                Optimizing returns by allocating assets according to your
                investment planning and insurance safeguards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section section-light">
        <div className="container">
          <SectionTitle
            eyebrow="Testimonials"
            title="See Who Is Talking About Us!"
          />
          <div className="grid grid-3">
            <div className="testimonial-card">
              <p className="testimonial-quote">
                &quot;Dash Capital helped me plan my investments with clarity.
                Their team is patient and always explains things simply.&quot;
              </p>
              <p className="testimonial-author">Investor</p>
              <p className="testimonial-role">Kolkata</p>
            </div>
            <div className="testimonial-card">
              <p className="testimonial-quote">
                &quot;Professional, transparent, and genuinely invested in my
                financial goals. Highly recommended.&quot;
              </p>
              <p className="testimonial-author">Investor</p>
              <p className="testimonial-role">Kolkata</p>
            </div>
            <div className="testimonial-card">
              <p className="testimonial-quote">
                &quot;Their guidance on insurance and mutual funds gave my
                family real peace of mind.&quot;
              </p>
              <p className="testimonial-author">Investor</p>
              <p className="testimonial-role">Kolkata</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container">
          <SectionTitle eyebrow="FAQs" title="Frequently Asked Questions" />
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            <FAQ items={faqs} />
          </div>
        </div>
      </section>

      {/* CONTACT / CTA */}
      <section className="section section-light">
        <CTA
          title="Created by professionals. For professionals."
          description="Let our team help you build a financial plan that fits your goals."
          buttonText="Contact Us"
          buttonHref="/contact"
        />
      </section>
    </>
  );
}
