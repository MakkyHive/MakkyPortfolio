import { motion } from "framer-motion";

const links = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed left-0 top-0 z-50 w-full"
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <a
          href="#"
          className="text-lg font-bold tracking-tight"
        >
          Makky<span className="text-white/40">.</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm text-white/50 transition hover:text-white"
            >
              {link.name}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="rounded-full border border-white/15 px-4 py-2 text-sm font-medium transition hover:border-white/30 hover:bg-white/5"
        >
          Let's talk
        </a>
      </nav>
    </motion.header>
  );
}

export default Navbar;