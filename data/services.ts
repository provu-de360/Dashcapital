// All service information lives in this one file.
// To add a new service, just add a new object to this array.
// The rest of the website (cards, service pages, dropdown) reads from here.

export type Service = {
  title: string;
  slug: string; // used in the URL, e.g. /services/mutual-fund
  category: "Investment" | "Protection";
  description: string; // short text used on cards
  image: string; // path inside /public
  benefits: string[]; // used on the individual service page
  content: string; // longer paragraph used on the individual service page
};

export const services: Service[] = [
  {
    title: "Mutual Fund",
    slug: "mutual-fund",
    category: "Investment",
    description:
      "Offers diversified investment opportunities and liquidity benefits to investors, ensuring expert oversight for seeking long-term growth.",
    image: "/images/services/mutual-fund-image.png",
    content:
      "Mutual funds pool money from many investors to invest in a diversified basket of stocks, bonds, and other securities. As AMFI-registered mutual fund distributors, we help you choose funds that match your risk appetite, time horizon, and financial goals.",
    benefits: [
      "Professionally managed and diversified portfolios",
      "Options for every risk appetite and goal",
      "High liquidity compared to many other investments",
      "Systematic Investment Plans (SIPs) for disciplined investing",
    ],
  },
  {
    title: "Fixed Deposit",
    slug: "fixed-deposit",
    category: "Investment",
    description:
      "Stable, low-risk investment option with NBFCs that offers predictable and secure returns over a fixed tenure.",
    image: "/images/services/fixed-deposit-image.png",
    content:
      "Fixed Deposits (FDs) with reputed NBFCs offer a safe place to park your money while earning a fixed rate of interest. They are ideal for conservative investors who prioritize capital safety and predictable returns.",
    benefits: [
      "Fixed and guaranteed returns",
      "Flexible tenure options",
      "Lower risk compared to market-linked instruments",
      "Easy to open and track",
    ],
  },
  {
    title: "Home Loans",
    slug: "home-loans",
    category: "Investment",
    description:
      "Flexible financing options at affordable interest rates to help you secure your ideal home.",
    image: "/images/services/home-loans-image.png",
    content:
      "We help prospective homeowners obtain financial assistance for buying, constructing, or renovating their home. Our team compares offers from multiple lenders to find you the most affordable interest rate and repayment terms.",
    benefits: [
      "Competitive interest rates",
      "Assistance with documentation",
      "Flexible repayment tenures",
      "Support for purchase, construction, and renovation",
    ],
  },
  {
    title: "Bonds",
    slug: "bonds",
    category: "Investment",
    description:
      "Fixed-income securities that let you lend money in exchange for capital preservation and steady returns.",
    image: "/images/services/bonds-image.png",
    content:
      "Bonds are fixed-income instruments issued by governments or companies. They offer investors a predictable stream of income while helping preserve capital, making them a useful part of a balanced investment portfolio.",
    benefits: [
      "Predictable, steady income",
      "Helps balance a market-linked portfolio",
      "Choice of government and corporate bonds",
      "Capital preservation focus",
    ],
  },
  {
    title: "Loan Against Securities",
    slug: "loan-against-securities",
    category: "Investment",
    description:
      "A cost-efficient way to secure loans at competitive interest rates using your existing securities as collateral.",
    image: "/images/services/loan-against-securities-image.png",
    content:
      "Loan Against Securities (LAS) lets you unlock the value of your existing investments — like mutual funds, shares, or bonds — without selling them. It's a fast, cost-efficient way to meet short-term financial needs.",
    benefits: [
      "No need to sell your existing investments",
      "Competitive interest rates",
      "Quick disbursal process",
      "Flexible repayment options",
    ],
  },
  {
    title: "General Insurance",
    slug: "general-insurance",
    category: "Protection",
    description:
      "Protects your health, vehicle, home, and other assets against unforeseen risks and financial loss.",
    image: "/images/services/general-insurance-image.png",
    content:
      "General insurance covers everything other than life — including health, motor, home, and travel. We help you choose the right cover so that unexpected events don't derail your finances.",
    benefits: [
      "Coverage for health, motor, home, and travel",
      "Support during claims",
      "Plans compared across multiple insurers",
      "Affordable premium options",
    ],
  },
  {
    title: "Life Insurance",
    slug: "life-insurance",
    category: "Protection",
    description:
      "Comprehensive financial protection for your family in case of life's uncertainties.",
    image: "/images/services/life-insurance-image.png",
    content:
      "Life insurance ensures your family's financial security is protected even in your absence. We help you select a policy that balances protection, affordability, and long-term goals such as retirement or your child's education.",
    benefits: [
      "Financial security for your family",
      "Term, endowment, and ULIP options",
      "Tax benefits under applicable laws",
      "Plans tailored to life stage and goals",
    ],
  },
];

// Small helper used by the dynamic service page to find one service by its slug.
export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
