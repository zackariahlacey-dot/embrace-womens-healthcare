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
    <header className="fixed top-0 left-0 right-0 z-[100] border-b border-pink-100/50 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-y-4 px-4 py-4 sm:px-6 md:px-8">
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
          className="hidden sm:flex sm:items-center sm:gap-8"
          aria-label="Main navigation"
        >
          <Link
            href="/#about"
            className="text-sm font-medium text-healthcare-charcoal transition-colors hover:text-healthcare-primary"
          >
            About
          </Link>
          <Link
            href="/#services"
            className="text-sm font-medium text-healthcare-charcoal transition-colors hover:text-healthcare-primary"
          >
            Services
          </Link>
        </nav>
        <motion.button
            type="button"
            onClick={scrollToContact}
            className={ctaButtonClass}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us
          </motion.button>
      </div>
    </header>
  );
}
