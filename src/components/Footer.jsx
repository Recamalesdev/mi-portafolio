export function Footer() {
  return (
    <footer
      id="contacto"
      className="mt-32 border-t border-zinc-800 py-12 text-center"
    >
      <h2 className="mb-6 text-2xl font-bold text-zinc-100">¿Hablamos?</h2>

      <p className="text-zinc-400 max-w-lg mx-auto mb-10 leading-relaxed">
        Busco mi primera oportunidad como Frontend Developer. Si valoras la
        disciplina y la madurez técnica, estoy listo para empezar.
      </p>

      <div className="mb-8 flex justify-center gap-6">
        <a
          href="https://www.linkedin.com/in/bernardo-recamales-guti%C3%A9rrez-13b87a2a1/"
          target="_blank"
          className="flex items-center justify-center rounded-full border border-zinc-700 bg-zinc-900 px-6 py-2 text-sm font-medium text-zinc-300 transition-all hover:border-emerald-500 hover:text-emerald-500"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/Recamalesdev"
          target="_blank"
          className=" flex items-center justify-center rounded-full border border-zinc-700 bg-zinc-900 px-6 py-2 text-sm font-medium text-zinc-300 transition-all hover:border-emerald-500 hover:text-emerald-500"
        >
          GitHub
        </a>
        <a
          href="mailto:bernardorecamalesgt@gmail.com"
          target="_blank"
          className="flex items-center justify-center rounded-full bg-emerald-600 px-6 py-2 text-sm font-medium text-white transition-all hover:bg-emerald-700"
        >
          Enviar Email
        </a>
      </div>

      <p className="text-xs text-zinc-600">
        © 2026 Bernardo Recamales. Construido con React, Tailwind & Disciplina.
      </p>
    </footer>
  );
}
