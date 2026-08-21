"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, LogIn, UserPlus } from "lucide-react";
const PORTAL_PENDING_MESSAGE = "Patient Portal launches October 2026";

const fadeUp = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
};

export function Hero() {
  return (
    <section className="relative w-full pt-28 pb-16 px-4 md:pt-36 md:pb-24 bg-[#EAE5D9]">
      <div className="mx-auto max-w-6xl">
        {/* Logo title */}
        <div className="text-center mb-12 md:mb-16 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.05 }}
            className="w-full flex flex-col items-center"
          >
            <h1 className="sr-only">Embrace Women&apos;s Healthcare</h1>
            <Image
              src="/embrace-womens-healthcare-vermont-logo.png"
              alt="Embrace Women's Healthcare, PLLC"
              width={960}
              height={540}
              priority
              sizes="(max-width: 640px) 90vw, (max-width: 1024px) 70vw, 720px"
              className="h-auto w-[300px] sm:w-[440px] md:w-[560px] lg:w-[680px]"
            />
          </motion.div>

          <motion.p
            className="mt-6 w-full text-center font-serif italic text-base sm:text-lg md:text-xl text-[#3D4A66] tracking-wide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Feel heard. Feel better. Feel like you again.
          </motion.p>
        </div>

        {/* Hybrid Hero: Bethany photo + short about + CTAs */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 items-center">
          {/* Bethany photo */}
          <motion.div
            className="md:col-span-5 flex flex-col items-center gap-4"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <div className="relative w-full max-w-[360px] aspect-[4/5] overflow-hidden rounded-2xl border-4 border-[#FAF8F5] shadow-[0_15px_40px_-10px_rgba(74,67,53,0.25)] bg-white group">
              <Image
                src="/bethany-cook-nurse-practitioner-vermont.jpg"
                alt="Bethany Cook — Women's Health Nurse Practitioner & Certified Nurse Midwife"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 24rem"
                className="object-cover object-[center_10%] transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>
            <div className="flex items-center gap-3 bg-white/70 border border-[#1F2E4C]/10 rounded-2xl px-4 py-2.5 shadow-sm backdrop-blur-sm">
              <Image
                src="/menopause-society-certified-practitioner.png"
                alt="Menopause Society Certified Practitioner 2026"
                width={56}
                height={56}
                className="w-12 h-12"
              />
              <div className="text-left">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-[#1F2E4C] leading-tight">
                  Menopause Society
                </p>
                <p className="text-[10px] text-[#3D4A66] font-medium leading-tight">
                  Certified Practitioner · 2026
                </p>
              </div>
            </div>
          </motion.div>

          {/* Short bio + CTAs */}
          <motion.div
            className="md:col-span-7 text-center md:text-left"
            initial="initial"
            animate="animate"
            variants={{
              animate: {
                transition: { staggerChildren: 0.15, delayChildren: 0.55 },
              },
            }}
          >
            <motion.h2
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="font-serif italic text-2xl sm:text-3xl md:text-4xl text-[#1F2E4C] mb-4 leading-tight"
            >
              Thoughtful, personalized care for women in Vermont.
            </motion.h2>
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="text-sm sm:text-base text-[#3D4A66] leading-relaxed font-sans mb-5"
            >
              With over 20 years as a Women&apos;s Health Nurse Practitioner and Certified Nurse Midwife, I built Embrace Women&apos;s Healthcare to offer the kind of care I&apos;d want for the women in my own life — unrushed, judgment-free, and grounded in evidence.
            </motion.p>
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="text-sm sm:text-base text-[#3D4A66] leading-relaxed font-sans mb-6"
            >
              I focus on midlife transition, hormone therapy, sexual wellness, and the everyday women&apos;s-health concerns that deserve more time than a 15-minute slot allows.
            </motion.p>
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="font-serif italic text-base sm:text-lg text-[#3AA5A0] leading-relaxed mb-8"
            >
              Let&apos;s embrace your strength, balance, and renewal.
              <span className="block mt-1 text-[#1F2E4C] not-italic font-sans text-sm tracking-wide">
                — Bethany
              </span>
            </motion.p>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="flex flex-col sm:flex-row items-center md:items-start gap-3"
            >
              <Link
                href="/new-patients"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#1F2E4C] text-[#FAF8F5] px-7 py-3.5 text-sm font-semibold tracking-wide shadow-md transition-all duration-300 hover:bg-[#3D4A66] hover:-translate-y-0.5 active:translate-y-0"
              >
                <UserPlus className="w-4 h-4" />
                New Patient
                <ArrowRight className="w-4 h-4" />
              </Link>
              <button
                type="button"
                disabled
                aria-disabled="true"
                title={PORTAL_PENDING_MESSAGE}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-[#1F2E4C]/40 text-[#1F2E4C]/50 px-7 py-3.5 text-sm font-semibold tracking-wide cursor-not-allowed"
              >
                <LogIn className="w-4 h-4" />
                Patient Portal · Coming Oct 2026
              </button>
            </motion.div>
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="mt-4 flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs sm:text-sm text-[#3D4A66]"
            >
              <Link
                href="/about"
                className="font-semibold uppercase tracking-wider text-[#3AA5A0] hover:text-[#1F2E4C] transition-colors"
              >
                More About Bethany
              </Link>
              <span className="hidden sm:inline text-[#1F2E4C]/30">·</span>
              <Link
                href="/services"
                className="font-semibold uppercase tracking-wider text-[#3AA5A0] hover:text-[#1F2E4C] transition-colors"
              >
                Explore Services
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
