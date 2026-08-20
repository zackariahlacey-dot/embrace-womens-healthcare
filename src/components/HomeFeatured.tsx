"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, UserPlus, HeartHandshake, LogIn } from "lucide-react";

import { clinicalFocusAreas } from "@/lib/clinical-focus";

const PORTAL_PENDING_MESSAGE = "Patient Portal launches October 2026";

export function HomeFeatured() {
  return (
    <>
      {/* What we offer */}
      <section className="bg-[#FAF8F5] px-4 pt-20 pb-16 sm:px-6 sm:pt-24 lg:px-8 lg:pb-24 border-t border-[#1F2E4C]/10">
        <div className="mx-auto max-w-6xl">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-serif italic text-3xl sm:text-4xl md:text-5xl text-[#1F2E4C]">
              What we offer
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#3D4A66] font-sans tracking-wide max-w-2xl mx-auto">
              Focused, evidence-based care for the chapters women too often face alone
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {clinicalFocusAreas.map((area, i) => (
              <motion.article
                key={area.slug}
                className="group flex flex-col overflow-hidden rounded-2xl bg-white border border-[#1F2E4C]/10 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={area.image}
                    alt={area.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5 text-left">
                  <h3 className="font-serif text-base md:text-lg font-semibold text-[#1F2E4C] mb-2 leading-snug">
                    {area.title}
                  </h3>
                  <p className="text-sm text-[#3D4A66] leading-relaxed font-sans mb-4 flex-1">
                    {area.headline}
                  </p>
                  <Link
                    href={`/services/clinical-focus-areas#${area.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#3AA5A0] hover:text-[#1F2E4C] transition-colors"
                  >
                    Learn more
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-full border border-[#1F2E4C] text-[#1F2E4C] px-7 py-3 text-xs font-semibold tracking-wide transition-all duration-300 hover:bg-[#1F2E4C]/5"
            >
              See all services
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* How it works preview */}
      <section className="bg-[#EAE5D9] px-4 pt-20 pb-16 sm:px-6 sm:pt-24 lg:px-8 lg:pb-24 border-t border-[#1F2E4C]/15">
        <div className="mx-auto max-w-5xl">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-serif italic text-3xl sm:text-4xl md:text-5xl text-[#1F2E4C]">
              How it works
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#3D4A66] font-sans tracking-wide">
              Simplifying your journey toward supportive, accessible healthcare
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              className="flex gap-4 bg-[#FAF8F5] rounded-2xl border border-[#1F2E4C]/10 p-6 shadow-sm"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <div className="flex shrink-0 w-10 h-10 rounded-full bg-[#EAE5D9] border border-[#1F2E4C]/10 items-center justify-center text-[#1F2E4C]">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif italic text-xl md:text-2xl text-[#1F2E4C] font-semibold mb-2">
                  Schedule Your Visit
                </h3>
                <p className="text-sm text-[#3D4A66] leading-relaxed font-sans">
                  Call us or fill out our contact form and a team member will follow up with you. Established patients may request appointments through the patient portal.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <Link
                href="/patient-info/wellness-collective"
                className="group flex gap-4 bg-[#FAF8F5] rounded-2xl border border-[#1F2E4C]/10 p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 hover:border-[#1F2E4C]/20"
              >
                <div className="flex shrink-0 w-10 h-10 rounded-full bg-[#EAE5D9] border border-[#1F2E4C]/10 items-center justify-center text-[#1F2E4C]">
                  <UserPlus className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif italic text-xl md:text-2xl text-[#1F2E4C] font-semibold mb-2 inline-flex items-center gap-1.5 group-hover:text-[#3AA5A0] transition-colors">
                    Embrace Wellness
                    <ArrowRight className="w-4 h-4 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                  </h3>
                  <p className="text-sm text-[#3D4A66] leading-relaxed font-sans">
                    Monthly gatherings via Zoom or in person at the Wellness Collective in Colchester — anatomy and physiology, lifestyle recommendations, and the root causes of key women&apos;s health issues.
                  </p>
                </div>
              </Link>
            </motion.div>
          </div>

          <div className="mt-10 flex justify-center">
            <Link
              href="/how-it-works"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#1F2E4C] hover:text-[#3AA5A0] transition-colors"
            >
              See the full process
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Fee Schedule callout */}
      <section className="bg-[#FAF8F5] px-4 pt-20 pb-16 sm:px-6 sm:pt-24 lg:px-8 lg:pb-24 border-t border-[#1F2E4C]/10">
        <div className="mx-auto max-w-5xl">
          <motion.div
            className="bg-white border border-[#1F2E4C]/10 rounded-[2rem] p-8 md:p-12 shadow-sm flex flex-col md:flex-row md:items-center gap-8"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex shrink-0 w-14 h-14 rounded-full bg-[#EAE5D9] border border-[#1F2E4C]/10 items-center justify-center text-[#3AA5A0]">
              <HeartHandshake className="w-7 h-7" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="font-serif italic text-2xl sm:text-3xl text-[#1F2E4C] mb-2">
                Transparent, upfront pricing
              </h2>
              <p className="text-sm sm:text-base text-[#3D4A66] leading-relaxed font-sans">
                We are upfront about patient out-of-pocket costs. What you see on our fee schedule is what you pay — no hidden fees, no surprise billing.
              </p>
            </div>
            <Link
              href="/fee-schedule"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1F2E4C] text-[#FAF8F5] px-6 py-3 text-xs font-semibold tracking-wide shadow-sm transition-all duration-300 hover:bg-[#3D4A66] hover:shadow whitespace-nowrap"
            >
              View fee schedule
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#EAE5D9] px-4 pt-20 pb-24 sm:px-6 sm:pt-24 lg:px-8 lg:pb-28 border-t border-[#1F2E4C]/15">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-serif italic text-3xl sm:text-4xl md:text-5xl text-[#1F2E4C] mb-4">
            Ready to feel like you again?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#3D4A66] font-sans tracking-wide mb-8">
            New here? Start with a new-patient appointment. Established patients will be able to log into the portal to schedule once it launches October 2026.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/new-patients"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#1F2E4C] text-[#FAF8F5] px-8 py-3.5 text-sm font-semibold tracking-wide shadow-md transition-all duration-300 hover:bg-[#3D4A66] hover:-translate-y-0.5"
            >
              <UserPlus className="w-4 h-4" />
              New Patient
            </Link>
            <button
              type="button"
              disabled
              aria-disabled="true"
              title={PORTAL_PENDING_MESSAGE}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-[#1F2E4C]/40 text-[#1F2E4C]/50 px-8 py-3.5 text-sm font-semibold tracking-wide cursor-not-allowed"
            >
              <LogIn className="w-4 h-4" />
              Patient Portal · Coming Oct 2026
            </button>
          </div>
          <p className="mt-5 text-xs text-[#3D4A66]/80 font-sans">
            Prefer to talk to someone? Call <a href="tel:8027359779" className="underline hover:text-[#1F2E4C]">802-735-9779</a>.
          </p>
        </motion.div>
      </section>
    </>
  );
}
