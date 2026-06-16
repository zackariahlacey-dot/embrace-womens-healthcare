"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#FAF8F5] px-4 pt-32 pb-20 sm:px-6 sm:pt-36 lg:px-8 lg:pb-28 scroll-mt-20 border-t border-[#4A4335]/5"
    >
      <motion.div
        className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
      >
        {/* Left Side: Bethany Cook Image Card */}
        <div className="flex justify-center order-first lg:order-1">
          <div className="relative w-full max-w-[360px] aspect-[4/5] overflow-hidden rounded-2xl border-4 border-[#EAE5D9] shadow-[0_10px_30px_rgba(74,67,53,0.15)] bg-white group">
            <Image
              src="/embraceheadshot.JPG"
              alt="Bethany Cook — Women's Health Nurse Practitioner & Certified Nurse Midwife smiling in navy scrubs"
              fill
              sizes="(max-width: 640px) 18rem, 24rem"
              className="object-cover object-[center_10%] transition-transform duration-500 group-hover:scale-[1.02]"
              priority={false}
            />
          </div>
        </div>

        {/* Right Side: Copy from 'Who we are' Column */}
        <div className="flex flex-col justify-center text-left">
          <h2 className="font-serif italic text-3xl sm:text-4xl md:text-5xl text-[#4A4335] mb-3">
            Who we are
          </h2>

          <p className="mt-1 text-sm sm:text-base text-[#5A5346] font-sans tracking-wide mb-6">
            Bethany Cook, WHNP-BC, CNM
          </p>

          <div className="space-y-6 text-[#5A5346] text-sm sm:text-base leading-relaxed font-sans">
            <p>
              With over 20 years of experience as a Women&apos;s Health Nurse Practitioner and Certified Nurse Midwife, Bethany Cook offers thoughtful, personalized care for women at every stage of their health journey.
            </p>
            <p>
              Bethany&apos;s clinical background spans midlife and menopausal transition, hormone replacement therapy, sexual wellness, family planning, and primary care coordination. Her approach is grounded in spending the time to actually listen — so the plan you walk away with reflects you, not a script.
            </p>
            <p>
              Whether you are seeking more time, more support, or a flexible option beyond traditional care, Embrace Women&apos;s Healthcare is designed to meet your needs.
            </p>
            <p>
              Through telehealth and thoughtfully curated group education, we make care feel more accessible, deeply supportive, and beautifully tailored to your life — guided by Bethany&apos;s distinction as a member of The Menopause Society and a Certified Menopause Professional through UVM.
            </p>
          </div>

          {/* Menopause Society Badge */}
          <div className="mt-8 flex items-center gap-4 bg-white/60 border border-[#4A4335]/10 rounded-2xl p-4 self-start shadow-sm backdrop-blur-sm">
            <div className="flex shrink-0 items-center justify-center w-12 h-12 rounded-full bg-[#3B2E5C] text-white">
              {/* Custom styled icon representing the logo */}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" fill="currentColor" className="text-[#A78BFA]" />
              </svg>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#3B2E5C]">
                The Menopause Society
              </p>
              <p className="text-[10px] text-[#5A5346] font-medium">
                2026 Professional Member
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
