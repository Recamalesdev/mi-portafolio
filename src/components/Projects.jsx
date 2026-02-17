// src/components/Projects.jsx

export function Projects() {
  return (
    <section id="proyectos" className="mt-32">
      <h3 className="mb-8 text-2xl font-bold text-zinc-100">
        Proyectos <span className="text-emerald-500">Destacados</span>
      </h3>

      {/* EL MOTOR GRID: 1 columna en móvil, 2 columnas en pantallas medianas (md) */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* TARJETA 1*/}
        <div className="rounded-xl border border-zinc-800 bg-zinc-900/5 p-6 transition-all hover:border-emerald-500/50">
          <h4 className="mb-2 text-xl font-semibold text-zinc-100">
            Web Corporativa (Cliente Real)
          </h4>
          <p className="mb-4 text-sm leading-relaxed text-zinc-400">
            Desarrollo SPA para un negocio local. Enfoque en accesibilidad,
            rendimiento y diseño Mobile-First.
          </p>
          {/* Etiquetas de Tecnología */}
          <div className="mb-6 flex flex-wrap gap-2">
            <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
              React
            </span>
            <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
              Tailwind
            </span>
          </div>
          <a
            href="https://web-jose-manuel-seven.vercel.app/"
            className="text-sm font-medium text-zinc-300 transition-colors hover:text-emerald-400"
          >
            Ver Proyecto →
          </a>
        </div>

        {/* TARJETA 2 */}
        <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 transition-all hover:border-emerald-500/50">
          <h4 className="mb-2 text-xl font-semibold text-zinc-100">
            Trivia Game
          </h4>
          <p className="mb-4 text-sm leading-relaxed text-zinc-400">
            Aplicación interactiva de preguntas y respuestas. Gestión del
            estado, consumo de datos y manipulación del DOM.
          </p>
          {/* Etiquetas de Tecnología */}
          <div className="mb-6 flex flex-wrap gap-2">
            <span className="rounded-full bg-zinc-800 px-3 py-1 text-xs font-medium text-zinc-300">
              JavaScript
            </span>
            <span className="rounded-full bg-zinc-800 px-3 py-1 text-xs font-medium text-zinc-300">
              HTML/CSS
            </span>
          </div>
          <a
            href="https://github.com/Recamalesdev/trivial-game"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-zinc-300 transition-colors hover:text-emerald-400"
          >
            Ver Código →
          </a>
        </div>
      </div>
    </section>
  );
}
