import SectionTitle from "../components/SectionTitle";
import TimelineItem from "../components/TimelineItem";
import Reveal from "../components/Reveal";
import { experience } from "../data/content";

export default function Experience() {
  return (
    <section id="experience" className="section-container py-24">
      <SectionTitle eyebrow="Experience" title="Where I've worked" />

      <div className="mx-auto max-w-2xl">
        {experience.map((item, i) => (
          <Reveal key={item.role} delay={i * 100}>
            <TimelineItem item={item} isLast={i === experience.length - 1} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
