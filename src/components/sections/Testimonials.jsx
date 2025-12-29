import { useEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function Testimonials() {
  const sectionRef = useRef(null);
  const cardRef = useRef(null);
  const quoteRef = useRef(null);
  const [active, setActive] = useState(0);

  const testimonials = useMemo(
    () => [
      {
        quote: "“His lunchbox finally comes home empty.”",
        text: "My son actually finishes his meals now, and I get delivery alerts every day.",
        name: "Ritu",
        role: "Parent of Grade 4",
      },
      {
        quote: "“No more stress about lunch.”",
        text: "The meals are fresh, my child loves them, and the tracking keeps me relaxed.",
        name: "Aditi",
        role: "Parent of Grade 6",
      },
      {
        quote: "“Healthy + hassle-free.”",
        text: "We love the variety and the delivery confirmation makes it feel super safe.",
        name: "Neha",
        role: "Parent of Grade 3",
      },
    ],
    []
  );

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (!sectionRef.current || !cardRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardRef.current,
        { y: 40, opacity: 0, scale: 0.98 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none none",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (!quoteRef.current) return;
    gsap.fromTo(
      quoteRef.current,
      { y: 10, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.35, ease: "power2.out" }
    );
  }, [active]);

  const prev = () => setActive((p) => (p - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive((p) => (p + 1) % testimonials.length);

  const t = testimonials[active];

  return (
    <section
      ref={sectionRef}
      className="relative py-40 -mt-[120px] "
      style={{
        backgroundImage: "url('/Naurished-kid-meal/assets/section5/backgroungimage5.jpg')",
        backgroundSize: "cover",    
        backgroundPosition: "center",
      }}
    >
      <div className="relative mx-auto max-w-[1200px] px-6 md:px-10 flex justify-center">
        <div
          ref={cardRef}
          className="relative w-full max-w-[1200px] mx-auto h-[500px]"
        >
          {/* background (keep image unchanged) */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 flex justify-center items-center"
            style={{
              backgroundImage: "url('/Naurished-kid-meal/assets/section6/Vector 7.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          {/* content (fit inside trapezoid safe-area) */}
          <div
            className="relative z-10 flex flex-col items-center text-center"
            style={{
             
            }}
          >
            {/* pill */}
            <div className="flex justify-center py-4">
              <div className="inline-flex items-center rounded-full bg-[#F8F5EE] px-5 py-2">
                <span
                  style={{
                    fontFamily: "'SK Synonym Grotesk Trial', sans-serif",
                    fontWeight: 500,
                    fontSize: "16px",
                  }}
                  className="text-black/80"
                >
                  Testimonial
                </span>
              </div>
            </div>

          {/* heading */}
          <h2
            className="text-center text-black"
            style={{
              fontFamily: "'Chillax', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(32px, 4.6vw, 48px)",
              lineHeight: "1.1",
            }}
          >
            Parents Trust Us. Kids Love Us.
          </h2>

          <p
            className="text-center text-black mt-4"
            style={{
              fontFamily: "'SK Synonym Grotesk Trial', sans-serif",
              fontWeight: 500,
              fontSize: "16px",
              lineHeight: "1.6",
            }}
          >
            Real stories from families who use Nourished every day.
          </p>

          {/* quote */}
          <div ref={quoteRef} className="mt-10 text-center">
            <div
              className="text-black"
              style={{
                fontFamily: "'SK Synonym Grotesk Trial', sans-serif",
                fontWeight: 500,
                fontSize: "clamp(18px, 2.2vw, 20px)",
                lineHeight: "1.35",
              }}
            >
              {t.quote}
            </div>

            <p
              className="text-black/65 mt-1 max-w-[520px] mx-auto"
              style={{
                fontFamily: "'SK Synonym Grotesk Trial', sans-serif",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "1.7",
              }}
            >
              {t.text}
            </p>
          </div>

          {/* divider */}
          <div className="my-2 mx-auto h-px w-full max-w-[540px] bg-black/10" />

          {/* author */}
          <div className="mt-2 flex items-center justify-center gap-3">
            <div className="h-[40px] w-[40px] rounded-full bg-[#D9D9D9] flex items-center justify-center overflow-hidden">
            <img
              src={`/Naurished-kid-meal/assets/tttt.jpg`}
              alt="Happy kid with meal"
              className=" w-full object-contain"
            />
            </div>
            <div className="text-left">
              <div
                className="text-black"
                style={{
                  fontFamily: "'SK Synonym Grotesk Trial', sans-serif",
                  fontWeight: 500,
                  fontSize: "16px",
                }}
              >
                {t.name}
              </div>
              <div
                className="text-black"
                style={{
                  fontFamily: "'SK Synonym Grotesk Trial', sans-serif",
                  fontWeight: 400,
                  fontSize: "14px",
                }}
              >
                {t.role}
              </div>
            </div>
          </div>

          {/* controls */}
          <div className="mt-5 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={prev}
              className="h-10 w-10 rounded-full bg-[#EDEDED] text-black flex items-center justify-center hover:bg-[#E2E2E2] transition-colors"
              aria-label="Previous testimonial"
            >
              <span className="text-lg leading-none">←</span>
            </button>
            <button
              type="button"
              onClick={next}
              className="h-10 w-10 rounded-full bg-black text-white flex items-center justify-center hover:bg-[#1a1a1a] transition-colors"
              aria-label="Next testimonial"
            >
              <span className="text-lg leading-none">→</span>
            </button>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}


