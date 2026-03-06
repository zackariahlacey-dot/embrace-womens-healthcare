"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="bg-white px-4 py-20 sm:px-6 lg:px-8 lg:py-32"
    >
      <motion.div
        className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.4 }}
      >
        <div className="order-first flex min-w-0 justify-center mb-8 lg:mb-0 lg:min-w-[320px] lg:order-1">
          <div className="relative mx-auto w-full max-w-[400px] aspect-square overflow-hidden shadow-2xl rounded-[60%_40%_30%_70%/60%_30%_70%_40%] border-8 border-pink-50">
            <Image
              src="/embraceheadshot.JPG"
              alt="Bethany Cook — Women's Health Nurse Practitioner & Certified Nurse Midwife"
              fill
              sizes="(max-width: 640px) 24rem, (max-width: 1024px) 28rem, 400px"
              className="object-cover object-top h-full w-full"
              priority={false}
            />
          </div>
        </div>
        <div className="order-last flex min-w-0 flex-col justify-center px-4 text-center lg:order-2 lg:text-left">
          <h2 className="text-2xl font-bold tracking-tight text-healthcare-charcoal sm:text-3xl">
            Meet Bethany Cook — Your Partner in Health
          </h2>
          <p className="mt-4 mb-6 text-lg font-medium text-healthcare-primary">
            Women&apos;s Health Nurse Practitioner (WHNP-BC) & Certified Nurse Midwife (CNM)
          </p>
          <p className="mx-auto mt-6 max-w-prose text-healthcare-charcoal/90 lg:mx-0">
            With over 20 years of experience as a Women&apos;s Health Nurse Practitioner and Certified Nurse Midwife (CNM), Bethany Cook specializes in navigating the transitions of <strong className="font-semibold text-healthcare-charcoal">perimenopause and menopause</strong>. Whether through group education or telehealth, her goal is to provide evidence-based care for these <strong className="font-semibold text-healthcare-charcoal">primary areas of focus</strong>.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
