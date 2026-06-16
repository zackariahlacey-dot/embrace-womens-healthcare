"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Printer, ChevronDown } from "lucide-react";

const ctaButtonClass =
  "inline-flex items-center justify-center rounded-full bg-[#4A4335] px-5 py-2.5 text-[11px] sm:text-xs font-semibold text-[#FAF8F5] shadow-sm transition-all duration-300 hover:bg-[#5A5346] hover:shadow-md border border-[#4A4335]/10";

const portalButtonClass =
  "inline-flex items-center justify-center rounded-full bg-[#FAF8F5] border border-[#4A4335]/30 px-5 py-2.5 text-[11px] sm:text-xs font-semibold text-[#4A4335] shadow-sm transition-all duration-300 hover:bg-white hover:border-[#4A4335]/50 hover:shadow-md";

const navLinkClass =
  "text-xs font-medium uppercase tracking-wider text-[#4A4335] transition-colors hover:text-[#8C6C58] cursor-pointer sm:text-sm";

const mobileLinkClass =
  "text-[10px] font-bold uppercase tracking-wider text-[#4A4335] hover:text-[#8C6C58]";

const patientInfoLinks = [
  { href: "/patient-info/wellness-collective", label: "The Wellness Collective" },
  { href: "/patient-info/forms", label: "Forms" },
  { href: "/patient-info/patient-resources", label: "Patient Resources" },
  { href: "/patient-info/patient-portal", label: "Patient Portal" },
];

export function Header() {
  const [isPatientInfoOpen, setIsPatientInfoOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-[100]">
      {/* Slim top utility bar — phone/fax + announcement */}
      <div className="bg-[#4A4335] text-[#FAF8F5] border-b border-[#EAE5D9]/10">
        <div className="mx-auto max-w-7xl px-4 py-1.5 sm:px-6 sm:py-2 md:px-8 flex items-center justify-between gap-3">
          {/* Phone/Fax — left */}
          <div className="flex items-center gap-3 sm:gap-5 text-[10px] sm:text-xs">
            <a
              href="tel:8027359779"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
              aria-label="Call 802-735-9779"
            >
              <Phone className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              <span className="font-medium tracking-wide">802-735-9779</span>
            </a>
            <span className="hidden sm:flex items-center gap-1.5 text-[#FAF8F5]/80">
              <Printer className="w-3.5 h-3.5" />
              <span className="font-medium tracking-wide">Fax: 802-419-8327</span>
            </span>
          </div>

          {/* Announcement — right */}
          <span className="hidden md:block text-[10px] sm:text-xs font-medium uppercase tracking-[0.18em]">
            Accepting New Patients — September 1, 2026
          </span>
          <span className="md:hidden text-[9px] font-medium uppercase tracking-[0.12em]">
            New Patients · Sept 1
          </span>
        </div>
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
              className="h-9 w-auto sm:h-12 brightness-95 contrast-105"
            />
          </Link>

          <nav
            className="hidden md:flex items-center gap-5 lg:gap-7"
            aria-label="Main navigation"
          >
            <Link href="/about" className={navLinkClass}>About</Link>
            <Link href="/services" className={navLinkClass}>Services</Link>
            <Link href="/how-it-works" className={navLinkClass}>How It Works</Link>
            <Link href="/sliding-scale" className={navLinkClass}>Sliding Scale</Link>

            {/* Patient Info — dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsPatientInfoOpen(true)}
              onMouseLeave={() => setIsPatientInfoOpen(false)}
            >
              <Link
                href="/patient-info"
                className={`${navLinkClass} flex items-center gap-1`}
                onFocus={() => setIsPatientInfoOpen(true)}
              >
                Patient Info
                <ChevronDown
                  className={`w-3 h-3 transition-transform duration-200 ${isPatientInfoOpen ? "rotate-180" : ""}`}
                />
              </Link>
              {isPatientInfoOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[240px]">
                  <div className="bg-white border border-[#4A4335]/10 rounded-xl shadow-lg overflow-hidden py-1">
                    {patientInfoLinks.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-2.5 text-sm text-[#4A4335] hover:bg-[#FAF8F5] hover:text-[#8C6C58] transition-colors font-sans"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            {/* Small screen quick nav */}
            <nav className="flex md:hidden items-center gap-3 mr-1">
              <Link href="/about" className={mobileLinkClass}>About</Link>
              <Link href="/services" className={mobileLinkClass}>Services</Link>
              <Link href="/patient-info" className={mobileLinkClass}>Info</Link>
            </nav>

            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link href="/patient-info/patient-portal" className={portalButtonClass}>
                <span className="hidden sm:inline">Patient Portal</span>
                <span className="sm:hidden">Portal</span>
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
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
