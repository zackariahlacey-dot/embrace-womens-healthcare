"use client";

import { useState, useEffect, useRef } from "react";
import { useActionState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle, Loader2, Mail, MapPin, Globe, Shield } from "lucide-react";
import { submitContactForm } from "@/app/actions";

const initialState = null;

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContactForm, initialState);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state?.success) {
      formRef.current?.reset();
      setIsSuccessOpen(true);
    }
  }, [state?.success]);

  useEffect(() => {
    if (isSuccessOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isSuccessOpen]);

  return (
    <section 
      id="contact" 
      className="bg-[#EAE5D9] px-4 py-20 pt-24 sm:px-6 lg:px-8 lg:py-28 scroll-mt-24 border-t border-[#4A4335]/15"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Brochure 'Contact Us' Info Panel (Cols 1-5) */}
          <motion.div
            className="lg:col-span-5 text-left space-y-8"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <h2 className="font-serif italic text-3xl sm:text-4xl md:text-5xl text-[#4A4335] mb-4">
                Contact Us
              </h2>
              <p className="text-sm sm:text-base text-[#5A5346] leading-relaxed font-sans">
                We would love to hear from you. Reach out to coordinate care, ask educational questions, or register for our wellness discussions.
              </p>
            </div>

            {/* Structured Info Card list */}
            <div className="space-y-4">
              {/* Web Domain */}
              <div className="flex items-center gap-4 bg-[#FAF8F5]/65 border border-[#4A4335]/10 rounded-2xl p-4 shadow-sm backdrop-blur-sm">
                <div className="flex shrink-0 w-10 h-10 rounded-full bg-[#FAF8F5] border border-[#4A4335]/10 items-center justify-center text-[#8C6C58]">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#8C6C58] uppercase tracking-wider">
                    Website & Portal
                  </p>
                  <p className="text-sm font-semibold text-[#4A4335]">
                    embracewomenshealthcare.com
                  </p>
                </div>
              </div>

              {/* Telehealth */}
              <div className="flex items-center gap-4 bg-[#FAF8F5]/65 border border-[#4A4335]/10 rounded-2xl p-4 shadow-sm backdrop-blur-sm">
                <div className="flex shrink-0 w-10 h-10 rounded-full bg-[#FAF8F5] border border-[#4A4335]/10 items-center justify-center text-[#8C6C58]">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#8C6C58] uppercase tracking-wider">
                    Appointments
                  </p>
                  <p className="text-sm font-semibold text-[#4A4335]">
                    Telehealth appointments available
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4 bg-[#FAF8F5]/65 border border-[#4A4335]/10 rounded-2xl p-4 shadow-sm backdrop-blur-sm">
                <div className="flex shrink-0 w-10 h-10 rounded-full bg-[#FAF8F5] border border-[#4A4335]/10 items-center justify-center text-[#8C6C58]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#8C6C58] uppercase tracking-wider">
                    Email Address
                  </p>
                  <a 
                    href="mailto:bethany@embracewomenshealthcare.com"
                    className="text-sm font-semibold text-[#4A4335] hover:text-[#8C6C58] transition-colors"
                  >
                    bethany@embracewomenshealthcare.com
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4 bg-[#FAF8F5]/65 border border-[#4A4335]/10 rounded-2xl p-4 shadow-sm backdrop-blur-sm">
                <div className="flex shrink-0 w-10 h-10 rounded-full bg-[#FAF8F5] border border-[#4A4335]/10 items-center justify-center text-[#8C6C58]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#8C6C58] uppercase tracking-wider">
                    The Wellness Collective
                  </p>
                  <p className="text-xs text-[#5A5346] leading-snug">
                    875 Roosevelt Hwy Suite 120, Colchester, VT 05446
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Premium Form Card (Cols 6-12) */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <form
              ref={formRef}
              action={formAction}
              className="space-y-5 rounded-[2rem] border border-[#4A4335]/10 bg-[#FAF8F5] p-6 shadow-sm md:p-10 text-left"
            >
              <div>
                <label htmlFor="firstName" className="block text-xs font-semibold uppercase tracking-wider text-[#4A4335] mb-1.5">
                  First Name <span className="text-[#8C6C58]">*</span>
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  required
                  autoComplete="given-name"
                  className="block w-full rounded-xl border border-[#4A4335]/15 bg-white px-4 py-3 text-sm text-[#4A4335] shadow-inner transition focus:border-[#8C6C58] focus:bg-[#FAF8F5]/45 focus:outline-none focus:ring-1 focus:ring-[#8C6C58]/35"
                  placeholder="Your first name"
                  disabled={!!state?.success}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-[#4A4335] mb-1.5">
                  Email Address <span className="text-[#8C6C58]">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="block w-full rounded-xl border border-[#4A4335]/15 bg-white px-4 py-3 text-sm text-[#4A4335] shadow-inner transition focus:border-[#8C6C58] focus:bg-[#FAF8F5]/45 focus:outline-none focus:ring-1 focus:ring-[#8C6C58]/35"
                  placeholder="you@example.com"
                  disabled={!!state?.success}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-[#4A4335] mb-1.5">
                  Message <span className="text-[#8C6C58]">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="block w-full resize-y rounded-xl border border-[#4A4335]/15 bg-white px-4 py-3 text-sm text-[#4A4335] shadow-inner transition focus:border-[#8C6C58] focus:bg-[#FAF8F5]/45 focus:outline-none focus:ring-1 focus:ring-[#8C6C58]/35"
                  placeholder="How can we walk alongside you today?"
                  disabled={!!state?.success}
                />
              </div>

              {state?.success && !isSuccessOpen && state.message && (
                <p className="rounded-xl bg-[#8C6C58]/10 px-4 py-3 text-xs font-semibold text-[#8C6C58]">
                  {state.message}
                </p>
              )}
              {state && !state.success && (
                <p className="rounded-xl bg-red-50 border border-red-100 px-4 py-3 text-xs text-red-700">
                  {state.error}
                </p>
              )}

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isPending || !!state?.success}
                  className="w-full rounded-full bg-[#4A4335] px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#FAF8F5] shadow-sm transition-all duration-300 hover:bg-[#5A5346] hover:shadow active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60 cursor-pointer sm:w-auto"
                >
                  {isPending ? (
                    <span className="inline-flex items-center gap-2">
                      <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
                      Sending...
                    </span>
                  ) : state?.success ? (
                    "Sent Successfully"
                  ) : (
                    "Send Message"
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>

        {/* Modal Success Overlay */}
        <AnimatePresence>
          {isSuccessOpen && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 pt-24 pb-6 px-4 backdrop-blur-sm sm:pt-32"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                className="mx-auto w-[95%] max-h-[calc(100vh-120px)] overflow-y-auto rounded-3xl bg-[#FAF8F5] border border-[#4A4335]/25 p-6 shadow-2xl text-center sm:w-full sm:max-w-md"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="bg-[#FAF8F5] border border-[#4A4335]/15 p-4 rounded-full w-fit mx-auto mb-4 flex items-center justify-center shadow-inner text-[#8C6C58]">
                  <CheckCircle className="w-12 h-12" />
                </div>
                <h3 className="font-serif text-xl font-bold text-[#4A4335] mb-2">
                  Message Sent!
                </h3>
                <p className="text-[#5A5346] text-xs sm:text-sm leading-relaxed mb-6">
                  Thank you for reaching out. We have successfully received your inquiry and Bethany will get back to you as soon as possible!
                </p>
                <motion.button
                  type="button"
                  onClick={() => setIsSuccessOpen(false)}
                  className="w-full rounded-full bg-[#4A4335] px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#FAF8F5] shadow-sm transition hover:bg-[#5A5346] cursor-pointer"
                  whileTap={{ scale: 0.96 }}
                >
                  Done
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
