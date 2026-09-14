import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import TechnicalExpertise from "@/components/sections/TechnicalExpertise";

export default function Home() {
  return (
    <>
      <a href="#main-content" className="sr-only fixed left-6 top-6 z-[60] rounded bg-white px-4 py-3 text-neutral-950 focus:not-sr-only">
        Skip to content
      </a>
      <Navbar />
      <main tabIndex={-1} id="main-content" className="min-h-screen bg-neutral-950 text-white">
        <Hero />
        <About />
        <TechnicalExpertise />
      </main>
    </>
  );
}
