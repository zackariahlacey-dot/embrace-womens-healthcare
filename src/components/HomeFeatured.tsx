"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, UserPlus, HeartHandshake } from "lucide-react";

import { clinicalFocusAreas } from "@/lib/clinical-focus";

export function HomeFeatured() {
  return (
    <>
      {/* What we offer */}
      <section className="bg-[#FAF8F5] px-4 pt-20 pb-16 sm:px-6 sm:pt-24 lg:px-8 lg:pb-24 border-t border-[#4A4335]/10">
        <div className="mx-auto max-w-6xl">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-serif italic text-3xl sm:text-4xl md:text-5xl text-[#4A4335]">
              What we offer
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#5A5346] font-sans tracking-wide max-w-2xl mx-auto">
              Focused, evidence-based care for the chapters women too often face alone
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {clinicalFocusAreas.map((area, i) => (
              <motion.article
                key={area.slug}
                className="group flex flex-col overflow-hidden rounded-2xl bg-white border border-[#4A4335]/10 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
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
                  <h3 className="font-serif text-base md:text-lg font-semibold text-[#4A4335] mb-2 leading-snug">
                    {area.title}
                  </h3>
                  <p className="text-sm text-[#5A5346] leading-relaxed font-sans mb-4 flex-1">
                    {area.headline}
                  </p>
                  <Link
                    href={`/services/clinical-focus-areas#${area.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#8C6C58] hover:text-[#4A4335] transition-colors"
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
              className="inline-flex items-center gap-2 rounded-full border border-[#4A4335] text-[#4A4335] px-7 py-3 text-xs font-semibold tracking-wide transition-all duration-300 hover:bg-[#4A4335]/5"
            >
              See all services
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* How it works preview */}
      <section className="bg-[#EAE5D9] px-4 pt-20 pb-16 sm:px-6 sm:pt-24 lg:px-8 lg:pb-24 border-t border-[#4A4335]/15">
        <div className="mx-auto max-w-5xl">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-serif italic text-3xl sm:text-4xl md:text-5xl text-[#4A4335]">
              How it works
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#5A5346] font-sans tracking-wide">
              Simplifying your journey toward supportive, accessible healthcare
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              className="flex gap-4 bg-[#FAF8F5] rounded-2xl border border-[#4A4335]/10 p-6 shadow-sm"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <div className="flex shrink-0 w-10 h-10 rounded-full bg-[#EAE5D9] border border-[#4A4335]/10 items-center justify-center text-[#4A4335]">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif italic text-xl md:text-2xl text-[#4A4335] font-semibold mb-2">
                  Schedule Your Visit
                </h3>
                <p className="text-sm text-[#5A5346] leading-relaxed font-sans">
                  When you are ready, explore our site, create your Optimantra account, and schedule online.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="flex gap-4 bg-[#FAF8F5] rounded-2xl border border-[#4A4335]/10 p-6 shadow-sm"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <div className="flex shrink-0 w-10 h-10 rounded-full bg-[#EAE5D9] border border-[#4A4335]/10 items-center justify-center text-[#4A4335]">
                <UserPlus className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif italic text-xl md:text-2xl text-[#4A4335] font-semibold mb-2">
                  Embrace Wellness
                </h3>
                <p className="text-sm text-[#5A5346] leading-relaxed font-sans">
                  Join our monthly gatherings via Zoom or in person at the Wellness Collective in Colchester.
                </p>
              </div>
            </motion.div>
          </div>

          <div className="mt-10 flex justify-center">
            <Link
              href="/how-it-works"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#4A4335] hover:text-[#8C6C58] transition-colors"
            >
              See the full process
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Sliding scale callout */}
      <section className="bg-[#FAF8F5] px-4 pt-20 pb-16 sm:px-6 sm:pt-24 lg:px-8 lg:pb-24 border-t border-[#4A4335]/10">
        <div className="mx-auto max-w-5xl">
          <motion.div
            className="bg-white border border-[#4A4335]/10 rounded-[2rem] p-8 md:p-12 shadow-sm flex flex-col md:flex-row md:items-center gap-8"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex shrink-0 w-14 h-14 rounded-full bg-[#EAE5D9] border border-[#4A4335]/10 items-center justify-center text-[#8C6C58]">
              <HeartHandshake className="w-7 h-7" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="font-serif italic text-2xl sm:text-3xl text-[#4A4335] mb-2">
                Care that respects your budget
              </h2>
              <p className="text-sm sm:text-base text-[#5A5346] leading-relaxed font-sans">
                Our sliding scale model ensures you receive thoughtful, dedicated, and highly personalized care that respects your financial realities.
              </p>
            </div>
            <Link
              href="/sliding-scale"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#4A4335] text-[#FAF8F5] px-6 py-3 text-xs font-semibold tracking-wide shadow-sm transition-all duration-300 hover:bg-[#5A5346] hover:shadow whitespace-nowrap"
            >
              Learn more
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#EAE5D9] px-4 pt-20 pb-24 sm:px-6 sm:pt-24 lg:px-8 lg:pb-28 border-t border-[#4A4335]/15">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-serif italic text-3xl sm:text-4xl md:text-5xl text-[#4A4335] mb-4">
            Ready to feel like you again?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#5A5346] font-sans tracking-wide mb-8">
            Reach out to coordinate care, ask a question, or register for our wellness gatherings. We&apos;re accepting new patients starting September 1, 2026.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#4A4335] text-[#FAF8F5] px-8 py-3.5 text-sm font-semibold tracking-wide shadow-md transition-all duration-300 hover:bg-[#5A5346] hover:-translate-y-0.5"
            >
              Contact Us
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:8027359779"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-full border border-[#4A4335] text-[#4A4335] px-8 py-3.5 text-sm font-semibold tracking-wide transition-all duration-300 hover:bg-[#4A4335]/5"
            >
              Call 802-735-9779
            </a>
          </div>
        </motion.div>
      </section>
    </>
  );
}
