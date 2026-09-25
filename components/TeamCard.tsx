import Image from "next/image";

// A single team member card used on the About page.
type Props = {
  name: string;
  role: string;
  image: string;
};

export default function TeamCard({ name, role, image }: Props) {
  return (
    <div className="feature-card" style={{ textAlign: "center" }}>
      <Image
        src={image}
        alt={name}
        width={140}
        height={140}
        style={{
          borderRadius: "50%",
          margin: "0 auto 16px",
          width: "140px",
          height: "140px",
          objectFit: "cover",
        }}
      />
      <h3>{name}</h3>
      <p>{role}</p>
    </div>
  );
}
