import { CheckCircle2, TrendingUp, Brain, MessageSquare } from "lucide-react";

export default function FeedbackSection() {
  return (
    <section className="bg-slate-950 py-32">
      <div className="container mx-auto px-6">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* Left Side */}

          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
              <Brain size={16} />
              AI Performance Reports
            </div>

            <h2
              className="
                text-5xl
                font-bold
                leading-tight
                text-white
                md:text-6xl
              "
            >
              Know Exactly
              <br />
              <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                What To Improve
              </span>
              <br />
              After Every Interview
            </h2>

            <p
              className="
                mt-8
                max-w-xl
                text-lg
                leading-8
                text-slate-400
              "
            >
              Every mock interview generates a personalized performance report
              covering communication, technical skills, confidence, problem
              solving, and interview readiness.
            </p>

            <div className="mt-10 space-y-5">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-blue-400" />
                <span className="text-slate-300">
                  AI-generated strengths & weaknesses
                </span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-blue-400" />
                <span className="text-slate-300">
                  Technical & behavioral scoring
                </span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-blue-400" />
                <span className="text-slate-300">
                  Personalized improvement roadmap
                </span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-blue-400" />
                <span className="text-slate-300">
                  Company-specific recommendations
                </span>
              </div>
            </div>
          </div>

          {/* Right Side */}

          <div
            className="
              relative
              rounded-3xl
              border
              border-slate-800
              bg-slate-900
              p-8
            "
          >
            {/* Score */}

            <div className="mb-8">
              <h3 className="text-lg font-semibold text-white">
                Interview Performance Report
              </h3>

              <p className="mt-2 text-slate-400">
                Frontend Developer Mock Interview
              </p>
            </div>

            {/* Metrics */}

            <div className="space-y-6">
              <Metric label="Technical Knowledge" score="88%" />

              <Metric label="Problem Solving" score="92%" />

              <Metric label="Communication" score="85%" />

              <Metric label="Confidence" score="90%" />
            </div>

            {/* Floating Notes */}

            <div
              className="
                absolute
                -right-8
                top-24
                hidden
                w-72
                rounded-2xl
                border
                border-green-500/20
                bg-slate-900
                p-4
                shadow-xl
                lg:block
              "
            >
              <div className="flex items-center gap-2 text-green-400">
                <TrendingUp size={16} />
                Strong Area
              </div>

              <p className="mt-3 text-sm text-slate-300">
                Excellent communication and structured approach to problem
                solving.
              </p>
            </div>

            <div
              className="
                absolute
                -right-12
                bottom-12
                hidden
                w-72
                rounded-2xl
                border
                border-blue-500/20
                bg-slate-900
                p-4
                shadow-xl
                lg:block
              "
            >
              <div className="flex items-center gap-2 text-blue-400">
                <MessageSquare size={16} />
                Improvement Tip
              </div>

              <p className="mt-3 text-sm text-slate-300">
                Spend less time explaining the problem and move to
                implementation faster.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Metric({ label, score }: { label: string; score: string }) {
  return (
    <div>
      <div className="mb-2 flex justify-between">
        <span className="text-slate-300">{label}</span>

        <span className="font-semibold text-white">{score}</span>
      </div>

      <div className="h-2 rounded-full bg-slate-800">
        <div
          className="h-2 rounded-full bg-blue-500"
          style={{ width: score }}
        />
      </div>
    </div>
  );
}
