import type { Metadata } from "next";
import SectionTitle from "@/components/SectionTitle";
import BlogCard from "@/components/BlogCard";
import { blogs } from "@/data/blog";

export const metadata: Metadata = {
  title: "Blog | Dash Capital",
  description:
    "Read the latest articles on mutual funds, insurance, and financial planning from Dash Capital.",
};

export default function BlogPage() {
  return (
    <>
      <section className="bg-primary text-white py-14 md:py-20 text-center">
        <div className="w-full max-w-[1600px] mx-auto px-5 sm:px-8">
          <h1 className="text-white text-3xl md:text-4xl lg:text-[2.2rem] font-heading font-bold mb-2.5">
            Our Blog
          </h1>
          <p className="text-[#d6dde6] text-base md:text-lg max-w-xl mx-auto">
            Insights on investing, insurance, and financial planning.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="w-full max-w-[1600px] mx-auto px-5 sm:px-8">
          <SectionTitle
            eyebrow="Latest Articles"
            title="Financial Tips &amp; Insights"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {blogs.map((post) => (
              <BlogCard
                key={post.slug}
                title={post.title}
                slug={post.slug}
                date={post.date}
                image={post.image}
                excerpt={post.excerpt}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
