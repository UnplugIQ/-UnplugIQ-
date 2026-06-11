import Hero from "@/components/landing/HeroSecion";
import Navbar from "@/components/layout/navbar";
import HowItWorks from "@/components/landing/how-it-works";
import ValueProps from "@/components/landing/ValueSection";
import InterviewPreview from "@/components/landing/InterviewPreview";
import FeedbackSection from "@/components/landing/FeedbackSection";
import TrustedCompanies from "@/components/landing/TrustedCompanies";
import CTASection from "@/components/landing/CTASection";
import CareerGrowthSection from "@/components/landing/CareerGrowthSection";
import Footer from "@/components/landing/FooterSection";
export default function Landing() {
  return (
    <main>
      <Navbar />
      <Hero />
      <HowItWorks />
      <ValueProps />
      <InterviewPreview />
      <FeedbackSection />
      <TrustedCompanies />
      <CTASection />
      <CareerGrowthSection />
      <Footer />
    </main>
  );
}
