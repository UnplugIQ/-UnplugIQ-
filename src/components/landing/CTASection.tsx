"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const trustIndicators = [
  "No credit card required",
  "Free AI mock interviews",
  "Instant feedback reports",
];

export default function CTASection() {
  return (
    <section className="bg-slate-50 py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-white px-8 py-16 shadow-xl md:px-16 md:py-24"
        >
          {/* Background Glow */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-100 blur-3xl" />
          </div>

          <div className="relative z-10 text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
              <Sparkles className="h-4 w-4" />
              AI-Powered Career Growth Platform
            </div>

            {/* Heading */}
            <h2 className="mx-auto mt-8 max-w-5xl text-4xl font-bold tracking-tight text-slate-950 md:text-6xl">
              Stop Applying Blindly.
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Start Interviewing With Confidence.
              </span>
            </h2>

            {/* Description */}
            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-600">
              Practice real interviews, optimize your resume, receive
              personalized AI feedback, and prepare for the hiring processes
              used by top companies.
            </p>

            {/* CTA Buttons */}
            <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/signup"
                className="inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:bg-blue-700 hover:shadow-xl"
              >
                Start Free Today
                <ArrowRight className="h-5 w-5" />
              </Link>

              <Link
                href="/demo"
                className="rounded-2xl border border-slate-300 bg-white px-8 py-4 text-lg font-semibold text-slate-700 transition-all duration-300 hover:border-blue-300 hover:text-blue-600"
              >
                Watch Demo
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-slate-500">
              {trustIndicators.map((item) => (
                <span key={item}>✓ {item}</span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
