"use client";

// FAQ needs "use client" because it uses useState to track which
// question is currently open.

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FaqItem } from "@/data/faq";

type Props = {
  items: FaqItem[];
};

export default function FAQ({ items }: Props) {
  // Stores the index of the currently open question (or null if none open)
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  function toggle(index: number) {
    setOpenIndex(openIndex === index ? null : index);
  }

  return (
    <div>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div className="faq-item" key={item.question}>
            <button
              className="faq-question"
              onClick={() => toggle(index)}
              aria-expanded={isOpen}
            >
              {item.question}
              <ChevronDown
                size={20}
                style={{
                  transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.2s ease",
                }}
              />
            </button>
            <div className="faq-answer" data-open={isOpen}>
              <p>{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
