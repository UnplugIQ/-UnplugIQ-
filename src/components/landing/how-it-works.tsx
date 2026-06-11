import { Calendar, Mic, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: Calendar,
    title: "Schedule Practice Sessions",
    description:
      "Choose technical, HR, behavioral, or company-specific mock interviews whenever you need.",
  },
  {
    icon: Mic,
    title: "Practice Real Interviews",
    description:
      "Experience AI-powered voice interviews and realistic interview simulations tailored to your career goals.",
  },
  {
    icon: TrendingUp,
    title: "Receive Actionable Feedback",
    description:
      "Get detailed insights on communication, technical skills, confidence, and areas for improvement.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-black py-24">
      <div className="container mx-auto px-6">
        <div className="mb-20 text-center">
          <p className="mb-4 font-medium text-blue-400">HOW IT WORKS</p>

          <h2 className="text-4xl font-bold text-white md:text-5xl">
            Get Interview Ready in
            <span className="text-blue-500"> 3 Simple Steps</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-slate-400">
            Everything you need to prepare, practice, improve, and land your
            next opportunity.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.title}
                className="group rounded-3xl border border-slate-800 bg-slate-950 p-8 transition-all duration-300 hover:border-blue-500/30 hover:shadow-[0_0_40px_rgba(59,130,246,0.15)]"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400">
                  <Icon size={26} />
                </div>

                <div className="mb-4 text-sm font-medium text-blue-400">
                  Step {index + 1}
                </div>

                <h3 className="mb-4 text-2xl font-semibold text-white">
                  {step.title}
                </h3>

                <p className="leading-7 text-slate-400">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
