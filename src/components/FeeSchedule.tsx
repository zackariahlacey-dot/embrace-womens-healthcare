"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Check, Info, ShieldCheck } from "lucide-react";

interface VisitPrice {
  category: "new" | "established";
  title: string;
  price: string;
  duration: string;
}

const visitPrices: VisitPrice[] = [
  {
    category: "new",
    title: "New Patient Acute Visit",
    price: "$97.20",
    duration: "30-min visit",
  },
  {
    category: "new",
    title: "New Patient Initial Visit",
    price: "$146.80",
    duration: "45-min visit",
  },
  {
    category: "established",
    title: "Established Patient Acute Visit",
    price: "$79.20",
    duration: "15-min visit",
  },
  {
    category: "established",
    title: "Established Patient Follow-up Visit",
    price: "$112.80",
    duration: "30-min visit",
  },
];

const policies = [
  "Payment is due at the time of service through the patient portal",
  "Lab orders and prescriptions are sent to your facility of choice and subject to your insurance or private pay",
  "All services provided by telehealth appointment",
  "Receipts available to submit for insurance reimbursement",
];

export default function FeeSchedule() {
  return (
    <section
      id="fee-schedule"
      className="bg-[#FAF8F5] px-4 pt-32 pb-20 sm:px-6 sm:pt-36 lg:px-8 lg:pb-28 scroll-mt-20 border-t border-[#4A4335]/5"
    >
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <motion.h2
            className="font-serif italic text-3xl sm:text-4xl md:text-5xl text-[#4A4335]"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Fee Schedule
          </motion.h2>
          <motion.p
            className="mt-3 text-sm sm:text-base text-[#5A5346] font-sans tracking-wide max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We are upfront about patient out-of-pocket costs. What you see below is what you pay — no hidden fees, no surprise billing.
          </motion.p>
        </div>

        <motion.div
          className="mx-auto max-w-3xl mb-12 flex items-center gap-3 rounded-2xl border border-[#8C6C58]/25 bg-[#8C6C58]/10 px-5 py-4 shadow-sm"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <ShieldCheck className="w-5 h-5 shrink-0 text-[#8C6C58]" aria-hidden />
          <p className="text-xs sm:text-sm text-[#4A4335] leading-relaxed">
            All services are self-pay. We provide itemized receipts you can submit to your insurance for out-of-network reimbursement.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: Pricing + Policies */}
          <div className="lg:col-span-7 space-y-10 text-left">
            {/* New Patient Visits */}
            <div>
              <div className="flex items-baseline justify-between mb-4 pb-2 border-b border-[#4A4335]/15">
                <h3 className="font-serif italic text-xl md:text-2xl text-[#4A4335] font-semibold">
                  New Patient Visits
                </h3>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#8C6C58]">
                  First-time
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {visitPrices
                  .filter((v) => v.category === "new")
                  .map((visit, i) => (
                    <PriceCard key={visit.title} visit={visit} delay={i * 0.08} />
                  ))}
              </div>
            </div>

            {/* Established Patient Visits */}
            <div>
              <div className="flex items-baseline justify-between mb-4 pb-2 border-b border-[#4A4335]/15">
                <h3 className="font-serif italic text-xl md:text-2xl text-[#4A4335] font-semibold">
                  Established Patient Visits
                </h3>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#8C6C58]">
                  Returning
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {visitPrices
                  .filter((v) => v.category === "established")
                  .map((visit, i) => (
                    <PriceCard key={visit.title} visit={visit} delay={i * 0.08} />
                  ))}
              </div>
            </div>

            {/* Billing Details & Guidelines */}
            <motion.div
              className="bg-[#EAE5D9]/40 border border-[#4A4335]/10 rounded-3xl p-6 md:p-8 shadow-sm space-y-4"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h4 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#4A4335] mb-2">
                <Info className="w-4 h-4 text-[#8C6C58]" />
                Billing Details & Guidelines
              </h4>
              <ul className="space-y-3">
                {policies.map((policy) => (
                  <li key={policy} className="flex items-start gap-3 text-xs sm:text-sm text-[#5A5346]">
                    <span className="flex shrink-0 w-5 h-5 rounded-full bg-[#FAF8F5] border border-[#4A4335]/10 items-center justify-center text-[#8C6C58] mt-0.5 shadow-sm">
                      <Check className="w-3 h-3" />
                    </span>
                    <span className="leading-relaxed">{policy}</span>
                  </li>
                ))}
              </ul>

              {/* Cancellation policy — smaller text below the checkmarks */}
              <div className="mt-4 pt-4 border-t border-[#4A4335]/10 space-y-2 text-[11px] sm:text-xs text-[#5A5346]/90 leading-relaxed">
                <p>
                  <span className="font-semibold text-[#4A4335]">Payment:</span> Must be paid at the time of service through the patient portal.
                </p>
                <p>
                  <span className="font-semibold text-[#4A4335]">Cancellation / No-show fees:</span> Cancellations less than 24 hours before appointment time will be charged $25 for the 1st occurrence, $50 for the 2nd occurrence, and result in termination from the practice on the 3rd occurrence.
                </p>
                <p className="italic">
                  Life happens — if you cannot make your appointment due to an emergency and have a cancellation with less than 24 hours&apos; notice, we respect your time and you will not be charged a no-show fee.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right: Image */}
          <motion.div
            className="lg:col-span-5 flex justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative w-full max-w-[360px] aspect-[4/5] overflow-hidden rounded-2xl border-4 border-[#EAE5D9] shadow-lg bg-white group">
              <Image
                src="/slidingscale.avif"
                alt="Accessible, personalized women's healthcare with transparent, upfront pricing"
                fill
                sizes="(max-width: 640px) 100vw, 20rem"
                className="object-cover transition-transform duration-500 group-hover:scale-102"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function PriceCard({ visit, delay }: { visit: VisitPrice; delay: number }) {
  return (
    <motion.div
      className="flex flex-col bg-white border border-[#4A4335]/10 rounded-2xl p-5 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
    >
      <p className="text-[10px] font-semibold uppercase tracking-wider text-[#8C6C58]">
        {visit.duration}
      </p>
      <h4 className="font-serif text-base md:text-lg font-semibold text-[#4A4335] leading-tight mt-1 mb-3">
        {visit.title}
      </h4>
      <p className="mt-auto font-serif text-2xl md:text-3xl font-semibold text-[#4A4335]">
        {visit.price}
      </p>
    </motion.div>
  );
}
