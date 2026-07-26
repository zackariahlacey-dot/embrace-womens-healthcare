"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, UserPlus, LogIn, ArrowRight } from "lucide-react";
import { BOOK_NEW_PATIENT_URL, PATIENT_PORTAL_URL } from "@/lib/constants";

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="bg-[#EAE5D9] px-4 pt-32 pb-20 sm:px-6 sm:pt-36 lg:px-8 lg:pb-28 scroll-mt-20 border-t border-[#4A4335]/15"
    >
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <motion.h2
            className="font-serif italic text-3xl sm:text-4xl md:text-5xl text-[#4A4335]"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            How it works
          </motion.h2>
          <motion.p
            className="mt-3 text-sm sm:text-base text-[#5A5346] font-sans tracking-wide"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Simplifying your journey toward supportive, accessible healthcare
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Column 1: Image & Vermont Warning (Cols 1-5) */}
          <motion.div
            className="lg:col-span-5 flex flex-col items-center"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative w-full max-w-[400px] aspect-square rounded-2xl overflow-hidden border border-[#4A4335]/10 shadow-lg mb-6 bg-white group">
              <Image
                src="/2.jpg"
                alt="Five diverse women sitting in a group circle on chairs smiling and discussing community wellness"
                fill
                sizes="(max-width: 640px) 100vw, 24rem"
                className="object-cover transition-transform duration-500 group-hover:scale-102"
              />
            </div>
            
            {/* Vermont Disclaimer Card */}
            <div className="max-w-[400px] w-full rounded-2xl bg-[#FAF8F5]/90 border-l-4 border-[#8C6C58] p-4 shadow-sm">
              <p className="text-xs font-semibold text-[#8C6C58] uppercase tracking-wider mb-1">
                State Regulation
              </p>
              <p className="text-xs text-[#5A5346] leading-relaxed">
                State law requires patients to be physically located in Vermont at the time of their telehealth visit.
              </p>
            </div>
          </motion.div>

          {/* Column 2: Interactive Steps & QR Code (Cols 6-12) */}
          <motion.div
            className="lg:col-span-7 flex flex-col justify-center space-y-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Steps list */}
            <div className="space-y-6">
              {/* Schedule Your Visit */}
              <div className="flex gap-4">
                <div className="flex shrink-0 w-10 h-10 rounded-full bg-[#FAF8F5] border border-[#4A4335]/10 items-center justify-center text-[#4A4335] shadow-sm">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif italic text-xl md:text-2xl text-[#4A4335] font-semibold mb-1">
                    Schedule Your Visit
                  </h3>
                  <p className="text-sm text-[#5A5346] leading-relaxed">
                    When you are ready, simply explore our site, create your Optimantra account, and schedule your appointment online.
                  </p>
                </div>
              </div>

              {/* Embrace Wellness */}
              <div className="flex gap-4">
                <div className="flex shrink-0 w-10 h-10 rounded-full bg-[#FAF8F5] border border-[#4A4335]/10 items-center justify-center text-[#4A4335] shadow-sm">
                  <UserPlus className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif italic text-xl md:text-2xl text-[#4A4335] font-semibold mb-1">
                    Embrace Wellness
                  </h3>
                  <p className="text-sm text-[#5A5346] leading-relaxed">
                    We offer monthly gatherings via Zoom or in person at the Wellness Collective in Colchester. Please join us as we review anatomy and physiology, lifestyle recommendations, and the root causes of key women&apos;s health issues such as midlife transition, endometriosis, and PCOS.
                  </p>
                </div>
              </div>
            </div>

            {/* Patient Portal Access Panel */}
            <div className="flex flex-col gap-4 bg-[#FAF8F5]/70 border border-[#4A4335]/10 rounded-3xl p-6 shadow-sm backdrop-blur-sm">
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#8C6C58] mb-1.5">
                  Online Scheduling
                </h4>
                <p className="text-xs sm:text-sm text-[#5A5346] leading-relaxed">
                  Established patients log in to Optimantra to schedule visits and access your records. New here? Book your first appointment directly online.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={PATIENT_PORTAL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-[#4A4335] text-[#FAF8F5] px-5 py-3 text-xs font-semibold tracking-wide shadow-sm transition-all duration-300 hover:bg-[#5A5346] hover:shadow active:scale-[0.98]"
                >
                  <LogIn className="w-4 h-4" aria-hidden />
                  Patient Portal Login
                </a>
                <a
                  href={BOOK_NEW_PATIENT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl border border-[#4A4335] text-[#4A4335] px-5 py-3 text-xs font-semibold tracking-wide transition-all duration-300 hover:bg-[#4A4335]/5 active:scale-[0.98]"
                >
                  <UserPlus className="w-4 h-4" aria-hidden />
                  New Patient Appt
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
