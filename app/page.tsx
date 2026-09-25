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
  ArrowRight,
  CheckCircle2,
  Award,
  Sparkles,
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
      <section className="py-14 md:py-24 relative overflow-hidden bg-gradient-to-b from-[#f8fafc] via-white to-[#f8fafc]">
        {/* Subtle background ambient lighting */}
        <div className="absolute w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none -top-24 left-1/4" />
        <div className="absolute w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none -bottom-20 right-1/4" />

        <div className="w-full max-w-[1600px] mx-auto px-5 sm:px-8 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 md:gap-8">
            {/* Card 1 */}
            <div
              data-aos="fade-up"
              data-aos-delay="50"
              className="group relative bg-white rounded-2xl p-8 border border-border-ui/80 shadow-[0_4px_24px_rgba(11,37,69,0.05)] hover:shadow-[0_20px_45px_rgba(11,37,69,0.12)] hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              {/* Top Accent Gradient Bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary via-[#f59e0b] to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div>
                {/* Big Premium Icon Container with Ambient Halo */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#fef3c7] to-[#fde68a] text-secondary flex items-center justify-center shadow-[0_8px_20px_rgba(201,147,46,0.22)] border border-[#fcd34d]/60 group-hover:scale-110 group-hover:rotate-1 transition-all duration-300">
                    <TrendingUp size={30} className="stroke-[2.2]" />
                  </div>
                  <div className="absolute -inset-1.5 rounded-2xl bg-secondary/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                </div>

                <h3 className="text-xl font-heading font-bold text-primary mb-3 leading-snug group-hover:text-secondary transition-colors duration-200">
                  Financial Distribution Approach
                </h3>
                <p className="text-gray-text text-[0.96rem] leading-relaxed">
                  Offering comprehensive financial plans in exchange for providing best suited funds to investors with stability and inflation beat returns.
                </p>
              </div>

              {/* Bottom Subtle Micro-Indicator */}
              <div className="mt-6 pt-4 border-t border-border-ui/50 flex items-center text-xs font-semibold uppercase tracking-wider text-secondary/80 group-hover:text-secondary group-hover:translate-x-1 transition-all duration-200">
                <span>Wealth Building</span>
                <span className="ml-1.5">&rarr;</span>
              </div>
            </div>

            {/* Card 2 */}
            <div
              data-aos="fade-up"
              data-aos-delay="150"
              className="group relative bg-white rounded-2xl p-8 border border-border-ui/80 shadow-[0_4px_24px_rgba(11,37,69,0.05)] hover:shadow-[0_20px_45px_rgba(11,37,69,0.12)] hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary via-[#f59e0b] to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div>
                <div className="relative mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#dbeafe] to-[#bfdbfe] text-[#1d4ed8] flex items-center justify-center shadow-[0_8px_20px_rgba(29,78,216,0.2)] border border-[#93c5fd]/60 group-hover:scale-110 group-hover:rotate-1 transition-all duration-300">
                    <Target size={30} className="stroke-[2.2]" />
                  </div>
                  <div className="absolute -inset-1.5 rounded-2xl bg-blue-500/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                </div>

                <h3 className="text-xl font-heading font-bold text-primary mb-3 leading-snug group-hover:text-secondary transition-colors duration-200">
                  Goal Achievement Programme
                </h3>
                <p className="text-gray-text text-[0.96rem] leading-relaxed">
                  Identifying your future financial goals and different
                  insurance needs.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-border-ui/50 flex items-center text-xs font-semibold uppercase tracking-wider text-[#1d4ed8]/80 group-hover:text-[#1d4ed8] group-hover:translate-x-1 transition-all duration-200">
                <span>Target Planning</span>
                <span className="ml-1.5">&rarr;</span>
              </div>
            </div>

            {/* Card 3 */}
            <div
              data-aos="fade-up"
              data-aos-delay="250"
              className="group relative bg-white rounded-2xl p-8 border border-border-ui/80 shadow-[0_4px_24px_rgba(11,37,69,0.05)] hover:shadow-[0_20px_45px_rgba(11,37,69,0.12)] hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary via-[#f59e0b] to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div>
                <div className="relative mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#dcfce7] to-[#bbf7d0] text-[#15803d] flex items-center justify-center shadow-[0_8px_20px_rgba(21,128,61,0.2)] border border-[#86efac]/60 group-hover:scale-110 group-hover:rotate-1 transition-all duration-300">
                    <PiggyBank size={30} className="stroke-[2.2]" />
                  </div>
                  <div className="absolute -inset-1.5 rounded-2xl bg-emerald-500/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                </div>

                <h3 className="text-xl font-heading font-bold text-primary mb-3 leading-snug group-hover:text-secondary transition-colors duration-200">
                  Save Interest &amp; Tax
                </h3>
                <p className="text-gray-text text-[0.96rem] leading-relaxed">
                  Financial services offer a range of facilities that support investors in saving interest and tax.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-border-ui/50 flex items-center text-xs font-semibold uppercase tracking-wider text-[#15803d]/80 group-hover:text-[#15803d] group-hover:translate-x-1 transition-all duration-200">
                <span>Tax Optimization</span>
                <span className="ml-1.5">&rarr;</span>
              </div>
            </div>

            {/* Card 4 */}
            <div
              data-aos="fade-up"
              data-aos-delay="350"
              className="group relative bg-white rounded-2xl p-8 border border-border-ui/80 shadow-[0_4px_24px_rgba(11,37,69,0.05)] hover:shadow-[0_20px_45px_rgba(11,37,69,0.12)] hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary via-[#f59e0b] to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div>
                <div className="relative mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#ede9fe] to-[#ddd6fe] text-[#6d28d9] flex items-center justify-center shadow-[0_8px_20px_rgba(109,40,217,0.2)] border border-[#c4b5fd]/60 group-hover:scale-110 group-hover:rotate-1 transition-all duration-300">
                    <Users size={30} className="stroke-[2.2]" />
                  </div>
                  <div className="absolute -inset-1.5 rounded-2xl bg-purple-500/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                </div>

                <h3 className="text-xl font-heading font-bold text-primary mb-3 leading-snug group-hover:text-secondary transition-colors duration-200">
                  Dedicated Service Team
                </h3>
                <p className="text-gray-text text-[0.96rem] leading-relaxed">
                  A proficient team helps you invest in the best possible way of achieving your financial goals.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-border-ui/50 flex items-center text-xs font-semibold uppercase tracking-wider text-[#6d28d9]/80 group-hover:text-[#6d28d9] group-hover:translate-x-1 transition-all duration-200">
                <span>Personal Advisory</span>
                <span className="ml-1.5">&rarr;</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT DASH CAPITAL */}
      <section className="py-20 md:py-32 overflow-hidden relative bg-[radial-gradient(ellipse_80%_60%_at_85%_20%,rgba(201,147,46,0.12)_0%,transparent_60%),radial-gradient(ellipse_75%_65%_at_15%_80%,rgba(37,99,235,0.13)_0%,transparent_60%),radial-gradient(circle_at_50%_40%,rgba(241,245,249,0.92)_0%,#f8fafc_100%)]">
        {/* Soft atmospheric luminous glow orbs */}
        <div className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-br from-secondary/18 via-amber-400/10 to-transparent blur-[140px] pointer-events-none -top-32 -right-20 animate-pulse-glow-1" />
        <div className="absolute w-[540px] h-[540px] rounded-full bg-gradient-to-tl from-blue-600/15 via-indigo-500/10 to-transparent blur-[140px] pointer-events-none -bottom-28 -left-20 animate-pulse-glow-2" />
        <div className="absolute w-80 h-80 rounded-full bg-sky-400/8 blur-[100px] pointer-events-none top-1/2 right-1/3 -translate-y-1/2" />

        {/* Elegant crossed-lines geometric grid overlay */}
        <div className="absolute inset-0 opacity-[0.45] pointer-events-none bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_50%,#000_50%,transparent_100%)]" />

        {/* Diagonal Accent Light Beam */}
        <div className="absolute -top-40 right-1/4 w-[600px] h-[300px] bg-gradient-to-bl from-white/80 via-secondary/10 to-transparent -rotate-12 blur-[80px] pointer-events-none" />

        <div className="w-full max-w-[1600px] mx-auto px-5 sm:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Left Content Column */}
            <div data-aos="fade-right" data-aos-duration="800" className="lg:col-span-7">
              {/* Premium Pill Eyebrow */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/25 text-secondary text-xs sm:text-[0.82rem] font-semibold uppercase tracking-[1.8px] mb-4 font-heading shadow-sm">
                <Award size={15} className="text-secondary flex-shrink-0" />
                <span>Best Retirement Solution In Kolkata</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-bold text-primary font-heading mb-6 leading-tight tracking-tight">
                What is <span className="bg-gradient-to-r from-primary via-[#1e3a8a] to-secondary bg-clip-text text-transparent">Dash Capital?</span>
              </h2>

              <p className="text-gray-text text-[1rem] leading-relaxed mb-8 max-w-2xl font-normal">
                We are AMFI-registered mutual fund distributors (MFD) and IRDA broking license holders and solely committed to empowering customers with diverse solutions. We started our journey in 2003, and since then, we have been helping our clients grow their wealth and secure their future through our investment and protection services. Our home loan offerings provide flexible financing options for homeownership aspirations, while our bond services offer stable investment opportunities. Trust us to help you achieve your financial goals and secure your future.
              </p>

              {/* Highlights Feature Grid with Halo Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-9">
                <div className="bg-white p-4 rounded-xl border border-border-ui/80 shadow-[0_4px_16px_rgba(11,37,69,0.04)] flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0 border border-emerald-200">
                    <CheckCircle2 size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-text uppercase font-semibold tracking-wider">Licensed</p>
                    <p className="text-sm font-bold text-primary font-heading">AMFI &amp; IRDA</p>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-xl border border-border-ui/80 shadow-[0_4px_16px_rgba(11,37,69,0.04)] flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center flex-shrink-0 border border-amber-200">
                    <Award size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-text uppercase font-semibold tracking-wider">Legacy</p>
                    <p className="text-sm font-bold text-primary font-heading">Since 2003</p>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-xl border border-border-ui/80 shadow-[0_4px_16px_rgba(11,37,69,0.04)] flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0 border border-blue-200">
                    <Users size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-text uppercase font-semibold tracking-wider">Trusted By</p>
                    <p className="text-sm font-bold text-primary font-heading">1,000+ Clients</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2.5 py-4 px-8 rounded-xl font-semibold tracking-wide bg-primary text-white hover:bg-primary-dark hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(11,37,69,0.25)] transition-all duration-200 shadow-md group"
                >
                  <span>Discover More</span>
                  <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 py-4 px-7 rounded-xl font-semibold text-primary bg-white border border-border-ui hover:border-secondary/50 hover:bg-slate-50 hover:-translate-y-0.5 transition-all duration-200 shadow-sm"
                >
                  <span>Our Solutions</span>
                </Link>
              </div>
            </div>

            {/* Right Video Showcase with Deep Glass Frame & Floating Trust Badge */}
            <div data-aos="fade-left" data-aos-duration="800" className="lg:col-span-5 relative">
              {/* Decorative Background Blur Glow behind Video */}
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-secondary/20 via-blue-500/10 to-transparent blur-xl pointer-events-none" />

              <div className="relative rounded-3xl p-3 sm:p-4 bg-white/90 backdrop-blur-md border border-border-ui/90 shadow-[0_24px_60px_rgba(11,37,69,0.14)]">
                <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-inner bg-black border border-slate-900/10">
                  <iframe
                    src="https://www.youtube.com/embed/G_2DKOTVd_4"
                    title="What is Dash Capital"
                    className="absolute inset-0 w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>

                {/* Floating Glassmorphic Trust Stamp */}
                <div className="absolute -bottom-5 -left-3 sm:-left-5 bg-white/95 backdrop-blur-xl border border-secondary/30 rounded-2xl px-4 py-3 shadow-[0_16px_36px_rgba(11,37,69,0.12)] flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-secondary/15 text-secondary flex items-center justify-center font-bold">
                    <ShieldCheck size={22} />
                  </div>
                  <div>
                    <p className="text-[0.72rem] uppercase font-bold text-gray-text tracking-wider">Kolkata Headquartered</p>
                    <p className="text-sm font-bold text-primary font-heading">21+ Years of Integrity</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATISTICS */}
      <Stats />

      {/* PRODUCT DISTRIBUTION / SERVICES */}
      <section className="py-14 md:py-24 bg-white relative">
        <div className="w-full max-w-[1600px] mx-auto px-5 sm:px-8">
          <div data-aos="fade-up">
            <SectionTitle
              eyebrow="Product Distribution"
              title="The Best Service We Offer"
              description="A financial journey with expert guidance, investment strategies, and personalized solutions to achieve your financial goals."
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 md:gap-8">
            {services.map((service, index) => (
              <div
                key={service.slug}
                data-aos="fade-up"
                data-aos-delay={(index % 3) * 120}
              >
                <ServiceCard
                  title={service.title}
                  slug={service.slug}
                  description={service.description}
                  image={service.image}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INVESTMENT / FINANCIAL CTA */}
      <section className="py-20 md:py-32 overflow-hidden relative bg-[radial-gradient(ellipse_80%_60%_at_15%_25%,rgba(201,147,46,0.12)_0%,transparent_60%),radial-gradient(ellipse_75%_65%_at_85%_75%,rgba(37,99,235,0.13)_0%,transparent_60%),radial-gradient(circle_at_50%_50%,rgba(241,245,249,0.9)_0%,#f8fafc_100%)]">
        {/* Soft atmospheric luminous glow orbs */}
        <div className="absolute w-[580px] h-[580px] rounded-full bg-gradient-to-br from-secondary/18 via-amber-400/10 to-transparent blur-[140px] pointer-events-none -top-32 -left-20 animate-pulse-glow-1" />
        <div className="absolute w-[520px] h-[520px] rounded-full bg-gradient-to-tl from-blue-600/15 via-indigo-500/10 to-transparent blur-[140px] pointer-events-none -bottom-28 -right-20 animate-pulse-glow-2" />
        <div className="absolute w-80 h-80 rounded-full bg-emerald-400/8 blur-[100px] pointer-events-none top-1/2 left-1/3 -translate-y-1/2" />

        {/* Elegant crossed-lines geometric grid overlay matching hero theme */}
        <div className="absolute inset-0 opacity-[0.45] pointer-events-none bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_50%,#000_50%,transparent_100%)]" />

        {/* Diagonal Accent Light Beam */}
        <div className="absolute -top-40 left-1/4 w-[600px] h-[300px] bg-gradient-to-br from-white/80 via-secondary/10 to-transparent rotate-12 blur-[80px] pointer-events-none" />

        <div className="w-full max-w-[1600px] mx-auto px-5 sm:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Image Showcase with Premium Glass Frame & Floating Badge */}
            <div data-aos="fade-right" data-aos-duration="800" className="lg:col-span-5 relative">
              {/* Backlight glow */}
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-secondary/20 via-blue-500/15 to-transparent blur-xl pointer-events-none" />

              <div className="relative rounded-3xl p-3 sm:p-4 bg-white/90 backdrop-blur-md border border-border-ui/90 shadow-[0_24px_60px_rgba(11,37,69,0.12)] group">
                <div className="relative rounded-2xl overflow-hidden shadow-inner aspect-[4/3] bg-slate-900">
                  <Image
                    src="/images/hero/hero-image.jpg"
                    alt="Making the best out of your income"
                    fill
                    sizes="(max-width: 1024px) 100vw, 560px"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Floating Glassmorphic Trust Stamp */}
                <div className="absolute -bottom-5 -right-3 sm:-right-5 bg-white/95 backdrop-blur-xl border border-secondary/30 rounded-2xl px-4 py-3 shadow-[0_16px_36px_rgba(11,37,69,0.14)] flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-secondary/20 to-amber-500/10 text-secondary flex items-center justify-center font-bold border border-secondary/30">
                    <ShieldCheck size={22} />
                  </div>
                  <div>
                    <p className="text-[0.72rem] uppercase font-bold text-gray-text tracking-wider">AMFI Registered</p>
                    <p className="text-sm font-bold text-primary font-heading">Trusted Since 2003</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content Column */}
            <div data-aos="fade-left" data-aos-duration="800" className="lg:col-span-7">
              {/* Premium Pill Eyebrow */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/25 text-secondary text-xs sm:text-[0.82rem] font-semibold uppercase tracking-[1.8px] mb-4 font-heading shadow-sm">
                <Sparkles size={14} className="text-secondary flex-shrink-0" />
                <span>Reliable Company</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-bold text-primary font-heading mb-5 leading-tight tracking-tight">
                Making The Best Out Of <span className="bg-gradient-to-r from-primary via-[#1e3a8a] to-secondary bg-clip-text text-transparent">Your Income</span>
              </h2>

              <p className="text-gray-text text-[1rem] leading-relaxed mb-8 max-w-2xl font-normal">
                We are here to help you with the best possible financial remedies to safeguard your assets, ensuring comprehensive financial goal coverage as per your needs.
              </p>

              {/* 2 Feature Cards with Elevated Glass & Hover Micro-interactions */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-9">
                {/* Feature 1 */}
                <div className="group/card relative bg-white/90 backdrop-blur-md rounded-2xl p-6 border border-border-ui/80 shadow-[0_6px_24px_rgba(11,37,69,0.05)] hover:shadow-[0_16px_36px_rgba(201,147,46,0.14)] hover:border-secondary/40 hover:-translate-y-1.5 transition-all duration-300 overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary via-amber-400 to-secondary opacity-0 group-hover/card:opacity-100 transition-opacity duration-300" />
                  
                  <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-[#fef3c7] to-[#fde68a] text-secondary flex items-center justify-center mb-4 shadow-[0_8px_20px_rgba(201,147,46,0.25)] border border-[#fcd34d] group-hover/card:scale-110 transition-transform duration-300">
                    <Compass size={26} className="stroke-[2.2]" />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-primary mb-2 group-hover/card:text-secondary transition-colors duration-200">
                    Expert Service Team
                  </h3>
                  <p className="text-gray-text text-sm leading-relaxed">
                    Comprehensive financial guidance tailored precisely to your personal goals and risk profile.
                  </p>
                </div>

                {/* Feature 2 */}
                <div className="group/card relative bg-white/90 backdrop-blur-md rounded-2xl p-6 border border-border-ui/80 shadow-[0_6px_24px_rgba(11,37,69,0.05)] hover:shadow-[0_16px_36px_rgba(29,78,216,0.14)] hover:border-blue-400/50 hover:-translate-y-1.5 transition-all duration-300 overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-400 to-blue-500 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300" />

                  <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-[#dbeafe] to-[#bfdbfe] text-[#1d4ed8] flex items-center justify-center mb-4 shadow-[0_8px_20px_rgba(29,78,216,0.25)] border border-[#93c5fd] group-hover/card:scale-110 transition-transform duration-300">
                    <PieChart size={26} className="stroke-[2.2]" />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-primary mb-2 group-hover/card:text-blue-600 transition-colors duration-200">
                    Experience
                  </h3>
                  <p className="text-gray-text text-sm leading-relaxed">
                    Over two decades of proven market insight, disciplined execution, and active risk management.
                  </p>
                </div>
              </div>

              {/* Action Buttons with Identical Exact Width, Height & Balanced Styling */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <Link
                  href="/contact"
                  className="w-full sm:w-[240px] h-[54px] rounded-xl font-semibold tracking-wide bg-gradient-to-r from-secondary via-[#d49f37] to-secondary-dark text-white hover:shadow-[0_12px_32px_rgba(201,147,46,0.45)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 group shadow-md inline-flex items-center justify-center gap-2.5 px-6"
                >
                  <span>Start Investing Now</span>
                  <ArrowRight size={17} className="transition-transform duration-200 group-hover:translate-x-1 flex-shrink-0" />
                </Link>

                <Link
                  href="/services"
                  className="w-full sm:w-[240px] h-[54px] rounded-xl font-semibold text-primary bg-white/95 backdrop-blur-md border-2 border-border-ui hover:border-secondary hover:text-secondary hover:bg-white hover:shadow-[0_8px_24px_rgba(11,37,69,0.08)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 group inline-flex items-center justify-center gap-2.5 px-6"
                >
                  <span>View All Services</span>
                  <ArrowRight size={17} className="transition-transform duration-200 group-hover:translate-x-1 flex-shrink-0 opacity-70 group-hover:opacity-100" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-14 md:py-24 bg-white relative">
        <div className="w-full max-w-[1600px] mx-auto px-5 sm:px-8">
          <div data-aos="fade-up">
            <SectionTitle
              eyebrow="Why Choose Us"
              title="An Investment That Takes You To Great Heights"
              description="We provide clients with robust financial plans and recommendations for asset management and capital distribution."
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7 md:gap-8">
            {/* Why 1 */}
            <div
              data-aos="fade-up"
              data-aos-delay="100"
              className="group bg-white border border-border-ui/80 rounded-2xl p-8 md:p-9 shadow-[0_4px_24px_rgba(11,37,69,0.05)] hover:shadow-[0_20px_45px_rgba(11,37,69,0.12)] hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary via-[#f59e0b] to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#fef3c7] to-[#fde68a] text-secondary flex items-center justify-center mb-6 shadow-[0_8px_20px_rgba(201,147,46,0.22)] border border-[#fcd34d]/60 group-hover:scale-110 transition-transform duration-300">
                <ShieldCheck size={32} className="stroke-[2.2]" />
              </div>
              <h3 className="text-xl font-heading font-bold text-primary mb-3 group-hover:text-secondary transition-colors duration-200">
                Comprehensive Financial Plan
              </h3>
              <p className="text-gray-text text-[0.96rem] leading-relaxed">
                A suitable financial roadmap built by analysing your assets,
                liabilities, goals, and expenditures.
              </p>
            </div>

            {/* Why 2 */}
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              className="group bg-white border border-border-ui/80 rounded-2xl p-8 md:p-9 shadow-[0_4px_24px_rgba(11,37,69,0.05)] hover:shadow-[0_20px_45px_rgba(11,37,69,0.12)] hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary via-[#f59e0b] to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#dbeafe] to-[#bfdbfe] text-[#1d4ed8] flex items-center justify-center mb-6 shadow-[0_8px_20px_rgba(29,78,216,0.2)] border border-[#93c5fd]/60 group-hover:scale-110 transition-transform duration-300">
                <Target size={32} className="stroke-[2.2]" />
              </div>
              <h3 className="text-xl font-heading font-bold text-primary mb-3 group-hover:text-secondary transition-colors duration-200">
                Identify Future Goals
              </h3>
              <p className="text-gray-text text-[0.96rem] leading-relaxed">
                Depending on wealth accumulation and risk management, we help
                identify your different financial needs.
              </p>
            </div>

            {/* Why 3 */}
            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="group bg-white border border-border-ui/80 rounded-2xl p-8 md:p-9 shadow-[0_4px_24px_rgba(11,37,69,0.05)] hover:shadow-[0_20px_45px_rgba(11,37,69,0.12)] hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary via-[#f59e0b] to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#dcfce7] to-[#bbf7d0] text-[#15803d] flex items-center justify-center mb-6 shadow-[0_8px_20px_rgba(21,128,61,0.2)] border border-[#86efac]/60 group-hover:scale-110 transition-transform duration-300">
                <PieChart size={32} className="stroke-[2.2]" />
              </div>
              <h3 className="text-xl font-heading font-bold text-primary mb-3 group-hover:text-secondary transition-colors duration-200">
                Asset Allocation Centric Approach
              </h3>
              <p className="text-gray-text text-[0.96rem] leading-relaxed">
                Optimizing returns by allocating assets according to your
                investment planning and insurance safeguards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VIDEO TESTIMONIALS */}
      <section className="py-16 md:py-28 bg-gradient-to-b from-[#f8fafc] via-[#f1f5f9]/50 to-white relative overflow-hidden">
        {/* Ambient atmospheric glows */}
        <div className="absolute w-[500px] h-[500px] bg-secondary/8 rounded-full blur-[140px] pointer-events-none -top-24 right-1/4" />
        <div className="absolute w-[450px] h-[450px] bg-blue-600/6 rounded-full blur-[120px] pointer-events-none -bottom-24 left-1/4" />

        <div className="w-full max-w-[1600px] mx-auto px-5 sm:px-8 relative z-10">
          <div data-aos="fade-up">
            <SectionTitle
              eyebrow="Video Testimonials"
              title="Real Stories From Our Valued Investors"
              description="Watch real feedback and video experiences from clients who trust Dash Capital with their investments, retirement planning, and wealth management."
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-7">
            {/* Video Testimonial 1 */}
            <div
              data-aos="fade-up"
              data-aos-delay="100"
              className="group bg-white rounded-3xl p-3.5 border border-border-ui/80 shadow-[0_4px_24px_rgba(11,37,69,0.06)] hover:shadow-[0_24px_50px_rgba(11,37,69,0.14)] hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-slate-900 shadow-inner border border-slate-900/10 mb-3.5">
                <iframe
                  src="https://www.youtube.com/embed/PGRfhn2f5B0"
                  title="Video Testimonial - Dash Capital"
                  className="absolute inset-0 w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
              <div className="px-1.5 pb-1 flex items-center justify-between">
                <div className="flex items-center gap-1 text-secondary text-xs">
                  {"★".repeat(5)}
                  <span className="text-gray-text text-[0.72rem] ml-1 font-semibold font-sans">5.0</span>
                </div>
                <span className="text-[0.68rem] font-semibold uppercase tracking-wider text-secondary bg-secondary/10 px-2.5 py-0.5 rounded-full border border-secondary/20">
                  Client Story
                </span>
              </div>
            </div>

            {/* Video Testimonial 2 */}
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              className="group bg-white rounded-3xl p-3.5 border border-border-ui/80 shadow-[0_4px_24px_rgba(11,37,69,0.06)] hover:shadow-[0_24px_50px_rgba(11,37,69,0.14)] hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-slate-900 shadow-inner border border-slate-900/10 mb-3.5">
                <iframe
                  src="https://www.youtube.com/embed/zQu7PIdINfE"
                  title="Video Testimonial - Dash Capital"
                  className="absolute inset-0 w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
              <div className="px-1.5 pb-1 flex items-center justify-between">
                <div className="flex items-center gap-1 text-secondary text-xs">
                  {"★".repeat(5)}
                  <span className="text-gray-text text-[0.72rem] ml-1 font-semibold font-sans">5.0</span>
                </div>
                <span className="text-[0.68rem] font-semibold uppercase tracking-wider text-secondary bg-secondary/10 px-2.5 py-0.5 rounded-full border border-secondary/20">
                  Client Story
                </span>
              </div>
            </div>

            {/* Video Testimonial 3 */}
            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="group bg-white rounded-3xl p-3.5 border border-border-ui/80 shadow-[0_4px_24px_rgba(11,37,69,0.06)] hover:shadow-[0_24px_50px_rgba(11,37,69,0.14)] hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-slate-900 shadow-inner border border-slate-900/10 mb-3.5">
                <iframe
                  src="https://www.youtube.com/embed/Ec1wSZLd6xs"
                  title="Video Testimonial - Dash Capital"
                  className="absolute inset-0 w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
              <div className="px-1.5 pb-1 flex items-center justify-between">
                <div className="flex items-center gap-1 text-secondary text-xs">
                  {"★".repeat(5)}
                  <span className="text-gray-text text-[0.72rem] ml-1 font-semibold font-sans">5.0</span>
                </div>
                <span className="text-[0.68rem] font-semibold uppercase tracking-wider text-secondary bg-secondary/10 px-2.5 py-0.5 rounded-full border border-secondary/20">
                  Client Story
                </span>
              </div>
            </div>

            {/* Video Testimonial 4 */}
            <div
              data-aos="fade-up"
              data-aos-delay="400"
              className="group bg-white rounded-3xl p-3.5 border border-border-ui/80 shadow-[0_4px_24px_rgba(11,37,69,0.06)] hover:shadow-[0_24px_50px_rgba(11,37,69,0.14)] hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-slate-900 shadow-inner border border-slate-900/10 mb-3.5">
                <iframe
                  src="https://www.youtube.com/embed/31T3vrphQ2I"
                  title="Video Testimonial - Dash Capital"
                  className="absolute inset-0 w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
              <div className="px-1.5 pb-1 flex items-center justify-between">
                <div className="flex items-center gap-1 text-secondary text-xs">
                  {"★".repeat(5)}
                  <span className="text-gray-text text-[0.72rem] ml-1 font-semibold font-sans">5.0</span>
                </div>
                <span className="text-[0.68rem] font-semibold uppercase tracking-wider text-secondary bg-secondary/10 px-2.5 py-0.5 rounded-full border border-secondary/20">
                  Client Story
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-20 md:py-32 overflow-hidden relative bg-[radial-gradient(ellipse_80%_60%_at_20%_20%,rgba(201,147,46,0.11)_0%,transparent_60%),radial-gradient(ellipse_75%_65%_at_80%_80%,rgba(37,99,235,0.12)_0%,transparent_60%),radial-gradient(circle_at_50%_50%,rgba(241,245,249,0.92)_0%,#f8fafc_100%)]">
        {/* Soft atmospheric luminous glow orbs */}
        <div className="absolute w-[560px] h-[560px] rounded-full bg-gradient-to-br from-secondary/16 via-amber-400/10 to-transparent blur-[140px] pointer-events-none -top-28 -left-20 animate-pulse-glow-1" />
        <div className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-tl from-blue-600/14 via-indigo-500/10 to-transparent blur-[140px] pointer-events-none -bottom-24 -right-16 animate-pulse-glow-2" />
        <div className="absolute w-72 h-72 rounded-full bg-purple-500/6 blur-[90px] pointer-events-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

        {/* Elegant crossed-lines geometric grid overlay */}
        <div className="absolute inset-0 opacity-[0.4] pointer-events-none bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_50%,#000_50%,transparent_100%)]" />

        <div className="w-full max-w-[1600px] mx-auto px-5 sm:px-8 relative z-10">
          <div data-aos="fade-up">
            <SectionTitle
              eyebrow="FAQs"
              title="Frequently Asked Questions"
              description="Have questions about investing, liquidity, or returns? Find answers to commonly asked questions below."
            />
          </div>
          <div data-aos="fade-up" data-aos-delay="100" className="max-w-[900px] mx-auto">
            <FAQ items={faqs} />
          </div>
        </div>
      </section>

      {/* CONTACT / CTA */}
      <section data-aos="fade-up" className="py-16 md:py-24 bg-gradient-to-b from-[#f8fafc] to-white relative overflow-hidden">
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
