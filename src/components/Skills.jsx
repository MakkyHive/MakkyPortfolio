import { motion } from "framer-motion";

const skills = [
  {
    category: "Frontend",
    description: "Building interfaces and interactive web applications.",
    items: [
      "JavaScript",
      "React",
      "Angular",
      "HTML",
      "CSS",
      "Tailwind CSS",
    ],
  },
  {
    category: "Backend",
    description: "Working with server-side applications and databases.",
    items: ["PHP", "Laravel", "MySQL"],
  },
  {
    category: "Web3",
    description: "Building frontend integrations with blockchain applications.",
    items: ["ethers.js", "Wallet Integration", "Smart Contract Integration"],
  },
  {
    category: "Tools",
    description: "Tools I use to build, test, and manage projects.",
    items: ["Git", "GitHub", "Vite", "REST APIs"],
  },
];

function Skills() {
  return (
    <section id="skills" className="border-t border-white/10 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
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
        </motion.div>

        {/* Skills grid */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:border-white/20 hover:bg-white/[0.05]"
            >
              <h3 className="text-lg font-semibold">{skill.category}</h3>

              <p className="mt-2 text-sm leading-6 text-white/40">
                {skill.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 px-3 py-1.5 text-sm text-white/60 transition group-hover:border-white/15 group-hover:text-white/70"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;