import { coreTechnologies } from "@/data/portfolio";

export default function Hero() {
  return (
    <section
        id="home"
        aria-labelledby="hero-heading"
        className="technical-grid relative flex min-h-svh items-center overflow-hidden"
      >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.025] blur-3xl"
      />

      <div className="relative mx-auto w-full max-w-7xl px-6 pb-20 pt-40 sm:pt-32 lg:px-8">
        <div className="max-w-5xl">
          {/* Availability */}
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-neutral-400">
            <span aria-hidden="true" className="h-2 w-2 shrink-0 rounded-full bg-emerald-400" />
            Available for new opportunities
          </div>

          {/* Role */}
          <p className="mb-5 font-mono text-sm uppercase tracking-[0.3em] text-neutral-400">
            Software Engineer
          </p>

          {/* Main heading */}
            <h1 id="hero-heading" className="max-w-5xl text-[clamp(2.5rem,6.5vw,5.25rem)] font-semibold leading-[1.05] tracking-[-0.045em]">
            I build software that turns{" "}
            <span className="text-neutral-400">complex ideas</span> into
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
              href="#about"
              className="inline-flex h-12 items-center justify-center rounded-full bg-white px-7 text-sm font-medium text-neutral-950 transition hover:bg-neutral-200"
            >
              About my work
              <span className="ml-2" aria-hidden="true">
                →
              </span>
            </a>

            <a
              href="#expertise"
              className="inline-flex h-12 items-center justify-center rounded-full border border-white/15 px-7 text-sm font-medium text-white transition hover:border-white/30 hover:bg-white/5"
            >
              Technical expertise
            </a>
          </div>

          {/* Technologies */}
          <div className="mt-16 border-t border-white/10 pt-8">
            <p className="mb-4 text-xs uppercase tracking-[0.2em] text-neutral-400">
              Core technologies
            </p>

            <div className="flex flex-wrap gap-x-6 gap-y-3">
              {coreTechnologies.map((technology) => (
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
      <div className="absolute bottom-8 right-8 hidden items-center gap-3 text-xs uppercase tracking-[0.2em] text-neutral-400 lg:flex">
        Scroll
        <span aria-hidden="true">↓</span>
      </div>
    </section>
  );
}
