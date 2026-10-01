const projects = [
  {
    title: "Mon Bridge DEX",
    description:
      "A DEX frontend I'm building with React and ethers.js. It includes wallet connection, token selection, swapping, liquidity interfaces, and portfolio views.",
    stack: [
      "React",
      "Vite",
      "Tailwind CSS",
      "ethers.js",
      "Privy",
    ],
    type: "Web3 / Frontend",
    github: "https://github.com/MakkyHive/statc-frontend-new",
    demo: "https://statc-frontend-nig4zyp73-makktechs-projects.vercel.app",
  },
];

function Projects() {
  return (
    <section id="projects" className="border-t border-white/10 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-white/40">
            Projects
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Things I've been building.
          </h2>

          <p className="mt-5 text-lg leading-8 text-white/50">
            A few of the projects I've worked on while improving my
            development skills.
          </p>
        </div>

        <div className="mt-12">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]"
            >
              <div className="grid md:grid-cols-2">
                <div className="flex min-h-[360px] items-center justify-center bg-gradient-to-br from-purple-500/20 via-blue-500/10 to-pink-500/10 p-8">
                  <div className="text-center">
                    <p className="text-sm uppercase tracking-[0.3em] text-white/40">
                      {project.type}
                    </p>

                    <h3 className="mt-4 text-4xl font-bold tracking-tight">
                      Mon Bridge
                    </h3>

                    <p className="mt-2 text-white/40">
                      DEX
                    </p>
                  </div>
                </div>

                <div className="flex flex-col justify-center p-8 sm:p-10">
                  <p className="text-sm text-white/40">
                    {project.type}
                  </p>

                  <h3 className="mt-3 text-3xl font-semibold">
                    {project.title}
                  </h3>

                  <p className="mt-5 leading-7 text-white/60">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-white/90"
                    >
                      Live Demo
                    </a>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold transition hover:border-white/30 hover:bg-white/5"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;