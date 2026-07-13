"use client";

import { motion } from "framer-motion";
import { Phone, MapPin, Globe, Shield, CalendarClock } from "lucide-react";
import { PATIENT_PORTAL_URL } from "@/lib/constants";

export function ContactForm() {
  return (
    <section
      id="contact"
      className="bg-[#EAE5D9] px-4 pt-32 pb-20 sm:px-6 sm:pt-36 lg:px-8 lg:pb-28 scroll-mt-24 border-t border-[#4A4335]/15"
    >
      <div className="mx-auto max-w-6xl">
        {/* New Patients Announcement Banner */}
        <motion.div
          className="mb-10 rounded-2xl border border-[#8C6C58]/30 bg-[#8C6C58]/10 px-6 py-5 text-center shadow-sm sm:mb-14 sm:px-8 sm:py-6"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-[#8C6C58]">
            Now Welcoming New Patients
          </p>
          <p className="mt-2 font-serif italic text-xl sm:text-2xl md:text-3xl text-[#4A4335]">
            Bethany starts seeing new patients on September 1st, 2026
          </p>
          <p className="mt-2 text-xs sm:text-sm text-[#5A5346]">
            Scheduling opens August 1st, 2026
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left Column: Brochure 'Contact Us' Info Panel (Cols 1-5) */}
          <motion.div
            className="lg:col-span-5 text-left space-y-8"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <h2 className="font-serif italic text-3xl sm:text-4xl md:text-5xl text-[#4A4335] mb-4">
                Contact Us
              </h2>
              <p className="text-sm sm:text-base text-[#5A5346] leading-relaxed font-sans">
                We would love to hear from you. Reach out to coordinate care, ask educational questions, or register for our wellness discussions.
              </p>
            </div>

            {/* Structured Info Card list */}
            <div className="space-y-4">
              {/* Web Domain */}
              <div className="flex items-center gap-4 bg-[#FAF8F5]/65 border border-[#4A4335]/10 rounded-2xl p-4 shadow-sm backdrop-blur-sm">
                <div className="flex shrink-0 w-10 h-10 rounded-full bg-[#FAF8F5] border border-[#4A4335]/10 items-center justify-center text-[#8C6C58]">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#8C6C58] uppercase tracking-wider">
                    Website & Portal
                  </p>
                  <p className="text-sm font-semibold text-[#4A4335]">
                    embracewomenshealthcare.com
                  </p>
                </div>
              </div>

              {/* Appointments */}
              <div className="flex items-center gap-4 bg-[#FAF8F5]/65 border border-[#4A4335]/10 rounded-2xl p-4 shadow-sm backdrop-blur-sm">
                <div className="flex shrink-0 w-10 h-10 rounded-full bg-[#FAF8F5] border border-[#4A4335]/10 items-center justify-center text-[#8C6C58]">
                  <CalendarClock className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#8C6C58] uppercase tracking-wider">
                    Appointments
                  </p>
                  <p className="text-sm font-semibold text-[#4A4335]">
                    Telehealth available
                  </p>
                  <p className="text-xs text-[#5A5346] leading-snug mt-0.5">
                    Scheduling begins August 1st, 2026
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4 bg-[#FAF8F5]/65 border border-[#4A4335]/10 rounded-2xl p-4 shadow-sm backdrop-blur-sm">
                <div className="flex shrink-0 w-10 h-10 rounded-full bg-[#FAF8F5] border border-[#4A4335]/10 items-center justify-center text-[#8C6C58]">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#8C6C58] uppercase tracking-wider">
                    Phone
                  </p>
                  <a
                    href="tel:8027359779"
                    className="text-sm font-semibold text-[#4A4335] hover:text-[#8C6C58] transition-colors"
                  >
                    802-735-9779
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4 bg-[#FAF8F5]/65 border border-[#4A4335]/10 rounded-2xl p-4 shadow-sm backdrop-blur-sm">
                <div className="flex shrink-0 w-10 h-10 rounded-full bg-[#FAF8F5] border border-[#4A4335]/10 items-center justify-center text-[#8C6C58]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#8C6C58] uppercase tracking-wider">
                    The Wellness Collective
                  </p>
                  <p className="text-xs text-[#5A5346] leading-snug">
                    875 Roosevelt Hwy Suite 120, Colchester, VT 05446
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Ways to Reach Us (Cols 6-12) */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <div className="rounded-[2rem] border border-[#4A4335]/10 bg-[#FAF8F5] p-6 md:p-10 shadow-sm text-left">
              <h3 className="font-serif italic text-2xl sm:text-3xl md:text-4xl text-[#4A4335] mb-3">
                Ways to Reach Us
              </h3>
              <p className="text-sm sm:text-base text-[#5A5346] leading-relaxed">
                Our online contact form is being upgraded to a HIPAA-compliant intake system and will return shortly. In the meantime, the most secure ways to reach Bethany are by phone or through the patient portal.
              </p>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:8027359779"
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-[#4A4335] px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#FAF8F5] shadow-sm transition-all duration-300 hover:bg-[#5A5346] hover:shadow"
                >
                  <Phone className="w-4 h-4" aria-hidden />
                  Call 802-735-9779
                </a>
                <a
                  href={PATIENT_PORTAL_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-full border border-[#4A4335] text-[#4A4335] px-6 py-3.5 text-xs font-semibold uppercase tracking-wider transition-all duration-300 hover:bg-[#4A4335]/5"
                >
                  <Shield className="w-4 h-4" aria-hidden />
                  Patient Portal
                </a>
              </div>

              <div className="mt-8 rounded-2xl border border-[#4A4335]/10 bg-[#EAE5D9]/50 px-5 py-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#8C6C58] mb-1">
                  A Note on Privacy
                </p>
                <p className="text-xs sm:text-sm text-[#5A5346] leading-relaxed">
                  Please avoid sending protected health information (PHI) by email or voicemail. For anything sensitive, the patient portal keeps your information encrypted and HIPAA-compliant.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
