function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-white/10 px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-white/40">
            Contact
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            Have something to build?
          </h2>

          <p className="mt-6 text-lg leading-8 text-white/50">
            I'm open to working on interesting projects, collaborating
            with other developers, and taking on new opportunities.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
           href="mailto:makkytech@gmail.com"
            className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-white/90"
          >
            Email me
          </a>

          <a
            href="https://github.com/MakkyHive"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold transition hover:border-white/30 hover:bg-white/5"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
