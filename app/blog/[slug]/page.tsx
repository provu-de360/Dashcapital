import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import { blogs, getBlogBySlug } from "@/data/blog";

type Props = {
  params: { slug: string };
};

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
    <article className="py-12 md:py-20">
      <div className="w-full max-w-[760px] mx-auto px-5">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-secondary font-semibold hover:gap-2 transition-all mb-6 text-sm md:text-base group"
        >
          <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-0.5" />
          <span>Back to Blog</span>
        </Link>

        <span className="text-secondary text-sm font-semibold mb-2 block font-heading">
          {new Date(post.date).toLocaleDateString("en-IN", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </span>

        <h1 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-primary mb-6 leading-tight">
          {post.title}
        </h1>

        <div className="mb-8 rounded-lg overflow-hidden shadow-sm">
          <Image
            src={post.image}
            alt={post.title}
            width={760}
            height={400}
            className="w-full h-auto object-cover"
          />
        </div>

        <p className="text-gray-text text-base md:text-[1.05rem] leading-relaxed">
          {post.content}
        </p>
      </div>
    </article>
  );
}
