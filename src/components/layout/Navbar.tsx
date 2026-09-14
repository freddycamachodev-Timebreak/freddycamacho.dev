export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-neutral-950/80 backdrop-blur-md">
      <nav aria-label="Main navigation" className="mx-auto flex min-h-20 max-w-7xl flex-col justify-center gap-1 px-6 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:py-0 lg:px-8">
        <a href="#home" className="text-sm font-semibold tracking-tight text-white sm:text-lg">
          Freddy Arturo Camacho Garcia<span className="text-neutral-500">.</span>
        </a>
        <ul className="flex shrink-0 items-center gap-6 text-sm text-neutral-400">
          <li><a className="inline-flex min-h-11 items-center transition hover:text-white" href="#about">About</a></li>
          <li><a className="inline-flex min-h-11 items-center transition hover:text-white" href="#expertise">Expertise</a></li>
        </ul>
      </nav>
    </header>
  );
}
