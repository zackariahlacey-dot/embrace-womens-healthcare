import type { Metadata } from "next";
import Link from "next/link";
import { Phone, ClipboardList, Shield, ArrowRight } from "lucide-react";
import { JotFormEmbed } from "@/components/JotFormEmbed";
import { BOOK_NEW_PATIENT_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "New Patients",
};

export default function NewPatientsPage() {
  return (
    <section className="bg-[#FAF8F5] px-4 pt-32 pb-20 sm:px-6 sm:pt-36 lg:px-8 lg:pb-28 border-t border-[#4A4335]/5">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#8C6C58] mb-3">
            Welcome
          </p>
          <h1 className="font-serif italic text-3xl sm:text-4xl md:text-5xl text-[#4A4335] mb-4">
            New Patients
          </h1>
          <p className="mt-3 text-sm sm:text-base text-[#5A5346] font-sans tracking-wide max-w-2xl mx-auto leading-relaxed">
            Two easy ways to schedule your first appointment — call us directly, or fill out our secure HIPAA-compliant appointment request form below.
          </p>
        </div>

        {/* Two Options: Call vs. Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
          {/* Option 1: Call */}
          <div className="rounded-3xl border border-[#4A4335]/10 bg-white p-6 md:p-7 shadow-sm flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex shrink-0 w-11 h-11 rounded-full bg-[#EAE5D9] border border-[#4A4335]/10 items-center justify-center text-[#8C6C58]">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-[#8C6C58]">
                  Option 1
                </p>
                <h2 className="font-serif italic text-lg md:text-xl text-[#4A4335] font-semibold">
                  Call us to schedule
                </h2>
              </div>
            </div>
            <p className="text-sm text-[#5A5346] leading-relaxed mb-5 flex-1">
              Prefer to talk to a real person? Give us a call and we&apos;ll get you set up with your first appointment.
            </p>
            <a
              href="tel:8027359779"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#4A4335] text-[#FAF8F5] px-5 py-3 text-xs font-semibold uppercase tracking-wider shadow-sm transition-all duration-300 hover:bg-[#5A5346]"
            >
              <Phone className="w-4 h-4" />
              Call 802-735-9779
            </a>
          </div>

          {/* Option 2: Form */}
          <div className="rounded-3xl border border-[#4A4335]/10 bg-white p-6 md:p-7 shadow-sm flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex shrink-0 w-11 h-11 rounded-full bg-[#EAE5D9] border border-[#4A4335]/10 items-center justify-center text-[#8C6C58]">
                <ClipboardList className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-[#8C6C58]">
                  Option 2
                </p>
                <h2 className="font-serif italic text-lg md:text-xl text-[#4A4335] font-semibold">
                  Request via secure form
                </h2>
              </div>
            </div>
            <p className="text-sm text-[#5A5346] leading-relaxed mb-5 flex-1">
              Fill out the HIPAA-compliant appointment request form below and we&apos;ll reach out to schedule your first visit.
            </p>
            <a
              href="#request-form"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#4A4335] text-[#4A4335] px-5 py-3 text-xs font-semibold uppercase tracking-wider transition-all duration-300 hover:bg-[#4A4335]/5"
            >
              Go to form
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* What happens next */}
        <div className="rounded-2xl border border-[#8C6C58]/25 bg-[#8C6C58]/10 px-5 py-4 sm:px-6 sm:py-5 mb-12 flex items-start gap-3">
          <Shield className="w-5 h-5 shrink-0 text-[#8C6C58] mt-0.5" aria-hidden />
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-[#8C6C58] mb-1">
              What happens after you&apos;re scheduled
            </p>
            <p className="text-xs sm:text-sm text-[#4A4335] leading-relaxed">
              Once your first appointment is scheduled, you&apos;ll receive information on how to access our patient portal — that&apos;s where you&apos;ll schedule all future visits, message our team, and view your records.
            </p>
          </div>
        </div>

        {/* Optional: skip the wait — direct scheduling */}
        <div className="mb-14 text-center">
          <p className="text-xs text-[#5A5346]/80 mb-3">
            Ready to book right now? You can also schedule directly online.
          </p>
          <a
            href={BOOK_NEW_PATIENT_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#4A4335] hover:text-[#8C6C58] transition-colors"
          >
            Schedule directly through Optimantra
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* JotForm */}
        <div id="request-form" className="rounded-[2rem] border border-[#4A4335]/10 bg-white p-4 md:p-6 shadow-sm scroll-mt-24">
          <div className="mb-4 px-2 md:px-3">
            <h2 className="font-serif italic text-2xl sm:text-3xl text-[#4A4335] mb-2">
              Appointment Request Form
            </h2>
            <p className="text-xs sm:text-sm text-[#5A5346] leading-relaxed">
              This form is HIPAA-compliant. Your information is encrypted and delivered securely to our team at Embrace Women&apos;s Healthcare.
            </p>
          </div>
          <div className="overflow-hidden rounded-2xl bg-white">
            <JotFormEmbed title="New Patient Appointment Request" />
          </div>
        </div>

        {/* Bottom: link to fee schedule */}
        <div className="mt-12 text-center">
          <p className="text-sm text-[#5A5346] mb-3">
            Curious about pricing before you book?
          </p>
          <Link
            href="/fee-schedule"
            className="inline-flex items-center gap-2 rounded-full border border-[#4A4335] text-[#4A4335] px-6 py-3 text-xs font-semibold uppercase tracking-wider transition-all duration-300 hover:bg-[#4A4335]/5"
          >
            View our fee schedule
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
