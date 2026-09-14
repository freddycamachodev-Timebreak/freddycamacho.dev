export default function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="border-t border-white/10 px-6 py-20 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-neutral-400">01 / About</p>
        <div className="mt-8 grid gap-8 lg:grid-cols-2 lg:gap-20">
          <h2 id="about-heading" className="max-w-xl text-3xl font-medium leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            A backend foundation.<br />
            <span className="text-neutral-400">A product perspective.</span>
          </h2>
          <div className="max-w-xl space-y-6 text-base leading-8 text-neutral-400 sm:text-lg">
            <p>I&apos;m Freddy, a Software Engineer with 5+ years of professional experience. My strongest foundation is in Java and backend engineering, building enterprise applications and integrations that support business-critical workflows.</p>
            <p>I bring that experience to modern full-stack and cloud applications, connecting reliable services with thoughtful interfaces and real-time communication. I care about understanding the problem, making clear technical decisions, and building software that others can maintain.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
