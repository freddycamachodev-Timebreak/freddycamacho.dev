const technologies = [
  "Java",
  "Spring Boot",
  "TypeScript",
  "Next.js",
  "AWS",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      {/* Navigation */}
      <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-neutral-950/80 backdrop-blur-md">
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
          <a
            href="#home"
            className="text-lg font-semibold tracking-tight text-white"
          >
            Freddy<span className="text-neutral-500">.</span>
          </a>

          <div className="hidden items-center gap-8 text-sm text-neutral-400 md:flex">
            <a className="transition hover:text-white" href="#about">
              About
            </a>

            <a className="transition hover:text-white" href="#experience">
              Experience
            </a>

            <a className="transition hover:text-white" href="#projects">
              Projects
            </a>

            <a className="transition hover:text-white" href="#contact">
              Contact
            </a>
          </div>
        </nav>
      </header>

      {/* Hero */}
        <section
          id="home"
          className="technical-grid relative flex min-h-screen items-center overflow-hidden"
        >
        {/* Background decoration */}
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.025] blur-3xl"
        />

        <div className="relative mx-auto w-full max-w-7xl px-6 pb-20 pt-32 lg:px-8">
          <div className="max-w-5xl">
            {/* Availability */}
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-neutral-400">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Available for new opportunities
            </div>

            {/* Role */}
            <p className="mb-5 font-mono text-sm uppercase tracking-[0.3em] text-neutral-500">
              Software Engineer
            </p>

            {/* Main heading */}
            <h1 className="max-w-5xl text-5xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-6xl md:text-7xl lg:text-8xl">
              I build software that turns{" "}
              <span className="text-neutral-500">complex ideas</span> into
              reliable products.
            </h1>

            {/* Description */}
            <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-400 md:text-xl">
              I&apos;m Freddy Camacho, a Software Engineer focused on backend
              systems, enterprise applications, cloud technologies and modern
              digital products.
            </p>

            {/* CTA */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#projects"
                className="inline-flex h-12 items-center justify-center rounded-full bg-white px-7 text-sm font-medium text-neutral-950 transition hover:bg-neutral-200"
              >
                View my work
                <span className="ml-2" aria-hidden="true">
                  →
                </span>
              </a>

              <a
                href="#contact"
                className="inline-flex h-12 items-center justify-center rounded-full border border-white/15 px-7 text-sm font-medium text-white transition hover:border-white/30 hover:bg-white/5"
              >
                Contact me
              </a>
            </div>

            {/* Technologies */}
            <div className="mt-16 border-t border-white/10 pt-8">
              <p className="mb-4 text-xs uppercase tracking-[0.2em] text-neutral-600">
                Core technologies
              </p>

              <div className="flex flex-wrap gap-x-6 gap-y-3">
                {technologies.map((technology) => (
                  <span
                    key={technology}
                    className="font-mono text-sm text-neutral-400"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 right-8 hidden items-center gap-3 text-xs uppercase tracking-[0.2em] text-neutral-600 lg:flex">
          Scroll
          <span aria-hidden="true">↓</span>
        </div>
      </section>

      {/* Temporary next section */}
      <section
        id="about"
        className="border-t border-white/10 bg-neutral-950 px-6 py-32 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <p className="font-mono text-sm uppercase tracking-[0.25em] text-neutral-500">
            01 / About
          </p>

          <h2 className="mt-6 max-w-4xl text-3xl font-medium leading-tight tracking-tight sm:text-4xl md:text-5xl">
            Engineering reliable systems while exploring the intersection of
            software, cloud and intelligent products.
          </h2>
        </div>
      </section>

      {/* Anchor placeholders */}
      <div id="experience" />
      <div id="projects" />
      <div id="contact" />
    </main>
  );
}