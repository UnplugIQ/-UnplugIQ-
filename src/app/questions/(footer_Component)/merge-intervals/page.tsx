"use client";

import Footer from "@/components/landing/FooterSection";
import Navbar from "@/components/layout/navbar";
import { BookOpen, Clock3, Code2, CheckCircle } from "lucide-react";

export default function MergeIntervalsPage() {
  return (
    <main className="bg-slate-50">
      <Navbar />
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
                  href="#problem"
                  className="block text-slate-600 hover:text-blue-600"
                >
                  Problem
                </a>

                <a
                  href="#examples"
                  className="block text-slate-600 hover:text-blue-600"
                >
                  Examples
                </a>

                <a
                  href="#constraints"
                  className="block text-slate-600 hover:text-blue-600"
                >
                  Constraints
                </a>

                <a
                  href="#analysis"
                  className="block text-slate-600 hover:text-blue-600"
                >
                  Analysis
                </a>

                <a
                  href="#optimal"
                  className="block text-slate-600 hover:text-blue-600"
                >
                  Optimal Solution
                </a>
              </nav>
            </div>
          </aside>

          {/* Main Content */}

          <article>
            {/* Header */}

            <div>
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-yellow-100 px-3 py-1 text-sm font-medium text-yellow-700">
                  Medium
                </span>

                <span className="text-sm font-medium uppercase tracking-wide text-slate-500">
                  Arrays & Intervals
                </span>
              </div>

              <h1 className="mt-6 text-5xl font-bold tracking-tight text-slate-950">
                Merge Intervals
              </h1>

              <div className="mt-6 flex flex-wrap gap-3">
                <span className="rounded-xl bg-blue-100 px-3 py-2 text-sm text-blue-700">
                  Arrays
                </span>

                <span className="rounded-xl bg-indigo-100 px-3 py-2 text-sm text-indigo-700">
                  Intervals
                </span>

                <span className="rounded-xl bg-green-100 px-3 py-2 text-sm text-green-700">
                  Greedy
                </span>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-2">
                  <BookOpen size={18} />
                  <span>Written by UnplugIQ Team</span>
                </div>

                <div className="flex items-center gap-2">
                  <Clock3 size={18} />
                  <span>9 min read</span>
                </div>
              </div>
            </div>

            {/* Problem */}

            <section id="problem" className="mt-16">
              <h2 className="text-3xl font-bold text-slate-950">
                What is the Merge Intervals Problem?
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Given an array of intervals where intervals[i] = [start, end],
                merge all overlapping intervals and return an array of
                non-overlapping intervals that covers all intervals in the
                input.
              </p>
            </section>

            {/* Examples */}

            <section id="examples" className="mt-16">
              <h2 className="text-3xl font-bold text-slate-950">Examples</h2>

              <div className="mt-8 space-y-6">
                <ExampleCard
                  input="[[1,3],[2,6],[8,10],[15,18]]"
                  output="[[1,6],[8,10],[15,18]]"
                  explanation="Intervals [1,3] and [2,6] overlap, so they are merged."
                />

                <ExampleCard
                  input="[[1,4],[4,5]]"
                  output="[[1,5]]"
                  explanation="The intervals touch at 4, so they are merged."
                />

                <ExampleCard
                  input="[[1,4],[0,2],[3,5]]"
                  output="[[0,5]]"
                  explanation="All intervals overlap after sorting."
                />
              </div>
            </section>

            {/* Constraints */}

            <section id="constraints" className="mt-16">
              <h2 className="text-3xl font-bold text-slate-950">Constraints</h2>

              <ul className="mt-6 space-y-3 text-slate-700">
                <li>• 1 ≤ intervals.length ≤ 10⁴</li>
                <li>• intervals[i].length == 2</li>
                <li>• 0 ≤ start ≤ end ≤ 10⁴</li>
              </ul>
            </section>

            {/* Analysis */}

            <section id="analysis" className="mt-16">
              <h2 className="text-3xl font-bold text-slate-950">Analysis</h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                A key observation is that overlapping intervals must be adjacent
                after sorting by their start time.
              </p>

              <p className="mt-4 text-lg leading-8 text-slate-600">
                Once sorted, we compare each interval with the last merged
                interval.
              </p>

              <p className="mt-4 text-lg leading-8 text-slate-600">
                If they overlap, extend the current interval. Otherwise, add a
                new interval to the result.
              </p>
            </section>

            {/* Optimal */}

            <section id="optimal" className="mt-16 mb-24">
              <h2 className="text-3xl font-bold text-slate-950">
                Optimal Greedy Solution
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                First sort the intervals by starting value. Then iterate through
                the intervals and merge whenever overlap exists.
              </p>

              <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200">
                <div className="border-b border-slate-200 bg-slate-100 px-5 py-3">
                  <div className="flex items-center gap-2">
                    <Code2 size={18} />
                    <span>Python</span>
                  </div>
                </div>

                <pre className="overflow-x-auto bg-slate-950 p-6 text-sm text-slate-200">
                  {`def merge(intervals):
    intervals.sort(key=lambda x: x[0])

    merged = [intervals[0]]

    for start, end in intervals[1:]:
        last_end = merged[-1][1]

        if start <= last_end:
            merged[-1][1] = max(
                last_end,
                end
            )
        else:
            merged.append([start, end])

    return merged`}
                </pre>
              </div>

              <ComplexityCard time="O(n log n)" space="O(n)" />
            </section>
          </article>
        </div>
      </div>
      <Footer />
    </main>
  );
}

function ExampleCard({
  input,
  output,
  explanation,
}: {
  input: string;
  output: string;
  explanation: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6">
      <p>
        <strong>Input:</strong> {input}
      </p>

      <p className="mt-2">
        <strong>Output:</strong> {output}
      </p>

      <p className="mt-2 text-slate-600">
        <strong>Explanation:</strong> {explanation}
      </p>
    </div>
  );
}

function ComplexityCard({ time, space }: { time: string; space: string }) {
  return (
    <div className="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-5">
      <div className="flex items-center gap-2">
        <CheckCircle className="text-blue-600" size={18} />

        <span className="font-medium text-blue-900">Complexity Analysis</span>
      </div>

      <p className="mt-3 text-blue-800">Time Complexity: {time}</p>

      <p className="text-blue-800">Space Complexity: {space}</p>
    </div>
  );
}
