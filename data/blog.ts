// Blog posts shown on the /blog listing page and the /blog/[slug] page.
// Add a new post by adding a new object to this array.

export type BlogPost = {
  title: string;
  slug: string;
  date: string;
  image: string;
  excerpt: string;
  content: string;
};

export const blogs: BlogPost[] = [
  {
    title: "5 Reasons to Start a SIP Today",
    slug: "5-reasons-to-start-a-sip-today",
    date: "2026-01-10",
    image: "/images/blog/blog-1.svg",
    excerpt:
      "Systematic Investment Plans make disciplined investing simple. Here's why starting early can make a big difference.",
    content:
      "Systematic Investment Plans (SIPs) let you invest a fixed amount regularly into a mutual fund, building wealth steadily over time. Starting early gives your money more time to grow through the power of compounding, and SIPs also help smooth out market ups and downs through rupee-cost averaging. Whether your goal is retirement, your child's education, or simply building an emergency fund, a SIP is one of the easiest ways to begin your investment journey without needing a large lump sum.",
  },
  {
    title: "Fixed Deposit vs Mutual Fund: Which Is Right for You?",
    slug: "fixed-deposit-vs-mutual-fund",
    date: "2026-02-14",
    image: "/images/blog/blog-2.svg",
    excerpt:
      "Both are popular investment choices, but they serve different needs. Here's how to decide which suits you.",
    content:
      "Fixed deposits offer guaranteed, predictable returns and are ideal if capital safety is your top priority. Mutual funds, on the other hand, are market-linked and can offer higher growth potential over the long term, though they come with more risk. Many investors choose to hold both — using fixed deposits for short-term safety and mutual funds for long-term growth — to build a balanced portfolio suited to their goals.",
  },
  {
    title: "Why Insurance Is a Core Part of Financial Planning",
    slug: "why-insurance-is-core-to-financial-planning",
    date: "2026-03-05",
    image: "/images/blog/blog-3.svg",
    excerpt:
      "Insurance isn't an investment — it's protection. Here's why it should still be part of your financial plan.",
    content:
      "While investments help you grow wealth, insurance protects the wealth and family you already have. A good life insurance policy ensures your loved ones are financially secure if something happens to you, while health and general insurance protect your savings from being wiped out by unexpected medical bills or accidents. Building a strong financial plan means combining the right mix of protection and investment products.",
  },
];

// Small helper used by the dynamic blog page to find one post by its slug.
export function getBlogBySlug(slug: string) {
  return blogs.find((post) => post.slug === slug);
}
