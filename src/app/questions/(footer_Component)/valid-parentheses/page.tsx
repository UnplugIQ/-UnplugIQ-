"use client";

import Footer from "@/components/landing/FooterSection";
import Navbar from "@/components/layout/navbar";
import { BookOpen, Clock3, Code2, CheckCircle } from "lucide-react";

export default function ValidParenthesesPage() {
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
                  href="#solution"
                  className="block text-slate-600 transition hover:text-blue-600"
                >
                  Stack Solution
                </a>

                <a
                  href="#complexity"
                  className="block text-slate-600 transition hover:text-blue-600"
                >
                  Complexity
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
                  Stack & Strings
                </span>
              </div>

              <h1 className="mt-6 text-5xl font-bold tracking-tight text-slate-950">
                Valid Parentheses
              </h1>

              <div className="mt-6 flex flex-wrap gap-3">
                <span className="rounded-xl bg-blue-100 px-3 py-2 text-sm text-blue-700">
                  Stack
                </span>

                <span className="rounded-xl bg-indigo-100 px-3 py-2 text-sm text-indigo-700">
                  Strings
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
                  <span>6 min read</span>
                </div>
              </div>
            </div>

            {/* Problem */}

            <section id="problem" className="mt-16">
              <h2 className="text-3xl font-bold text-slate-950">
                What is the Valid Parentheses Problem?
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Given a string containing only
                <code> () [] {"{}"} </code>
                determine whether the input string is valid.
              </p>

              <p className="mt-4 text-lg leading-8 text-slate-600">
                An input string is valid if:
              </p>

              <ul className="mt-4 space-y-3 text-slate-700">
                <li>• Open brackets must be closed by the same type.</li>
                <li>• Open brackets must be closed in the correct order.</li>
                <li>
                  • Every closing bracket must have a matching opening bracket.
                </li>
              </ul>
            </section>

            {/* Examples */}

            <section id="examples" className="mt-16">
              <h2 className="text-3xl font-bold text-slate-950">Examples</h2>

              <div className="mt-8 space-y-6">
                <ExampleCard
                  input='s = "()"'
                  output="true"
                  explanation="The opening bracket is properly matched and closed."
                />

                <ExampleCard
                  input='s = "()[]{}"'
                  output="true"
                  explanation="All brackets are correctly matched."
                />

                <ExampleCard
                  input='s = "(]"'
                  output="false"
                  explanation="The closing bracket does not match the opening bracket."
                />

                <ExampleCard
                  input='s = "([)]"'
                  output="false"
                  explanation="The brackets are closed in the wrong order."
                />
              </div>
            </section>

            {/* Constraints */}

            <section id="constraints" className="mt-16">
              <h2 className="text-3xl font-bold text-slate-950">Constraints</h2>

              <ul className="mt-6 space-y-3 text-slate-700">
                <li>• 1 ≤ s.length ≤ 10⁴</li>
                <li>• s consists only of brackets ()[]{"{}"}</li>
              </ul>
            </section>

            {/* Analysis */}

            <section id="analysis" className="mt-16">
              <h2 className="text-3xl font-bold text-slate-950">Analysis</h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                This problem is a classic Stack problem.
              </p>

              <p className="mt-4 text-lg leading-8 text-slate-600">
                Every opening bracket should be pushed onto a stack. When a
                closing bracket appears, it must match the most recently opened
                bracket.
              </p>

              <p className="mt-4 text-lg leading-8 text-slate-600">
                The Last-In-First-Out (LIFO) behavior of a stack perfectly
                models this requirement.
              </p>
            </section>

            {/* Solution */}

            <section id="solution" className="mt-16">
              <h2 className="text-3xl font-bold text-slate-950">
                Optimal Stack Solution
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Use a stack to track opening brackets. For each closing bracket,
                check whether it matches the most recent opening bracket.
              </p>

              <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200">
                <div className="border-b border-slate-200 bg-slate-100 px-5 py-3">
                  <div className="flex items-center gap-2">
                    <Code2 size={18} />
                    <span>Python</span>
                  </div>
                </div>

                <pre className="overflow-x-auto bg-slate-950 p-6 text-sm text-slate-200">
                  {`def isValid(s):
    stack = []

    mapping = {
        ")": "(",
        "]": "[",
        "}": "{"
    }

    for char in s:
        if char in mapping:
            if not stack:
                return False

            top = stack.pop()

            if top != mapping[char]:
                return False
        else:
            stack.append(char)

    return len(stack) == 0`}
                </pre>
              </div>
            </section>

            {/* Complexity */}

            <section id="complexity" className="mt-12 mb-24">
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
    <div className="rounded-2xl border border-blue-200 bg-blue-50 p-5">
      <div className="flex items-center gap-2">
        <CheckCircle className="text-blue-600" size={18} />

        <span className="font-medium text-blue-900">Complexity Analysis</span>
      </div>

      <p className="mt-3 text-blue-800">Time Complexity: {time}</p>

      <p className="text-blue-800">Space Complexity: {space}</p>
    </div>
  );
}
