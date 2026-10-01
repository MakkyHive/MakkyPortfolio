import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed left-0 top-0 z-50 w-full"
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        {/* Logo */}
        <a
          href="#"
          onClick={closeMenu}
          className="text-lg font-bold tracking-tight"
        >
          Makky<span className="text-white/40">.</span>
        </a>

        {/* Desktop navigation */}
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

        {/* Desktop contact button */}
        <a
          href="#contact"
          className="hidden rounded-full border border-white/15 px-4 py-2 text-sm font-medium transition hover:border-white/30 hover:bg-white/5 md:block"
        >
          Let's talk
        </a>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white transition hover:bg-white/5 md:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          <span className="text-lg">{isOpen ? "×" : "☰"}</span>
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="border-t border-white/10 bg-[#050505]/95 px-6 py-6 backdrop-blur-md md:hidden"
          >
            <div className="mx-auto flex max-w-6xl flex-col gap-5">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={closeMenu}
                  className="text-base text-white/60 transition hover:text-white"
                >
                  {link.name}
                </a>
              ))}

              <a
                href="#contact"
                onClick={closeMenu}
                className="mt-2 inline-flex w-fit rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium transition hover:border-white/30 hover:bg-white/5"
              >
                Let's talk
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default Navbar;