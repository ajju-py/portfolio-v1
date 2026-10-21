import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { personalInfo } from "../constants";

function Navigation({ onLinkClick }) {
  const links = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Certifications", href: "#certifications" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#work" },
    { label: "Journey", href: "#journey" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <ul className="nav-ul">
      {links.map((link) => (
        <li key={link.label} className="nav-li">
          <a
            className="nav-link"
            href={link.href}
            onClick={onLinkClick}
          >
            {link.label}
          </a>
        </li>
      ))}
      {personalInfo.resumeUrl && (
        <li className="nav-li">
          <a
            className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-white/10 hover:bg-white/20 text-white border border-white/20 transition duration-200"
            href={personalInfo.resumeUrl}
            download
            onClick={onLinkClick}
          >
            Download Resume
          </a>
        </li>
      )}
    </ul>
  );
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 w-full backdrop-blur-xl bg-[#030412]/70 border-b border-white/10">
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-3">
          <a
            href="#home"
            className="flex items-center gap-2 text-lg font-bold text-white tracking-tight hover:text-cyan-300 transition-colors"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
            <span>{personalInfo.displayName}</span>
            <span className="hidden sm:inline-block text-xs font-mono font-normal text-neutral-400 border-l border-neutral-700 pl-2">
              RHCSA
            </span>
          </a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex p-2 rounded-lg cursor-pointer text-neutral-400 hover:text-white hover:bg-white/5 focus:outline-none sm:hidden"
            aria-label="Toggle navigation"
          >
            <img
              src={isOpen ? "/assets/close.svg" : "/assets/menu.svg"}
              className="w-5 h-5"
              alt="menu"
            />
          </button>

          <nav className="hidden sm:flex items-center">
            <Navigation onLinkClick={() => {}} />
          </nav>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="block overflow-hidden text-center sm:hidden border-t border-white/10 bg-[#06091f]/95 backdrop-blur-2xl"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
          >
            <nav className="py-4">
              <Navigation onLinkClick={() => setIsOpen(false)} />
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
