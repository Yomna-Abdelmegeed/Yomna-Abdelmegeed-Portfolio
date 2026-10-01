import { Layers, GitBranch, Cloud, LayoutGrid } from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import Reveal from "../components/Reveal";

const points = [
  { icon: Layers, label: "Clean Architecture & MVVM" },
  { icon: GitBranch, label: "BLoC / Cubit state management" },
  { icon: Cloud, label: "RESTful APIs & Firebase" },
  { icon: LayoutGrid, label: "Responsive UI, Git & GitHub" },
];

export default function About() {
  return (
    <section id="about" className="section-container py-24">
      <SectionTitle
        eyebrow="About Me"
        title="A bit about my work"
        subtitle="Flutter Developer with hands-on experience building scalable cross-platform mobile and web applications."
      />

      <div className="grid gap-10 lg:grid-cols-5 lg:items-center">
        <Reveal className="lg:col-span-3">
          <p className="text-lg leading-relaxed text-navy/70">
            I'm a Flutter Developer with hands-on experience building
            scalable cross-platform mobile and web applications using
            Flutter and Dart. I work with Clean Architecture, MVVM, and
            BLoC/Cubit to keep codebases maintainable, and I integrate
            RESTful APIs and Firebase to bring real data and functionality
            into the apps I build.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-navy/70">
            I care about responsive UI, readable code, and steady version
            control with Git and GitHub — and I'm always looking to grow my
            skills with modern mobile technologies.
          </p>
        </Reveal>

        <Reveal delay={150} className="lg:col-span-2">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {points.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-start gap-3 rounded-2xl border border-navy/5 bg-white p-4 shadow-sm"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-lavender/60 text-burgundy">
                  <Icon size={17} />
                </span>
                <span className="text-sm font-medium text-navy/80">{label}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
