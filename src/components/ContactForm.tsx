"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, MapPin, Globe, CalendarClock, Clock, Users, ArrowUpRight } from "lucide-react";
import { CLASS_SIGNUP_URL, LAUNCH_DATE, SCHEDULING_OPENS } from "@/lib/constants";
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
      className="bg-[#EAE5D9] px-4 pt-32 pb-20 sm:px-6 sm:pt-36 lg:px-8 lg:pb-28 scroll-mt-24 border-t border-[#1F2E4C]/15"
    >
      <div className="mx-auto max-w-6xl">
        {/* New Patients Announcement Banner */}
        <motion.div
          className="mb-8 rounded-2xl border border-[#3AA5A0]/30 bg-[#3AA5A0]/10 px-6 py-5 text-center shadow-sm sm:mb-10 sm:px-8 sm:py-6"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-[#3AA5A0]">
            Now Welcoming New Patients
          </p>
          <p className="mt-2 font-serif italic text-xl sm:text-2xl md:text-3xl text-[#1F2E4C]">
            Bethany starts seeing new patients on {LAUNCH_DATE}
          </p>
          <p className="mt-2 text-xs sm:text-sm text-[#3D4A66]">
            Scheduling opens {SCHEDULING_OPENS}
          </p>
        </motion.div>

        {/* Wellness Collective class signup */}
        <motion.a
          href={CLASS_SIGNUP_URL}
          target="_blank"
          rel="noreferrer"
          className="group mb-12 flex items-center justify-between gap-4 rounded-2xl border border-[#1F2E4C]/10 bg-[#FAF8F5] px-5 py-4 sm:px-6 sm:py-5 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <div className="flex items-center gap-4">
            <div className="flex shrink-0 w-11 h-11 rounded-full bg-[#EAE5D9] border border-[#1F2E4C]/10 items-center justify-center text-[#3AA5A0]">
              <Users className="w-5 h-5" aria-hidden />
            </div>
            <div className="text-left">
              <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-[#3AA5A0]">
                The Wellness Collective
              </p>
              <p className="mt-1 font-serif italic text-lg sm:text-xl text-[#1F2E4C]">
                Sign up for a class
              </p>
              <p className="mt-1 text-xs sm:text-sm text-[#3D4A66]">
                Classes are held once a month on Saturdays.
              </p>
            </div>
          </div>
          <ArrowUpRight className="w-5 h-5 text-[#1F2E4C] group-hover:text-[#3AA5A0] transition-colors" aria-hidden />
        </motion.a>

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
              <h2 className="font-serif italic text-3xl sm:text-4xl md:text-5xl text-[#1F2E4C] mb-4">
                Contact Us
              </h2>
              <p className="text-sm sm:text-base text-[#3D4A66] leading-relaxed font-sans">
                We would love to hear from you. Use the secure HIPAA-compliant form to reach out, or contact us using any of the options below.
              </p>
            </div>

            <div className="space-y-4">
              {/* Web Domain */}
              <div className="flex items-center gap-4 bg-[#FAF8F5]/65 border border-[#1F2E4C]/10 rounded-2xl p-4 shadow-sm backdrop-blur-sm">
                <div className="flex shrink-0 w-10 h-10 rounded-full bg-[#FAF8F5] border border-[#1F2E4C]/10 items-center justify-center text-[#3AA5A0]">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#3AA5A0] uppercase tracking-wider">
                    Website
                  </p>
                  <p className="text-sm font-semibold text-[#1F2E4C]">
                    embracewomenshealthcare.com
                  </p>
                </div>
              </div>

              {/* Appointments */}
              <div className="flex items-center gap-4 bg-[#FAF8F5]/65 border border-[#1F2E4C]/10 rounded-2xl p-4 shadow-sm backdrop-blur-sm">
                <div className="flex shrink-0 w-10 h-10 rounded-full bg-[#FAF8F5] border border-[#1F2E4C]/10 items-center justify-center text-[#3AA5A0]">
                  <CalendarClock className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#3AA5A0] uppercase tracking-wider">
                    Appointments
                  </p>
                  <p className="text-sm font-semibold text-[#1F2E4C]">
                    Telehealth available
                  </p>
                  <p className="text-xs text-[#3D4A66] leading-snug mt-0.5">
                    Scheduling opens {SCHEDULING_OPENS}
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4 bg-[#FAF8F5]/65 border border-[#1F2E4C]/10 rounded-2xl p-4 shadow-sm backdrop-blur-sm">
                <div className="flex shrink-0 w-10 h-10 rounded-full bg-[#FAF8F5] border border-[#1F2E4C]/10 items-center justify-center text-[#3AA5A0]">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-semibold text-[#3AA5A0] uppercase tracking-wider mb-1.5">
                    Provider Hours (Bethany, NP)
                  </p>
                  <ul className="space-y-1">
                    {providerHours.map((row) => (
                      <li key={row.day} className="flex items-baseline justify-between gap-3 text-xs sm:text-sm text-[#3D4A66]">
                        <span className="font-semibold text-[#1F2E4C]">{row.day}</span>
                        <span>{row.hours}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4 bg-[#FAF8F5]/65 border border-[#1F2E4C]/10 rounded-2xl p-4 shadow-sm backdrop-blur-sm">
                <div className="flex shrink-0 w-10 h-10 rounded-full bg-[#FAF8F5] border border-[#1F2E4C]/10 items-center justify-center text-[#3AA5A0]">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#3AA5A0] uppercase tracking-wider">
                    Phone
                  </p>
                  <a
                    href="tel:8027359779"
                    className="text-sm font-semibold text-[#1F2E4C] hover:text-[#3AA5A0] transition-colors"
                  >
                    802-735-9779
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4 bg-[#FAF8F5]/65 border border-[#1F2E4C]/10 rounded-2xl p-4 shadow-sm backdrop-blur-sm">
                <div className="flex shrink-0 w-10 h-10 rounded-full bg-[#FAF8F5] border border-[#1F2E4C]/10 items-center justify-center text-[#3AA5A0]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#3AA5A0] uppercase tracking-wider">
                    The Wellness Collective
                  </p>
                  <p className="text-xs text-[#3D4A66] leading-snug">
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
            <div className="rounded-[2rem] border border-[#1F2E4C]/10 bg-[#FAF8F5] p-4 md:p-6 shadow-sm">
              <div className="mb-4 px-2 md:px-3">
                <h3 className="font-serif italic text-2xl sm:text-3xl text-[#1F2E4C] mb-2">
                  Send us a message
                </h3>
                <p className="text-xs sm:text-sm text-[#3D4A66] leading-relaxed">
                  This form is HIPAA-compliant — your information is encrypted and delivered securely to our team.
                </p>
              </div>
              <div className="overflow-hidden rounded-2xl bg-white">
                <JotFormEmbed />
              </div>

              <div className="mt-6 rounded-2xl border border-[#1F2E4C]/10 bg-[#EAE5D9]/50 px-5 py-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#3AA5A0] mb-1">
                  A Note on Privacy
                </p>
                <p className="text-xs sm:text-sm text-[#3D4A66] leading-relaxed">
                  For anything sensitive, please use the secure form above or the patient portal — avoid sending protected health information (PHI) by regular email or voicemail.
                </p>
                <div className="mt-3">
                  <Link
                    href="/new-patients"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#1F2E4C] hover:text-[#3AA5A0] transition-colors"
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
