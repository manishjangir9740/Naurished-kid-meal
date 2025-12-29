import { useMemo, useState } from "react";

function PlusIcon({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M12 5v14M5 12h14"
        stroke="currentColor"
        strokeWidth="2.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CloseIcon({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M6 6l12 12M18 6L6 18"
        stroke="currentColor"
        strokeWidth="2.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(-1); // start with no FAQ opened

  const faqs = useMemo(
    () => [
      {
        q: "How does the meal subscription work?",
        a: "Choose a plan, set your delivery details, and we’ll deliver fresh meals to your child’s school/hostel on schedule.",
      },
      {
        q: "Are all meals vegetarian?",
        a: "Yes. Every dish is 100% veg, fresh-prepared, and kid-friendly.",
      },
      {
        q: "Can I change or swap meals?",
        a: "Yes. You can swap dishes and update preferences before the daily cut-off, so your child always gets what they’ll enjoy.",
      },
      {
        q: "How do I know my child received the meal?",
        a: "You’ll get a delivery confirmation once the meal is handed over (verified with our delivery check).",
      },
      {
        q: "What if my child has allergies?",
        a: "You can add allergy notes and preferences. Our team will help guide you to suitable meal options.",
      },
      {
        q: "Can I pause or modify the plan?",
        a: "Yes. You can pause or update your plan based on your child’s schedule—just manage it from your account.",
      },
    ],
    []
  );

  const toggle = (idx) => {
    setOpenIndex((prev) => (prev === idx ? -1 : idx));
  };

  return (
    <section className="relative bg-white py-24">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        {/* pill */}
        <div className="flex justify-center">
          <div className="inline-flex items-center rounded-full bg-[#F8F5EE] px-5 py-2">
            <span
              className="text-black/80"
              style={{
                fontFamily: "'SK Synonym Grotesk Trial', sans-serif",
                fontWeight: 500,
                fontSize: "16px",
              }}
            >
              FAQs
            </span>
          </div>
        </div>

        {/* heading */}
        <h2
          className="mt-6 text-center text-black"
          style={{
            fontFamily: "'Chillax', sans-serif",
            fontWeight: 700,
            fontSize: "clamp(34px, 5vw, 48px)",
            lineHeight: "1.05",
          }}
        >
          Got Questions? We&apos;ve Got You Covered.
        </h2>

        {/* subheading */}
        <p
          className="mx-auto mt-4 max-w-[680px] text-center text-black"
          style={{
            fontFamily: "'SK Synonym Grotesk Trial', sans-serif",
            fontWeight: 500,
            fontSize: "16px",
            lineHeight: "1.6",
          }}
        >
          Quick answers to the things parents ask most.
        </p>

        {/* accordion */}
        <div className="mx-auto mt-14 max-w-[1120px] space-y-6">
          {faqs.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={item.q}
                className="rounded-[24px] border border-black/60 bg-[#F8F5EE]"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="flex w-full items-center justify-between gap-6 px-8 py-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span
                    className="text-black"
                    style={{
                      fontFamily: "'SK Synonym Grotesk Trial', sans-serif",
                      fontWeight: 500,
                      fontSize: "clamp(16px, 1.6vw, 20px)",
                      lineHeight: "1.25",
                    }}
                  >
                    {idx + 1}. {item.q}
                  </span>

                  <span className="shrink-0 text-black" aria-hidden="true">
                    {isOpen ? (
                      <CloseIcon className="h-7 w-7 md:h-8 md:w-8" />
                    ) : (
                      <PlusIcon className="h-7 w-7 md:h-8 md:w-8" />
                    )}
                  </span>
                </button>

                {/* smooth dropdown */}
                <div
                  className={[
                    "grid px-8 transition-[grid-template-rows] duration-300 ease-out",
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                  ].join(" ")}
                >
                  <div className="overflow-hidden">
                    <div
                      className={[
                        "pb-7 text-left transition-all duration-300 ease-out",
                        isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1",
                      ].join(" ")}
                      aria-hidden={!isOpen}
                    >
                      <p
                        className="text-black"
                        style={{
                          fontFamily: "'SK Synonym Grotesk Trial', sans-serif",
                          fontWeight: 500,
                          fontSize: "16px",
                          lineHeight: "1.7",
                        }}
                      >
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


