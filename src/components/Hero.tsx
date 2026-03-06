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
    <section className="relative flex min-h-[min(85vh,42rem)] items-center overflow-hidden bg-healthcare-cream-soft py-20 pt-24 sm:pt-32 lg:py-32">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <motion.div
            className="mx-auto mb-12 flex flex-col items-center justify-center text-center lg:mb-16"
            initial={fadeIn.initial}
            animate={fadeIn.animate}
            transition={fadeIn.transition}
          >
            <h1 className="mx-auto max-w-xl text-3xl font-bold leading-[1.15] tracking-tight text-healthcare-charcoal sm:text-4xl lg:text-[2.75rem]">
              Empowering Women Through Compassionate, Personalized Care.
            </h1>
            <p className="mx-auto mt-6 max-w-md text-sm text-gray-500 sm:text-base">
              Led by Bethany Cook, WHNP-BC, CNM. Building community through in-person group education and personalized telehealth visits. My primary areas of focus are <strong className="font-semibold text-healthcare-charcoal">perimenopause and menopause</strong> care for women across Vermont.
            </p>
            <div className="mt-8 flex w-full justify-center sm:mt-10">
              <motion.button
                type="button"
                onClick={scrollToContact}
                className="inline-flex items-center justify-center rounded-full bg-healthcare-primary px-6 py-3 font-medium text-white shadow-md transition-colors hover:bg-healthcare-primary/90 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-healthcare-primary focus:ring-offset-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in Touch
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative mx-auto aspect-square w-full max-w-[400px] overflow-hidden rounded-[60%_40%_30%_70%/60%_30%_70%_40%] border-8 border-pink-50 shadow-2xl lg:max-w-[500px]">
              <Image
                src="/embraceheadshot.JPG"
                alt="Bethany Cook — Embrace Women's Healthcare"
                fill
                sizes="(max-width: 1024px) 400px, 500px"
                className="object-cover h-full w-full"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
