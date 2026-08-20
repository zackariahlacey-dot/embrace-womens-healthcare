import type { Metadata } from "next";
import Link from "next/link";
import { CalendarClock, Phone, Mail } from "lucide-react";
import { LAUNCH_DATE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Patient Portal",
};

export default function PatientPortalPage() {
  return (
    <section className="bg-[#FAF8F5] px-4 pt-32 pb-20 sm:px-6 sm:pt-36 lg:px-8 lg:pb-28 border-t border-[#1F2E4C]/5">
      <div className="mx-auto max-w-3xl">
        <div className="text-center mb-10">
          <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#3AA5A0] mb-3">
            Coming {LAUNCH_DATE}
          </p>
          <h1 className="font-serif italic text-3xl sm:text-4xl md:text-5xl text-[#1F2E4C] mb-4">
            Patient Portal
          </h1>
          <p className="mt-3 text-sm sm:text-base text-[#3D4A66] font-sans tracking-wide max-w-2xl mx-auto leading-relaxed">
            Our new patient portal launches with the practice on {LAUNCH_DATE}. Established patients will use it to schedule visits, message our team, and access records.
          </p>
        </div>

        {/* Coming-soon card */}
        <div className="mb-8 rounded-3xl border border-[#3AA5A0]/30 bg-[#3AA5A0]/10 p-6 md:p-8 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="flex shrink-0 w-12 h-12 rounded-full bg-white border border-[#1F2E4C]/10 items-center justify-center text-[#3AA5A0]">
              <CalendarClock className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-[#3AA5A0]">
                Launch Date
              </p>
              <h2 className="font-serif italic text-xl md:text-2xl text-[#1F2E4C] font-semibold mt-1">
                Portal opens {LAUNCH_DATE}
              </h2>
              <p className="text-sm text-[#3D4A66] leading-relaxed mt-2">
                Once your first appointment is scheduled, you&apos;ll receive login information for the portal. In the meantime, please use the options below to reach us.
              </p>
            </div>
          </div>
        </div>

        {/* Meanwhile: call or contact form */}
        <div className="rounded-2xl border border-[#1F2E4C]/10 bg-white p-5 sm:p-6 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#3AA5A0] mb-3">
            In the meantime
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-[#1F2E4C]">
            <a
              href="tel:8027359779"
              className="inline-flex items-center gap-1.5 font-semibold hover:text-[#3AA5A0] transition-colors"
            >
              <Phone className="w-4 h-4" />
              Call 802-735-9779
            </a>
            <Link
              href="/contact#contact"
              className="inline-flex items-center gap-1.5 font-semibold hover:text-[#3AA5A0] transition-colors"
            >
              <Mail className="w-4 h-4" />
              Send us a message
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
