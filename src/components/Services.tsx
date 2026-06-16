"use client";

import Image from "next/image";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

import { clinicalFocusAreas } from "@/lib/clinical-focus";

const bulletServices = [
  "Symptom management for menopause and perimenopause",
  "Hormone Replacement Therapy",
  "Family Planning",
  "Primary Care Coordination",
  "Sexual Wellness",
  "LGBTQ+ friendly",
  "Lifestyle education: Stress management, Physical activity, Sexual Wellness, Bone health, Sleep hygiene, Vitamin and Supplements",
  "Cancer Screenings",
  "Thyroid Management",
  "Chronic Pelvic Pain",
  "Treatment of acute infections including UTI and vaginal infections",
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-[#EAE5D9] px-4 pt-32 pb-20 sm:px-6 sm:pt-36 lg:px-8 lg:pb-28 scroll-mt-20 border-t border-[#4A4335]/15"
    >
      <motion.div
        className="mx-auto max-w-6xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
      >
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="font-serif italic text-3xl sm:text-4xl md:text-5xl text-[#4A4335]">
            Services Provided
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#5A5346] font-sans tracking-wide">
            Compassionate, evidence-based wellness care tailored to your unique biology
          </p>
        </div>

        {/* Care Options & outdoor yoga image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-serif italic text-xl md:text-2xl text-[#4A4335] font-semibold border-b border-[#4A4335]/15 pb-3">
              Care Options & Clinical Offerings
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-1 gap-3.5">
              {bulletServices.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3.5 text-[#5A5346] text-sm md:text-base leading-relaxed">
                  <span className="flex shrink-0 w-6 h-6 rounded-full bg-[#FAF8F5] border border-[#4A4335]/10 items-center justify-center text-[#8C6C58] mt-0.5 shadow-sm">
                    <Check className="w-3.5 h-3.5" strokeWidth={2.5} />
                  </span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[360px] aspect-[4/5] overflow-hidden rounded-2xl border-4 border-[#FAF8F5] shadow-lg bg-white group">
              <Image
                src="/1.jpg"
                alt="Woman relaxing outdoors in a beautiful yoga stretch pose, with fruits and water bottle in the background"
                fill
                sizes="(max-width: 640px) 100vw, 20rem"
                className="object-cover transition-transform duration-500 group-hover:scale-102"
              />
            </div>
          </div>
        </div>

        {/* Clinical Focus Areas — link out to dedicated page */}
        <div className="text-center mb-10">
          <h3 className="font-serif italic text-2xl md:text-3xl text-[#4A4335] mb-2">
            Clinical Focus Areas
          </h3>
          <p className="mt-3 text-sm sm:text-base text-[#5A5346] font-sans tracking-wide">
            In-depth clinical details on the focus areas we treat most often
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {clinicalFocusAreas.map((item) => (
            <article
              key={item.slug}
              className="group flex flex-col overflow-hidden rounded-2xl bg-[#FAF8F5] border border-[#4A4335]/10 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex flex-1 flex-col items-center p-6 text-center sm:p-8">
                <h4 className="font-serif text-lg md:text-xl font-semibold text-[#4A4335] mb-2">
                  {item.title}
                </h4>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#8C6C58] mb-3">
                  {item.headline}
                </p>
                <p className="text-sm text-[#5A5346] flex-1 leading-relaxed">
                  {item.solution}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/services/clinical-focus-areas"
            className="inline-flex items-center gap-2 rounded-full bg-[#4A4335] text-[#FAF8F5] px-6 py-3 text-xs font-semibold tracking-wide shadow-sm transition-all duration-300 hover:bg-[#5A5346] hover:shadow"
          >
            See full clinical focus areas
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
