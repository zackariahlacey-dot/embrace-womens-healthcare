import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Shield, UserPlus, Phone } from "lucide-react";
import { BOOK_NEW_PATIENT_URL, PATIENT_PORTAL_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Patient Portal",
};

export default function PatientPortalPage() {
  return (
    <section className="bg-[#FAF8F5] px-4 pt-32 pb-20 sm:px-6 sm:pt-36 lg:px-8 lg:pb-28 border-t border-[#4A4335]/5">
      <div className="mx-auto max-w-3xl">
        <div className="text-center mb-10">
          <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#8C6C58] mb-3">
            Powered by Optimantra
          </p>
          <h1 className="font-serif italic text-3xl sm:text-4xl md:text-5xl text-[#4A4335] mb-4">
            Patient Portal
          </h1>
          <p className="mt-3 text-sm sm:text-base text-[#5A5346] font-sans tracking-wide max-w-2xl mx-auto leading-relaxed">
            Established patients can log in to schedule visits, message our team, and access your records.
          </p>
        </div>

        {/* Primary CTA — established patients */}
        <a
          href={PATIENT_PORTAL_URL}
          target="_blank"
          rel="noreferrer"
          className="group block mb-6 rounded-3xl border border-[#4A4335]/10 bg-white p-6 md:p-8 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
        >
          <div className="flex items-center gap-4">
            <div className="flex shrink-0 w-12 h-12 rounded-full bg-[#EAE5D9] border border-[#4A4335]/10 items-center justify-center text-[#8C6C58]">
              <Shield className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-[#8C6C58]">
                Already a Patient
              </p>
              <h2 className="font-serif italic text-xl md:text-2xl text-[#4A4335] font-semibold mt-1">
                Log in to Optimantra
              </h2>
              <p className="text-sm text-[#5A5346] leading-relaxed mt-1">
                Schedule follow-up visits, view your records, and message our team securely.
              </p>
            </div>
            <ArrowUpRight className="w-6 h-6 text-[#4A4335] group-hover:text-[#8C6C58] transition-colors" />
          </div>
        </a>

        {/* Secondary CTA — new patients */}
        <a
          href={BOOK_NEW_PATIENT_URL}
          target="_blank"
          rel="noreferrer"
          className="group block mb-8 rounded-3xl border border-[#4A4335]/10 bg-white p-6 md:p-8 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
        >
          <div className="flex items-center gap-4">
            <div className="flex shrink-0 w-12 h-12 rounded-full bg-[#EAE5D9] border border-[#4A4335]/10 items-center justify-center text-[#8C6C58]">
              <UserPlus className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-[#8C6C58]">
                New Here
              </p>
              <h2 className="font-serif italic text-xl md:text-2xl text-[#4A4335] font-semibold mt-1">
                New patient appointment
              </h2>
              <p className="text-sm text-[#5A5346] leading-relaxed mt-1">
                Schedule your first visit directly through our online portal.
              </p>
            </div>
            <ArrowUpRight className="w-6 h-6 text-[#4A4335] group-hover:text-[#8C6C58] transition-colors" />
          </div>
        </a>

        {/* Alternatives */}
        <div className="rounded-2xl border border-[#8C6C58]/25 bg-[#8C6C58]/10 px-5 py-4 sm:px-6 sm:py-5">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#8C6C58] mb-2">
            Prefer another way?
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-[#4A4335]">
            <a
              href="tel:8027359779"
              className="inline-flex items-center gap-1.5 font-semibold hover:text-[#8C6C58] transition-colors"
            >
              <Phone className="w-4 h-4" />
              Call 802-735-9779
            </a>
            <Link
              href="/new-patients"
              className="inline-flex items-center gap-1.5 font-semibold hover:text-[#8C6C58] transition-colors"
            >
              Fill out the secure form →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
