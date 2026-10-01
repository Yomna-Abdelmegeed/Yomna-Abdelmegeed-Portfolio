import { useState } from "react";
import SectionTitle from "../components/SectionTitle";
import ProjectCard from "../components/ProjectCard";
import ImageModal from "../components/ImageModal";
import Reveal from "../components/Reveal";
import projects from "../data/projects";

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);
  const [imgIndex, setImgIndex] = useState(null);

  const featured = projects.filter((p) => p.featured);
  const other = projects.filter((p) => !p.featured);

  const openImage = (project) => {
    setActiveProject(project);
    setImgIndex(0);
  };
  const closeImage = () => {
    setImgIndex(null);
    setActiveProject(null);
  };

  return (
    <section id="projects" className="bg-lavender/20 py-24">
      <div className="section-container">
        <SectionTitle
          eyebrow="Portfolio"
          title="Featured Projects"
          subtitle="A selection of Flutter apps I've designed, built, and shipped."
        />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {featured.map((project, i) => (
            <Reveal key={project.id} delay={i * 100} className={project.id === "academiax" ? "lg:col-span-2" : ""}>
              <ProjectCard
                project={project}
                large={project.id === "academiax"}
                onOpenImage={openImage}
              />
            </Reveal>
          ))}
        </div>

        {other.length > 0 && (
          <>
            <h3 className="mb-8 mt-20 text-center text-2xl font-bold text-navy">
              Other Projects
            </h3>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              {other.map((project, i) => (
                <Reveal key={project.id} delay={i * 100}>
                  <ProjectCard project={project} onOpenImage={openImage} />
                </Reveal>
              ))}
            </div>
          </>
        )}
      </div>

      {activeProject && (
        <ImageModal
          images={activeProject.screenshots}
          index={imgIndex}
          onClose={closeImage}
          onNavigate={setImgIndex}
        />
      )}
    </section>
  );
}
