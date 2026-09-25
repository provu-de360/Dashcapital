import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

// A single service card used on the homepage and /services page.
// Usage: <ServiceCard title="Mutual Fund" slug="mutual-fund" description="..." image="/images/services/mutual-fund.svg" />

type Props = {
  title: string;
  slug: string;
  description: string;
  image: string;
};

export default function ServiceCard({ title, slug, description, image }: Props) {
  return (
    <div className="service-card">
      <div className="service-card-image">
        <Image src={image} alt={title} width={400} height={200} />
      </div>
      <div className="service-card-body">
        <h3>{title}</h3>
        <p>{description}</p>
        <Link href={`/services/${slug}`} className="service-card-link">
          Learn More <ArrowRight size={14} style={{ display: "inline", verticalAlign: "middle" }} />
        </Link>
      </div>
    </div>
  );
}
