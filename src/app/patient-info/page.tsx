import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Users } from "lucide-react";
import { CLASS_SIGNUP_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Patient Info",
};

const links = [
  {
    href: "/patient-info/wellness-collective",
    title: "The Wellness Collective",
    desc: "Our partner space for in-person gatherings and group education in Colchester, VT.",
  },
  {
    href: "/patient-info/forms",
    title: "Forms",
    desc: "Intake paperwork, consent forms, and other documents you may need before your visit.",
  },
  {
    href: "/patient-info/patient-resources",
    title: "Patient Resources",
    desc: "Educational guides, recommended reading, and tools to support your wellness journey.",
  },
  {
    href: "/patient-info/newsletters",
    title: "Newsletters",
    desc: "Bethany's wellness newsletters — practical reading on midlife, hormones, and women's health.",
  },
  {
    href: "/patient-info/videos",
    title: "Videos",
    desc: "Short educational videos from Bethany on the topics we cover most in clinic. Coming soon.",
  },
  {
    href: "/patient-info/patient-portal",
    title: "Patient Portal",
    desc: "Sign in to your account, manage appointments, and access your records.",
  },
];

export default function PatientInfoPage() {
  return (
    <section className="bg-[#FAF8F5] px-4 pt-32 pb-20 sm:px-6 sm:pt-36 lg:px-8 lg:pb-28 border-t border-[#1F2E4C]/5">
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h1 className="font-serif italic text-3xl sm:text-4xl md:text-5xl text-[#1F2E4C] mb-4">
            Patient Info
          </h1>
          <p className="mt-3 text-sm sm:text-base text-[#3D4A66] font-sans tracking-wide max-w-2xl mx-auto">
            Helpful information and resources for new and current patients.
          </p>
        </div>

        {/* Class scheduling — Wellness Collective JotForm */}
        <a
          href={CLASS_SIGNUP_URL}
          target="_blank"
          rel="noreferrer"
          className="group mb-8 flex items-center justify-between gap-4 rounded-3xl border border-[#1F2E4C]/10 bg-white p-6 md:p-8 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
        >
          <div className="flex flex-col md:flex-row items-center gap-5 md:gap-6 text-center md:text-left">
            <div className="flex shrink-0 w-14 h-14 rounded-full bg-[#EAE5D9] border border-[#1F2E4C]/10 items-center justify-center text-[#3AA5A0]">
              <Users className="w-7 h-7" aria-hidden />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-[#EAE5D9] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#3AA5A0]">
                Class Signup
              </div>
              <h2 className="mt-2 font-serif italic text-2xl sm:text-3xl text-[#1F2E4C]">
                Sign up for a class
              </h2>
              <p className="mt-2 text-sm sm:text-base text-[#3D4A66] leading-relaxed">
                Reserve a spot at one of Bethany&apos;s monthly classes, gatherings, or meet-and-greets at The Wellness Collective. Classes are held once a month on Saturdays.
              </p>
            </div>
          </div>
          <ArrowUpRight className="w-6 h-6 shrink-0 text-[#1F2E4C] group-hover:text-[#3AA5A0] transition-colors" aria-hidden />
        </a>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group flex flex-col bg-white border border-[#1F2E4C]/10 rounded-2xl p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
            >
              <h2 className="font-serif text-lg md:text-xl font-semibold text-[#1F2E4C] mb-2">
                {link.title}
              </h2>
              <p className="text-sm text-[#3D4A66]/80 leading-relaxed font-sans mb-4 flex-1">
                {link.desc}
              </p>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#3AA5A0] group-hover:text-[#1F2E4C] transition-colors">
                Learn more
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
