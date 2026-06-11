"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const navLinks = [
  {
    label: "Resources",
    href: "#resources",
  },
  {
    label: "Pricing",
    href: "#pricing",
  },
  {
    label: "Companies",
    href: "#companies",
  },
];

const featureColumns = [
  {
    title: "Interview Prep",
    items: [
      "AI Mock Interviews",
      "Voice Interviews",
      "Behavioral Practice",
      "Technical Rounds",
    ],
  },
  {
    title: "Resume Tools",
    items: [
      "ATS Resume Checker",
      "Resume Builder",
      "Portfolio Analyzer",
      "LinkedIn Optimizer",
    ],
  },
  {
    title: "Career Growth",
    items: [
      "Job Tracker",
      "AI Career Coach",
      "Learning Roadmaps",
      "Analytics Dashboard",
    ],
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Announcement */}
      <div className="border-b border-blue-500/20 bg-blue-500/10 py-2">
        <div className="container mx-auto px-6 text-center text-sm text-blue-400">
          🚀 New: AI Voice Mock Interviews & ATS Resume Analyzer
        </div>
      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/90 backdrop-blur-xl">
        <div className="container mx-auto flex h-20 items-center justify-between px-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10">
              <Image
                src="/logo.png"
                alt="UnplugIQ Logo"
                width={32}
                height={32}
                className="h-6 w-6 object-fill"
              />
            </div>

            <div>
              <div className="flex items-center">
                <span className="text-xl font-bold text-white">Unplug</span>

                <span className="text-xl font-bold text-blue-400">IQ</span>
              </div>

              <p className="text-xs text-slate-400">Interview Intelligence</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="gap-2">
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-slate-300 hover:text-blue-500">
                  Features
                </NavigationMenuTrigger>

                <NavigationMenuContent>
                  <div className="grid w-[750px] grid-cols-3 gap-8 bg-slate-950 p-8">
                    {featureColumns.map((column) => (
                      <div key={column.title}>
                        <h3 className="mb-4 font-semibold text-white">
                          {column.title}
                        </h3>

                        <ul className="space-y-3 text-sm text-slate-400">
                          {column.items.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {navLinks.map((link) => (
                <NavigationMenuItem key={link.label}>
                  <Link
                    href={link.href}
                    className="px-4 py-2 text-sm font-medium text-slate-400 transition hover:text-blue-500"
                  >
                    {link.label}
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-3 md:flex">
            <Button
              variant="ghost"
              className="rounded-xl  bg-blue-500 text-slate-50 hover:text-slate-950 font-extrabold hover:bg-white hover:shadow-lg"
            >
              Login
            </Button>

            <Button className="rounded-xl bg-blue-500 px-6 text-white hover:bg-white font-extrabold hover:text-slate-950 hover:shadow-lg">
              Get Started
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="h-6 w-6 text-white" />
            ) : (
              <Menu className="h-6 w-6 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="border-t border-slate-800 bg-slate-950 lg:hidden">
            <div className="container mx-auto flex flex-col gap-4 px-6 py-6">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-slate-300 transition hover:text-blue-400"
                >
                  {link.label}
                </Link>
              ))}

              <div className="mt-4 flex flex-col gap-3 text-slate-50">
                <Button variant="outline">Login</Button>

                <Button className="bg-blue-500 hover:bg-blue-600">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
