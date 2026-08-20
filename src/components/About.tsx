"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const signatureFontClass = "font-normal";
const signatureFontStyle = { fontFamily: "'Dancing Script', 'Cormorant Garamond', cursive" } as const;

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#FAF8F5] px-4 pt-32 pb-20 sm:px-6 sm:pt-36 lg:px-8 lg:pb-28 scroll-mt-20 border-t border-[#1F2E4C]/5"
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
              src="/bethany-cook-nurse-practitioner-vermont.jpg"
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
          <h2 className="font-serif italic text-3xl sm:text-4xl md:text-5xl text-[#1F2E4C] mb-3">
            Who we are
          </h2>

          <p className="mt-1 text-sm sm:text-base text-[#3D4A66] font-sans tracking-wide mb-6">
            Bethany Cook, WHNP-BC, CNM
          </p>

          <div className="space-y-6 text-[#3D4A66] text-sm sm:text-base leading-relaxed font-sans">
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
              Through telehealth and thoughtfully curated group education, we make care feel more accessible, deeply supportive, and beautifully tailored to your life. Bethany is a Menopause Society Certified Practitioner and a board member of the Vermont Nurse Practitioner Association.
            </p>
          </div>

          {/* Sign-off */}
          <div className="mt-8">
            <p className="font-serif italic text-base sm:text-lg text-[#3AA5A0] leading-relaxed">
              Let&apos;s Embrace your strength, balance, and renewal,
            </p>
            <p
              className={`${signatureFontClass} mt-2 text-4xl sm:text-5xl text-[#1F2E4C] leading-none`}
              style={signatureFontStyle}
            >
              Bethany
            </p>
          </div>

          {/* Menopause Society Certified Practitioner badge */}
          <div className="mt-8 flex items-center gap-4 bg-white/60 border border-[#1F2E4C]/10 rounded-2xl p-4 self-start shadow-sm backdrop-blur-sm">
            <Image
              src="/menopause-society-certified-practitioner.png"
              alt="Menopause Society Certified Practitioner 2026"
              width={72}
              height={72}
              className="w-16 h-16 sm:w-18 sm:h-18"
            />
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#1F2E4C]">
                Menopause Society
              </p>
              <p className="text-[11px] text-[#3D4A66] font-medium">
                Certified Practitioner · 2026
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
