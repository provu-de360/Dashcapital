type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export default function SectionTitle({ eyebrow, title, description }: Props) {
  return (
    <div className="text-center max-w-[640px] mx-auto mb-10 md:mb-12">
      {eyebrow && (
        <span className="text-secondary uppercase tracking-[1.5px] font-semibold text-xs md:text-sm mb-2.5 block font-heading">
          {eyebrow}
        </span>
      )}
      <h2 className="text-2xl md:text-3xl lg:text-[1.9rem] font-bold text-primary mb-3.5 leading-snug font-heading">
        {title}
      </h2>
      {description && <p className="text-gray-text text-sm md:text-base leading-relaxed">{description}</p>}
    </div>
  );
}
