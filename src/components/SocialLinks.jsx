import { Github, Linkedin, Mail } from "lucide-react";
import { contact } from "../data/content";

export default function SocialLinks({ className = "", iconSize = 18 }) {
  const links = [
    { href: contact.github, icon: Github, label: "GitHub" },
    { href: contact.linkedin, icon: Linkedin, label: "LinkedIn" },
    { href: `mailto:${contact.email}`, icon: Mail, label: "Email" },
  ];

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {links.map(({ href, icon: Icon, label }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith("mailto") ? undefined : "_blank"}
          rel="noreferrer"
          aria-label={label}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-navy/10 text-navy/60 transition-all duration-300 hover:-translate-y-0.5 hover:border-burgundy hover:bg-burgundy hover:text-white"
        >
          <Icon size={iconSize} />
        </a>
      ))}
    </div>
  );
}
