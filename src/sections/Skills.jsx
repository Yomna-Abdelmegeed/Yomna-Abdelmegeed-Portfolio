import SectionTitle from "../components/SectionTitle";
import SkillCard from "../components/SkillCard";
import Reveal from "../components/Reveal";
import { skillGroups } from "../data/content";

export default function Skills() {
  return (
    <section id="skills" className="bg-lavender/20 py-24">
      <div className="section-container">
        <SectionTitle eyebrow="Skills" title="Tech Stack & Skills" />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={i * 80}>
              <SkillCard title={group.title} skills={group.skills} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
