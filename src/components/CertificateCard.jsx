import { Award } from "lucide-react";
import ImageWithFallback from "./ImageWithFallback";

export default function CertificateCard({ cert }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-navy/5 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-burgundy/10">
      <div className="h-36 bg-gradient-to-br from-navy to-burgundy">
        <ImageWithFallback
          src={cert.image}
          alt={`${cert.title} certificate`}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="p-5">
        <div className="mb-2 flex items-center gap-2 text-gold">
          <Award size={16} />
          <span className="text-xs font-semibold uppercase tracking-wide">
            {cert.type}
          </span>
        </div>
        <h3 className="font-bold text-navy leading-snug">{cert.title}</h3>
        <p className="text-sm font-medium text-burgundy">{cert.issuer}</p>
        <p className="mt-1 text-xs text-navy/50">{cert.date}</p>
        <p className="mt-3 text-sm text-navy/70">{cert.description}</p>
      </div>
    </div>
  );
}
