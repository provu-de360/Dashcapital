import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import { blogs, getBlogBySlug } from "@/data/blog";

type Props = {
  params: { slug: string };
};

// Pre-builds one page per blog post at build time
export function generateStaticParams() {
  return blogs.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = getBlogBySlug(params.slug);

  if (!post) {
    return { title: "Post Not Found | Dash Capital" };
  }

  return {
    title: `${post.title} | Dash Capital Blog`,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = getBlogBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="section">
      <div className="container" style={{ maxWidth: 760 }}>
        <Link
          href="/blog"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            color: "var(--secondary-color)",
            fontWeight: 600,
            marginBottom: 24,
          }}
        >
          <ArrowLeft size={16} /> Back to Blog
        </Link>

        <span className="blog-date">
          {new Date(post.date).toLocaleDateString("en-IN", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </span>

        <h1 style={{ marginBottom: 24 }}>{post.title}</h1>

        <Image
          src={post.image}
          alt={post.title}
          width={760}
          height={400}
          style={{ borderRadius: "var(--radius)", marginBottom: 32 }}
        />

        <p style={{ color: "var(--gray-text)", fontSize: "1.05rem" }}>
          {post.content}
        </p>
      </div>
    </article>
  );
}
