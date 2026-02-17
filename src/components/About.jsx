export function About() {
  return (
    <section id="sobre-mi" className="mt-32">
      <h3 className="text-2xl font-bold text-zinc-100">
        Más allá del <span className="text-emerald-500">Código</span>
      </h3>

      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center">
        {/* COLUMNA IZQUIERDA: Narrativa */}
        <div className="space-y-6 leading-relaxed text-zinc-400">
          <p className="leading-relaxed text-zinc-400">
            Tengo 38 años y vengo de una trayectoria laboral dura y real. No soy
            el típico perfil que acaba de salir de la universidad. Aporto la{" "}
            <strong>
              madurez, la responsabilidad y la capacidad de resolución
            </strong>{" "}
            que solo dan los años de trabajo en entornos exigentes.
          </p>

          <p className="leading-relaxed text-zinc-400">
            Mi filosofía es simple:{" "}
            <span className="text-zinc-200 font-medium">
              Deep Work y Mejora Continua (el 1% diario)
            </span>
            . Al igual que en el <strong>Trail Running</strong>, en el
            desarrollo web no busco atajos, sino construir una base sólida que
            me permita llegar lejos sin "lesionarme" (quemarme).
          </p>
          <p>
            Actualmente centrado en dominar el ecosistema{" "}
            <span className="text-zinc-200 font-medium">React</span> y{" "}
            <span className="text-zinc-200 font-medium">Tailwind CSS</span>,
            creando interfaces limpias, eficientes y pensadas para escalar a
            largo plazo.
          </p>
        </div>

        {/* COLUMNA DERECHA: Mis Valores Fundamentales */}
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-8">
          <ul className="space-y-4">
            <li className="flex items-center gap-3">
              <span className="text-emerald-500">▹</span>
              <span className="font-medium text-zinc-300">
                Foco y Trabajo Profundo (Deep Work)
              </span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-emerald-500">▹</span>
              <span className="font-medium text-zinc-300">
                Resolución de Problemas Complejos
              </span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-emerald-500">▹</span>
              <span className="font-medium text-zinc-300">
                Código Limpio y Mantenible
              </span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-emerald-500">▹</span>
              <span className="font-medium text-zinc-300">
                Visión y Ejecución a Largo Plazo
              </span>
            </li>
          </ul>
        </div>
      </div>

      /// SECCIÓN DE TECNOLOGÍAS
      <div className="mt-16 border-t border-zinc-800 pt-12">
        <h4 className="mb-8 text-sm font-mono tracking-widest text-emerald-500 uppercase">
          Tecnologías & Herramientas
        </h4>
        <div className="flex flex-wrap  gap-3">
          {[
            "React",
            "Tailwind CSS",
            "JavaScript (ES6+)",
            "HTML5",
            "CSS3",
            "Git",
            "Vite",
          ].map((tech) => (
            <span
              key={tech}
              className="rounded border border-zinc-800 bg-zinc-900/50 px-3 py-1.5 text-xs font-medium text-zinc-300"
            >
              {tech}
            </span>
          ))}
          <span className="rounded border border-dashed border-zinc-700 px-3 py-1.5 text-xs font-medium text-zinc-500 italic">
            Aprendiendo: Node.js / Testing...
          </span>
        </div>
      </div>
    </section>
  );
}
