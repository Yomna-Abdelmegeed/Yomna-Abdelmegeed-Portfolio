import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Button from "./Button";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-40 w-full transition-all duration-300 ${
        scrolled ? "glass shadow-sm py-3" : "py-5"
      }`}
    >
      <nav className="section-container flex items-center justify-between">
        <a href="#home" className="text-lg font-bold text-navy">
          Yomna <span className="text-burgundy">Abdelmegeed</span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-navy/70 transition-colors hover:text-burgundy"
            >
              {l.label}
            </a>
          ))}
          <Button href="#contact" className="!py-2.5 !px-5 !text-sm">
            Let's Connect
          </Button>
        </div>

        <button
          className="text-navy lg:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div className="glass mt-3 flex flex-col gap-1 px-5 py-4 lg:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-navy/70 hover:bg-lavender/40 hover:text-burgundy"
            >
              {l.label}
            </a>
          ))}
          <Button href="#contact" onClick={() => setOpen(false)} className="mt-2 justify-center">
            Let's Connect
          </Button>
        </div>
      )}
    </header>
  );
}
