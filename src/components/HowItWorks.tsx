"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, UserPlus, ZoomIn, CheckCircle2 } from "lucide-react";
import { BOOK_APPOINTMENT_URL } from "@/lib/constants";

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="bg-[#EAE5D9] px-4 py-20 sm:px-6 lg:px-8 lg:py-28 scroll-mt-20 border-t border-[#4A4335]/15"
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
              {/* Step 1 */}
              <div className="flex gap-4">
                <div className="flex shrink-0 w-10 h-10 rounded-full bg-[#FAF8F5] border border-[#4A4335]/10 items-center justify-center text-[#4A4335] shadow-sm">
                  <UserPlus className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif italic text-lg text-[#4A4335] font-semibold mb-1">
                    1. Connect & Learn
                  </h3>
                  <p className="text-sm text-[#5A5346] leading-relaxed">
                    Join us for monthly meet-and-greets and community education at <strong className="font-semibold text-[#4A4335]">The Wellness Collective</strong> in Colchester, Vermont, in person or via Zoom.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex gap-4">
                <div className="flex shrink-0 w-10 h-10 rounded-full bg-[#FAF8F5] border border-[#4A4335]/10 items-center justify-center text-[#4A4335] shadow-sm">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif italic text-lg text-[#4A4335] font-semibold mb-1">
                    2. Schedule Your Visit
                  </h3>
                  <p className="text-sm text-[#5A5346] leading-relaxed">
                    When you are ready, simply explore our site, create your <strong className="font-semibold text-[#4A4335]">Optimantra</strong> account, and schedule your appointment online.
                  </p>
                </div>
              </div>
            </div>

            {/* QR Code and Scheduling Button Area */}
            <div className="relative overflow-hidden flex flex-col sm:flex-row items-center gap-6 bg-[#FAF8F5]/50 border border-[#4A4335]/10 rounded-3xl p-6 shadow-sm backdrop-blur-sm">
              
              {/* Coming Soon Blur Overlay */}
              <div className="absolute inset-0 bg-[#FAF8F5]/65 backdrop-blur-[5px] z-20 flex flex-col items-center justify-center text-center p-4 select-none">
                <div className="bg-[#FAF8F5] border border-[#4A4335]/15 px-6 py-4 rounded-2xl shadow-lg max-w-[280px] transition-transform duration-300 hover:scale-[1.02]">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8C6C58] mb-1 font-sans">
                    Patient Portal
                  </p>
                  <h4 className="font-serif italic text-lg sm:text-xl text-[#4A4335] font-semibold">
                    Coming Soon
                  </h4>
                  <p className="text-[10px] text-[#5A5346]/80 mt-1.5 font-sans leading-relaxed">
                    Online scheduling and patient registration will be available here soon.
                  </p>
                </div>
              </div>

              {/* QR Code Container with scanning effect */}
              <div className="relative flex shrink-0 w-32 h-32 bg-white rounded-xl border border-[#4A4335]/15 p-2 shadow-inner group overflow-hidden items-center justify-center">
                {/* Visual QR Code using geometric SVG elements */}
                <svg viewBox="0 0 100 100" className="w-full h-full text-[#4A4335]" fill="currentColor">
                  {/* Outer corners */}
                  <rect x="0" y="0" width="30" height="30" />
                  <rect x="3" y="3" width="24" height="24" fill="white" />
                  <rect x="8" y="8" width="14" height="14" />
                  
                  <rect x="70" y="0" width="30" height="30" />
                  <rect x="73" y="3" width="24" height="24" fill="white" />
                  <rect x="78" y="8" width="14" height="14" />
                  
                  <rect x="0" y="70" width="30" height="30" />
                  <rect x="3" y="73" width="24" height="24" fill="white" />
                  <rect x="8" y="78" width="14" height="14" />
                  
                  {/* Decorative noise/pixels to simulate QR code */}
                  <rect x="40" y="10" width="10" height="10" />
                  <rect x="50" y="20" width="10" height="10" />
                  <rect x="45" y="40" width="10" height="15" />
                  <rect x="15" y="45" width="15" height="10" />
                  <rect x="75" y="40" width="10" height="10" />
                  <rect x="80" y="55" width="15" height="10" />
                  <rect x="40" y="70" width="15" height="10" />
                  <rect x="55" y="80" width="10" height="15" />
                  <rect x="70" y="75" width="10" height="10" />
                  <rect x="85" y="85" width="10" height="10" />
                </svg>

                {/* Vertical Laser scanning line effect */}
                <motion.div
                  className="absolute left-0 right-0 h-[2px] bg-[#8C6C58] shadow-[0_0_8px_#8C6C58]"
                  animate={{ top: ["4%", "96%"] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>

              {/* Instructions and CTA Button */}
              <div className="flex-1 text-center sm:text-left space-y-4">
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#8C6C58] mb-1">
                    Book Online Instantly
                  </h4>
                  <p className="text-xs text-[#5A5346] leading-relaxed">
                    Scan this QR code with your mobile camera to open scheduling directly, or click the button below to register online.
                  </p>
                </div>

                <a
                  href={BOOK_APPOINTMENT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-[#4A4335] text-[#FAF8F5] px-5 py-2.5 text-xs font-semibold tracking-wide shadow-sm transition-all duration-300 hover:bg-[#5A5346] hover:shadow active:scale-[0.98]"
                >
                  Create Account & Schedule
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
