import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import { contact } from "../data/content";
import Reveal from "../components/Reveal";

const cards = [
  {
    icon: Github,
    label: "GitHub",
    value: "Yomna-Abdelmegeed",
    href: contact.github,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "yomna-abdelmegeed",
    href: contact.linkedin,
  },
  {
    icon: Mail,
    label: "Email",
    value: contact.email,
    href: `mailto:${contact.email}`,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-navy via-burgundy to-navy" />
      <div className="pointer-events-none absolute -top-32 right-0 -z-10 h-96 w-96 rounded-full bg-flutter/10 blur-3xl" />

      <div className="section-container text-center">
        <Reveal>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Let's Build Something Great
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/70">
            Interested in working together or discussing a project? I'd love
            to hear from you.
          </p>
        </Reveal>

        <div className="mx-auto mt-12 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
          {cards.map(({ icon: Icon, label, value, href }, i) => (
            <Reveal key={label} delay={i * 100}>
              <a
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noreferrer"
                className="glass group flex h-full flex-col items-center gap-3 rounded-2xl border border-white/10 p-6 text-white transition-all duration-300 hover:-translate-y-1 hover:border-white/30"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
                  <Icon size={19} />
                </span>
                <div>
                  <p className="text-sm font-semibold">{label}</p>
                  <p className="mt-0.5 break-all text-xs text-white/60">{value}</p>
                </div>
                <ArrowUpRight
                  size={15}
                  className="opacity-0 transition-opacity group-hover:opacity-100"
                />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
