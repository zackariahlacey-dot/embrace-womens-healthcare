"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, MapPin, Globe, Shield, CalendarClock, Clock, UserPlus } from "lucide-react";
import { BOOK_NEW_PATIENT_URL, PATIENT_PORTAL_URL } from "@/lib/constants";
import { JotFormEmbed } from "@/components/JotFormEmbed";

const providerHours = [
  { day: "Tuesday", hours: "7:30 am – 7:00 pm" },
  { day: "Thursday", hours: "3:00 pm – 7:00 pm" },
  { day: "Friday", hours: "7:30 am – 7:00 pm" },
  { day: "Saturday", hours: "7:30 am – 12:00 pm" },
];

export function ContactForm() {
  return (
    <section
      id="contact"
      className="bg-[#EAE5D9] px-4 pt-32 pb-20 sm:px-6 sm:pt-36 lg:px-8 lg:pb-28 scroll-mt-24 border-t border-[#4A4335]/15"
    >
      <div className="mx-auto max-w-6xl">
        {/* New Patients Announcement Banner */}
        <motion.div
          className="mb-8 rounded-2xl border border-[#8C6C58]/30 bg-[#8C6C58]/10 px-6 py-5 text-center shadow-sm sm:mb-10 sm:px-8 sm:py-6"
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

        {/* Top-of-page scheduling CTAs */}
        <motion.div
          className="mb-12 flex flex-col sm:flex-row items-stretch justify-center gap-3"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <a
            href={BOOK_NEW_PATIENT_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#4A4335] text-[#FAF8F5] px-7 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider shadow-sm transition-all duration-300 hover:bg-[#5A5346] hover:-translate-y-0.5"
          >
            <UserPlus className="w-4 h-4" aria-hidden />
            New Patient Appt
          </a>
          <a
            href={PATIENT_PORTAL_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-[#4A4335] text-[#4A4335] px-7 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all duration-300 hover:bg-[#4A4335]/5 hover:-translate-y-0.5"
          >
            <Shield className="w-4 h-4" aria-hidden />
            Already a Patient? Portal
          </a>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left Column: Info Panel (Cols 1-5) */}
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
                We would love to hear from you. Use the secure HIPAA-compliant form to reach out, or contact us using any of the options below.
              </p>
            </div>

            <div className="space-y-4">
              {/* Web Domain */}
              <div className="flex items-center gap-4 bg-[#FAF8F5]/65 border border-[#4A4335]/10 rounded-2xl p-4 shadow-sm backdrop-blur-sm">
                <div className="flex shrink-0 w-10 h-10 rounded-full bg-[#FAF8F5] border border-[#4A4335]/10 items-center justify-center text-[#8C6C58]">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#8C6C58] uppercase tracking-wider">
                    Website
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

              {/* Hours */}
              <div className="flex items-start gap-4 bg-[#FAF8F5]/65 border border-[#4A4335]/10 rounded-2xl p-4 shadow-sm backdrop-blur-sm">
                <div className="flex shrink-0 w-10 h-10 rounded-full bg-[#FAF8F5] border border-[#4A4335]/10 items-center justify-center text-[#8C6C58]">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-semibold text-[#8C6C58] uppercase tracking-wider mb-1.5">
                    Provider Hours (Bethany, NP)
                  </p>
                  <ul className="space-y-1">
                    {providerHours.map((row) => (
                      <li key={row.day} className="flex items-baseline justify-between gap-3 text-xs sm:text-sm text-[#5A5346]">
                        <span className="font-semibold text-[#4A4335]">{row.day}</span>
                        <span>{row.hours}</span>
                      </li>
                    ))}
                  </ul>
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

          {/* Right Column: JotForm embed (Cols 6-12) */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <div className="rounded-[2rem] border border-[#4A4335]/10 bg-[#FAF8F5] p-4 md:p-6 shadow-sm">
              <div className="mb-4 px-2 md:px-3">
                <h3 className="font-serif italic text-2xl sm:text-3xl text-[#4A4335] mb-2">
                  Send us a message
                </h3>
                <p className="text-xs sm:text-sm text-[#5A5346] leading-relaxed">
                  This form is HIPAA-compliant — your information is encrypted and delivered securely to our team.
                </p>
              </div>
              <div className="overflow-hidden rounded-2xl bg-white">
                <JotFormEmbed />
              </div>

              <div className="mt-6 rounded-2xl border border-[#4A4335]/10 bg-[#EAE5D9]/50 px-5 py-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#8C6C58] mb-1">
                  A Note on Privacy
                </p>
                <p className="text-xs sm:text-sm text-[#5A5346] leading-relaxed">
                  For anything sensitive, please use the secure form above or the patient portal — avoid sending protected health information (PHI) by regular email or voicemail.
                </p>
                <div className="mt-3">
                  <Link
                    href="/new-patients"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#4A4335] hover:text-[#8C6C58] transition-colors"
                  >
                    New patient? See how to get started →
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
