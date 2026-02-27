"use client";
import { useState } from "react";
import projectsData from "@/utility/projectsData";
import ProjectModal from "@/components/ProjectModal";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <div className="row">
        <div className="col-lg-12">
          <h5 className="trm-mb-40 trm-title-with-divider">
            Projects <span data-number={4} />
          </h5>
        </div>
      </div>

      {/* Project grid */}
      <div className="trm-portfolio-grid">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className="trm-portfolio-item trm-scroll-animation trm-active-el"
            data-scroll=""
            data-scroll-offset={40}
            onClick={() => setSelectedProject(project)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setSelectedProject(project);
              }
            }}
            role="button"
            tabIndex={0}
            aria-label={`View project: ${project.title}`}
          >
            <div className="trm-portfolio-card">
              <img
                src={project.thumb}
                alt={project.title}
                className="trm-portfolio-card-img"
                loading="lazy"
              />
              <div className="trm-portfolio-card-overlay">
                <h6 className="trm-portfolio-card-title">{project.title}</h6>
                <span className="trm-portfolio-card-category">
                  {project.desc}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
};

export default Projects;
