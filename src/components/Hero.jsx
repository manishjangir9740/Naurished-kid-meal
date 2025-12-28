import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import VerifiedDeliverySlider from "./FeatureSlider";

export default function Hero() {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const headingRef = useRef(null);
  const paraRef = useRef(null);
  const sliderRef = useRef(null);
  const ctaRef = useRef(null);
  const imageWrapRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (!sectionRef.current || !contentRef.current) return;

    const ctx = gsap.context(() => {
      // Page-load reveal (matches Figma: smooth, premium, staggered)
      gsap.set([headingRef.current, paraRef.current, sliderRef.current, ctaRef.current], {
        willChange: "transform,opacity",
      });

      gsap.fromTo(
        headingRef.current,
        { y: 32, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: "power3.out" },
      );

      gsap.fromTo(
        paraRef.current,
        { y: 22, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.12 },
      );

      gsap.fromTo(
        sliderRef.current,
        { y: 18, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.75, ease: "power3.out", delay: 0.22 },
      );

      gsap.fromTo(
        ctaRef.current,
        { y: 18, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.75, ease: "power3.out", delay: 0.32 },
      );

      if (imageWrapRef.current) {
        gsap.fromTo(
          imageWrapRef.current,
          { x: 50, opacity: 0, scale: 0.96 },
          { x: 0, opacity: 1, scale: 1, duration: 1.0, ease: "power3.out", delay: 0.2 },
        );
      }

      // Removed scroll-based parallax fade - only floating food should animate on scroll
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen bg-gradient-to-br overflow-hidden"
    >
      <div
        ref={contentRef}
        className="relative z-60 mx-auto max-w-[1400px] px-6 md:px-10 pt-32 md:pt-44 pb-20 md:pb-60 "
      >
        <div className="relative flex flex-col lg:flex-row items-center lg:items-start">


          {/* LEFT CONTENT */}
          <div>
            {/* Main Heading */}
            <h1
              ref={headingRef}
              style={{ fontFamily: "'Chillax', sans-serif", fontWeight: 700, fontSize: "56px", lineHeight: "1.1" }}
              className="text-white drop-shadow-lg"
            >
              Good Food. Happy
              Kids. Zero Worry.
            </h1>

            {/* Subtitle */}
            <p
              ref={paraRef}
              style={{ fontFamily: "'SK Synonym Grotesk Trial', sans-serif", fontWeight: 500, fontSize: "20px", lineHeight: "1.6" }}
              className="mt-6 max-w-[580px] text-white"
            >
              We cook fresh vegetarian meals and deliver them straight to your
              child's school or hostel. You get transparency, safety, and meals
              they'll actually finish.
            </p>

            {/* Feature Slider */}
            <div ref={sliderRef}>
              <VerifiedDeliverySlider />
            </div>

            {/* CTA Button */}
            <button
              className="hidden lg:flex group mt-6 relative items-center gap-2 
             bg-white px-6 py-3 font-bold text-black text-base 
             rounded-tr-[16px] rounded-bl-[16px] 
             overflow-hidden"
            >
              {/* LEFT-BOTTOM → CENTER */}
              <span
                className="absolute inset-0 bg-black
               translate-x-[-100%] translate-y-[100%]
               transition-transform duration-400 ease-in-out
               group-hover:translate-x-0 group-hover:translate-y-0"
                style={{
                  clipPath: "polygon(0% 100%, 0% 0%, 110% 100%)"
                }}
              />

              {/* RIGHT-TOP → CENTER */}
              <span
                className="absolute inset-0 bg-black
               translate-x-[100%] translate-y-[-100%]
               transition-transform duration-400 ease-in-out
               group-hover:translate-x-0 group-hover:translate-y-0"
                style={{
                  clipPath: "polygon(100% 0%, 0% 0%, 100% 100%)"
                }}
              />

              {/* Content */}
              <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                Book Your Kid Meal Now
              </span>
              <span className="relative z-10 text-xl font-bold transition-colors duration-300 group-hover:text-white">
                →
              </span>
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div
            ref={imageWrapRef}
            className="hidden lg:flex justify-center lg:justify-end relative"
          >
            <img
              src={`/Naurished-kid-meal/assets/hero-boy.png`}
              alt="Happy kid with meal"
              className="max-w-[1000px] xl:max-w-[800px] 2xl:max-w-[900px] w-full object-contain"
            />
          </div>

        </div>
      </div>

      {/* Wave Bottom */}
      <img
        src={`/Naurished-kid-meal/assets/wave-bottom.png`} 
        className="absolute bottom-0 w-full select-none pointer-events-none" 
        alt=""
      />
    </section>
  );
}
