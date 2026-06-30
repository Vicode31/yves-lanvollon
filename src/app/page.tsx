"use client";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import GoogleReviews from "@/components/GoogleReviews";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Question from "@/components/Question";
import Soins from "@/components/Soins";

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden">
      <Navbar />
      <HeroSection />
      <GoogleReviews />
      <About />
      <Soins />
      <Question />
      <Contact />
      <Footer />
    </div>
  );
}
