export default function SkillCard({ title, skills }) {
  return (
    <div className="rounded-2xl border border-navy/5 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-burgundy/10">
      <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-burgundy">
        {title}
      </h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((s) => (
          <span
            key={s}
            className="rounded-full bg-gradient-to-br from-lavender/60 to-sky/30 px-3 py-1.5 text-sm font-medium text-navy/80"
          >
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}
