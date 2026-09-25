// Team member information for the About page.
// Add or remove people by editing this array.

export type TeamMember = {
  name: string;
  role: string;
  image: string;
};

export const team: TeamMember[] = [
  {
    name: "Shomak Dash",
    role: "Founder & Financial Advisor",
    image: "/images/team/team-1.svg",
  },
  {
    name: "Team Member",
    role: "Investment Specialist",
    image: "/images/team/team-2.svg",
  },
  {
    name: "Team Member",
    role: "Client Relationship Manager",
    image: "/images/team/team-3.svg",
  },
];
