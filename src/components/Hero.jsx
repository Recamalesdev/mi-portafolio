// src/components/Hero.jsx
export function Hero() {
  return (
    <section className="mt-5 flex flex-col gap-6">
      <p className="font-mono text-sm tracking-widest text-zinc-400">
        HOLA, SOY BERNARDO
      </p>

      <h2 className="max-w-2xl text-5xl font-extrabold leading-tight text-zinc-100 md:text-6xl">
        Aporto madurez profesional y{" "}
        <span className="text-emerald-500">disciplina</span> al código.
      </h2>

      <p className="max-w-lg text-lg leading-relaxed text-zinc-400">
        Desarrollador Frontend. Aplico la resistencia y mentalidad del Trail
        Running para crear software robusto, limpio y eficiente.
      </p>

      <div className="mt-10 flex flex-col gap-4 sm:flex-row">
        <a
          href="#proyectos"
          className="rounded-lg bg-emerald-600 px-8 py-3 text-center font-semibold text-white transition-colors hover:bg-emerald-700"
        >
          Ver mis proyectos
        </a>
        <a
          href="#contacto"
          className="rounded-lg border border-zinc-700 px-8 py-3 text-center font-semibold text-zinc-300 transition-all hover:border-emerald-500 hover:text-emerald-500"
        >
          Contactar
        </a>
      </div>
    </section>
  );
}
