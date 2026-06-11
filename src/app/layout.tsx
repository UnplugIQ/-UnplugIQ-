import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Noto_Sans,
  Playfair_Display,
} from "next/font/google";

import "./globals.css";
import { cn } from "@/lib/utils";

const playfairDisplayHeading = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
});

const notoSans = Noto_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://unplugiq.com"),

  title: {
    default: "UnplugIQ | AI Mock Interviews & Career Preparation Platform",
    template: "%s | UnplugIQ",
  },

  description:
    "Prepare for interviews with AI-powered mock interviews, resume analysis, ATS checks, coding practice, system design preparation, and personalized feedback. Built for students and job seekers.",

  keywords: [
    "AI Mock Interview",
    "Interview Preparation",
    "Resume Analyzer",
    "ATS Resume Checker",
    "System Design Interview",
    "DSA Practice",
    "Job Preparation",
    "Coding Interview",
    "Behavioral Interview",
    "Technical Interview",
    "Career Growth",
    "Interview Feedback",
    "Students",
    "Software Engineer Interview",
    "Placement Preparation",
  ],

  authors: [
    {
      name: "UnplugIQ",
    },
  ],

  creator: "UnplugIQ",

  publisher: "UnplugIQ",

  category: "Education",

  robots: {
    index: true,
    follow: true,
    nocache: false,

    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",

    locale: "en_US",

    url: "https://unplugiq.com",

    title: "UnplugIQ | AI Mock Interviews & Career Preparation Platform",

    description:
      "Practice real interviews, improve your resume, get AI-powered feedback, and land your next opportunity faster.",

    siteName: "UnplugIQ",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "UnplugIQ",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "UnplugIQ | AI Mock Interviews & Career Preparation Platform",

    description:
      "Practice interviews, improve resumes, and get hired faster with AI-powered career preparation.",

    images: ["/og-image.png"],
  },

  alternates: {
    canonical: "/",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        geistSans.variable,
        geistMono.variable,
        notoSans.variable,
        playfairDisplayHeading.variable,
        "font-sans",
      )}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
