export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
        {/* GRUPO LOGO + TÍTULO ALINEADOS */}
        <a href="#inicio" className="flex items-baseline gap-2">
          <span className="text-xl font-bold tracking-tighter">
            <span className="text-zinc-100 font-bold">B</span>
            <span className="text-emerald-500 font-bold">R.</span>
          </span>
          <span className="hidden sm:block text-sm font-medium text-zinc-400">
            Desarrollador Frontend
          </span>
        </a>

        {/* ENLACES DE NAVEGACIÓN */}
        <div className="flex gap-6 text-xs font-medium uppercase tracking-widest text-zinc-400 sm:gap-8">
          <a
            href="#proyectos"
            className="transition-colors hover:text-emerald-500"
          >
            Proyectos
          </a>
          <a
            href="#sobre-mi"
            className="transition-colors hover:text-emerald-500"
          >
            Sobre mí
          </a>

          <a
            href="#contacto"
            className="transition-colors hover:text-emerald-500 text-emerald-500/80"
          >
            Contacto
          </a>
        </div>
      </div>
    </nav>
  );
}
