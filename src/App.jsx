import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { About } from "./components/About";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div className="bg-zinc-950 min-h-screen">
      <Navbar />
      {/* Contenedor Principal: Máximo ancho, centrado, con padding horizontal y vertical */}
      <div id="inicio" className="mx-auto max-w-4xl px-6 pt-32 pb-12">
        <main>
          <Hero />
          <Projects />
          <About />
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
