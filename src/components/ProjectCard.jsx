import { Github, ExternalLink, GraduationCap } from "lucide-react";
import ImageWithFallback from "./ImageWithFallback";

export default function ProjectCard({ project, large = false, onOpenImage }) {
  return (
    <div
      className={`group relative flex flex-col overflow-hidden rounded-3xl border border-navy/5 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-burgundy/10 ${
        large ? "lg:col-span-2" : ""
      }`}
    >
      {project.badge && (
        <span className="absolute top-4 left-4 z-10 flex items-center gap-1 rounded-full bg-gold px-3 py-1 text-xs font-semibold text-navy shadow">
          <GraduationCap size={13} /> {project.badge}
        </span>
      )}

      <div className={`overflow-hidden bg-lavender/30 ${large ? "h-72 sm:h-96" : "h-56"}`}>
        <ImageWithFallback
          src={project.image}
          alt={`${project.title} preview`}
          className="h-full w-full cursor-pointer object-cover transition-transform duration-500 group-hover:scale-105"
          onClick={() => onOpenImage?.(project)}
        />
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <h3 className="text-xl font-bold text-navy">{project.title}</h3>
        <p className="text-sm font-medium text-burgundy">{project.subtitle}</p>
        <p className="mt-3 text-sm leading-relaxed text-navy/70">
          {project.description}
        </p>

        {project.highlights && large && (
          <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-sm text-navy/70">
            {project.highlights.map((h) => (
              <li key={h} className="flex gap-2">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-flutter" />
                {h}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((t) => (
            <span
              key={t}
              className="rounded-full bg-lavender/50 px-3 py-1 text-xs font-medium text-navy/70"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-6 flex gap-3 pt-2">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border-2 border-burgundy px-4 py-2 text-sm font-medium text-burgundy transition-colors hover:bg-burgundy hover:text-white"
          >
            <Github size={15} /> View on GitHub
          </a>
          <button
            onClick={() => onOpenImage?.(project)}
            className="inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium text-navy/60 transition-colors hover:text-burgundy"
          >
            <ExternalLink size={15} /> Preview
          </button>
        </div>
      </div>
    </div>
  );
}
