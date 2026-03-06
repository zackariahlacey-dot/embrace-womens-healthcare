"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="bg-white px-4 py-16 sm:px-6 md:py-24 lg:px-8 lg:py-32"
    >
      <motion.div
        className="mx-auto grid max-w-7xl grid-cols-1 gap-12 md:grid-cols-2 md:gap-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.4 }}
      >
        <div className="relative flex items-center justify-center md:justify-start">
          <div className="relative h-[320px] w-full max-w-md overflow-hidden rounded-2xl shadow-lg shadow-[0_0_50px_-12px_rgba(216,27,96,0.2)] ring-1 ring-healthcare-primary/10 sm:h-[380px]">
            <Image
              src="/embraceheadshot.JPG"
              alt="Bethany — Women's Health Nurse Practitioner & Certified Nurse Midwife"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              priority={false}
            />
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl font-bold tracking-tight text-healthcare-charcoal sm:text-3xl">
            Meet Bethany — Your Partner in Health
          </h2>
          <p className="mt-4 text-lg font-medium text-healthcare-primary">
            Women&apos;s Health Nurse Practitioner (WHNP) & Certified Nurse Midwife (CNM)
          </p>
          <p className="mt-6 max-w-prose text-healthcare-charcoal/90">
            With over 20 years of clinical expertise, Bethany is dedicated to providing woman-centered care to patients across Vermont.
          </p>
          <p className="mt-4 max-w-prose text-healthcare-charcoal/90">
            She believes in attentive listening, individualized treatment, and compassionate support. Whether in-person or via telehealth, Bethany&apos;s goal is to create a respectful, judgment-free environment where your unique needs and goals guide your care.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
