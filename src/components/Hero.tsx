"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const fadeIn = {
  initial: { opacity: 0, y: 15 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
};

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -120;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full pt-28 pb-16 px-4 md:pt-40 md:pb-24 bg-[#EAE5D9]">
      <div className="mx-auto max-w-4xl text-center flex flex-col items-center">
        {/* Main Serif Header */}
        <motion.h1 
          className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-[#4A4335] leading-[1.1] tracking-tight mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Embrace <br className="sm:hidden" />
          Women's Healthcare
        </motion.h1>

        {/* Elegant Italic Subtitle */}
        <motion.p 
          className="font-serif italic text-lg sm:text-xl md:text-2xl text-[#8C6C58] tracking-wide mb-10 md:mb-12 font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Feel heard. Feel better. Feel like you again.
        </motion.p>

        {/* Main Hugging Women Image Container */}
        <motion.div 
          className="relative w-full max-w-2xl aspect-[16/10] rounded-2xl md:rounded-[2rem] overflow-hidden border border-[#4A4335]/15 shadow-[0_15px_40px_-5px_rgba(74,67,53,0.25)] mb-10 md:mb-12 bg-[#FAF8F5]/50 group"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.4 }}
        >
          <Image
            src="/purple.png"
            alt="Three women hugging side-by-side in colorful sweaters representing friendship, comfort, and healthcare support"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 40rem"
            className="z-0 object-cover object-[center_35%] transition-transform duration-700 group-hover:scale-[1.02]"
          />
        </motion.div>

        {/* Powerful Brochure Wording Below the Image */}
        <motion.div 
          className="max-w-2xl space-y-4 text-[#5A5346] text-sm sm:text-base md:text-lg tracking-wide leading-relaxed font-sans mb-10"
          initial="initial"
          animate="animate"
          variants={{
            animate: {
              transition: {
                staggerChildren: 0.15,
                delayChildren: 0.6
              }
            }
          }}
        >
          <motion.p 
            variants={fadeIn}
            className="font-medium text-[#4A4335]"
          >
            Thoughtful, personalized care for women in Vermont.
          </motion.p>
          <motion.p 
            variants={fadeIn}
            className="border-t border-[#4A4335]/10 pt-4"
          >
            Grounded in trusted education, evidence-based hormone therapy, and wellness support.
          </motion.p>
          <motion.p 
            variants={fadeIn}
            className="border-t border-[#4A4335]/10 pt-4 italic font-serif text-[#8C6C58] text-base sm:text-lg md:text-xl"
          >
            So every woman feels heard, supported, and empowered.
          </motion.p>
        </motion.div>

        {/* Dynamic CTA buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row items-center gap-4 mt-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <button
            onClick={() => scrollToSection("services")}
            className="w-full sm:w-auto rounded-full bg-[#4A4335] text-[#FAF8F5] px-8 py-3.5 text-sm font-semibold tracking-wide shadow-md transition-all duration-300 hover:bg-[#5A5346] hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            Explore Services
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="w-full sm:w-auto rounded-full border border-[#4A4335] text-[#4A4335] px-8 py-3.5 text-sm font-semibold tracking-wide transition-all duration-300 hover:bg-[#4A4335]/5 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            Book Appointment
          </button>
        </motion.div>
      </div>
    </section>
  );
}
