"use client";

import Footer from "@/components/landing/FooterSection";
import Navbar from "@/components/layout/navbar";
import { Clock3, BookOpen, Code2, CheckCircle } from "lucide-react";

export default function TwoSumPage() {
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
                  href="#analysis"
                  className="block text-slate-600 hover:text-blue-600"
                >
                  Analysis
                </a>

                <a
                  href="#bruteforce"
                  className="block text-slate-600 hover:text-blue-600"
                >
                  Brute Force
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
                <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
                  Easy
                </span>

                <span className="text-sm font-medium uppercase tracking-wide text-slate-500">
                  Arrays & Hashing
                </span>
              </div>

              <h1 className="mt-6 text-5xl font-bold text-slate-950">
                Two Sum
              </h1>

              <div className="mt-6 flex flex-wrap gap-3">
                <span className="rounded-xl bg-blue-100 px-3 py-2 text-sm text-blue-700">
                  Arrays
                </span>

                <span className="rounded-xl bg-slate-200 px-3 py-2 text-sm text-slate-700">
                  Hash Map
                </span>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-2">
                  <BookOpen size={18} />
                  <span>Written by UnplugIQ Team</span>
                </div>

                <div className="flex items-center gap-2">
                  <Clock3 size={18} />
                  <span>7 min read</span>
                </div>
              </div>
            </div>

            {/* Problem */}

            <section id="problem" className="mt-16">
              <h2 className="text-3xl font-bold text-slate-950">
                What is the Two Sum Problem?
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Given an array of integers and a target value, return the
                indices of the two numbers that add up to the target.
              </p>

              <p className="mt-4 text-lg leading-8 text-slate-600">
                You may assume that exactly one solution exists, and you cannot
                use the same element twice.
              </p>
            </section>

            {/* Examples */}

            <section id="examples" className="mt-16">
              <h2 className="text-3xl font-bold text-slate-950">Examples</h2>

              <div className="mt-8 space-y-6">
                <ExampleCard
                  input="nums = [2,7,11,15], target = 9"
                  output="[0,1]"
                />

                <ExampleCard
                  input="nums = [3,2,4], target = 6"
                  output="[1,2]"
                />

                <ExampleCard input="nums = [3,3], target = 6" output="[0,1]" />
              </div>
            </section>

            {/* Constraints */}

            <section className="mt-16">
              <h2 className="text-3xl font-bold text-slate-950">Constraints</h2>

              <ul className="mt-6 space-y-3 text-slate-700">
                <li>• 2 ≤ nums.length ≤ 10⁴</li>
                <li>• -10⁹ ≤ nums[i] ≤ 10⁹</li>
                <li>• -10⁹ ≤ target ≤ 10⁹</li>
                <li>• Exactly one valid answer exists.</li>
              </ul>
            </section>

            {/* Analysis */}

            <section id="analysis" className="mt-16">
              <h2 className="text-3xl font-bold text-slate-950">Analysis</h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                The simplest solution checks every pair of numbers to see if
                they sum to the target. However, this requires nested loops and
                results in O(n²) time complexity.
              </p>

              <p className="mt-4 text-lg leading-8 text-slate-600">
                A more efficient solution uses a Hash Map to store previously
                visited numbers and their indices, reducing the complexity to
                O(n).
              </p>
            </section>

            {/* Brute Force */}

            <section id="bruteforce" className="mt-16">
              <h2 className="text-3xl font-bold text-slate-950">
                Brute Force Solution
              </h2>

              <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200">
                <div className="border-b border-slate-200 bg-slate-100 px-5 py-3">
                  <div className="flex items-center gap-2">
                    <Code2 size={18} />
                    <span>Python</span>
                  </div>
                </div>

                <pre className="overflow-x-auto bg-slate-950 p-6 text-sm text-slate-200">
                  {`def twoSum(nums, target):
    for i in range(len(nums)):
        for j in range(i + 1, len(nums)):
            if nums[i] + nums[j] == target:
                return [i, j]`}
                </pre>
              </div>

              <ComplexityCard time="O(n²)" space="O(1)" />
            </section>

            {/* Optimal */}

            <section id="optimal" className="mt-16 mb-20">
              <h2 className="text-3xl font-bold text-slate-950">
                Optimal Hash Map Solution
              </h2>

              <p className="mt-4 text-lg leading-8 text-slate-600">
                Store numbers in a hash map while iterating. For each number,
                check whether its complement (target - current number) already
                exists.
              </p>

              <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200">
                <div className="border-b border-slate-200 bg-slate-100 px-5 py-3">
                  <div className="flex items-center gap-2">
                    <Code2 size={18} />
                    <span>Python</span>
                  </div>
                </div>

                <pre className="overflow-x-auto bg-slate-950 p-6 text-sm text-slate-200">
                  {`def twoSum(nums, target):
    seen = {}

    for i, num in enumerate(nums):
        complement = target - num

        if complement in seen:
            return [seen[complement], i]

        seen[num] = i`}
                </pre>
              </div>

              <ComplexityCard time="O(n)" space="O(n)" />
            </section>
          </article>
        </div>
      </div>
      <Footer />
    </main>
  );
}

function ExampleCard({ input, output }: { input: string; output: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6">
      <p>
        <strong>Input:</strong> {input}
      </p>

      <p className="mt-2">
        <strong>Output:</strong> {output}
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
