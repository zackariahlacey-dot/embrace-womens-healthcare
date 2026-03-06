"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const fadeIn = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
};

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      const yOffset = -80; // Keeps the form from hiding under the header
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section className="w-full pt-4 sm:pt-6">
      <div className="relative mx-auto mb-12 mt-16 w-full max-w-[96%] overflow-hidden rounded-[2rem] border border-white/20 shadow-[0_30px_80px_-15px_rgba(0,0,0,0.5),inset_0_0_20px_rgba(255,255,255,0.1)] ring-1 ring-inset ring-white/10 backdrop-blur-sm min-h-[50vh] md:mt-24 md:min-h-[70vh] md:rounded-[3xl]">
        <Image
          src="/purple.png"
          alt=""
          fill
          priority
          sizes="96vw"
          className="z-0 object-cover object-[center_15%]"
        />
        <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/70 via-black/40 to-black/70" aria-hidden />

        <div className="relative z-10 flex h-full w-full min-h-[50vh] flex-col items-center justify-center px-6 py-10 text-center md:min-h-[70vh] md:py-20">
          <motion.div
            className="mx-auto flex max-w-3xl flex-col items-center justify-center"
            initial={fadeIn.initial}
            animate={fadeIn.animate}
            transition={fadeIn.transition}
          >
            <h1 className="mb-6 max-w-3xl text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl md:text-5xl lg:text-6xl">
              Empowering Women Through Compassionate, Personalized Care.
            </h1>
            <p className="mx-auto mb-10 max-w-[85%] text-sm font-light tracking-wide text-white/90 sm:text-base md:max-w-xl md:text-lg">
              Led by Bethany Cook, WHNP-BC. Specialized perimenopause, menopause, and acute care for women across Vermont through accessible telehealth.
            </p>
            <motion.button
              type="button"
              onClick={scrollToContact}
              className="rounded-full bg-pink-600 px-6 py-3 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(219,39,119,0.3)] transition-all duration-300 hover:-translate-y-1 hover:bg-pink-700 hover:shadow-[0_12px_25px_rgba(219,39,119,0.4)] focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent md:px-10 md:py-4 md:text-lg"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Get in Touch
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
