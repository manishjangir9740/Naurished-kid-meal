import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function Section3() {
  const sectionRef = useRef(null);
  const badgeRef = useRef(null);
  const headingRef = useRef(null);
  const subtitleRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Badge reveal
      gsap.fromTo(
        badgeRef.current,
        { y: -30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      // Heading reveal
      gsap.fromTo(
        headingRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          delay: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      // Subtitle reveal
      gsap.fromTo(
        subtitleRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          delay: 0.4,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      // Staggered card reveals
      cardsRef.current.forEach((card, i) => {
        if (card) {
          gsap.fromTo(
            card,
            { y: 60, opacity: 0, scale: 0.9 },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              duration: 0.8,
              ease: "back.out(1.2)",
              delay: 0.6 + i * 0.15,
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 75%",
                toggleActions: "play none none none",
              },
            }
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative md:py-30"
    >
      {/* White Wave Top */}
      <img
        src="/assets/white wave 3rd section.png"
        className="absolute top-0 left-0 w-full h-full select-none pointer-events-none z-10 block"
        style={{ display: 'block', verticalAlign: 'top' }}
        alt=""
      />

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-10">
        {/* Badge */}
        <div ref={badgeRef} className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-[16px] py-[8px] shadow-md">
            <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.33301 4.55556V2.77778C6.33301 2.30628 6.52031 1.8541 6.85371 1.5207C7.18711 1.1873 7.63929 1 8.11079 1H11.6663C12.1378 1 12.59 1.1873 12.9234 1.5207C13.2568 1.8541 13.4441 2.30628 13.4441 2.77778V4.55556" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M6.33333 17C6.80483 17 7.25701 16.8127 7.59041 16.4793C7.92381 16.1459 8.11111 15.6937 8.11111 15.2222V8.1111C8.11111 7.16811 7.73651 6.26374 7.06971 5.59694C6.40292 4.93014 5.49855 4.55554 4.55556 4.55554M4.55556 4.55554C3.61256 4.55554 2.70819 4.93014 2.0414 5.59694C1.3746 6.26374 1 7.16811 1 8.1111V15.2222C1 15.6937 1.1873 16.1459 1.5207 16.4793C1.8541 16.8127 2.30628 17 2.77778 17H17C17.4715 17 17.9237 16.8127 18.2571 16.4793C18.5905 16.1459 18.7778 15.6937 18.7778 15.2222V8.1111C18.7778 7.16811 18.4032 6.26374 17.7364 5.59694C17.0696 4.93014 16.1652 4.55554 15.2222 4.55554H4.55556ZM1 9.88888H18.7778" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

            <span
              style={{
                fontFamily: "'SK Synonym Grotesk Trial', sans-serif",
                fontWeight: 500,
                fontSize: "14px",
              }}
              className="text-gray-800"
            >
              This Weeks Menu
            </span>
          </div>
        </div>

        {/* Heading */}
        <h2
          ref={headingRef}
          style={{
            fontFamily: "'Chillax', sans-serif",
            fontWeight: 700,
            fontSize: "clamp(36px, 5vw, 48px)",
            lineHeight: "1.15",
          }}
          className="text-center text-black mb-5"
        >
          Meals Kids Actually Love
        </h2>

        {/* Subtitle */}
        <p
          ref={subtitleRef}
          style={{
            fontFamily: "'SK Synonym Grotesk Trial', sans-serif",
            fontWeight: 500,
            fontSize: "clamp(15px, 2vw, 16px)",
            lineHeight: "1.6",
          }}
          className="text-center text-gray-700 mb-16 max-w-[800px] mx-auto"
        >
          Start by choosing your child's age group. We'll show you colorful,
          nutritious, and delicious. Each meal designed to delight taste buds
          and fuel growing minds.
        </p>

        {/* Age Group Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 items-start">
          
          {/* Card 1: Little Explorers (Up) */}
          <div
            ref={(el) => (cardsRef.current[0] = el)}
            className="flex flex-col items-center text-center group"
          >
            {/* Circular Image */}
            <div className="mb-8 w-[240px] h-[240px] sm:w-[280px] sm:h-[280px] lg:w-[320px] lg:h-[320px] md:-mt-8 transition-transform duration-500 group-hover:scale-105">
              <img
                src="/assets/section3/Group 2.png"
                alt="Little Explorers"
                className="w-full object-cover"
              />
            </div>

            {/* Title + Age */}
            <h3
              style={{
                fontFamily: "'Chillax', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(20px, 3vw, 16px)",
              }}
              className="text-black mb-1"
            >
              Little Explorers
            </h3>
            <p
              style={{
                fontFamily: "'Chillax', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(16px, 2.5vw, 18px)",
              }}
              className="text-black mb-3"
            >
              (6–8 yrs)
            </p>

            {/* Description */}
            <p
              style={{
                fontFamily: "'SK Synonym Grotesk Trial', sans-serif",
                fontWeight: 400,
                fontSize: "clamp(14px, 2vw, 16px)",
                lineHeight: "1.6",
              }}
              className="text-gray-600 max-w-[280px]"
            >
              Simple, mild, happy meals for small appetites.
            </p>
          </div>

          {/* Card 2: Bright Movers (Down) */}
          <div
            ref={(el) => (cardsRef.current[1] = el)}
            className="flex flex-col items-center text-center group"
          >
            {/* Circular Image */}
            <div className="mb-8 w-[240px] h-[240px] sm:w-[280px] sm:h-[280px] lg:w-[320px] lg:h-[320px] md:mt-16 transition-transform duration-500 group-hover:scale-105">
              <img
                src="/assets/section3/Group 3.png"
                alt="Bright Movers"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Title + Age */}
            <h3
              style={{
                fontFamily: "'Chillax', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(20px, 3vw, 16px)",
              }}
              className="text-black mb-1"
            >
              Bright Movers
            </h3>
            <p
              style={{
                fontFamily: "'Chillax', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(16px, 2.5vw, 18px)",
              }}
              className="text-black mb-3"
            >
              (9–11 yrs)
            </p>

            {/* Description */}
            <p
              style={{
                fontFamily: "'SK Synonym Grotesk Trial', sans-serif",
                fontWeight: 400,
                fontSize: "clamp(14px, 2vw, 16px)",
                lineHeight: "1.6",
              }}
              className="text-gray-600 max-w-[280px]"
            >
              Tasty combos and veggie-packed dishes.
            </p>
          </div>

          {/* Card 3: Teen Power Pack (Up) */}
          <div
            ref={(el) => (cardsRef.current[2] = el)}
            className="flex flex-col items-center text-center group"
          >
            {/* Circular Image */}
            <div className="mb-13 w-[240px] h-[240px] sm:w-[280px] sm:h-[280px] lg:w-[320px] lg:h-[320px] md:-mt-8 transition-transform duration-500 group-hover:scale-105">
              <img
                src="/assets/section3/Group 4.png"
                alt="Teen Power Pack"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Title + Age */}
            <h3
              style={{
                fontFamily: "'Chillax', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(20px, 3vw, 16px)",
              }}
              className="text-black mb-1"
            >
              Teen Power Pack
            </h3>
            <p
              style={{
                fontFamily: "'Chillax', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(16px, 2.5vw, 18px)",
              }}
              className="text-black mb-3"
            >
              (12–14 yrs)
            </p>

            {/* Description */}
            <p
              style={{
                fontFamily: "'SK Synonym Grotesk Trial', sans-serif",
                fontWeight: 400,
                fontSize: "clamp(14px, 2vw, 16px)",
                lineHeight: "1.6",
              }}
              className="text-gray-600 max-w-[280px]"
            >
              Bigger portions and energy-boosting meals.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

