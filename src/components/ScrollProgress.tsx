"use client";

import { motion, useScroll } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[101] h-0.5 bg-gray-100"
      aria-hidden
    >
      <motion.div
        className="h-full bg-healthcare-primary"
        style={{
          scaleX: scrollYProgress,
          transformOrigin: "0%",
        }}
      />
    </div>
  );
}
