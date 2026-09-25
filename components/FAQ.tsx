"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { FaqItem } from "@/data/faq";

type Props = {
  items: FaqItem[];
};

export default function FAQ({ items }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  function toggle(index: number) {
    setOpenIndex(openIndex === index ? null : index);
  }

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={item.question}
            className={`group rounded-2xl border transition-all duration-300 overflow-hidden ${
              isOpen
                ? "bg-white/95 backdrop-blur-xl border-secondary/40 shadow-[0_12px_32px_rgba(201,147,46,0.12)]"
                : "bg-white/80 backdrop-blur-md border-border-ui/80 hover:border-secondary/30 hover:bg-white hover:shadow-[0_8px_24px_rgba(11,37,69,0.06)]"
            }`}
          >
            <button
              className="w-full flex justify-between items-center p-5 sm:p-6 text-left cursor-pointer transition-colors focus:outline-none"
              onClick={() => toggle(index)}
              aria-expanded={isOpen}
            >
              <div className="flex items-center gap-3.5 pr-4">
                <div
                  className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${
                    isOpen
                      ? "bg-secondary text-white shadow-[0_4px_12px_rgba(201,147,46,0.3)]"
                      : "bg-secondary/10 text-secondary group-hover:bg-secondary/15"
                  }`}
                >
                  <HelpCircle size={18} />
                </div>
                <span
                  className={`font-heading font-semibold text-base sm:text-lg transition-colors duration-200 ${
                    isOpen ? "text-primary" : "text-primary group-hover:text-secondary"
                  }`}
                >
                  {item.question}
                </span>
              </div>

              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                  isOpen
                    ? "bg-secondary/15 text-secondary rotate-180"
                    : "bg-slate-100 text-gray-text group-hover:bg-secondary/10 group-hover:text-secondary"
                }`}
              >
                <ChevronDown size={18} />
              </div>
            </button>

            <div
              className={`transition-all duration-300 ease-in-out px-5 sm:px-6 ${
                isOpen ? "max-h-96 pb-6 pt-0 opacity-100" : "max-h-0 pb-0 pt-0 opacity-0 overflow-hidden"
              }`}
            >
              <div className="pt-3 border-t border-border-ui/60 pl-12 text-gray-text text-[0.96rem] leading-relaxed">
                {item.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
