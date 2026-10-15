import type { Metadata } from "next";
import Link from "next/link";
import { LogIn, Phone, Mail } from "lucide-react";
import { PATIENT_PORTAL_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Patient Portal",
};

export default function PatientPortalPage() {
  return (
    <section className="bg-[#FAF8F5] px-4 pt-32 pb-20 sm:px-6 sm:pt-36 lg:px-8 lg:pb-28 border-t border-[#1F2E4C]/5">
      <div className="mx-auto max-w-3xl">
        <div className="text-center mb-10">
          <h1 className="font-serif italic text-3xl sm:text-4xl md:text-5xl text-[#1F2E4C] mb-4">
            Patient Portal
          </h1>
          <p className="mt-3 text-sm sm:text-base text-[#3D4A66] font-sans tracking-wide max-w-2xl mx-auto leading-relaxed">
            Established patients can sign in to schedule visits, message our team, and manage appointments.
          </p>
        </div>

        {/* Sign-in card */}
        <div className="mb-8 rounded-3xl border border-[#3AA5A0]/30 bg-[#3AA5A0]/10 p-6 md:p-8 shadow-sm text-center">
          <a
            href={PATIENT_PORTAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1F2E4C] text-[#FAF8F5] px-8 py-3.5 text-sm font-semibold tracking-wide shadow-md transition-all duration-300 hover:bg-[#3D4A66] hover:-translate-y-0.5"
          >
            <LogIn className="w-4 h-4" />
            Sign In to Patient Portal
          </a>
          <p className="text-sm text-[#3D4A66] leading-relaxed mt-4">
            If this is your first visit, you&apos;ll receive portal login information after your first appointment is scheduled.
          </p>
        </div>

        {/* New patient: call or contact form */}
        <div className="rounded-2xl border border-[#1F2E4C]/10 bg-white p-5 sm:p-6 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#3AA5A0] mb-3">
            New patient?
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
