"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Check, Info } from "lucide-react";

const pricingOptions = [
  {
    title: "Initial Comprehensive Visit",
    duration: "1 hour",
    price: "$150 - $200",
    desc: "A thorough, in-depth evaluation of your medical history, health concerns, and personalized wellness strategy.",
  },
  {
    title: "Follow-Up Visit",
    duration: "30 minutes",
    price: "$75 - $100",
    desc: "Routine monitoring, adjusting care protocols, discussing lab outcomes, and continuous wellness counseling.",
  },
  {
    title: "Acute Visit",
    duration: "15 minutes",
    price: "$25 - $50",
    desc: "Focused assessment for swift relief and prescription plans for unexpected minor ailments or infections.",
  },
];

const policies = [
  "Client selects fee based on visit type",
  "Payment is due at the time of service",
  "Lab orders and prescriptions are sent to your facility of choice and subject to your insurance or private pay",
  "All services provided by telehealth appointment",
  "Receipts available to submit to insurance reimbursement",
];

export default function SlidingScale() {
  return (
    <section
      id="sliding-scale"
      className="bg-[#FAF8F5] px-4 py-20 sm:px-6 lg:px-8 lg:py-28 scroll-mt-20 border-t border-[#4A4335]/5"
    >
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <motion.h2
            className="font-serif italic text-3xl sm:text-4xl md:text-5xl text-[#4A4335]"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Sliding Scale
          </motion.h2>
          <motion.p
            className="mt-3 text-sm sm:text-base text-[#8C6C58] font-serif italic tracking-wide"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            "We believe quality healthcare should be accessible."
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Wording, Pricing Blocks & Policies (Cols 1-7) */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <div>
              <p className="text-base text-[#5A5346] leading-relaxed font-sans mb-6">
                Our sliding scale model ensures you receive thoughtful, dedicated, and highly personalized care at a price point that respects your financial realities.
              </p>
            </div>

            {/* Pricing Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {pricingOptions.map((opt, i) => (
                <motion.div
                  key={opt.title}
                  className="flex flex-col bg-white border border-[#4A4335]/10 rounded-2xl p-5 shadow-sm transition-all duration-300 hover:shadow-md"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#8C6C58] mb-1">
                    {opt.duration}
                  </span>
                  <h3 className="font-serif text-sm font-semibold text-[#4A4335] leading-tight mb-2 h-10 flex items-center">
                    {opt.title}
                  </h3>
                  <div className="font-serif text-lg md:text-xl font-bold text-[#4A4335] mb-2">
                    {opt.price}
                  </div>
                  <p className="text-xs text-[#5A5346]/80 leading-relaxed font-sans mt-auto">
                    {opt.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Policies Checkmarks Card */}
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
            </motion.div>
          </div>

          {/* Right Column: arm chair image (Cols 8-12) */}
          <motion.div
            className="lg:col-span-5 flex justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative w-full max-w-[360px] aspect-[4/5] overflow-hidden rounded-2xl border-4 border-[#EAE5D9] shadow-lg bg-white group">
              <Image
                src="/3.jpg"
                alt="Smiling brunette woman relaxing in an armchair using her smartphone to schedule a telehealth consultation"
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
