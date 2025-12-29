import { motion, useMotionValue, useTransform, useScroll } from "framer-motion";
import { useEffect, useState } from "react";

// Mobile-only food items (keep only these on mobile to improve text visibility)
const mobileItems = [
  { src: "/Naurished-kid-meal/assets/floating/bread.png", top: "19%", left: "-7%", size: 200, d: 0.015, rotate: -15, delay: 0.1 },
  { src: "/Naurished-kid-meal/assets/floating/tomato-full.png", top: "75%", left: "-2%", size: 150, d: 0.018, rotate: 10, delay: 0.3 },
  { src: "/Naurished-kid-meal/assets/floating/graps.png", top: "18%", left: "40%", size: 85, d: 0.02, rotate: 15, delay: 0.5 },
  { src: "/Naurished-kid-meal/assets/floating/bbb.png", top: "8%", left: "90%", size: 320, d: 0.023, rotate: -25, delay: 0.8 },
  { src: "/Naurished-kid-meal/assets/floating/akarot (1).png", top: "86%", left: "37%", size: 370, d: 0.017, rotate: 15, delay: 1.0 },
];

// Desktop food items (all items for desktop)
const desktopItems = [
  { src: "/Naurished-kid-meal/assets/floating/bread.png", top: "19%", left: "-7%", size: 200, d: 0.015, rotate: -15, delay: 0.1 },
  // LEFT SIDE
  { src: "/Naurished-kid-meal/assets/floating/tomato-full.png", top: "75%", left: "-2%", size: 150, d: 0.018, rotate: 10, delay: 0.3 },

  // CENTER LEFT
  { src: "/Naurished-kid-meal/assets/floating/leaf-2.png", top: "18%", left: "18%", size: 85, d: 0.02, rotate: 15, delay: 0.5 },
  { src: "/Naurished-kid-meal/assets/floating/graps.png", top: "18%", left: "40%", size: 85, d: 0.02, rotate: 15, delay: 0.5 },

  // CENTER
  { src: "/Naurished-kid-meal/assets/floating/tomato-slice.png", top: "45%", left: "48%", size: 70, d: 0.016, rotate: 8, delay: 0.9 },

  // CENTER RIGHT
  { src: "/Naurished-kid-meal/assets/floating/leaf-2.png", top: "23%", left: "55%", size: 80, d: 0.019, rotate: -8, delay: 0.5 },
  { src: "/Naurished-kid-meal/assets/floating/grapes.png", top: "27%", left: "70%", size: 120, d: 0.021, rotate: 12, delay: 0.8 },
  
  // RIGHT SIDE
  { src: "/Naurished-kid-meal/assets/floating/broccoli-1.png", top: "35%", left: "68%", size: 70, d: 0.019, rotate: -8, delay: 0.5 },
  { src: "/Naurished-kid-meal/assets/floating/broccoli-2.png", top: "40%", left: "77%", size: 150, d: 0.025, rotate: 20, delay: 0.7 },
  { src: "/Naurished-kid-meal/assets/floating/bbb.png", top: "8%", left: "90%", size: 320, d: 0.023, rotate: -25, delay: 0.8 },

  // BOTTOM RIGHT
  { src: "/Naurished-kid-meal/assets/floating/lllll.png", top: "80%", left: "85%", size: 255, d: 0.016, rotate: -5, delay: 1.1 },

  // BOTTOM LEFT
  // { src: "/assets/floating/carrot.png", top: "45%", left: "80%", size: 160, d: 0.017, rotate: 15, delay: 1.0 },
  { src: "/Naurished-kid-meal/assets/floating/graps.png", top: "60%", left: "40%", size: 70, d: 0.017, rotate: 15, delay: 1.0 },
  { src: "/Naurished-kid-meal/assets/floating/leaf-1.png", top: "70%", left: "45%", size: 85, d: 0.017, rotate: 15, delay: 1.0 },
  { src: "/Naurished-kid-meal/assets/floating/akarot (1).png", top: "86%", left: "37%", size: 370, d: 0.017, rotate: 15, delay: 1.0 },
  
];

// Reusable FloatingFoodItem component
function FloatingFoodItem({ items }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const { scrollY } = useScroll();
  const [lunchboxCenter, setLunchboxCenter] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      mouseX.set(e.clientX - centerX);
      mouseY.set(e.clientY - centerY);
    };
    if (typeof window !== 'undefined') {
      window.addEventListener("mousemove", move);
      return () => window.removeEventListener("mousemove", move);
    }
  }, [mouseX, mouseY]);

  // Calculate lunchbox center position - more robust detection
  useEffect(() => {
    let intervalId;

    const updateLunchboxPosition = () => {
      const lunchboxElement = document.querySelector('img[alt="Meal box"]');
      if (lunchboxElement) {
        const rect = lunchboxElement.getBoundingClientRect();
        const newCenter = {
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2 + (typeof window !== 'undefined' ? window.scrollY : 0)
        };
        setLunchboxCenter(newCenter);
        // console.log('Lunchbox found and positioned:', newCenter);

        // Clear interval once found
        if (intervalId) {
          clearInterval(intervalId);
        }
      } else {
        console.log('Lunchbox element not found yet');
      }
    };

    // Update immediately
    updateLunchboxPosition();

    // Keep checking until found (for cases where MealBuilder loads after FloatingFood)
    if (typeof window !== 'undefined') {
      intervalId = setInterval(updateLunchboxPosition, 500);

      // Also update on resize and scroll
      window.addEventListener('resize', updateLunchboxPosition);
      window.addEventListener('scroll', updateLunchboxPosition);

      // Stop checking after 10 seconds to avoid infinite polling
      setTimeout(() => {
        if (intervalId) {
          clearInterval(intervalId);
        }
      }, 10000);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', updateLunchboxPosition);
        window.removeEventListener('scroll', updateLunchboxPosition);
      }
    };
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 z-[13]">
      {items.map((item, i) => {
        // Keep existing mouse-move parallax
        const x = useTransform(mouseX, (v) => -v * item.d);
        const y = useTransform(mouseY, (v) => -v * item.d);
        
        // Calculate item's initial position in pixels
        const viewportWidth = typeof window !== 'undefined' ? window.innerWidth : 1920;
        const viewportHeight = typeof window !== 'undefined' ? window.innerHeight : 800;
        const itemStartX = (parseFloat(item.left) / 100) * viewportWidth;
        const itemStartY = (parseFloat(item.top) / 100) * viewportHeight;
        
        // Scroll animation phases
        const heroHeight = viewportHeight;
        const scrollPhase1End = heroHeight * 0.15; // Downward movement phase
        const scrollPhase2End = heroHeight * 0.90; // Convergence phase
        const scrollPhase3End = heroHeight * 1.15; // Fade out phase
        
        // Phase 1: Move down together (no convergence)
        // Phase 2: Converge to lunchbox center
        // Phase 3: Fade out at center
        
        // Calculate distance to lunchbox center
        const distanceX = lunchboxCenter.x - itemStartX;
        const distanceY = lunchboxCenter.y - itemStartY;
        
        // X-axis convergence: start from 0, move toward lunchbox center
        const convergenceX = useTransform(
          scrollY,
          [0, scrollPhase1End, scrollPhase2End, scrollPhase3End],
          [0, 0, distanceX, distanceX] // No movement in phase 1, converge in phase 2, hold in phase 3
        );
        
        // Y-axis convergence: move down in phase 1, then converge to center
        const convergenceY = useTransform(
          scrollY,
          [0, scrollPhase1End, scrollPhase2End, scrollPhase3End],
          [0, heroHeight * 0.3, distanceY, distanceY] // Move down in phase 1, converge in phase 2, hold in phase 3
        );
        
        // Scale: normal → slightly smaller at center
        const scale = useTransform(
          scrollY,
          [0, scrollPhase1End, scrollPhase2End, scrollPhase3End],
          [1, 1, 0.4, 0.1] // Keep size until convergence, then shrink
        );
        
        // Opacity: visible → visible → fade out AFTER reaching center
        const opacity = useTransform(
          scrollY,
          [0, scrollPhase1End, scrollPhase2End, scrollPhase3End],
          [1, 1, 0.8, 0] // Stay visible until center, then fade
        );

        return (
          <motion.img
            key={i}
            src={item.src}
            alt=""
            width={item.size}
            className="absolute select-none drop-shadow-lg"
            style={{
              top: item.top,
              left: item.left,
              rotate: item.rotate,
              // Combine mouse parallax with scroll-based convergence
              x: useTransform([x, convergenceX], ([mouseX, converge]) => mouseX + converge),
              y: useTransform([y, convergenceY], ([mouseY, converge]) => mouseY + converge),
              scale,
              opacity,
            }}
            transition={{ 
              x: { type: "spring", stiffness: 100, damping: 30 },
              y: { type: "spring", stiffness: 100, damping: 30 }
            }}
          />
        );
      })}
    </div>
  );
}

export default function FloatingFood() {
  return (
    <>
      {/* Mobile version - visible on screens smaller than md (768px) */}
      <div className="md:hidden">
        <FloatingFoodItem items={mobileItems} />
      </div>

      {/* Desktop version - visible on screens md and larger (768px+) */}
      <div className="hidden md:block">
        <FloatingFoodItem items={desktopItems} />
      </div>
    </>
  );
}
