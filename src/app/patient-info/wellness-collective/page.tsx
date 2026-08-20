import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, MapPin, Newspaper, Users, Mail } from "lucide-react";
import { CLASS_SIGNUP_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "The Wellness Collective",
};

const WELLNESS_COLLECTIVE_URL =
  "https://www.wellnesscollectivevt.com/bethany-cook";

export default function WellnessCollectivePage() {
  return (
    <section className="bg-[#FAF8F5] px-4 pt-32 pb-20 sm:px-6 sm:pt-36 lg:px-8 lg:pb-28 border-t border-[#1F2E4C]/5">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#3AA5A0] mb-3">
            Our Partner Space
          </p>
          <h1 className="font-serif italic text-3xl sm:text-4xl md:text-5xl text-[#1F2E4C] mb-4">
            The Wellness Collective
          </h1>
          <p className="mt-3 text-sm sm:text-base text-[#3D4A66] font-sans tracking-wide max-w-2xl mx-auto">
            Bethany partners with The Wellness Collective in Colchester, VT for in-person gatherings, monthly meet-and-greets, and community wellness education.
          </p>
        </div>

        {/* Featured link card */}
        <a
          href={WELLNESS_COLLECTIVE_URL}
          target="_blank"
          rel="noreferrer"
          className="group block mb-12 rounded-3xl border border-[#1F2E4C]/10 bg-white p-6 md:p-8 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
        >
          <div className="flex items-start gap-4">
            <div className="flex shrink-0 w-12 h-12 rounded-full bg-[#EAE5D9] border border-[#1F2E4C]/10 items-center justify-center text-[#3AA5A0]">
              <ArrowUpRight className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-[#3AA5A0]">
                Featured Provider
              </p>
              <h2 className="font-serif italic text-xl md:text-2xl text-[#1F2E4C] font-semibold mt-1">
                Bethany Cook, WHNP-BC, CNM — on The Wellness Collective
              </h2>
              <p className="text-sm text-[#3D4A66] leading-relaxed mt-2">
                View Bethany&apos;s provider page on The Wellness Collective site.
              </p>
              <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-[#1F2E4C] group-hover:text-[#3AA5A0] transition-colors">
                wellnesscollectivevt.com/bethany-cook →
              </p>
            </div>
          </div>
        </a>

        {/* Announcements grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
          <div className="rounded-2xl border border-[#1F2E4C]/10 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <div className="flex shrink-0 w-10 h-10 rounded-full bg-[#EAE5D9] border border-[#1F2E4C]/10 items-center justify-center text-[#3AA5A0]">
                <Newspaper className="w-5 h-5" />
              </div>
              <h3 className="font-serif italic text-lg md:text-xl text-[#1F2E4C] font-semibold">
                Monthly Newsletters
              </h3>
            </div>
            <p className="text-sm text-[#3D4A66] leading-relaxed">
              Bethany posts a monthly wellness newsletter — practical, evidence-based reading on midlife, hormones, and women&apos;s health.
            </p>
          </div>

          <div className="rounded-2xl border border-[#1F2E4C]/10 bg-white p-6 shadow-sm flex flex-col">
            <div className="flex items-center gap-3 mb-3">
              <div className="flex shrink-0 w-10 h-10 rounded-full bg-[#EAE5D9] border border-[#1F2E4C]/10 items-center justify-center text-[#3AA5A0]">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="font-serif italic text-lg md:text-xl text-[#1F2E4C] font-semibold">
                Monthly Meet-and-Greets
              </h3>
            </div>
            <p className="text-sm text-[#3D4A66] leading-relaxed">
              Bethany hosts monthly meet-and-greets at The Wellness Collective — come by, ask questions, and get to know her practice in person. Classes are held once a month on Saturdays.
            </p>

            {/* Class signup link */}
            <a
              href={CLASS_SIGNUP_URL}
              target="_blank"
              rel="noreferrer"
              className="group mt-5 pt-5 border-t border-[#1F2E4C]/10 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-[#1F2E4C] hover:text-[#3AA5A0] transition-colors"
            >
              Sign up for a class
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
            </a>
          </div>
        </div>

        {/* Address */}
        <div className="rounded-3xl border border-[#1F2E4C]/10 bg-[#EAE5D9]/40 p-6 md:p-8 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="flex shrink-0 w-12 h-12 rounded-full bg-[#FAF8F5] border border-[#1F2E4C]/10 items-center justify-center text-[#3AA5A0]">
              <MapPin className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <p className="text-xs font-semibold text-[#3AA5A0] uppercase tracking-wider">
                Location
              </p>
              <h3 className="font-serif italic text-lg md:text-xl text-[#1F2E4C] font-semibold mt-1 mb-2">
                The Wellness Collective
              </h3>
              <p className="text-sm text-[#3D4A66] leading-relaxed">
                875 Roosevelt Highway, Suite 120
                <br />
                Colchester, VT 05446
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-3">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=875+Roosevelt+Highway+Suite+120+Colchester+VT+05446"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full bg-[#1F2E4C] text-[#FAF8F5] px-4 py-2 text-xs font-semibold uppercase tracking-wider shadow-sm transition-all duration-300 hover:bg-[#3D4A66]"
                >
                  <MapPin className="w-3.5 h-3.5" aria-hidden />
                  Directions
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#1F2E4C] hover:text-[#3AA5A0] transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" aria-hidden />
                  Get in touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
