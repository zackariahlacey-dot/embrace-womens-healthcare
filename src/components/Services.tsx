"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { smoothScrollTo } from "@/lib/scroll";

const services = [
  {
    title: "Hormone Therapy & Wellness",
    image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=800",
    headline:
      "Feeling unlike yourself? Fatigue, mood swings, or night sweats?",
    solution:
      "We provide personalized Hormone Replacement Therapy (HRT) and wellness planning to help you regain your energy and sense of balance.",
    expandedContent: [
      {
        label: "Why it helps",
        text: "Balances crucial hormone levels that fluctuate during perimenopause and menopause.",
      },
      {
        label: "What it improves",
        text: "Restores natural energy, stabilizes mood swings, improves sleep quality, and clears brain fog.",
      },
      {
        label: "How it fixes things",
        text: "We use tailored Hormone Replacement Therapy (HRT) protocols to replace exactly what your body is missing, addressing the root cause of your symptoms rather than just masking them.",
      },
    ],
  },
  {
    title: "Vaginal Health & Sexual Wellness",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800",
    headline:
      "Struggling with discomfort, dryness, or intimacy concerns?",
    solution:
      "Compassionate, judgment-free care for your most private health needs. We help you feel comfortable, confident, and empowered in your own body again.",
    expandedContent: [
      {
        label: "Why it helps",
        text: "Addresses the physical changes in vaginal tissue caused by hormonal shifts, aging, or childbirth.",
      },
      {
        label: "What it improves",
        text: "Enhances natural moisture, increases elasticity, and eliminates pain during intimacy.",
      },
      {
        label: "How it fixes things",
        text: "Through localized treatments and targeted therapies, we restore tissue health and blood flow, bringing back your physical comfort and sexual confidence.",
      },
    ],
  },
  {
    title: "Nutritional Support & Counseling",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800",
    headline:
      "Drained by stubborn weight or hormonal energy crashes?",
    solution:
      "Evidence-based nutritional guidance tailored to your unique biology. Fuel your body to optimize your hormones and vitality at any age.",
    expandedContent: [
      {
        label: "Why it helps",
        text: "Food is the foundational building block for your hormone production and metabolic health.",
      },
      {
        label: "What it improves",
        text: "Boosts sustainable energy, aids in stubborn weight management, and drastically reduces systemic inflammation.",
      },
      {
        label: "How it fixes things",
        text: "We replace confusing fad diets with evidence-based, sustainable nutritional plans that give your body the exact nutrients it needs to regulate hormones naturally.",
      },
    ],
  },
];

export default function Services() {
  const [activeService, setActiveService] = useState<number | null>(null);

  const service = activeService !== null ? services[activeService] : null;

  useEffect(() => {
    if (activeService !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [activeService]);

  return (
    <section
      id="services"
      className="bg-healthcare-cream-soft px-4 py-16 sm:px-6 md:py-24 lg:px-8 lg:py-32"
    >
      <motion.div
        className="mx-auto max-w-7xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.4 }}
      >
        <h2 className="text-center text-2xl font-semibold tracking-tight text-healthcare-charcoal sm:text-3xl">
          How we can help
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-healthcare-charcoal/80">
          Woman-centered care tailored to your needs
        </p>

        <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((item, index) => (
            <article
              key={item.title}
              className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="relative h-48 w-full shrink-0 overflow-hidden">
                <Image
                  src={item.image}
                  alt=""
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6 sm:p-8">
                <h3 className="text-lg font-semibold text-healthcare-charcoal">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm font-medium text-healthcare-primary">
                  {item.headline}
                </p>
                <p className="mt-3 flex-1 text-healthcare-charcoal/90">
                  {item.solution}
                </p>
                <div className="mt-8 flex w-full justify-center">
                  <button
                    type="button"
                    onClick={() => setActiveService(index)}
                    className="group inline-flex items-center gap-2 rounded-full border border-pink-100 bg-pink-50/50 px-6 py-2.5 font-medium text-healthcare-primary transition-all duration-300 hover:bg-healthcare-primary hover:text-white hover:shadow-md active:scale-95"
                  >
                    Learn more
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </motion.div>

      <AnimatePresence>
        {activeService !== null && service && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 pt-20 pb-10 px-4 backdrop-blur-sm md:pt-28"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <button
              type="button"
              aria-label="Close modal"
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
              onClick={() => setActiveService(null)}
            />
            <motion.div
              className="relative z-10 mx-auto w-full max-w-2xl max-h-[calc(100vh-120px)] overflow-y-auto rounded-3xl bg-white p-6 shadow-[0_20px_50px_rgba(0,0,0,0.1)] sm:p-8"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                aria-label="Close"
                className="absolute right-4 top-4 rounded-full p-2 text-healthcare-charcoal/60 transition hover:bg-pink-50 hover:text-healthcare-charcoal"
                onClick={() => setActiveService(null)}
              >
                <X className="h-5 w-5" strokeWidth={2} />
              </button>

              <div className="flex flex-col items-center pt-2 text-center">
                <h3 className="text-3xl font-semibold tracking-tight text-healthcare-charcoal">
                  {service.title}
                </h3>

                <div className="mt-6 w-full max-w-prose space-y-4">
                  {service.expandedContent.map(({ label, text }) => (
                    <div key={label} className="mx-auto text-center">
                      <span className="font-semibold text-healthcare-primary">
                        {label}:
                      </span>{" "}
                      <span className="text-gray-600">{text}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex w-full flex-col-reverse items-center justify-center gap-3 sm:flex-row sm:gap-4">
                  <button
                    type="button"
                    onClick={() => setActiveService(null)}
                    className="w-full rounded-lg border border-healthcare-charcoal/20 bg-transparent px-5 py-2.5 text-sm font-medium text-healthcare-charcoal transition hover:bg-healthcare-charcoal/5 sm:w-auto"
                  >
                    Close
                  </button>
                  <motion.button
                    type="button"
                    onClick={() => {
                      setActiveService(null);
                      smoothScrollTo("contact");
                    }}
                    className="inline-flex w-full items-center justify-center rounded-full bg-healthcare-primary px-8 py-3 font-medium text-white shadow-lg transition-colors hover:bg-healthcare-primary/90 hover:shadow-xl sm:w-auto"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Get in Touch
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
