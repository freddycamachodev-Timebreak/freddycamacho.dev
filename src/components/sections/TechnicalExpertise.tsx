import { expertiseAreas } from "@/data/portfolio";

export default function TechnicalExpertise() {
  return (
    <section id="expertise" aria-labelledby="expertise-heading" className="px-6 pb-20 sm:pb-28 lg:px-8">
      <div className="mx-auto max-w-7xl border-t border-white/10 pt-12">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-neutral-400">Technical expertise</p>
        <h2 id="expertise-heading" className="mt-5 text-2xl font-medium tracking-tight sm:text-3xl">From core systems to digital products.</h2>
        <div className="mt-10 grid gap-x-12 gap-y-10 md:grid-cols-2">
          {expertiseAreas.map((area) => (
            <article key={area.title} className="border-t border-white/10 pt-6">
              <h3 className="text-lg font-medium">{area.title}</h3>
              <p className="mt-3 max-w-lg text-base leading-7 text-neutral-400">{area.description}</p>
              <ul aria-label={`${area.title} technologies`} className="mt-5 flex flex-wrap gap-2">
                {area.technologies.map((technology) => (
                  <li key={technology} className="rounded border border-white/10 bg-white/[0.02] px-3 py-1.5 font-mono text-xs leading-5 text-neutral-300">{technology}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
