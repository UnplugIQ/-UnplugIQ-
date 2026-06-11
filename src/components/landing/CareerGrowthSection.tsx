"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";

const stats = [
  { value: "10K+", label: "Mock Interviews" },
  { value: "500+", label: "Interview Questions" },
  { value: "92%", label: "Success Rate" },
];

const slideLeft = {
  initial: { opacity: 0, x: -40 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
};

const slideRight = {
  initial: { opacity: 0, x: 40 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
};

export default function CareerGrowthSection() {
  return (
    <section className="bg-slate-50 py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Content */}
          <motion.div {...slideLeft} transition={{ duration: 0.6 }}>
            <div className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
              AI-Powered Career Growth Platform
            </div>

            <h2 className="mt-8 text-5xl font-bold leading-tight text-slate-950 md:text-7xl">
              Land Better
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Interviews.
              </span>
              <br />
              Get Hired Faster.
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-600">
              AI-powered mock interviews, resume analysis, personalized
              feedback, and company-specific preparation designed to help
              students and job seekers confidently crack interviews.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/signup"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700"
              >
                Start For Free
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/demo"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-300 bg-white px-8 py-4 font-semibold text-slate-700 transition hover:border-blue-300"
              >
                <PlayCircle size={18} />
                Watch Demo
              </Link>
            </div>

            <div className="mt-10 flex gap-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <h3 className="text-3xl font-bold text-slate-950">
                    {stat.value}
                  </h3>

                  <p className="text-slate-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Dashboard Preview */}
          <motion.div
            {...slideRight}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-blue-200 to-cyan-200 opacity-40 blur-3xl" />

            <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl">
              <Image
                src="/dashboard-preview.png"
                alt="UnplugIQ Dashboard Preview"
                width={1200}
                height={800}
                priority
                className="h-auto w-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
