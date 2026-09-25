import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

type Props = {
  title: string;
  slug: string;
  description: string;
  image: string;
};

export default function ServiceCard({ title, slug, description, image }: Props) {
  return (
    <div className="group relative bg-white border border-border-ui/80 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(11,37,69,0.12)] hover:border-secondary/40 flex flex-col h-full">
      {/* Top Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary via-[#f59e0b] to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

      <div className="overflow-hidden w-full h-[220px] relative bg-slate-900">
        <Image
          src={image}
          alt={title}
          width={400}
          height={220}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />
      </div>

      <div className="p-7 flex flex-col flex-grow justify-between">
        <div>
          <h3 className="text-xl font-heading font-bold text-primary mb-2.5 group-hover:text-secondary transition-colors duration-200">
            {title}
          </h3>
          <p className="text-gray-text text-[0.95rem] mb-5 leading-relaxed">
            {description}
          </p>
        </div>

        <Link
          href={`/services/${slug}`}
          className="inline-flex items-center gap-2 text-sm font-semibold text-secondary group-hover:text-secondary-dark transition-all mt-auto pt-4 border-t border-border-ui/60"
        >
          <span>Explore Solution</span>
          <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}
