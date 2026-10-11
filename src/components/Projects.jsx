
import { motion } from "framer-motion";

const projects = [
  {
    title: "BrickChain",
    initials: "BC",
    description:
      "A real-estate property platform built with React and Laravel. It features property listings, search by title and location, status filtering, individual property details, and backend validation through a Laravel API.",
    stack: [
      "React",
      "Vite",
      "JavaScript",
      "PHP",
      "Laravel",
      "REST API",
    ],
    type: "Full-Stack Development",
    status: "In progress",
    github: "https://github.com/MakkyHive/Brickchain-frontend",
    accent:
      "from-lime-400/20 via-emerald-500/10 to-teal-500/10",
    glow: "bg-lime-400/10",
    iconColor: "text-lime-300",
  },
  {
    title: "Mon Bridge DEX",
    initials: "MB",
    description:
      "A decentralized exchange frontend I'm building with React and ethers.js. The project includes wallet onboarding, token selection, swap and liquidity interfaces, and Web3 integration setup.",
    stack: [
      "React",
      "Vite",
      "Tailwind CSS",
      "ethers.js 5.7.2",
      "Privy",
    ],
    type: "Web3 / Frontend",
    status: "In progress",
    github: "https://github.com/MakkyHive/statc-frontend-new",
    demo:
      "https://statc-frontend-nig4zyp73-makktechs-projects.vercel.app",
    accent:
      "from-purple-500/20 via-blue-500/10 to-pink-500/10",
    glow: "bg-purple-500/10",
    iconColor: "text-purple-300",
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="border-t border-white/10 px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-white/40">
            Projects
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Things I've been building.
          </h2>

          <p className="mt-5 text-lg leading-8 text-white/50">
            Practical projects where I apply my skills in
            frontend development, backend APIs, and Web3.
          </p>
        </div>

        <div className="mt-12 space-y-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]"
            >
              <div className="grid md:grid-cols-[1.1fr_1fr]">
                {/* Project visual */}
                <div className="relative min-h-[320px] overflow-hidden border-b border-white/10 md:border-b-0 md:border-r">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.accent} transition-transform duration-700 group-hover:scale-105`}
                  />

                  <div
                    className={`absolute -left-20 top-20 h-64 w-64 rounded-full ${project.glow} blur-3xl`}
                  />

                  <div
                    className={`absolute -bottom-20 right-0 h-64 w-64 rounded-full ${project.glow} blur-3xl`}
                  />

                  <div className="relative flex min-h-[320px] items-center justify-center p-8">
                    <div className="text-center">
                      <div
                        className={`mx-auto flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] shadow-2xl ${project.iconColor}`}
                      >
                        <span className="text-2xl font-bold">
                          {project.initials}
                        </span>
                      </div>

                      <p className="mt-6 text-xs font-medium uppercase tracking-[0.3em] text-white/40">
                        {project.type}
                      </p>

                      <h3 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                        {project.title}
                      </h3>

                      <p className="mt-2 text-white/40">
                        {project.status}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Project information */}
                <div className="flex flex-col justify-center p-7 sm:p-10">
                  <div className="flex flex-wrap items-center gap-3">
                    <p className="text-sm text-white/40">
                      {project.type}
                    </p>

                    <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/50">
                      {project.status}
                    </span>
                  </div>

                  <h3 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                    {project.title}
                  </h3>

                  <p className="mt-5 leading-7 text-white/60">
                    {project.description}
                  </p>

                  <div className="mt-7">
                    <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/30">
                      Built with
                    </p>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-white/10 bg-white/[0.02] px-3 py-1.5 text-xs text-white/60"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 flex flex-wrap gap-3">
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-white/90"
                      >
                        Live Demo ↗
                      </a>
                    )}

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold transition hover:border-white/30 hover:bg-white/5"
                    >
                      GitHub ↗
                    </a>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
