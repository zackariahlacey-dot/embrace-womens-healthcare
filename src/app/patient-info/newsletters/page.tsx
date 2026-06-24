import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Newsletters",
  description:
    "Newsletters from Bethany Cook at Embrace Women's Healthcare — practical, grounded reading on midlife transition, hormone health, and women's wellness in Vermont.",
};

export default function NewslettersPage() {
  return (
    <section className="bg-[#FAF8F5] px-4 pt-32 pb-20 sm:px-6 sm:pt-36 lg:px-8 lg:pb-28 border-t border-[#4A4335]/5">
      <div className="mx-auto max-w-3xl">
        <div className="mb-10">
          <Link
            href="/patient-info"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#8C6C58] hover:text-[#4A4335] transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Patient Info
          </Link>
          <div className="text-center">
            <h1 className="font-serif italic text-3xl sm:text-4xl md:text-5xl text-[#4A4335]">
              Newsletters
            </h1>
            <p className="mt-3 text-sm sm:text-base text-[#5A5346] font-sans tracking-wide">
              Letters from Bethany on midlife, hormones, and the path forward
            </p>
          </div>
        </div>

        <article className="bg-white border border-[#4A4335]/10 rounded-3xl shadow-sm p-6 sm:p-10 md:p-12">
          {/* Issue header */}
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#8C6C58] mb-4">
            <Mail className="w-3.5 h-3.5" />
            Issue No. 1 · A Letter from Bethany
          </div>

          <h2 className="font-serif italic text-2xl sm:text-3xl md:text-4xl text-[#4A4335] mb-8 leading-tight">
            Welcome to Embrace Women&apos;s Healthcare
          </h2>

          <div className="space-y-6 text-sm sm:text-base text-[#5A5346] leading-relaxed font-sans">
            <p>
              Over the past several years, my wife and I have traveled across the United States, learning how people experience healthcare in different communities, all while dreaming of making a home in Vermont. Its strong sense of community, commitment to local farming, and extraordinary natural beauty made it feel like the perfect place. After more than 20 years as healthcare providers — and as patients ourselves at times — we have seen the healthcare system from both sides. That perspective inspired us to create Embrace Women&apos;s Healthcare: a practice designed to offer thoughtful, affordable care and expand access for women in every stage of life.
            </p>

            <p>
              According to the Vermont Department of Health, about 30% of working-age residents are underinsured. Our mission is to help close that gap by offering monthly in-person group education at The Wellness Collective, along with convenient telehealth visits. Women lead full, demanding lives, and making time for your health — and understanding your body — should feel supported, not stressful.
            </p>

            <p>
              Flexible options designed around you. Sliding-scale pricing. (Accepting insurance in the fall.) We combine the latest in evidence-based medicine with innovative therapies to support menopause care in a comprehensive, personalized way. Our goal is to help you feel your best with solutions that align with your lifestyle and priorities. Because every woman&apos;s journey is unique, your care plan should be too. Together, we&apos;ll create a personalized roadmap to support your vitality, confidence, and well-being for the years ahead. With trusted expertise and ongoing support, we&apos;ll be here every step of the way — offering guidance, thoughtful adjustments, and compassionate care to help you thrive through this transformative season of life.
            </p>

            <p>
              We understand this transition deeply — both professionally and personally. In our own home, we are navigating menopause in real time, and we know how disruptive it can feel. Brain fog, fatigue, night sweats, hot flashes, hair loss, low libido, and anxiety can affect every part of daily life. You are not imagining it, and you do not have to manage it alone. The World Health Organization estimates that by 2030, 1.2 billion women worldwide will be in menopause, with 47 million more entering this stage each year.
            </p>

            <p>
              Our vision is to build a community where women feel safe, supported, and truly understood. Here, you can know you are not alone. Together, we can strengthen health and well-being through a wellness model that meets you where you are — and helps you move forward with confidence. Please join us at our monthly gatherings at The Wellness Collective.
            </p>
          </div>

          {/* Sign-off */}
          <div className="mt-10 pt-8 border-t border-[#4A4335]/10">
            <p className="font-serif italic text-base sm:text-lg text-[#8C6C58] leading-relaxed">
              Let&apos;s embrace your strength, balance, and renewal.
            </p>
            <p className="mt-2 text-sm tracking-wide text-[#4A4335] font-sans">
              — Bethany
            </p>
          </div>
        </article>

        <div className="mt-12 text-center">
          <p className="text-sm text-[#5A5346] font-sans">
            More letters on the way. Have a topic you&apos;d like Bethany to write about?{" "}
            <Link
              href="/contact"
              className="font-semibold text-[#8C6C58] hover:text-[#4A4335] transition-colors"
            >
              Let us know
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
