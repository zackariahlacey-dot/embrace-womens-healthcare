"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const fadeIn = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" },
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
    <section className="relative flex min-h-[min(85vh,42rem)] items-center overflow-hidden bg-healthcare-cream-soft">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-4 py-16 sm:px-6 md:px-8 lg:grid-cols-2 lg:gap-16 lg:py-20">
        <motion.div
          className="flex flex-col items-center justify-center text-center"
          initial={fadeIn.initial}
          animate={fadeIn.animate}
          transition={fadeIn.transition}
        >
          <h1 className="mx-auto max-w-xl text-center text-4xl font-bold leading-tight tracking-tight text-healthcare-charcoal sm:text-5xl md:text-6xl">
            Empowering Women Through Compassionate, Personalized Care.
          </h1>
          <p className="mx-auto mt-6 max-w-prose text-center text-base leading-relaxed tracking-wide text-healthcare-charcoal/90 sm:text-lg md:text-xl">
            Led by Bethany, a Women&apos;s Health Nurse Practitioner & Certified Nurse Midwife with over 20 years of experience, we provide a safe space for your health journey in Vermont and via Telehealth.
          </p>
          <div className="mt-8 flex w-full justify-center">
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
          initial={fadeIn.initial}
          animate={fadeIn.animate}
          transition={{ ...fadeIn.transition, delay: 0.15 }}
        >
          <div
            className="relative h-[320px] w-full max-w-sm overflow-hidden border-4 border-healthcare-primary/40 shadow-2xl shadow-[0_0_50px_-12px_rgba(216,27,96,0.2)] sm:h-[380px] sm:max-w-md"
            style={{ borderRadius: "62% 38% 52% 48% / 55% 45% 55% 45%" }}
          >
            <Image
              src="/embraceheadshot.JPG"
              alt="Bethany — Embrace Women's Healthcare"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-top"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
