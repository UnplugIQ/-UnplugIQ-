"use client";

import Footer from "@/components/landing/FooterSection";
import Navbar from "@/components/layout/navbar";
import { BookOpen, Clock3, Code2, CheckCircle } from "lucide-react";

export default function LongestSubstringPage() {
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
                  className="block text-slate-600 transition hover:text-blue-600"
                >
                  Problem
                </a>

                <a
                  href="#examples"
                  className="block text-slate-600 transition hover:text-blue-600"
                >
                  Examples
                </a>

                <a
                  href="#constraints"
                  className="block text-slate-600 transition hover:text-blue-600"
                >
                  Constraints
                </a>

                <a
                  href="#analysis"
                  className="block text-slate-600 transition hover:text-blue-600"
                >
                  Analysis
                </a>

                <a
                  href="#bruteforce"
                  className="block text-slate-600 transition hover:text-blue-600"
                >
                  Brute Force
                </a>

                <a
                  href="#optimal"
                  className="block text-slate-600 transition hover:text-blue-600"
                >
                  Sliding Window
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
                  Strings & Sliding Window
                </span>
              </div>

              <h1 className="mt-6 text-5xl font-bold tracking-tight text-slate-950">
                Longest Substring Without Repeating Characters
              </h1>

              <div className="mt-6 flex flex-wrap gap-3">
                <span className="rounded-xl bg-blue-100 px-3 py-2 text-sm text-blue-700">
                  Strings
                </span>

                <span className="rounded-xl bg-indigo-100 px-3 py-2 text-sm text-indigo-700">
                  Sliding Window
                </span>

                <span className="rounded-xl bg-slate-200 px-3 py-2 text-sm text-slate-700">
                  Hash Set
                </span>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-2">
                  <BookOpen size={18} />
                  <span>Written by UnplugIQ Team</span>
                </div>

                <div className="flex items-center gap-2">
                  <Clock3 size={18} />
                  <span>10 min read</span>
                </div>
              </div>
            </div>

            {/* Problem */}

            <section id="problem" className="mt-16">
              <h2 className="text-3xl font-bold text-slate-950">
                What is the Problem?
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Given a string <code>s</code>, find the length of the longest
                substring without repeating characters.
              </p>

              <p className="mt-4 text-lg leading-8 text-slate-600">
                A substring is a contiguous sequence of characters within a
                string.
              </p>
            </section>

            {/* Examples */}

            <section id="examples" className="mt-16">
              <h2 className="text-3xl font-bold text-slate-950">Examples</h2>

              <div className="mt-8 space-y-6">
                <ExampleCard
                  input='s = "abcabcbb"'
                  output="3"
                  explanation='The answer is "abc".'
                />

                <ExampleCard
                  input='s = "bbbbb"'
                  output="1"
                  explanation='The answer is "b".'
                />

                <ExampleCard
                  input='s = "pwwkew"'
                  output="3"
                  explanation='The answer is "wke".'
                />
              </div>
            </section>

            {/* Constraints */}

            <section id="constraints" className="mt-16">
              <h2 className="text-3xl font-bold text-slate-950">Constraints</h2>

              <ul className="mt-6 space-y-3 text-slate-700">
                <li>• 0 ≤ s.length ≤ 50,000</li>
                <li>
                  • s consists of English letters, digits, symbols and spaces.
                </li>
              </ul>
            </section>

            {/* Analysis */}

            <section id="analysis" className="mt-16">
              <h2 className="text-3xl font-bold text-slate-950">Analysis</h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                The main challenge is efficiently tracking repeated characters
                while expanding a substring.
              </p>

              <p className="mt-4 text-lg leading-8 text-slate-600">
                A brute-force solution checks every possible substring, but this
                becomes extremely slow for large inputs.
              </p>

              <p className="mt-4 text-lg leading-8 text-slate-600">
                The optimal solution uses a Sliding Window with a Hash Set to
                keep track of characters currently inside the window.
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
                  {`def lengthOfLongestSubstring(s):
    n = len(s)
    longest = 0

    for i in range(n):
        seen = set()

        for j in range(i, n):
            if s[j] in seen:
                break

            seen.add(s[j])
            longest = max(longest, j - i + 1)

    return longest`}
                </pre>
              </div>

              <ComplexityCard time="O(n²)" space="O(n)" />
            </section>

            {/* Optimal */}

            <section id="optimal" className="mt-16 mb-24">
              <h2 className="text-3xl font-bold text-slate-950">
                Optimal Sliding Window Solution
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Use two pointers to maintain a window of unique characters.
                Expand the right pointer and shrink from the left whenever a
                duplicate appears.
              </p>

              <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200">
                <div className="border-b border-slate-200 bg-slate-100 px-5 py-3">
                  <div className="flex items-center gap-2">
                    <Code2 size={18} />
                    <span>Python</span>
                  </div>
                </div>

                <pre className="overflow-x-auto bg-slate-950 p-6 text-sm text-slate-200">
                  {`def lengthOfLongestSubstring(s):
    chars = set()

    left = 0
    longest = 0

    for right in range(len(s)):
        while s[right] in chars:
            chars.remove(s[left])
            left += 1

        chars.add(s[right])

        longest = max(
            longest,
            right - left + 1
        )

    return longest`}
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
