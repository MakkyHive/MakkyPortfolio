const skills = [
  {
    category: "Frontend",
    items: ["JavaScript", "React", "Angular", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    category: "Backend",
    items: ["PHP", "Laravel", "MySQL"],
  },
  {
    category: "Web3",
    items: ["ethers.js", "Wallet Integration", "Smart Contract Integration"],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "Vite", "REST APIs"],
  },
];

function Skills() {
  return (
    <section id="skills" className="border-t border-white/10 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-white/40">
            Skills
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Tools I use to build things.
          </h2>

          <p className="mt-5 text-lg leading-8 text-white/50">
            These are the technologies I've been working with across my
            projects.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {skills.map((skill) => (
            <div
              key={skill.category}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
            >
              <h3 className="text-lg font-semibold">
                {skill.category}
              </h3>

              <div className="mt-5 flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 px-3 py-1.5 text-sm text-white/60"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;