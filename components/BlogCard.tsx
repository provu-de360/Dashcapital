import Link from "next/link";
import Image from "next/image";

type Props = {
  title: string;
  slug: string;
  date: string;
  image: string;
  excerpt: string;
};

export default function BlogCard({ title, slug, date, image, excerpt }: Props) {
  return (
    <Link
      href={`/blog/${slug}`}
      className="bg-white border border-border-ui rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-card group flex flex-col h-full block"
    >
      <div className="w-full h-[200px] overflow-hidden relative bg-light">
        <Image
          src={image}
          alt={title}
          width={400}
          height={200}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-5 md:p-6 flex flex-col flex-grow">
        <span className="text-secondary text-sm font-semibold mb-2 block font-heading">
          {new Date(date).toLocaleDateString("en-IN", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </span>
        <h3 className="text-lg md:text-xl font-heading font-semibold text-primary mb-2.5 group-hover:text-secondary transition-colors">
          {title}
        </h3>
        <p className="text-gray-text text-[0.95rem] leading-relaxed flex-grow">
          {excerpt}
        </p>
      </div>
    </Link>
  );
}
