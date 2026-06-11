"use client";

import Navbar from "@/components/layout/navbar";
import Footer from "@/components/landing/FooterSection";
import { motion } from "framer-motion";
import { Target, Brain, Rocket, Users, ArrowRight } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="bg-slate-50">
      {/* Hero */}
      <Navbar />

      <section className="py-28">
        <div className="container mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div
              className="
                inline-flex
                rounded-full
                border
                border-blue-200
                bg-blue-50
                px-4
                py-2
                text-sm
                font-medium
                text-blue-700
              "
            >
              About UnplugIQ
            </div>

            <h1
              className="
                mt-8
                text-5xl
                font-bold
                tracking-tight
                text-slate-950
                md:text-7xl
              "
            >
              Helping Job Seekers
              <br />
              <span className="text-blue-600">Get Interview Ready</span>
            </h1>

            <p
              className="
                mx-auto
                mt-8
                max-w-3xl
                text-lg
                leading-8
                text-slate-600
              "
            >
              UnplugIQ combines AI-powered mock interviews, resume analysis,
              interview feedback, and personalized learning paths to help
              students and professionals confidently land their next
              opportunity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}

      <section className="pb-24">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-4xl font-bold text-slate-950">Our Mission</h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                We believe talent should not be limited by lack of guidance,
                confidence, or interview experience.
              </p>

              <p className="mt-4 text-lg leading-8 text-slate-600">
                Our mission is to make professional-level interview preparation
                accessible to every student and job seeker.
              </p>
            </div>

            <div
              className="
                rounded-3xl
                border
                border-slate-200
                bg-white
                p-8
                shadow-sm
              "
            >
              <Target className="h-10 w-10 text-blue-600" />

              <h3 className="mt-6 text-2xl font-semibold">
                Democratizing Career Success
              </h3>

              <p className="mt-4 text-slate-600 leading-7">
                Everyone deserves access to interview preparation tools that
                were previously available only through expensive coaching
                programs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}

      <section className="bg-white py-24">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-slate-950">
              The Problem We Are Solving
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
              Most candidates spend months applying for jobs without knowing
              what recruiters and interviewers are actually looking for.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <FeatureCard
              icon={<Brain />}
              title="Lack of Practice"
              description="Most candidates never experience realistic interviews before the real one."
            />

            <FeatureCard
              icon={<Users />}
              title="Limited Feedback"
              description="Students rarely receive detailed guidance on what they need to improve."
            />

            <FeatureCard
              icon={<Rocket />}
              title="Unclear Roadmaps"
              description="Job seekers often don't know which skills and topics matter most."
            />
          </div>
        </div>
      </section>

      {/* How We Help */}

      <section className="py-24">
        <div className="container mx-auto max-w-6xl px-6">
          <h2 className="text-center text-4xl font-bold text-slate-950">
            How UnplugIQ Helps
          </h2>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            <Step
              number="01"
              title="Practice Real Interviews"
              text="Experience realistic AI-powered mock interviews."
            />

            <Step
              number="02"
              title="Receive Detailed Feedback"
              text="Get performance reports and improvement suggestions."
            />

            <Step
              number="03"
              title="Improve Faster"
              text="Follow personalized recommendations tailored to your goals."
            />

            <Step
              number="04"
              title="Get Hired"
              text="Approach interviews with confidence and preparation."
            />
          </div>
        </div>
      </section>

      {/* Vision */}

      <section className="bg-slate-950 py-24 text-white">
        <div className="container mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-4xl font-bold">Our Vision</h2>

          <p
            className="
              mt-8
              text-xl
              leading-9
              text-slate-300
            "
          >
            To become the world's most trusted AI-powered career preparation
            platform, helping millions of people unlock better opportunities
            through preparation, confidence, and continuous learning.
          </p>
        </div>
      </section>

      {/* CTA */}

      <section className="py-24">
        <div className="container mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-5xl font-bold text-slate-950">Ready to Start?</h2>

          <p className="mt-6 text-lg text-slate-600">
            Join thousands of students and job seekers preparing smarter with
            UnplugIQ.
          </p>

          <button
            className="
              mt-10
              inline-flex
              items-center
              gap-2
              rounded-xl
              bg-blue-600
              px-8
              py-4
              font-semibold
              text-white
              transition
              hover:bg-blue-700
            "
          >
            Get Started Free
            <ArrowRight size={18} />
          </button>
        </div>
      </section>
      <Footer />
    </main>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div
      className="
        rounded-3xl
        border
        border-slate-200
        bg-slate-50
        p-8
      "
    >
      <div className="text-blue-600">{icon}</div>

      <h3 className="mt-5 text-xl font-semibold">{title}</h3>

      <p className="mt-3 text-slate-600 leading-7">{description}</p>
    </div>
  );
}

function Step({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div
      className="
        rounded-3xl
        border
        border-slate-200
        bg-white
        p-8
      "
    >
      <span className="text-blue-600 font-bold">{number}</span>

      <h3 className="mt-4 text-xl font-semibold">{title}</h3>

      <p className="mt-3 text-slate-600">{text}</p>
    </div>
  );
}
