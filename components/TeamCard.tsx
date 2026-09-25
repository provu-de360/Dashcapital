import Image from "next/image";

type Props = {
  name: string;
  role: string;
  image: string;
};

export default function TeamCard({ name, role, image }: Props) {
  return (
    <div className="bg-white border border-border-ui rounded-lg p-7 md:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-card text-center">
      <Image
        src={image}
        alt={name}
        width={140}
        height={140}
        className="rounded-full mx-auto mb-4 w-[140px] h-[140px] object-cover border-2 border-border-ui shadow-sm"
      />
      <h3 className="text-xl font-heading font-semibold text-primary mb-1.5">
        {name}
      </h3>
      <p className="text-gray-text text-[0.95rem]">{role}</p>
    </div>
  );
}
