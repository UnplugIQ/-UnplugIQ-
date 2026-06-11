"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const companies = [
  "google",
  "microsoft",
  "amazon",
  "meta",
  "netflix",
  "openai",
  "uber",
  "stripe",
] as const;

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Software Engineer @ Microsoft",
    feedback:
      "UnplugIQ helped me improve my problem-solving approach and communication skills. The mock interviews felt incredibly realistic.",
  },
  {
    name: "Ankit Verma",
    role: "Frontend Engineer @ Amazon",
    feedback:
      "The AI feedback reports showed exactly where I was losing points during interviews. That made a huge difference.",
  },
  {
    name: "Priya Singh",
    role: "SDE @ Google",
    feedback:
      "Practicing company-specific questions gave me confidence before my final interview rounds.",
  },
];

const stats = [
  {
    value: "10K+",
    label: "Mock Interviews Completed",
  },
  {
    value: "92%",
    label: "Interview Confidence Improvement",
  },
  {
    value: "500+",
    label: "Company Question Sets",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export default function SocialProof() {
  return (
    <section className="bg-slate-50 py-24 md:py-32">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
            Trusted By Thousands Of Job Seekers
          </div>

          <h2 className="mt-6 text-4xl font-bold tracking-tight text-slate-950 md:text-6xl">
            Prepare for interviews at
            <span className="block text-blue-600">
              the world&apos;s leading companies
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Practice company-specific interview tracks, coding assessments,
            behavioral rounds, and AI-powered mock interviews inspired by real
            hiring workflows.
          </p>
        </motion.div>

        {/* Company Logos */}
        <div className="mt-20 grid grid-cols-2 gap-5 md:grid-cols-4">
          {companies.map((company, index) => (
            <motion.div
              key={company}
              {...fadeUp}
              transition={{
                duration: 0.4,
                delay: index * 0.05,
              }}
              className="group flex h-24 items-center justify-center rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
            >
              <Image
                src={`/logos/${company}.svg`}
                alt={`${company} logo`}
                width={44}
                height={44}
                priority={index < 4}
                className="opacity-70 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0"
              />
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mt-28">
          <div className="mb-14 text-center">
            <h3 className="text-3xl font-bold text-slate-950 md:text-4xl">
              Success Stories
            </h3>

            <p className="mt-4 text-slate-600">
              Real candidates. Real interviews. Real results.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <motion.article
                key={testimonial.name}
                {...fadeUp}
                transition={{
                  duration: 0.4,
                  delay: index * 0.1,
                }}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-lg font-bold text-white">
                    {testimonial.name[0]}
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-950">
                      {testimonial.name}
                    </h4>

                    <p className="text-sm text-slate-500">{testimonial.role}</p>
                  </div>
                </div>

                <blockquote className="mt-6 border-l-2 border-blue-500 pl-4 leading-7 text-slate-600">
                  {testimonial.feedback}
                </blockquote>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Stats */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.5 }}
          className="mt-24 grid gap-8 rounded-3xl bg-slate-950 p-10 text-center md:grid-cols-3"
        >
          {stats.map((stat) => (
            <div key={stat.label}>
              <h3 className="text-4xl font-bold text-white">{stat.value}</h3>

              <p className="mt-2 text-slate-400">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
