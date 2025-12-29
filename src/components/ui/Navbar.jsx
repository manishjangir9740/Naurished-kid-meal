import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function Navbar() {
  const [activeNav, setActiveNav] = useState("Home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const headerRef = useRef(null);

  // Set proper viewport height for mobile
  useEffect(() => {
    const setVH = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    setVH();
    window.addEventListener('resize', setVH);
    window.addEventListener('orientationchange', setVH);

    return () => {
      window.removeEventListener('resize', setVH);
      window.removeEventListener('orientationchange', setVH);
    };
  }, []);

  const navItems = ["Home", "Pricing", "Contact", "About"];

  useEffect(() => {
    if (!headerRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { y: -18, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" },
      );
    }, headerRef);
    return () => ctx.revert();
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
      document.body.style.top = "0";
    } else {
      document.body.style.overflow = "unset";
      document.body.style.position = "unset";
      document.body.style.width = "unset";
      document.body.style.top = "unset";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "unset";
      document.body.style.position = "unset";
      document.body.style.width = "unset";
      document.body.style.top = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header ref={headerRef} className="absolute top-0 left-0 z-550 w-full">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 md:px-10 py-6">

          {/* Logo */}
          <img
            src="/Naurished-kid-meal/assets/logo.png"
            alt="Nourished"
            className="h-14 w-14 md:h-16 md:w-16"
          />

          {/* Center Nav - Desktop */}
          <div className="flex items-center gap-[10px] rounded-full px-4 ">
            <div className="hidden lg:flex items-center gap-1 rounded-full px-4 py-2">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => setActiveNav(item)}
                  className={`relative px-6 py-2.5 rounded-full text-base transition-all duration-300 whitespace-nowrap ${item === "Home"
                      ? "bg-white text-black shadow-sm font-synonym"
                      : "text-white hover:text-black font-semibold font-synonym"
                    }`}
                >
                  {item}
                </button>
              ))}


              {/* CTA - Desktop */}

              <button
                className="hidden lg:flex group relative items-center gap-2
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
          </div>

          {/* Mobile Menu Button - Positioned on the right */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 ml-auto"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <span
              className={`w-6 h-0.5 bg-white rounded-full transition-transform duration-300 ${mobileMenuOpen ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`w-6 h-0.5 bg-white rounded-full transition-opacity duration-300 ${mobileMenuOpen ? "opacity-0" : "opacity-100"}`}
            />
            <span
              className={`w-6 h-0.5 bg-white rounded-full transition-transform duration-300 ${mobileMenuOpen ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed inset-0 z-600 bg-white transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{
          backgroundColor: "#ffffff",
          height: "calc(var(--vh, 1vh) * 100)",
          minHeight: "-webkit-fill-available"
        }}
      >
        {/* Close button */}
        <button
          className="absolute top-6 right-6 p-2 z-10"
          onClick={() => setMobileMenuOpen(false)}
          aria-label="Close mobile menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18M6 6L18 18" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* Menu Content */}
        <div className="flex flex-col h-full">
          {/* Menu Items */}
          <div className="flex-1 pt-20 px-6 pb-28">
            <nav className="space-y-2">
              <button
                onClick={() => {
                  setActiveNav("Pricing");
                  setMobileMenuOpen(false);
                }}
                className="w-full flex items-center justify-between py-4 px-4 text-black font-bold text-lg border-b border-gray-200 hover:bg-gray-50 transition-colors"
              >
                <span>Pricing</span>
                <span className="text-xl">→</span>
              </button>

              <button
                onClick={() => {
                  setActiveNav("About");
                  setMobileMenuOpen(false);
                }}
                className="w-full flex items-center justify-between py-4 px-4 text-black font-bold text-lg border-b border-gray-200 hover:bg-gray-50 transition-colors"
              >
                <span>About Us</span>
                <span className="text-xl">→</span>
              </button>

              <button
                onClick={() => {
                  setActiveNav("Contact");
                  setMobileMenuOpen(false);
                }}
                className="w-full flex items-center justify-between py-4 px-4 text-black font-bold text-lg border-b border-gray-200 hover:bg-gray-50 transition-colors"
              >
                <span>Contact Us</span>
                <span className="text-xl">→</span>
              </button>
            </nav>
          </div>

          {/* Fixed Bottom CTA Container */}
          <div className="sticky bottom-0 bg-white p-6 border-t border-gray-200 ">
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="group relative flex items-center justify-center gap-3 bg-black text-white px-8 py-4 rounded-tr-[16px] rounded-bl-[16px] overflow-hidden font-semibold text-base shadow-lg hover:shadow-xl w-full"
            >
              <span
                className="absolute inset-0 bg-white translate-x-[-100%] translate-y-[100%] transition-transform duration-400 ease-in-out group-hover:translate-x-0 group-hover:translate-y-0"
                style={{ clipPath: "polygon(0% 100%, 0% 0%, 110% 100%)" }}
              />
              <span
                className="absolute inset-0 bg-white translate-x-[100%] translate-y-[-100%] transition-transform duration-400 ease-in-out group-hover:translate-x-0 group-hover:translate-y-0"
                style={{ clipPath: "polygon(100% 0%, 0% 0%, 100% 100%)" }}
              />
              <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
                Book Your Kid Meal Now
              </span>
              <span className="relative z-10 text-xl font-bold transition-colors duration-300 group-hover:text-black">
                →
              </span>
            </button>
          </div>
        </div>
      </div>

    </>
  );
}
