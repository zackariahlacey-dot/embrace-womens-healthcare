"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const ctaButtonClass =
  "inline-flex items-center justify-center rounded-full bg-[#4A4335] px-6 py-2.5 text-xs font-semibold text-[#FAF8F5] shadow-sm transition-all duration-300 hover:bg-[#5A5346] hover:shadow-md border border-[#4A4335]/10 sm:text-sm";

const navLinkClass =
  "text-xs font-medium uppercase tracking-wider text-[#4A4335] transition-colors hover:text-[#8C6C58] cursor-pointer sm:text-sm";

const mobileLinkClass =
  "text-[10px] font-bold uppercase tracking-wider text-[#4A4335] hover:text-[#8C6C58]";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-[100]">
      {/* Top notification banner */}
      <div className="bg-[#4A4335] px-4 py-2 text-center text-[10px] font-medium uppercase tracking-[0.2em] text-[#FAF8F5] border-b border-[#EAE5D9]/10 sm:text-xs">
        • Now Accepting New Patients — Starting Early Summer 2026 •
      </div>

      {/* Main navigation bar */}
      <div className="border-b border-[#4A4335]/10 bg-[#EAE5D9]/80 backdrop-blur-md shadow-sm">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-2 px-4 py-3 sm:gap-4 sm:px-6 md:px-8">
          <Link
            href="/"
            className="flex shrink-0 items-center transition-transform hover:scale-[1.02]"
            aria-label="Embrace Women's Healthcare home"
          >
            <Image
              src="/embracelogo.png"
              alt="Embrace Women's Healthcare"
              width={180}
              height={56}
              priority
              className="h-10 w-auto sm:h-12 brightness-95 contrast-105"
            />
          </Link>

          <nav
            className="hidden md:flex items-center gap-6 lg:gap-8"
            aria-label="Main navigation"
          >
            <Link href="/about" className={navLinkClass}>About</Link>
            <Link href="/services" className={navLinkClass}>Services</Link>
            <Link href="/how-it-works" className={navLinkClass}>How It Works</Link>
            <Link href="/sliding-scale" className={navLinkClass}>Sliding Scale</Link>
            <Link href="/patient-info" className={navLinkClass}>Patient Info</Link>
          </nav>

          <div className="flex items-center gap-3">
            {/* Small screen navigation quick menu */}
            <nav className="flex md:hidden items-center gap-3 mr-1">
              <Link href="/about" className={mobileLinkClass}>About</Link>
              <Link href="/services" className={mobileLinkClass}>Services</Link>
            </nav>

            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Link href="/contact" className={ctaButtonClass}>
                Contact Us
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </header>
  );
}
