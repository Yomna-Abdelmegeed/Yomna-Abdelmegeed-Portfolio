export default function SectionTitle({ eyebrow, title, subtitle, center = true }) {
  return (
    <div className={`mb-12 ${center ? "text-center" : ""}`}>
      {eyebrow && (
        <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-flutter mb-3">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl font-bold text-navy">
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-navy/60 max-w-2xl ${center ? "mx-auto" : ""}`}>
          {subtitle}
        </p>
      )}
      <div className={`mt-5 h-1 w-16 rounded-full bg-gradient-to-r from-burgundy to-flutter ${center ? "mx-auto" : ""}`} />
    </div>
  );
}
