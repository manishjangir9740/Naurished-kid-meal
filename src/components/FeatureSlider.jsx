import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    title: "Verified Delivery",
    desc: "Meals handed only after QR scan confirmation.",
    image: "/assets/slide/1.png",
  },
  {
    title: "Hygienic Handling",
    desc: "Prepared and packed under strict hygiene standards.",
    image: "/assets/slide/2.png",
  },
  {
    title: "On-Time Delivery",
    desc: "Delivered fresh before lunch time.",
    image: "/assets/slide/3.png",
  },
];

export default function VerifiedDeliverySlider() {
  const [index, setIndex] = useState(0);

  // Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative max-w-xl mt-8 overflow-hidden">
      {/* Slide Content */}
      <div className="flex items-start gap-4">
        {/* Image */}
        <AnimatePresence mode="wait">
          <motion.img
            key={slides[index].image}
            src={slides[index].image}
            alt={slides[index].title}
            className="w-10 h-10 flex-shrink-0 object-contain"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          />
        </AnimatePresence>

        {/* Divider */}
        <div className="w-[1.5px] h-14 bg-[#FFFFFF] rounded-full" />

        {/* Text */}
        <div className="flex-1 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35 }}
            >
              <h4 className="text-lg font-bold text-black mb-1">
                {slides[index].title}
              </h4>
              <p className="text-sm text-black/90 leading-relaxed">
                {slides[index].desc}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Dots */}
      <div className="mt-5 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`rounded-full transition-all duration-300 ${
              i === index
                ? "w-3 h-3 bg-white"
                : "w-2.5 h-2.5 bg-white/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
