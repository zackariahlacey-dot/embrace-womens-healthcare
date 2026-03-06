"use client";

import { useState, useEffect, useRef } from "react";
import { useActionState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle, Loader2 } from "lucide-react";
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
    <section id="contact" className="flex flex-col items-center justify-center text-center scroll-mt-24 bg-healthcare-pink px-4 py-16 pt-24 sm:px-6 md:py-24 lg:px-8 lg:py-32">
      <motion.div
        className="mx-4 w-full max-w-2xl text-center sm:mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.4 }}
      >
        <h2 className="mx-auto text-center text-2xl font-semibold tracking-tight text-healthcare-charcoal sm:text-3xl">
          Get in touch
        </h2>
        <p className="mx-auto mt-2 max-w-prose text-center text-healthcare-charcoal/80">
          Send a message and we&apos;ll get back to you as soon as we can.
        </p>

        <form
          ref={formRef}
          action={formAction}
          className="mt-8 space-y-6 rounded-2xl border border-healthcare-primary/10 bg-white/60 p-6 shadow-sm backdrop-blur sm:p-8"
        >
          <div>
            <label htmlFor="firstName" className="block w-full text-center text-sm font-medium text-healthcare-charcoal">
              First name <span className="text-healthcare-primary">*</span>
            </label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              required
              autoComplete="given-name"
              className="mt-2 block w-full rounded-lg border border-gray-100 bg-white px-4 py-3 text-center text-healthcare-charcoal shadow-sm transition focus:border-healthcare-primary focus:bg-pink-50/30 focus:outline-none focus:ring-2 focus:ring-healthcare-primary/20"
              placeholder="Your first name"
              disabled={!!state?.success}
            />
          </div>

          <div>
            <label htmlFor="email" className="block w-full text-center text-sm font-medium text-healthcare-charcoal">
              Email <span className="text-healthcare-primary">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              className="mt-2 block w-full rounded-lg border border-gray-100 bg-white px-4 py-3 text-center text-healthcare-charcoal shadow-sm transition focus:border-healthcare-primary focus:bg-pink-50/30 focus:outline-none focus:ring-2 focus:ring-healthcare-primary/20"
              placeholder="you@example.com"
              disabled={!!state?.success}
            />
          </div>

          <div>
            <label htmlFor="message" className="block w-full text-center text-sm font-medium text-healthcare-charcoal">
              Message <span className="text-healthcare-primary">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className="mt-2 block w-full resize-y rounded-lg border border-gray-100 bg-white px-4 py-3 text-center text-healthcare-charcoal shadow-sm transition focus:border-healthcare-primary focus:bg-pink-50/30 focus:outline-none focus:ring-2 focus:ring-healthcare-primary/20"
              placeholder="How can we help?"
              disabled={!!state?.success}
            />
          </div>

          {state?.success && !isSuccessOpen && state.message && (
            <p className="rounded-lg bg-healthcare-primary/10 px-4 py-3 text-sm font-medium text-healthcare-primary">
              {state.message}
            </p>
          )}
          {state && !state.success && (
            <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">
              {state.error}
            </p>
          )}

          <div className="mt-6 flex w-full justify-center">
            <button
              type="submit"
              disabled={isPending || !!state?.success}
              className="mx-auto rounded-lg bg-healthcare-primary px-6 py-4 font-semibold text-white shadow-md transition hover:bg-healthcare-primary/90 focus:outline-none focus:ring-2 focus:ring-healthcare-primary focus:ring-offset-2 active:scale-95 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isPending ? (
                <span className="inline-flex items-center gap-2">
                  <Loader2 className="h-5 w-5 animate-spin" aria-hidden />
                  Sending...
                </span>
              ) : state?.success ? (
                "Sent"
              ) : (
                "Send Message"
              )}
            </button>
          </div>
        </form>

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
                className="mx-auto w-[95%] max-h-[calc(100vh-120px)] overflow-y-auto rounded-3xl bg-white p-6 shadow-2xl text-center sm:w-full sm:max-w-md"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="bg-pink-50 p-4 rounded-full w-fit mx-auto mb-4 flex items-center justify-center">
                  <CheckCircle className="w-16 h-16 text-healthcare-primary" />
                </div>
                <h3 className="text-xl font-bold text-healthcare-charcoal mb-2">
                  Message Sent Successfully!
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  Thank you for reaching out. We have received your inquiry and will respond as soon as possible!
                </p>
                <motion.button
                  type="button"
                  onClick={() => setIsSuccessOpen(false)}
                  className="w-full rounded-lg bg-healthcare-primary px-6 py-4 font-semibold text-white shadow-md transition hover:bg-healthcare-primary/90 focus:outline-none focus:ring-2 focus:ring-healthcare-primary focus:ring-offset-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Done
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
