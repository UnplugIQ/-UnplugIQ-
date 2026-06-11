"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-background" />

        <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[150px]" />

        <div className="absolute right-0 top-40 h-[350px] w-[350px] rounded-full bg-cyan-500/10 blur-[120px]" />

        <div className="absolute left-0 bottom-0 h-[300px] w-[300px] rounded-full bg-indigo-500/10 blur-[120px]" />
      </div>

      <div className="container mx-auto px-6">
        <div className="flex min-h-screen flex-col items-center justify-center text-center">
          {/* Badge */}

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-4 py-2 backdrop-blur-md"
          >
            <Sparkles className="h-4 w-4 text-blue-500" />
            <span className="text-sm text-muted-foreground">
              Interview Practice • Resume Analysis • Career Coaching
            </span>
          </motion.div>

          {/* Headline */}

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="max-w-6xl text-5xl font-bold tracking-tight md:text-7xl lg:text-8xl"
          >
            Stop Applying.
            <br />
            Start Getting
            <span className="block bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-400 bg-clip-text text-transparent">
              Interview Ready.
            </span>
          </motion.h1>

          {/* Subtitle */}

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-8 max-w-3xl text-lg leading-8 text-muted-foreground md:text-xl"
          >
            UnplugIQ helps students and job seekers prepare for real interviews
            through AI-powered mock interviews, resume optimization, coding
            assessments, personalized feedback, and structured career roadmaps.
          </motion.p>

          {/* CTA */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <Button size="lg" className="h-12 px-8 text-base">
              Start For Free
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>

            <Button variant="outline" size="lg" className="h-12 px-8 text-base">
              <Play className="mr-2 h-4 w-4" />
              Watch Demo
            </Button>
          </motion.div>

          {/* Social Proof */}

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-6 text-sm text-muted-foreground"
          >
            Helping students prepare for interviews, improve resumes, and become
            job-ready faster.
          </motion.p>

          {/* Feature Cards */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-20 grid w-full max-w-5xl gap-4 md:grid-cols-4"
          >
            <div className="rounded-2xl border bg-background/60 p-5 backdrop-blur">
              <div className="text-2xl font-bold">AI</div>
              <p className="mt-2 text-sm text-muted-foreground">
                Mock Interviews
              </p>
            </div>

            <div className="rounded-2xl border bg-background/60 p-5 backdrop-blur">
              <div className="text-2xl font-bold">ATS</div>
              <p className="mt-2 text-sm text-muted-foreground">
                Resume Analysis
              </p>
            </div>

            <div className="rounded-2xl border bg-background/60 p-5 backdrop-blur">
              <div className="text-2xl font-bold">500+</div>
              <p className="mt-2 text-sm text-muted-foreground">
                Interview Questions
              </p>
            </div>

            <div className="rounded-2xl border bg-background/60 p-5 backdrop-blur">
              <div className="text-2xl font-bold">24/7</div>
              <p className="mt-2 text-sm text-muted-foreground">
                Career Guidance
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
