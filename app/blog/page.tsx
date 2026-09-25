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
      <section className="page-hero">
        <div className="container">
          <h1>Our Blog</h1>
          <p>Insights on investing, insurance, and financial planning.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="Latest Articles"
            title="Financial Tips &amp; Insights"
          />
          <div className="grid grid-3">
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
