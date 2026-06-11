"use client";

import Footer from "@/components/landing/FooterSection";
import Navbar from "@/components/layout/navbar";
import {
  BookOpen,
  Clock3,
  Server,
  Database,
  Globe,
  Layers,
  CheckCircle,
} from "lucide-react";

export default function SystemDesignBasicsPage() {
  return (
    <main>
      <Navbar />
      <div className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="grid gap-12 lg:grid-cols-[280px_1fr]">
            {/* Sidebar */}

            <aside className="hidden lg:block">
              <div className="sticky top-24 rounded-3xl border border-slate-200 bg-white p-6">
                <h3 className="mb-6 font-semibold text-slate-900">
                  Table of Contents
                </h3>

                <nav className="space-y-4">
                  <a
                    href="#introduction"
                    className="block text-slate-600 hover:text-blue-600"
                  >
                    Introduction
                  </a>

                  <a
                    href="#what-is-system-design"
                    className="block text-slate-600 hover:text-blue-600"
                  >
                    What is System Design?
                  </a>

                  <a
                    href="#scalability"
                    className="block text-slate-600 hover:text-blue-600"
                  >
                    Scalability
                  </a>

                  <a
                    href="#load-balancer"
                    className="block text-slate-600 hover:text-blue-600"
                  >
                    Load Balancers
                  </a>

                  <a
                    href="#database"
                    className="block text-slate-600 hover:text-blue-600"
                  >
                    Databases
                  </a>

                  <a
                    href="#cache"
                    className="block text-slate-600 hover:text-blue-600"
                  >
                    Caching
                  </a>

                  <a
                    href="#architecture"
                    className="block text-slate-600 hover:text-blue-600"
                  >
                    Architecture
                  </a>

                  <a
                    href="#interviews"
                    className="block text-slate-600 hover:text-blue-600"
                  >
                    Interview Tips
                  </a>
                </nav>
              </div>
            </aside>

            {/* Content */}

            <article>
              {/* Header */}

              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
                    Beginner
                  </span>

                  <span className="text-sm font-medium uppercase tracking-wide text-slate-500">
                    System Design
                  </span>
                </div>

                <h1 className="mt-6 text-5xl font-bold tracking-tight text-slate-950">
                  System Design Basics
                </h1>

                <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
                  Learn the fundamental concepts behind scalable applications,
                  distributed systems, databases, caching, load balancing, and
                  modern software architecture.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-6">
                  <div className="flex items-center gap-2">
                    <BookOpen size={18} />
                    <span>Written by UnplugIQ Team</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Clock3 size={18} />
                    <span>12 min read</span>
                  </div>
                </div>
              </div>

              {/* Introduction */}

              <section id="introduction" className="mt-16">
                <h2 className="text-3xl font-bold text-slate-950">
                  Why Learn System Design?
                </h2>

                <p className="mt-6 text-lg leading-8 text-slate-600">
                  System Design interviews evaluate how you design scalable,
                  reliable, and maintainable systems.
                </p>

                <p className="mt-4 text-lg leading-8 text-slate-600">
                  These interviews are common for software engineers at
                  mid-level and senior positions and are frequently asked by top
                  tech companies.
                </p>
              </section>

              {/* What is System Design */}

              <section id="what-is-system-design" className="mt-16">
                <h2 className="text-3xl font-bold text-slate-950">
                  What is System Design?
                </h2>

                <p className="mt-6 text-lg leading-8 text-slate-600">
                  System Design is the process of defining the architecture,
                  components, interfaces, and data flow of a software system.
                </p>

                <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-8">
                  <h3 className="font-semibold text-slate-950">Example</h3>

                  <p className="mt-3 text-slate-600">
                    Design a URL Shortener like Bitly, a Ride Sharing App like
                    Uber, or a Video Platform like YouTube.
                  </p>
                </div>
              </section>

              {/* Core Concepts */}

              <section id="scalability" className="mt-16">
                <h2 className="text-3xl font-bold text-slate-950">
                  Scalability
                </h2>

                <div className="mt-8 grid gap-6 md:grid-cols-2">
                  <ConceptCard
                    icon={<Server size={28} />}
                    title="Vertical Scaling"
                    description="Increase resources of a single server by adding CPU, RAM, or storage."
                  />

                  <ConceptCard
                    icon={<Layers size={28} />}
                    title="Horizontal Scaling"
                    description="Add more servers and distribute traffic across them."
                  />
                </div>
              </section>

              {/* Load Balancer */}

              <section id="load-balancer" className="mt-16">
                <h2 className="text-3xl font-bold text-slate-950">
                  Load Balancers
                </h2>

                <p className="mt-6 text-lg leading-8 text-slate-600">
                  Load balancers distribute incoming traffic across multiple
                  servers to prevent overload and improve reliability.
                </p>

                <div className="mt-8 rounded-3xl border border-blue-200 bg-blue-50 p-6">
                  <p className="text-blue-900">
                    Client → Load Balancer → Server 1 / Server 2 / Server 3
                  </p>
                </div>
              </section>

              {/* Databases */}

              <section id="database" className="mt-16">
                <h2 className="text-3xl font-bold text-slate-950">Databases</h2>

                <div className="mt-8 grid gap-6 md:grid-cols-2">
                  <ConceptCard
                    icon={<Database size={28} />}
                    title="SQL"
                    description="Structured databases like PostgreSQL and MySQL with strong consistency."
                  />

                  <ConceptCard
                    icon={<Database size={28} />}
                    title="NoSQL"
                    description="Flexible databases like MongoDB optimized for scale and speed."
                  />
                </div>
              </section>

              {/* Caching */}

              <section id="cache" className="mt-16">
                <h2 className="text-3xl font-bold text-slate-950">Caching</h2>

                <p className="mt-6 text-lg leading-8 text-slate-600">
                  Caching stores frequently accessed data closer to users,
                  reducing latency and database load.
                </p>

                <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-8">
                  <p className="font-medium">Popular Cache:</p>

                  <p className="mt-2 text-slate-600">Redis</p>
                </div>
              </section>

              {/* Architecture */}

              <section id="architecture" className="mt-16">
                <h2 className="text-3xl font-bold text-slate-950">
                  High-Level Architecture
                </h2>

                <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-8">
                  <div className="flex flex-col gap-4 text-center">
                    <div className="rounded-xl bg-blue-100 p-4">Client</div>

                    <div>↓</div>

                    <div className="rounded-xl bg-indigo-100 p-4">
                      Load Balancer
                    </div>

                    <div>↓</div>

                    <div className="rounded-xl bg-green-100 p-4">
                      Application Servers
                    </div>

                    <div>↓</div>

                    <div className="rounded-xl bg-yellow-100 p-4">
                      Database + Cache
                    </div>
                  </div>
                </div>
              </section>

              {/* Interview Tips */}

              <section id="interviews" className="mt-16 mb-24">
                <h2 className="text-3xl font-bold text-slate-950">
                  System Design Interview Tips
                </h2>

                <div className="mt-8 rounded-3xl border border-green-200 bg-green-50 p-8">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="text-green-600" size={18} />

                    <span className="font-semibold text-green-900">
                      Key Advice
                    </span>
                  </div>

                  <ul className="mt-6 space-y-3 text-green-900">
                    <li>• Clarify requirements first.</li>
                    <li>• Estimate scale and traffic.</li>
                    <li>• Draw high-level architecture.</li>
                    <li>• Discuss bottlenecks.</li>
                    <li>• Explain trade-offs clearly.</li>
                  </ul>
                </div>
              </section>
            </article>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}

function ConceptCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8">
      <div className="text-blue-600">{icon}</div>

      <h3 className="mt-5 text-xl font-semibold text-slate-950">{title}</h3>

      <p className="mt-3 leading-7 text-slate-600">{description}</p>
    </div>
  );
}
