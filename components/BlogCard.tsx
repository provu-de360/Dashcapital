import Link from "next/link";
import Image from "next/image";

// A single blog post card used on the /blog listing page.
type Props = {
  title: string;
  slug: string;
  date: string;
  image: string;
  excerpt: string;
};

export default function BlogCard({ title, slug, date, image, excerpt }: Props) {
  return (
    <Link href={`/blog/${slug}`} className="blog-card">
      <Image src={image} alt={title} width={400} height={200} />
      <div className="blog-card-body">
        <span className="blog-date">
          {new Date(date).toLocaleDateString("en-IN", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </span>
        <h3>{title}</h3>
        <p>{excerpt}</p>
      </div>
    </Link>
  );
}
