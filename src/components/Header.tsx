"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, ChevronDown, Sparkles, Menu, X, LogIn } from "lucide-react";
import { BOOK_NEW_PATIENT_URL, LAUNCH_DATE, LAUNCH_DATE_SHORT, PATIENT_PORTAL_URL } from "@/lib/constants";

const newPatientButtonClass =
  "inline-flex items-center justify-center rounded-full bg-[#1F2E4C] px-3.5 py-2.5 text-[11px] sm:text-xs font-semibold text-[#FAF8F5] shadow-sm transition-all duration-300 hover:bg-[#3D4A66] hover:shadow-md border border-[#1F2E4C]/10 whitespace-nowrap";

const portalButtonClass =
  "inline-flex items-center justify-center rounded-full bg-[#FAF8F5]/60 border border-[#1F2E4C]/20 px-3.5 py-2.5 text-[11px] sm:text-xs font-semibold text-[#1F2E4C] shadow-sm transition-all duration-300 hover:bg-[#FAF8F5] hover:border-[#1F2E4C]/40 whitespace-nowrap";

const contactButtonClass =
  "inline-flex items-center justify-center rounded-full border border-[#1F2E4C]/25 px-3.5 py-2.5 text-[11px] sm:text-xs font-semibold text-[#1F2E4C] transition-all duration-300 hover:bg-[#1F2E4C]/5 hover:border-[#1F2E4C]/50 whitespace-nowrap";

const navLinkBase =
  "relative text-xs font-medium uppercase tracking-wider transition-colors cursor-pointer sm:text-sm";

function navLinkClass(isActive: boolean) {
  return `${navLinkBase} ${isActive ? "text-[#3AA5A0]" : "text-[#1F2E4C] hover:text-[#3AA5A0]"}`;
}

function ActiveUnderline({ show }: { show: boolean }) {
  if (!show) return null;
  return (
    <motion.span
      layoutId="active-nav-underline"
      className="absolute -bottom-1.5 left-0 right-0 h-[2px] rounded-full bg-[#3AA5A0]"
      transition={{ type: "spring", stiffness: 380, damping: 30 }}
    />
  );
}

const patientInfoLinks = [
  { href: "/patient-info/wellness-collective", label: "The Wellness Collective" },
  { href: "/patient-info/forms", label: "Forms" },
  { href: "/patient-info/patient-resources", label: "Patient Resources" },
  { href: "/patient-info/newsletters", label: "Newsletters" },
  { href: "/patient-info/videos", label: "Videos" },
  { href: "/patient-info/patient-portal", label: "Patient Portal" },
];

const primaryNavLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/fee-schedule", label: "Fee Schedule" },
];

export function Header() {
  const [isPatientInfoOpen, setIsPatientInfoOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-[100]">
      {/* Slim top utility bar — phone + announcement */}
      <div className="bg-[#1F2E4C] text-[#FAF8F5] border-b border-[#EAE5D9]/10">
        <div className="mx-auto max-w-7xl px-4 py-1.5 sm:px-6 sm:py-2 md:px-8 flex items-center justify-between gap-3">
          {/* Phone — left */}
          <a
            href="tel:8027359779"
            className="flex items-center gap-1.5 text-[10px] sm:text-xs hover:text-white transition-colors"
            aria-label="Call 802-735-9779"
          >
            <Phone className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            <span className="font-medium tracking-wide">802-735-9779</span>
          </a>

          {/* Announcement — right */}
          <span className="hidden md:inline-flex items-center gap-1.5 rounded-full bg-[#FAF8F5] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-[#1F2E4C] shadow-sm ring-1 ring-[#3AA5A0]/25">
            <Sparkles className="w-3.5 h-3.5 text-[#3AA5A0]" aria-hidden />
            Now Welcoming New Patients — {LAUNCH_DATE}
          </span>
          <span className="md:hidden inline-flex items-center gap-1 rounded-full bg-[#FAF8F5] px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.1em] text-[#1F2E4C] shadow-sm ring-1 ring-[#3AA5A0]/25">
            <Sparkles className="w-3 h-3 text-[#3AA5A0]" aria-hidden />
            New Patients · {LAUNCH_DATE_SHORT}
          </span>
        </div>
      </div>

      {/* Main navigation bar */}
      <div className="border-b border-[#1F2E4C]/10 bg-[#EAE5D9]/80 backdrop-blur-md shadow-sm">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-2 px-4 py-3 sm:gap-4 sm:px-6 md:px-8">
          <Link
            href="/"
            className="flex shrink-0 items-center transition-transform hover:scale-[1.02]"
            aria-label="Embrace Women's Healthcare home"
            onClick={closeMobileMenu}
          >
            <Image
              src="/embrace-womens-healthcare-vermont-logo.png"
              alt="Embrace Women's Healthcare"
              width={180}
              height={56}
              priority
              className="h-8 w-auto sm:h-12"
            />
          </Link>

          <nav
            className="hidden md:flex items-center gap-5 lg:gap-7"
            aria-label="Main navigation"
          >
            {primaryNavLinks.map((link) => (
              <Link key={link.href} href={link.href} className={navLinkClass(isActive(link.href))}>
                {link.label}
                <ActiveUnderline show={isActive(link.href)} />
              </Link>
            ))}

            {/* Patient Info — dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsPatientInfoOpen(true)}
              onMouseLeave={() => setIsPatientInfoOpen(false)}
            >
              <Link
                href="/patient-info"
                className={`${navLinkClass(isActive("/patient-info"))} flex items-center gap-1`}
                onFocus={() => setIsPatientInfoOpen(true)}
              >
                Patient Info
                <ChevronDown
                  className={`w-3 h-3 transition-transform duration-200 ${isPatientInfoOpen ? "rotate-180" : ""}`}
                />
                <ActiveUnderline show={isActive("/patient-info")} />
              </Link>
              {isPatientInfoOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[240px]">
                  <div className="bg-white border border-[#1F2E4C]/10 rounded-xl shadow-lg overflow-hidden py-1">
                    {patientInfoLinks.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-2.5 text-sm text-[#1F2E4C] hover:bg-[#FAF8F5] hover:text-[#3AA5A0] transition-colors font-sans"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </nav>

          <div className="flex items-center gap-1.5 sm:gap-2">
            {/* Contact — hidden on smallest screens (reachable via mobile menu) */}
            <motion.div className="hidden sm:block" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link href="/contact" className={contactButtonClass}>
                <span className="hidden sm:inline">Contact Us</span>
                <span className="sm:hidden">Contact</span>
              </Link>
            </motion.div>

            {/* Patient Portal — hidden on smallest screens (reachable via mobile menu) */}
            <motion.a
              href={PATIENT_PORTAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`hidden sm:inline-flex ${portalButtonClass}`}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <span className="hidden sm:inline">Patient Portal</span>
              <span className="sm:hidden">Portal</span>
            </motion.a>

            {/* Primary CTA — always visible */}
            <motion.a
              href={BOOK_NEW_PATIENT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={newPatientButtonClass}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <span className="hidden sm:inline">New Patient Appt</span>
              <span className="sm:hidden">New Appt</span>
            </motion.a>

            {/* Hamburger — mobile/tablet nav toggle */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((open) => !open)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
              className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-full border border-[#1F2E4C]/20 text-[#1F2E4C] transition-colors hover:bg-[#1F2E4C]/5 shrink-0"
            >
              {isMobileMenuOpen ? <X className="w-4.5 h-4.5" /> : <Menu className="w-4.5 h-4.5" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.nav
              aria-label="Mobile navigation"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="md:hidden overflow-hidden border-t border-[#1F2E4C]/10 bg-[#FAF8F5]"
            >
              <div className="px-4 py-4 sm:px-6 flex flex-col gap-1 max-h-[75vh] overflow-y-auto">
                {primaryNavLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeMobileMenu}
                    className={`rounded-lg px-3 py-2.5 text-sm font-semibold transition-colors ${
                      isActive(link.href)
                        ? "text-[#3AA5A0] bg-[#3AA5A0]/10"
                        : "text-[#1F2E4C] hover:bg-[#1F2E4C]/5"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}

                <div className="mt-2 pt-2 border-t border-[#1F2E4C]/10">
                  <p className="px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#3AA5A0]">
                    Patient Info
                  </p>
                  {patientInfoLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={closeMobileMenu}
                      className={`block rounded-lg px-3 py-2.5 text-sm font-semibold transition-colors ${
                        isActive(item.href)
                          ? "text-[#3AA5A0] bg-[#3AA5A0]/10"
                          : "text-[#1F2E4C] hover:bg-[#1F2E4C]/5"
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>

                <div className="mt-3 pt-3 border-t border-[#1F2E4C]/10 flex flex-col gap-2.5">
                  <Link
                    href="/contact"
                    onClick={closeMobileMenu}
                    className="inline-flex items-center justify-center rounded-full border border-[#1F2E4C]/25 px-4 py-2.5 text-xs font-semibold text-[#1F2E4C] transition-colors hover:bg-[#1F2E4C]/5"
                  >
                    Contact Us
                  </Link>
                  <a
                    href={PATIENT_PORTAL_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeMobileMenu}
                    className="inline-flex items-center justify-center gap-1.5 rounded-full border border-[#1F2E4C]/20 bg-[#FAF8F5] px-4 py-2.5 text-xs font-semibold text-[#1F2E4C] transition-colors hover:bg-white"
                  >
                    <LogIn className="w-3.5 h-3.5" />
                    Patient Portal
                  </a>
                  <a
                    href={BOOK_NEW_PATIENT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeMobileMenu}
                    className="inline-flex items-center justify-center rounded-full bg-[#1F2E4C] px-4 py-2.5 text-xs font-semibold text-[#FAF8F5] shadow-sm transition-colors hover:bg-[#3D4A66]"
                  >
                    New Patient Appt
                  </a>
                </div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
