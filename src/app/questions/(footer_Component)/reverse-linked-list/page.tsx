"use client";

import Footer from "@/components/landing/FooterSection";
import Navbar from "@/components/layout/navbar";
import { Clock3, BookOpen, Code2, CheckCircle } from "lucide-react";

export default function ReverseLinkedListPage() {
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
                  href="#recursive"
                  className="block text-slate-600 hover:text-blue-600"
                >
                  Recursive Solution
                </a>

                <a
                  href="#iterative"
                  className="block text-slate-600 hover:text-blue-600"
                >
                  Iterative Solution
                </a>
              </nav>
            </div>
          </aside>

          {/* Content */}

          <article>
            {/* Header */}

            <div>
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
                  Easy
                </span>

                <span className="text-sm font-medium uppercase tracking-wide text-slate-500">
                  Data Structures & Algorithms
                </span>
              </div>

              <h1 className="mt-6 text-5xl font-bold text-slate-950">
                Reverse a Linked List
              </h1>

              <div className="mt-6 flex flex-wrap gap-3">
                <span className="rounded-xl bg-blue-100 px-3 py-2 text-sm text-blue-700">
                  Linked Lists
                </span>

                <span className="rounded-xl bg-slate-200 px-3 py-2 text-sm text-slate-700">
                  Arrays
                </span>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-2">
                  <BookOpen size={18} />
                  <span>Written by UnplugIQ Team</span>
                </div>

                <div className="flex items-center gap-2">
                  <Clock3 size={18} />
                  <span>8 min read</span>
                </div>
              </div>
            </div>

            {/* Problem */}

            <section id="problem" className="mt-16">
              <h2 className="text-3xl font-bold text-slate-950">
                What is the Reverse Linked List Problem?
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Given the head of a singly linked list, reverse the list and
                return the new head.
              </p>
            </section>

            {/* Examples */}

            <section id="examples" className="mt-16">
              <h2 className="text-3xl font-bold text-slate-950">Examples</h2>

              <div className="mt-8 space-y-6">
                <ExampleCard input="[1,2,3,4,5]" output="[5,4,3,2,1]" />

                <ExampleCard input="[1,2]" output="[2,1]" />

                <ExampleCard input="[1]" output="[1]" />
              </div>
            </section>

            {/* Constraints */}

            <section className="mt-16">
              <h2 className="text-3xl font-bold text-slate-950">Constraints</h2>

              <ul className="mt-6 space-y-3 text-slate-700">
                <li>• Number of nodes: [0, 5000]</li>
                <li>• -5000 ≤ Node.value ≤ 5000</li>
              </ul>
            </section>

            {/* Analysis */}

            <section id="analysis" className="mt-16">
              <h2 className="text-3xl font-bold text-slate-950">Analysis</h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                A linked list stores data as nodes connected through pointers.
                To reverse a linked list, we must change each node's next
                pointer to point to its previous node.
              </p>
            </section>

            {/* Recursive */}

            <section id="recursive" className="mt-16">
              <h2 className="text-3xl font-bold text-slate-950">
                Recursive Solution
              </h2>

              <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200">
                <div className="border-b border-slate-200 bg-slate-100 px-5 py-3">
                  <div className="flex items-center gap-2">
                    <Code2 size={18} />
                    <span>Python</span>
                  </div>
                </div>

                <pre className="overflow-x-auto bg-slate-950 p-6 text-sm text-slate-200">
                  {`class Solution:
    def reverse_list(node):
        if not node or not node.next:
            return node

        prev = reverse_list(node.next)

        node.next.next = node
        node.next = None

        return prev`}
                </pre>
              </div>

              <ComplexityCard time="O(n)" space="O(n)" />
            </section>

            {/* Iterative */}

            <section id="iterative" className="mt-16 mb-20">
              <h2 className="text-3xl font-bold text-slate-950">
                Iterative Solution
              </h2>

              <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200">
                <div className="border-b border-slate-200 bg-slate-100 px-5 py-3">
                  Python
                </div>

                <pre className="overflow-x-auto bg-slate-950 p-6 text-sm text-slate-200">
                  {`class Solution:
    def reverse_list(self, node):
        prev = None
        curr = node

        while curr:
            nxt = curr.next
            curr.next = prev
            prev = curr
            curr = nxt

        return prev`}
                </pre>
              </div>

              <ComplexityCard time="O(n)" space="O(1)" />
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
