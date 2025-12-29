import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function PricingPlans() {
  const sectionRef = useRef(null);
  const pillRef = useRef(null);
  const headingRef = useRef(null);
  const paraRef = useRef(null);
  const cardsWrapRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Staggered reveal
      gsap.fromTo(
        [pillRef.current, headingRef.current, paraRef.current],
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.08,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        }
      );

      // Cards reveal
      if (cardsWrapRef.current) {
        gsap.fromTo(
          cardsWrapRef.current.children,
          { y: 40, opacity: 0, scale: 0.98 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.85,
            ease: "power3.out",
            stagger: 0.12,
            scrollTrigger: {
              trigger: cardsWrapRef.current,
              start: "top 78%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const FeatureRow = ({ dark = false, children }) => (
    <div className="flex items-center gap-3">
      <span
        className={`inline-flex h-4 w-4 items-center justify-center rounded-full ${
          dark ? "bg-white" : "bg-black"
        }`}
      >
        <svg
          width="10"
          height="8"
          viewBox="0 0 10 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 4L3.5 6.5L9 1"
            stroke={dark ? "#000" : "#fff"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span
        className={`${dark ? "text-white/90" : "text-black/75"}`}
        style={{
          fontFamily: "'SK Synonym Grotesk Trial', sans-serif",
          fontWeight: 400,
          fontSize: "16px",
        }}
      >
        {children}
      </span>
    </div>
  );

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden z-30 -mt-[100px]"
    >

      {/* Top photo strip (visible above the wave) */}
      <div className="relative sm:h-[140px] md:h-[160px] z-10" aria-hidden="true" />

        {/* Beige wave mask (top + bottom curves + soft shadow) */}
        <img
          src={`/Naurished-kid-meal/assets/wave for 5th section.png`}
          alt=""
          draggable="false"
          className="absolute inset-0 w-[100%] object-fill pointer-events-none h-full select-none"
          style={{ display: "block", verticalAlign: "top" }}
        />

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-[1200px] px-6 pb-40 md:px-10 text-center">
        {/* Pill */}
        <div ref={pillRef} className="flex justify-center mb-5">
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-5 py-2 shadow-md">
            <svg
              width="18"
              height="16"
              viewBox="0 0 20 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.33301 4.55556V2.77778C6.33301 2.30628 6.52031 1.8541 6.85371 1.5207C7.18711 1.1873 7.63929 1 8.11079 1H11.6663C12.1378 1 12.59 1.1873 12.9234 1.5207C13.2568 1.8541 13.4441 2.30628 13.4441 2.77778V4.55556"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M1 9.88888H18.7778M2.77778 17H17C17.4715 17 17.9237 16.8127 18.2571 16.4793C18.5905 16.1459 18.7778 15.6937 18.7778 15.2222V8.1111C18.7778 7.16811 18.4032 6.26374 17.7364 5.59694C17.0696 4.93014 16.1652 4.55554 15.2222 4.55554H4.55556C3.61256 4.55554 2.70819 4.93014 2.0414 5.59694C1.3746 6.26374 1 7.16811 1 8.1111V15.2222C1 15.6937 1.1873 16.1459 1.5207 16.4793C1.8541 16.8127 2.30628 17 2.77778 17Z"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span
              style={{
                fontFamily: "'SK Synonym Grotesk Trial', sans-serif",
                fontWeight: 500,
                fontSize: "13px",
              }}
              className="text-black"
            >
              Pricing
            </span>
          </div>
        </div>

        <h2
          ref={headingRef}
          style={{
            fontFamily: "'Chillax', sans-serif",
            fontWeight: 700,
            fontSize: "clamp(34px, 5vw, 56px)",
            lineHeight: "1.12",
          }}
          className="text-black mb-3"
        >
          Simple Plans. Fresh Meals.
        </h2>

        <p
          ref={paraRef}
          style={{
            fontFamily: "'SK Synonym Grotesk Trial', sans-serif",
            fontWeight: 500,
            fontSize: "clamp(14px, 1.9vw, 16px)",
            lineHeight: "1.6",
          }}
          className="text-black/70 mb-12 max-w-[720px] mx-auto"
        >
          Pick a plan that fits your child's routine. Every option comes with
          fresh vegetarian meals, meal tracking, and complete delivery safety.
        </p>

        {/* Pricing Panel */}
        <div className="mx-auto max-w-[1200px] rounded-[24px] bg-white/95 p-6 sm:p-8 shadow-[0_30px_90px_rgba(0,0,0,0.18)]">
          <div
            ref={cardsWrapRef}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-7 items-stretch"
          >
            {/* Daily */}
            <div className="relative group overflow-visible">

              {/* Plate on hover */}
              <img
  src={`/Naurished-kid-meal/assets/plate.png`}
  alt=""
  className="
    pointer-events-none
    absolute
    -top-25
    left-1/2
    -translate-x-1/2
    opacity-0
    translate-y-4
    transition-all
    duration-400
    ease-out
    group-hover:opacity-100
    group-hover:translate-y-0
    
  "
/>

              {/* Card */}
              <div className="relative z-10 rounded-[20px]  bg-gradient-to-b from-[#F3F3F3] to-[#DCDCDC] py-4 px-4 shadow-inner border border-black/5 hover:-translate-y-1 transition-transform">
                <div className="flex justify-end">
                  <span className="rounded-full bg-[#FF9F0A] py-2 px-4 text-white"
                    style={{ fontFamily: "'SK Synonym Grotesk Trial', sans-serif", fontWeight: 500, fontSize: "16px" }}
                  >
                    Flexible
                  </span>
                </div>

                <h3
                  className="text-black mt-4"
                  style={{ fontFamily: "'Chillax', sans-serif", fontWeight: 600, fontSize: "clamp(20px, 4vw, 26px)" }}
                >
                  Daily Plan
                </h3>
                <p
                  className="text-black/60 mt-1 mb-5"
                  style={{ fontFamily: "'SK Synonym Grotesk Trial', sans-serif", fontWeight: 500, fontSize: "12px" }}
                >
                  Perfect for trying out Nourished
                </p>

                <div className="rounded-[12px] bg-black px-5 py-4 text-white mb-6">
                  <div style={{ fontFamily: "'SK Synonym Grotesk Trial', sans-serif", fontWeight: 700, fontSize: "20px" }}>
                    ₹2,800
                  </div>
                  <div style={{ fontFamily: "'SK Synonym Grotesk Trial', sans-serif", fontWeight: 500, fontSize: "12px" }} className="text-white/80">
                    20 meals/week
                  </div>
                </div>

                <div className="space-y-3 mb-6 text-left">
                  <FeatureRow>All Daily Plan features</FeatureRow>
                  <FeatureRow>Save ₹100/week</FeatureRow>
                  <FeatureRow>Meal customization</FeatureRow>
                  <FeatureRow>Priority support</FeatureRow>
                  <FeatureRow>Nutrition tracking</FeatureRow>
                </div>

                <button className="w-full bg-black text-white rounded-tr-[16px] rounded-bl-[16px]  py-3"
                  style={{ fontFamily: "'SK Synonym Grotesk Trial', sans-serif", fontWeight: 600, fontSize: "16px" }}
                >
                  Subscribe Now
                </button>
              </div>

            </div>

            {/* Weekly (highlight) */}
            <div className="relative group overflow-visible">

              {/* Plate on hover */}
              <img
                src={`/Naurished-kid-meal/assets/plate.png`}
                alt=""
                className="
                  pointer-events-none
                  absolute
                  -top-25
                  left-1/2
                  -translate-x-1/2
                  opacity-0
                  translate-y-4
                  transition-all
                  duration-400
                  ease-out
                  group-hover:opacity-100
                  group-hover:translate-y-0

                "
              />

              {/* Card */}
              <div className="relative z-10 rounded-[22px] bg-gradient-to-b from-[#111] border-black border-4 flex justify-center to-[#2B2B2B] shadow-[0_25px_70px_rgba(0,0,0,0.35)]">
                <div className="rounded-[18px] border-white border-4 py-4 px-4 flex flex-col w-full justify-center">
                  <div className="flex justify-end">
                    <span className="rounded-full bg-[#5DBB63] py-2 px-4 text-white  shadow-[4px_4px_8px_rgba(255,255,255,0.3)]"
                      style={{ fontFamily: "'SK Synonym Grotesk Trial', sans-serif", fontWeight: 600, fontSize: "12px" }}
                    >
                      Best Value
                    </span>
                  </div>

                  <h3
                    className="text-white mt-4"
                    style={{ fontFamily: "'Chillax', sans-serif", fontWeight: 600, fontSize: "clamp(20px, 4vw, 26px)" }}
                  >
                    Weekly Plan
                  </h3>
                  <p
                    className="text-white/70 mt-1 mb-5"
                    style={{ fontFamily: "'SK Synonym Grotesk Trial', sans-serif", fontWeight: 500, fontSize: "12px" }}
                  >
                    Most popular among parents
                  </p>

                  <div className="rounded-[12px] bg-white px-5 py-4 text-black mb-6">
                    <div style={{ fontFamily: "'SK Synonym Grotesk Trial', sans-serif", fontWeight: 800, fontSize: "20px" }}>
                      ₹850
                    </div>
                    <div style={{ fontFamily: "'SK Synonym Grotesk Trial', sans-serif", fontWeight: 500, fontSize: "12px" }} className="text-black/70">
                      5 meals/week
                    </div>
                  </div>

                  <div className="space-y-3 mb-6 text-left">
                    <FeatureRow dark>All Daily Plan features</FeatureRow>
                    <FeatureRow dark>Save ₹100/week</FeatureRow>
                    <FeatureRow dark>Meal customization</FeatureRow>
                    <FeatureRow dark>Priority support</FeatureRow>
                    <FeatureRow dark>Nutrition tracking</FeatureRow>
                  </div>

                  <button className="w-full bg-white text-black rounded-tr-[16px] rounded-bl-[16px]  py-3"
                    style={{ fontFamily: "'SK Synonym Grotesk Trial', sans-serif", fontWeight: 700, fontSize: "16px" }}
                  >
                    Subscribe Now
                  </button>
                </div>
              </div>

            </div>

            {/* Monthly */}
            <div className="relative group overflow-visible">

              {/* Plate on hover */}
              <img
                src={`/Naurished-kid-meal/assets/plate.png`}
                alt=""
                className="
                  pointer-events-none
                  absolute
                  -top-25
                  left-1/2
                  -translate-x-1/2
                  opacity-0
                  translate-y-4
                  transition-all
                  duration-400
                  ease-out
                  group-hover:opacity-100
                  group-hover:translate-y-0
                  z-1

                "
              />

              {/* Card */}
              <div className="relative z-10 rounded-[20px] bg-gradient-to-b from-[#F3F3F3] to-[#DCDCDC] py-4 px-4  shadow-inner border border-black/5 hover:-translate-y-1 transition-transform">
              <div className="flex justify-end ">
                <span className="rounded-full bg-[#B781E8] py-2 px-4 text-white "
                  style={{ fontFamily: "'SK Synonym Grotesk Trial', sans-serif", fontWeight: 600, fontSize: "12px" }}
                >
                  Best Value
                </span>
              </div>

              <h3
                className="text-black mt-4"
                style={{ fontFamily: "'Chillax', sans-serif", fontWeight: 600, fontSize: "clamp(20px, 4vw, 26px)" }}
              >
                Monthly Plan
              </h3>
              <p
                className="text-black/60 mt-1 mb-5"
                style={{ fontFamily: "'SK Synonym Grotesk Trial', sans-serif", fontWeight: 500, fontSize: "12px" }}
              >
                Best savings for committed families
              </p>

              <div className="rounded-[12px] bg-black px-5 py-4 text-white mb-6">
                <div style={{ fontFamily: "'SK Synonym Grotesk Trial', sans-serif", fontWeight: 700, fontSize: "20px" }}>
                  ₹2,800
                </div>
                <div style={{ fontFamily: "'SK Synonym Grotesk Trial', sans-serif", fontWeight: 500, fontSize: "12px" }} className="text-white/80">
                  20 meals/week
                </div>
              </div>

              <div className="space-y-3 mb-6 text-left">
                <FeatureRow>All Daily Plan features</FeatureRow>
                <FeatureRow>Save ₹100/week</FeatureRow>
                <FeatureRow>Meal customization</FeatureRow>
                <FeatureRow>Priority support</FeatureRow>
                <FeatureRow>Nutrition tracking</FeatureRow>
              </div>

              <button className="w-full bg-black text-white rounded-tr-[16px] rounded-bl-[16px]  py-3"
                style={{ fontFamily: "'SK Synonym Grotesk Trial', sans-serif", fontWeight: 600, fontSize: "16px" }}
              >
                Subscribe Now
              </button>
              </div>

            </div>
        </div>
      </div>
      </div>
    </section>
  );
}

