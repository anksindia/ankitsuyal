"use client";
import AboutSection from "./components/AboutSection";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <main
      className="min-h-screen w-full overflow-x-hidden flex flex-col flex-wrap"
      style={{ maxWidth: "100vw" }}
    >
      <HeroSection />
      <AboutSection />
    </main>
  );
}
