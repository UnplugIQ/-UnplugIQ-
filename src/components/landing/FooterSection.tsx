import Link from "next/link";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const footerSections = [
  {
    title: "Interview Prep",
    links: [
      { label: "AI Mock Interviews", href: "/mock-interviews" },
      { label: "Technical Interviews", href: "/technical" },
      { label: "Behavioral Interviews", href: "/behavioral" },
      { label: "System Design", href: "/system-design" },
      { label: "Company Tracks", href: "/companies" },
      { label: "Interview Feedback", href: "/feedback" },
    ],
  },
  {
    title: "Practice",
    links: [
      { label: "Resume Analyzer", href: "/resume-analyzer" },
      { label: "ATS Resume Checker", href: "/ats-checker" },
      { label: "DSA Practice", href: "/dsa" },
      { label: "Career Roadmaps", href: "/roadmaps" },
      { label: "Job Tracker", href: "/job-tracker" },
      { label: "Coding Challenges", href: "/challenges" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Interview Questions", href: "/questions" },
      { label: "Blog", href: "/blog" },
      { label: "Success Stories", href: "/success-stories" },
      { label: "Guides", href: "/guides" },
      { label: "Help Center", href: "/help" },
      { label: "FAQs", href: "/faq" },
    ],
  },
  {
    title: "Popular Questions",
    links: [
      { label: "Two Sum", href: "/questions/two-sum" },
      {
        label: "Reverse Linked List",
        href: "/questions/reverse-linked-list",
      },
      {
        label: "Longest Substring",
        href: "/questions/longest-substring",
      },
      {
        label: "Merge Intervals",
        href: "/questions/merge-intervals",
      },
      {
        label: "Valid Parentheses",
        href: "/questions/valid-parentheses",
      },
      {
        label: "System Design Basics",
        href: "/questions/system-design",
      },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Pricing", href: "/pricing" },
      { label: "Contact", href: "/contact" },
      { label: "Careers", href: "/careers" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
];

type FooterLink = {
  label: string;
  href: string;
};

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: FooterLink[];
}) {
  return (
    <div>
      <h3 className="mb-6 text-lg font-semibold text-white">{title}</h3>

      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-slate-400 transition-colors duration-200 hover:text-white"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-black">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 py-20 lg:grid-cols-7">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block">
              <div className="text-2xl font-bold tracking-tight">
                <span className="text-blue-500">Unplug</span>
                <span className="text-white">IQ</span>
              </div>
            </Link>

            <p className="mt-5 max-w-sm leading-7 text-slate-400">
              AI-powered interview preparation platform helping students and
              professionals master technical, behavioral, and system design
              interviews.
            </p>

            <div className="mt-8 flex items-center gap-5">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-slate-500 transition-colors hover:text-white"
              >
                <FaGithub size={20} />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-slate-500 transition-colors hover:text-white"
              >
                <FaLinkedin size={20} />
              </a>

              <a
                href="mailto:hello@unplugiq.com"
                aria-label="Email"
                className="text-slate-500 transition-colors hover:text-white"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {footerSections.map((section) => (
            <FooterColumn
              key={section.title}
              title={section.title}
              links={section.links}
            />
          ))}
        </div>

        <div className="flex flex-col gap-4 border-t border-slate-800 py-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>© 2026 UnplugIQ. All rights reserved.</p>

          <div className="flex flex-wrap items-center gap-6">
            <Link
              href="/privacy"
              className="transition-colors hover:text-white"
            >
              Privacy Policy
            </Link>

            <Link href="/terms" className="transition-colors hover:text-white">
              Terms of Service
            </Link>

            <Link
              href="/contact"
              className="transition-colors hover:text-white"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
