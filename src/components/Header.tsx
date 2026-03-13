"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const ctaButtonClass =
  "inline-flex items-center justify-center rounded-full bg-healthcare-primary px-6 py-3 font-medium text-white shadow-md transition-colors hover:bg-healthcare-primary/90 hover:shadow-lg";

export function Header() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      const yOffset = -80; // Keeps the form from hiding under the header
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-[100]">
      {/* Top notification banner */}
      <div className="bg-[#1a1a1a]/95 px-4 py-1.5 text-center text-[10px] font-medium uppercase tracking-[0.18em] text-white border-b border-white/10 sm:text-xs">
        • Now Accepting New Patients — Starting Early Summer 2026 •
      </div>

      {/* Main navigation bar */}
      <div className="border-b border-pink-100/50 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-2 px-4 py-4 sm:gap-4 sm:px-6 md:px-8">
          <Link
            href="/"
            className="flex shrink-0 items-center"
            aria-label="Embrace Women's Healthcare home"
          >
            <Image
              src="/embracelogo.png"
              alt="Embrace Women's Healthcare"
              width={180}
              height={56}
              priority
              className="h-12 w-auto sm:h-14"
            />
          </Link>
          <nav
            className="flex items-center gap-3 sm:gap-6"
            aria-label="Main navigation"
          >
            <Link
              href="/#about"
              className="text-xs font-medium text-gray-600 transition-colors hover:text-healthcare-primary sm:text-sm"
            >
              About
            </Link>
            <Link
              href="/#services"
              className="text-xs font-medium text-gray-600 transition-colors hover:text-healthcare-primary sm:text-sm"
            >
              Services
            </Link>
          </nav>
          <motion.button
            type="button"
            onClick={scrollToContact}
            className={`${ctaButtonClass} shrink-0`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us
          </motion.button>
        </div>
      </div>
    </header>
  );
}
