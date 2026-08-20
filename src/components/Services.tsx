"use client";

import Image from "next/image";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

import { clinicalFocusAreas } from "@/lib/clinical-focus";

interface BulletService {
  text?: string;
  flag?: string;
  flagAlt?: string;
}

const bulletServices: BulletService[] = [
  { text: "Symptom management for menopause and perimenopause" },
  { text: "Hormone Replacement Therapy" },
  { text: "Family Planning" },
  { text: "Primary Care Coordination" },
  { text: "Sexual Wellness" },
  { flag: "/lgbtqia-friendly-womens-health-practice.png", flagAlt: "Pride flag — LGBTQIA+ friendly practice" },
  { text: "Lifestyle education: Stress management, Physical activity, Sexual Wellness, Bone health, Sleep hygiene, Vitamin and Supplements" },
  { text: "Cancer Screenings" },
  { text: "Thyroid Management" },
  { text: "Chronic Pelvic Pain" },
  { text: "Treatment of acute infections including UTI and vaginal infections" },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-[#EAE5D9] px-4 pt-32 pb-20 sm:px-6 sm:pt-36 lg:px-8 lg:pb-28 scroll-mt-20 border-t border-[#1F2E4C]/15"
    >
      <motion.div
        className="mx-auto max-w-6xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
      >
        {/* Section Title */}
        <div className="text-center mb-10">
          <h2 className="font-serif italic text-3xl sm:text-4xl md:text-5xl text-[#1F2E4C]">
            Services Provided
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#3D4A66] font-sans tracking-wide">
            Compassionate, evidence-based wellness care tailored to your unique biology
          </p>
        </div>

        {/* Scope of practice notice */}
        <div className="mx-auto max-w-3xl mb-14 rounded-2xl border-l-4 border-[#3AA5A0] bg-[#FAF8F5]/80 px-5 py-4 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#3AA5A0] mb-1">
            Please note
          </p>
          <p className="text-sm text-[#1F2E4C] leading-relaxed">
            We do not provide prenatal or childbirth services.
          </p>
        </div>

        {/* Care Options & outdoor yoga image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-serif italic text-xl md:text-2xl text-[#1F2E4C] font-semibold border-b border-[#1F2E4C]/15 pb-3">
              Care Options & Clinical Offerings
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-1 gap-3.5">
              {bulletServices.map((bullet, i) => (
                <li key={bullet.text ?? `flag-${i}`} className="flex items-start gap-3.5 text-[#3D4A66] text-sm md:text-base leading-relaxed">
                  <span className="flex shrink-0 w-6 h-6 rounded-full bg-[#FAF8F5] border border-[#1F2E4C]/10 items-center justify-center text-[#3AA5A0] mt-0.5 shadow-sm">
                    <Check className="w-3.5 h-3.5" strokeWidth={2.5} />
                  </span>
                  <span className="inline-flex items-center gap-2 flex-wrap">
                    {bullet.text && <span>{bullet.text}</span>}
                    {bullet.flag && (
                      <Image
                        src={bullet.flag}
                        alt={bullet.flagAlt ?? "Pride flag"}
                        width={40}
                        height={26}
                        className="inline-block h-6 w-auto rounded-sm shadow-sm border border-[#1F2E4C]/10"
                      />
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[360px] aspect-[4/5] overflow-hidden rounded-2xl border-4 border-[#FAF8F5] shadow-lg bg-white group">
              <Image
                src="/womens-wellness-outdoor-yoga-vermont.jpg"
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
          <h3 className="font-serif italic text-2xl md:text-3xl text-[#1F2E4C] mb-2">
            Clinical Focus Areas
          </h3>
          <p className="mt-3 text-sm sm:text-base text-[#3D4A66] font-sans tracking-wide">
            In-depth clinical details on the focus areas we treat most often
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {clinicalFocusAreas.map((item) => (
            <article
              key={item.slug}
              className="group flex flex-col overflow-hidden rounded-2xl bg-[#FAF8F5] border border-[#1F2E4C]/10 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex flex-1 flex-col items-center p-6 text-center sm:p-8">
                <h4 className="font-serif text-lg md:text-xl font-semibold text-[#1F2E4C] mb-2">
                  {item.title}
                </h4>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#3AA5A0] mb-3">
                  {item.headline}
                </p>
                <p className="text-sm text-[#3D4A66] flex-1 leading-relaxed">
                  {item.solution}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/services/clinical-focus-areas"
            className="inline-flex items-center gap-2 rounded-full bg-[#1F2E4C] text-[#FAF8F5] px-6 py-3 text-xs font-semibold tracking-wide shadow-sm transition-all duration-300 hover:bg-[#3D4A66] hover:shadow"
          >
            See full clinical focus areas
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
