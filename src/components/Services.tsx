"use client";

import type { ReactNode } from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { X, Check } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

interface ServiceExpandedItem {
  label: string;
  text: ReactNode;
}

interface ServiceItem {
  title: string;
  image: string;
  headline: string;
  solution: ReactNode;
  expandedContent: ServiceExpandedItem[];
  ctaText?: string;
  ctaButtonLabel?: string;
}

const services: ServiceItem[] = [
  {
    title: "Hormone Therapy & Wellness",
    image: "/2.jpg",
    headline: "Feeling unlike yourself? Fatigue, mood swings, or night sweats?",
    solution: (
      <>
        We provide personalized Hormone Replacement Therapy (HRT) and wellness planning for <strong className="font-semibold text-[#4A4335]">perimenopause and menopause</strong>—helping you regain your energy and sense of balance.
      </>
    ),
    expandedContent: [
      {
        label: "Why it helps",
        text: (
          <>
            Balances crucial hormone levels that fluctuate during <strong className="font-semibold text-[#4A4335]">perimenopause and menopause</strong>.
          </>
        ),
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
    image: "/3.jpg",
    headline: "Struggling with discomfort, dryness, or intimacy concerns?",
    solution: (
      <>
        Compassionate, judgment-free care for your most <strong className="font-semibold text-[#4A4335]">private health needs</strong>. We help you feel comfortable, confident, and empowered in your own body again.
      </>
    ),
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
    image: "/4.jpeg",
    headline: "Drained by stubborn weight or hormonal energy crashes?",
    solution: (
      <>
        Evidence-based nutritional guidance tailored to your unique biology. Fuel your body to <strong className="font-semibold text-[#4A4335]">optimize your hormones and vitality</strong> at any age.
      </>
    ),
    expandedContent: [
      {
        label: "Why it helps",
        text: (
          <>
            Food is the foundational building block for your hormone production and metabolic health—helping you <strong className="font-semibold text-[#4A4335]">optimize your hormones and vitality</strong>.
          </>
        ),
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
  {
    title: "Acute UTI or Vaginal Infections",
    image: "/1.jpg",
    headline: "Need a quick telehealth appointment?",
    solution: (
      <>
        Contraception new start and refill. Can&apos;t get in to your regular provider? Need a <strong>quick telehealth appointment</strong> so you can move on with your day? <strong>Travel nursing?</strong> In <strong>Vermont</strong> from out of town?
      </>
    ),
    expandedContent: [
      {
        label: "",
        text: (
          <>
            Contraception new start and refill. Can&apos;t get in to your regular provider? Need a <strong>quick telehealth appointment</strong> so you can move on with your day? <strong>Travel nursing?</strong> In <strong>Vermont</strong> from out of town?
          </>
        ),
      },
    ],
  },
];

const bulletServices = [
  "Symptom management for menopause and perimenopause",
  "Hormone Replacement Therapy",
  "Family Planning",
  "Primary Care Coordination",
  "Sexual Wellness",
  "LGBTQ+ friendly",
  "Lifestyle education: Stress management, Physical activity, Sexual Wellness, Bone health, Sleep hygiene, Vitamin and Supplements",
  "Cancer Screenings",
  "Thyroid Management",
  "Chronic Pelvic Pain",
  "Treatment of acute infections including UTI and vaginal infections",
];

export default function Services() {
  const router = useRouter();
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

  const goToContact = () => {
    setActiveService(null);
    router.push("/contact");
  };

  return (
    <section
      id="services"
      className="bg-[#EAE5D9] px-4 pt-32 pb-20 sm:px-6 sm:pt-36 lg:px-8 lg:pb-28 scroll-mt-20 border-t border-[#4A4335]/15"
    >
      <motion.div
        className="mx-auto max-w-6xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
      >
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="font-serif italic text-3xl sm:text-4xl md:text-5xl text-[#4A4335]">
            Services Provided
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#5A5346] font-sans tracking-wide">
            Compassionate, evidence-based wellness care tailored to your unique biology
          </p>
        </div>

        {/* Top Split Layout: 11 Bullets & outdoor yoga image (1.jpg) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
          
          {/* Left: 11 Bullets (Cols 1-7) */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-serif italic text-xl md:text-2xl text-[#4A4335] font-semibold border-b border-[#4A4335]/15 pb-3">
              Care Options & Clinical Offerings
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-1 gap-3.5">
              {bulletServices.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3.5 text-[#5A5346] text-sm md:text-base leading-relaxed">
                  <span className="flex shrink-0 w-6 h-6 rounded-full bg-[#FAF8F5] border border-[#4A4335]/10 items-center justify-center text-[#8C6C58] mt-0.5 shadow-sm">
                    <Check className="w-3.5 h-3.5" strokeWidth={2.5} />
                  </span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Outdoor Yoga Visual (Cols 8-12) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[360px] aspect-[4/5] overflow-hidden rounded-2xl border-4 border-[#FAF8F5] shadow-lg bg-white group">
              <Image
                src="/1.jpg"
                alt="Woman relaxing outdoors in a beautiful yoga stretch pose, with fruits and water bottle in the background"
                fill
                sizes="(max-width: 640px) 100vw, 20rem"
                className="object-cover transition-transform duration-500 group-hover:scale-102"
              />
            </div>
          </div>
        </div>

        {/* Bottom Area: Group Education intro card */}
        <div className="mx-auto max-w-4xl text-center border-t border-[#4A4335]/10 pt-16 mb-16">
          <div className="bg-[#FAF8F5]/55 border border-[#4A4335]/10 rounded-[2rem] p-6 md:p-10 shadow-sm backdrop-blur-sm">
            <p className="text-base sm:text-lg text-[#5A5346] leading-relaxed mb-6 font-sans">
              <strong className="font-serif italic text-lg text-[#4A4335]">Menopause</strong> is a <strong className="font-semibold text-[#4A4335]">shared experience</strong> for all women, even though our health journeys may look different. At <strong className="font-semibold text-[#4A4335]">Embrace Women&apos;s Healthcare</strong>, we&apos;re here to walk alongside you – offering a welcoming community, trusted education, and access to effective hormone therapy and nutritional support.
            </p>
            <p className="text-sm sm:text-base text-[#5A5346] leading-relaxed font-sans">
              We offer <strong className="font-semibold text-[#4A4335]">monthly group education</strong> at <strong className="font-semibold text-[#4A4335]">The Wellness Collective</strong> along with <strong className="font-semibold text-[#4A4335]">individual telehealth visits</strong> to create a personalized care plan that fits your needs perfectly.
            </p>
          </div>
        </div>

        {/* Bottom Interactive Area Grid: 4 Clinical Focus Cards */}
        <div className="text-center mb-10">
          <h3 className="font-serif italic text-2xl md:text-3xl text-[#4A4335] mb-2">
            Clinical Focus Areas
          </h3>
          <p className="text-xs sm:text-sm text-[#8C6C58] tracking-wider uppercase font-semibold">
            Click into each focus area for in-depth clinical details
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {services.map((item, index) => (
            <article
              key={item.title}
              className="group flex flex-col overflow-hidden rounded-2xl bg-[#FAF8F5] border border-[#4A4335]/10 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex flex-1 flex-col items-center p-6 text-center sm:p-8">
                <h4 className="font-serif text-lg md:text-xl font-bold text-[#4A4335] mb-2">
                  {item.title}
                </h4>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#8C6C58] mb-3">
                  {item.headline}
                </p>
                <p className="text-sm text-[#5A5346] flex-1 leading-relaxed">
                  {item.solution}
                </p>
                <div className="mt-6 flex w-full justify-center">
                  <button
                    type="button"
                    onClick={() => setActiveService(index)}
                    className="inline-flex items-center gap-2 rounded-full bg-[#EAE5D9] px-5 py-2 text-xs font-semibold text-[#4A4335] border border-[#4A4335]/10 transition-all duration-300 hover:bg-[#4A4335] hover:text-[#FAF8F5] cursor-pointer"
                  >
                    Learn more
                    <span>→</span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </motion.div>

      {/* Interactive Detail Popup Modal */}
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
              className="absolute inset-0 bg-black/30 backdrop-blur-sm cursor-pointer"
              onClick={() => setActiveService(null)}
            />
            <motion.div
              className="relative z-10 mx-auto w-full max-w-2xl max-h-[calc(100vh-120px)] overflow-y-auto rounded-3xl bg-[#FAF8F5] border border-[#4A4335]/25 p-6 shadow-2xl sm:p-8 text-left"
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                type="button"
                aria-label="Close"
                className="absolute right-4 top-4 rounded-full p-1.5 text-[#4A4335]/60 hover:bg-[#4A4335]/5 hover:text-[#4A4335] transition cursor-pointer"
                onClick={() => setActiveService(null)}
              >
                <X className="h-5 w-5" strokeWidth={2} />
              </button>

              <div className="flex flex-col pt-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#8C6C58] mb-1">
                  Clinical Insights
                </span>
                <h3 className="font-serif text-2xl md:text-3xl text-[#4A4335] font-semibold mb-6 pb-2 border-b border-[#4A4335]/15">
                  {service.title}
                </h3>

                <div className="space-y-5 text-sm sm:text-base leading-relaxed text-[#5A5346] font-sans mb-8">
                  {service.expandedContent.map(({ label, text }, i) => (
                    <div key={label || i} className="space-y-1">
                      {label && (
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-[#4A4335]">
                          {label}
                        </h4>
                      )}
                      <p className="text-sm text-[#5A5346]">
                        {text}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="flex w-full flex-col sm:flex-row gap-3 pt-4 border-t border-[#4A4335]/10 mt-auto">
                  <button
                    type="button"
                    onClick={() => setActiveService(null)}
                    className="w-full sm:w-auto rounded-full border border-[#4A4335]/25 bg-transparent px-6 py-2.5 text-xs font-semibold text-[#4A4335] transition hover:bg-[#4A4335]/5 cursor-pointer text-center"
                  >
                    Close
                  </button>
                  <motion.button
                    type="button"
                    onClick={goToContact}
                    className="w-full sm:w-auto rounded-full bg-[#4A4335] text-[#FAF8F5] px-8 py-2.5 text-xs font-semibold transition hover:bg-[#5A5346] hover:shadow cursor-pointer text-center"
                    whileTap={{ scale: 0.97 }}
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
