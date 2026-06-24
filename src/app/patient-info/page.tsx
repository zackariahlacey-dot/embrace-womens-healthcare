import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

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
    desc: "Short educational videos from Bethany on the topics we cover most in clinic. Launching July.",
  },
  {
    href: "/patient-info/patient-portal",
    title: "Patient Portal",
    desc: "Sign in to your account, manage appointments, and access your records.",
  },
];

export default function PatientInfoPage() {
  return (
    <section className="bg-[#FAF8F5] px-4 pt-32 pb-20 sm:px-6 sm:pt-36 lg:px-8 lg:pb-28 border-t border-[#4A4335]/5">
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h1 className="font-serif italic text-3xl sm:text-4xl md:text-5xl text-[#4A4335] mb-4">
            Patient Info
          </h1>
          <p className="mt-3 text-sm sm:text-base text-[#5A5346] font-sans tracking-wide max-w-2xl mx-auto">
            Helpful information and resources for new and current patients.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group flex flex-col bg-white border border-[#4A4335]/10 rounded-2xl p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
            >
              <h2 className="font-serif text-lg md:text-xl font-semibold text-[#4A4335] mb-2">
                {link.title}
              </h2>
              <p className="text-sm text-[#5A5346]/80 leading-relaxed font-sans mb-4 flex-1">
                {link.desc}
              </p>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#8C6C58] group-hover:text-[#4A4335] transition-colors">
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
