import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function Loader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        return prev + Math.random() * 30;
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-[#FFD24D] via-[#FFC940] to-[#FFBE33]"
        >
          <div className="text-center">
            {/* Logo Animation */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="mb-8"
            >
              <motion.img
                src="/assets/logo.png"
                alt="Nourished"
                className="w-24 h-24 mx-auto"
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  rotate: {
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear"
                  },
                  scale: {
                    duration: 1,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
              />
            </motion.div>

            {/* Brand Name */}
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-4xl font-extrabold text-white mb-6"
            >
              Nourished
            </motion.h2>

            {/* Loading Bar */}
            <div className="w-64 h-2 bg-white/30 rounded-full overflow-hidden mx-auto">
              <motion.div
                className="h-full bg-white rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
            </div>

            {/* Loading Text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-4 text-white/80 text-sm font-medium"
            >
              Preparing something delicious...
            </motion.p>

            {/* Floating Food Elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute text-4xl"
                  initial={{ 
                    y: "100vh", 
                    x: `${Math.random() * 100}vw`,
                    opacity: 0.6,
                    rotate: Math.random() * 360
                  }}
                  animate={{ 
                    y: "-20vh",
                    rotate: Math.random() * 360 + 360
                  }}
                  transition={{ 
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    delay: i * 0.3,
                    ease: "linear"
                  }}
                >
                  {["🥗", "🥦", "🍅", "🥬", "🍇", "🥕"][i]}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

