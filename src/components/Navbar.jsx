import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function Navbar() {
  const [activeNav, setActiveNav] = useState("Home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const headerRef = useRef(null);

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

  return (
    <header ref={headerRef} className="absolute top-0 left-0 z-550 w-full">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 md:px-10 py-6">

        {/* Logo */}
        <img
          src="/assets/logo.png"
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
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden flex flex-col gap-1.5 p-2"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
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



      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-sm shadow-xl">
          <div className="flex flex-col p-6 gap-3">
            {navItems.map((item, index) => (
              <button
                key={item}
                onClick={() => {
                  setActiveNav(item);
                  setMobileMenuOpen(false);
                }}
                className={`text-left px-4 py-3 rounded-lg font-semibold transition-colors ${activeNav === item
                    ? "bg-[#FFD24D] text-black"
                    : "text-gray-600 hover:bg-gray-100"
                  }`}
              >
                {item}
              </button>
            ))}
            <button
              className="mt-2 rounded-full bg-[#FFD24D] px-6 py-3 font-bold text-black"
            >
              Book Your Kid Meal Now →
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
