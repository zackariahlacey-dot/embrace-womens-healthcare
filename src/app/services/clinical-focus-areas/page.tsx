import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { clinicalFocusAreas } from "@/lib/clinical-focus";

export const metadata: Metadata = {
  title: "Clinical Focus Areas",
  description:
    "In-depth clinical details on hormone therapy, vaginal health, nutritional support, and acute telehealth visits at Embrace Women's Healthcare.",
};

export default function ClinicalFocusAreasPage() {
  return (
    <section className="bg-[#FAF8F5] px-4 pt-32 pb-20 sm:px-6 sm:pt-36 lg:px-8 lg:pb-28 border-t border-[#1F2E4C]/5">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#3AA5A0] hover:text-[#1F2E4C] transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Services
          </Link>
          <div className="text-center">
            <h1 className="font-serif italic text-3xl sm:text-4xl md:text-5xl text-[#1F2E4C]">
              Clinical Focus Areas
            </h1>
            <p className="mt-3 text-sm sm:text-base text-[#3D4A66] font-sans tracking-wide">
              In-depth clinical details on the focus areas we treat most often
            </p>
          </div>
        </div>

        <div className="space-y-16 md:space-y-20">
          {clinicalFocusAreas.map((area, idx) => (
            <article
              key={area.slug}
              id={area.slug}
              className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start scroll-mt-32"
            >
              <div
                className={`md:col-span-5 ${idx % 2 === 1 ? "md:order-2" : ""}`}
              >
                <div className="relative w-full aspect-[4/5] overflow-hidden rounded-2xl border-4 border-[#EAE5D9] shadow-[0_10px_30px_rgba(74,67,53,0.15)] bg-white">
                  <Image
                    src={area.image}
                    alt={area.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 24rem"
                    className="object-cover"
                  />
                </div>
              </div>

              <div className={`md:col-span-7 ${idx % 2 === 1 ? "md:order-1" : ""}`}>
                <h2 className="font-serif italic text-2xl sm:text-3xl md:text-4xl text-[#1F2E4C] mb-3">
                  {area.title}
                </h2>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#3AA5A0] mb-4">
                  {area.headline}
                </p>
                <p className="text-sm sm:text-base text-[#3D4A66] leading-relaxed font-sans mb-6">
                  {area.solution}
                </p>

                <dl className="space-y-5 border-t border-[#1F2E4C]/10 pt-6">
                  {area.details.map(({ label, text }) => (
                    <div key={label} className="space-y-1">
                      <dt className="text-xs font-semibold uppercase tracking-wider text-[#1F2E4C]">
                        {label}
                      </dt>
                      <dd className="text-sm sm:text-base text-[#3D4A66] leading-relaxed font-sans">
                        {text}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-20 border-t border-[#1F2E4C]/10 pt-12 text-center">
          <p className="text-sm sm:text-base text-[#3D4A66] mb-6 font-sans leading-relaxed">
            Have questions about whether one of these focus areas is right for you?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-[#1F2E4C] text-[#FAF8F5] px-8 py-3 text-xs font-semibold tracking-wide shadow-sm transition-all duration-300 hover:bg-[#3D4A66] hover:shadow"
          >
            Get in Touch
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
