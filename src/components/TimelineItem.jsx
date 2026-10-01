import { MapPin, Calendar } from "lucide-react";

export default function TimelineItem({ item, isLast }) {
  return (
    <div className="relative pl-10">
      <span className="absolute left-0 top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-burgundy shadow-lg shadow-burgundy/30">
        <span className="h-2 w-2 rounded-full bg-white" />
      </span>
      {!isLast && (
        <span className="absolute left-2.5 top-6 h-full w-px bg-gradient-to-b from-burgundy/40 to-transparent" />
      )}

      <div className="pb-10">
        <h3 className="text-lg font-bold text-navy">{item.role}</h3>
        <p className="font-medium text-burgundy">{item.company}</p>
        <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-navy/50">
          <span className="flex items-center gap-1">
            <Calendar size={13} /> {item.period}
          </span>
          <span className="flex items-center gap-1">
            <MapPin size={13} /> {item.location}
          </span>
        </div>
        <ul className="mt-3 space-y-1.5 text-sm text-navy/70">
          {item.points.map((p) => (
            <li key={p} className="flex gap-2">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-flutter" />
              {p}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
