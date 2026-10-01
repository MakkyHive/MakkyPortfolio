import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";



function App() {
  return (
    <>
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <footer className="border-t border-white/10 px-6 py-8">
  <div className="mx-auto flex max-w-6xl flex-col gap-3 text-sm text-white/40 sm:flex-row sm:items-center sm:justify-between">
    <p>© {new Date().getFullYear()} Makky</p>

    <a
      href="https://github.com/MakkyHive"
      target="_blank"
      rel="noreferrer"
      className="transition hover:text-white"
    >
      GitHub
    </a>
  </div>
</footer>

      <main className="min-h-screen bg-[#050505] text-white">
        <section className="mx-auto flex min-h-screen max-w-6xl items-center px-6 py-20">
          <div className="max-w-3xl">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-5 text-sm font-medium uppercase tracking-[0.3em] text-white/50"
            >
              Frontend Developer
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl font-bold leading-tight tracking-tight sm:text-6xl md:text-7xl"
            >
              I build web experiences
              <span className="block text-white/40">
                that people actually use.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 max-w-2xl text-lg leading-8 text-white/60"
            >
              I'm Makky, a frontend developer focused on React, JavaScript,
              and modern web applications. I'm building my skills by turning
              real ideas into working products.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <a
                href="#projects"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-white/90"
              >
                View my work
              </a>

              <a
                href="#contact"
                className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/5"
              >
                Get in touch
              </a>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;