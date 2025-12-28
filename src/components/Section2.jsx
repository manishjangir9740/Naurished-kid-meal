import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function Section2() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const thoughtBubbleRef = useRef(null);
  const decorativeRef = useRef(null);
  const lunchboxRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Image reveal from left
      gsap.fromTo(
        imageRef.current,
        { x: -80, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        }
      );

      // Content reveal from right
      gsap.fromTo(
        contentRef.current,
        { x: 80, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          delay: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        }
      );

      // Thought bubble float in
      gsap.fromTo(
        thoughtBubbleRef.current,
        { y: -50, opacity: 0, scale: 0.8 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "back.out(1.4)",
          delay: 0.4,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        }
      );

      // Decorative image float in
      gsap.fromTo(
        decorativeRef.current,
        { x: 50, opacity: 0, rotate: -10 },
        {
          x: 0,
          opacity: 1,
          rotate: 0,
          duration: 0.9,
          ease: "power3.out",
          delay: 0.5,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        }
      );

      if (lunchboxRef.current) {
        gsap.fromTo(
          lunchboxRef.current,
          { 
            scale: 0.7, 
            opacity: 0 
          },
          {
            scale: 1,
            opacity: 1,
            duration: 1.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 60%",
              end: "top 20%",
              scrub: 1,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-white py-20 md:py-32 z-0"
      style={{ 
        zIndex: 10,
        clipPath: "url(#wave-clip)"
      }}
    >
      {/* SVG Wave Clip Path Definition */}
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <clipPath id="wave-clip" clipPathUnits="objectBoundingBox">
            <path d="M 0,0.05 Q 0.25,0 0.5,0.03 T 1,0.05 L 1,1 L 0,1 Z" />
          </clipPath>
        </defs>
      </svg>

      <div className="mx-auto max-w-[1400px] px-6 md:px-10 z-70">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* LEFT: Woman with phone + Thought Bubble */}
          <div
            ref={imageRef}
            className="relative order-2 lg:order-1 pt-20 sm:pt-24 md:pt-28"
          >
            {/* Thought Bubble - anchored to left column (no hardcoded px offsets) */}
            <div
  ref={thoughtBubbleRef}
  className="
    pointer-events-none
    absolute
    -top-[5.75rem]
    left-[40%]
    w-[280px]
    sm:w-[320px]
    md:w-[360px]
    lg:w-[420px]
  "
>
  <div className="relative">
    <img
      src={`/Naurished-kid-meal/assets/section2/bgthinking.png`}
      alt="Thought bubble"
      className="w-full h-auto object-contain drop-shadow-2xl"
    />

    {/* Meal box inside thought bubble - Made larger and centered */}
    <div className="absolute top-[9%] left-[18%] right-[10%] ">
      <img
        ref={lunchboxRef}
        src={`/Naurished-kid-meal/assets/section2/birefnet.png`}
        alt="Meal box"
        className="w-full h-full object-contain"
      />
    </div>
  </div>
</div>


            {/* Woman with phone */}
            <img
              src={`/Naurished-kid-meal/assets/section2/inspyrenet.png`}
              alt="Parent using app"
              className="relative z-10 w-full max-w-[360px] sm:max-w-[420px] lg:max-w-[500px] mx-auto lg:mx-0 object-contain"
            />
          </div>

          {/* RIGHT: Content + Decorative meals */}
          <div ref={contentRef} className="relative order-1 lg:order-2">
            {/* Decorative meal boxes - Right side (kept inside section via overflow-hidden on section) */}
            <div
              ref={decorativeRef}
              className="pointer-events-none absolute -top-[90px] right-[-56px] sm:right-[-72px] md:right-[-96px] lg:right-[-110px] w-[180px] sm:w-[220px] md:w-[260px] lg:w-[300px] opacity-95 hidden sm:block z-10"
            >
              <img
                src={`/Naurished-kid-meal/assets/section2/toonout.png`}
                alt="Decorative meals"
                className="w-full h-auto object-contain drop-shadow-2xl"
              />
            </div>
            <div className="relative z-20">
              <h2
                style={{
                  fontFamily: "'Chillax', sans-serif",
                  fontWeight: 700,
                  fontSize: "clamp(32px, 5vw, 48px)",
                  lineHeight: "1.2",
                }}
                className="text-black mb-6"
              >
                Build Your Kid Perfect Meal Box
              </h2>

              <p
                style={{
                  fontFamily: "'SK Synonym Grotesk Trial', sans-serif",
                  fontWeight: 400,
                  fontSize: "clamp(16px, 2vw, 18px)",
                  lineHeight: "1.7",
                }}
                className="text-gray-700 mb-8 max-w-[550px]"
              >
                Every child eats differently. Build a meal box that fits their
                taste, routine, and nutrition needs. Swap dishes, set
                preferences, and add extras with a few quick taps.
              </p>

              <button className="group inline-flex items-center gap-3 bg-black text-white px-8 py-4 rounded-tr-[16px] rounded-bl-[16px]
 font-semibold text-base hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                See The Menu
                <span className="text-2xl font-bold group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </button>
            </div>

           
          </div>
        </div>
      </div>
    </section>
  );
}
