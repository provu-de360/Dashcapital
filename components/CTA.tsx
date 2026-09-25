import Link from "next/link";

// A reusable call-to-action band. Used at the bottom of the homepage
// and at the end of service pages.
// Usage: <CTA title="..." description="..." buttonText="..." buttonHref="/contact" />

type Props = {
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
};

export default function CTA({ title, description, buttonText, buttonHref }: Props) {
  return (
    <div className="container">
      <div className="cta">
        <h2>{title}</h2>
        <p>{description}</p>
        <Link href={buttonHref} className="btn btn-primary">
          {buttonText}
        </Link>
      </div>
    </div>
  );
}
