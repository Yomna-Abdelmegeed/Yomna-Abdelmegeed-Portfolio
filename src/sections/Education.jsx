import { GraduationCap, Award } from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import CertificateCard from "../components/CertificateCard";
import Reveal from "../components/Reveal";
import { education, certificates } from "../data/content";

export default function Education() {
  return (
    <section id="education" className="section-container py-24">
      <SectionTitle eyebrow="Education" title="Education & Certificates" />

      <Reveal>
        <div className="mx-auto mb-16 max-w-2xl rounded-3xl border border-navy/5 bg-white p-8 shadow-sm">
          <div className="flex items-start gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-burgundy/10 text-burgundy">
              <GraduationCap size={22} />
            </span>
            <div>
              <h3 className="text-lg font-bold text-navy">{education.degree}</h3>
              <p className="font-medium text-burgundy">{education.school}</p>
              <p className="mt-1 text-sm text-navy/50">
                {education.period} · {education.location}
              </p>
              <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
                <p className="text-sm text-navy/70">
                  <span className="font-semibold text-navy">GPA:</span>{" "}
                  {education.gpa}
                </p>
                <p className="text-sm text-navy/70">
                  <span className="font-semibold text-navy">Grad. Grade:</span>{" "}
                  {education.gradGrade}
                </p>
                <p className="sm:col-span-2 text-sm text-navy/70">
                  <span className="font-semibold text-navy">Graduation Project:</span>{" "}
                  {education.gradProject}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      <div className="mb-8 flex items-center justify-center gap-2 text-navy/70">
        <Award size={18} className="text-gold" />
        <h3 className="text-xl font-bold text-navy">Certificates</h3>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {certificates.map((cert, i) => (
          <Reveal key={cert.title} delay={i * 100}>
            <CertificateCard cert={cert} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
