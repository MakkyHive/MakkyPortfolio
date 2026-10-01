function About() {
  return (
    <section
      id="about"
      className="border-t border-white/10 px-6 py-24"
    >
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1fr_1.5fr]">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-white/40">
            About
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            A developer who likes building things.
          </h2>
        </div>

        <div className="space-y-5 text-lg leading-8 text-white/60">
          <p>
            I'm a frontend developer focused on building modern web
            applications with JavaScript, React, and other tools around
            the web ecosystem.
          </p>

          <p>
            I enjoy taking an idea, turning it into an interface, and
            figuring out the parts behind it that make everything work
            together.
          </p>

          <p>
            I'm currently focused on getting better at writing clean,
            maintainable code and building projects that are actually
            useful.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;