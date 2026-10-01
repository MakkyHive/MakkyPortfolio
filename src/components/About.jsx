import { motion } from "framer-motion";

function About() {
  return (
    <section id="about" className="border-t border-white/10 px-6 py-24">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-20">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-white/40">
            About
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            A developer who likes building things.
          </h2>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-6 text-lg leading-8 text-white/60"
        >
          <p>
            I'm a frontend developer focused on building modern web
            applications with JavaScript, React, and other tools around the
            web ecosystem.
          </p>

          <p>
            I enjoy taking an idea, turning it into an interface, and figuring
            out the parts behind it that make everything work together.
          </p>

          <p>
            I'm currently focused on getting better at writing clean,
            maintainable code and building projects that are actually useful.
          </p>

          <div className="grid gap-4 pt-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <p className="text-sm text-white/40">Currently learning</p>
              <p className="mt-2 font-medium text-white">
                React & modern frontend development
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <p className="text-sm text-white/40">Currently building</p>
              <p className="mt-2 font-medium text-white">
                Real projects for Real People!
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;