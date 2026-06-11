import { Mic, Timer, Code2, Bot } from "lucide-react";

const CODE_SNIPPET = `function twoSum(nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];

    if (map.has(diff)) {
      return [map.get(diff), i];
    }

    map.set(nums[i], i);
  }
}`;

export default function InterviewPreview() {
  return (
    <section className="bg-slate-950 py-32">
      <div className="container mx-auto px-6">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* Left Side */}
          <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-2xl">
            {/* Browser Top */}
            <div className="flex items-center gap-2 border-b border-slate-800 p-4">
              <div className="h-3 w-3 rounded-full bg-red-500" />
              <div className="h-3 w-3 rounded-full bg-yellow-500" />
              <div className="h-3 w-3 rounded-full bg-green-500" />
            </div>

            {/* Header */}
            <div className="flex items-center justify-between p-6">
              <div>
                <p className="text-sm text-slate-400">Mock Interview Session</p>

                <h3 className="mt-1 text-lg font-semibold text-white">
                  Frontend Developer Interview
                </h3>
              </div>

              <div className="flex items-center gap-2 rounded-xl border border-slate-700 px-3 py-2">
                <Timer className="h-4 w-4 text-blue-400" />
                <span className="text-sm text-white">32:45</span>
              </div>
            </div>

            {/* Controls */}
            <div className="flex gap-4 px-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-700">
                <Mic className="h-5 w-5 text-white" />
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-700">
                <Bot className="h-5 w-5 text-blue-400" />
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-700">
                <Code2 className="h-5 w-5 text-white" />
              </div>
            </div>

            {/* Code Area */}
            <div className="p-6">
              <pre className="overflow-hidden rounded-2xl border border-slate-800 bg-black p-6 text-sm text-slate-300">
                <code>{CODE_SNIPPET}</code>
              </pre>
            </div>
          </div>

          {/* Right Side */}
          <div>
            <div className="mb-4 inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
              AI Mock Interviews
            </div>

            <h2 className="text-5xl font-bold leading-tight text-white md:text-6xl">
              Practice Interviews
              <br />
              <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                That Feel Real
              </span>
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-400">
              Simulate real interview environments with AI-powered voice
              conversations, coding rounds, behavioral questions, and detailed
              performance feedback designed to help you get hired faster.
            </p>

            <div className="mt-10 space-y-4">
              {[
                "Voice-based mock interviews",
                "Coding & system design practice",
                "Instant AI feedback & scoring",
                "Company-specific interview tracks",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-slate-300"
                >
                  ✓ {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
