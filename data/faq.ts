// Frequently asked questions shown on the homepage.
// Edit the question/answer text here — the FAQ component just maps over this list.

export type FaqItem = {
  question: string;
  answer: string;
};

export const faqs: FaqItem[] = [
  {
    question: "What is the minimum amount required for a mutual fund?",
    answer:
      "You can start investing in most mutual funds with a small monthly SIP. Our team can help you find a plan that fits your budget and goals.",
  },
  {
    question: "Why should I invest in mutual funds?",
    answer:
      "Mutual funds offer professional management, diversification, and the potential for inflation-beating returns over the long term.",
  },
  {
    question:
      "What is the difference between a bank fixed deposit and a mutual fund?",
    answer:
      "Fixed deposits offer fixed, guaranteed returns with lower risk, while mutual funds are market-linked and can offer higher long-term growth with variable risk.",
  },
  {
    question: "Is investing in mutual funds risky?",
    answer:
      "All market-linked investments carry some risk. We help you choose funds that match your personal risk appetite and time horizon.",
  },
  {
    question: "What if I want to close my mutual fund investment?",
    answer:
      "Most mutual funds allow you to redeem your units at any time, though some plans may have an exit load or lock-in period. Our team can guide you through the process.",
  },
];
