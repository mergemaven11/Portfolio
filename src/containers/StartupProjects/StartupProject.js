import React, { useContext } from "react";
import "./StartupProjects.css";
import { bigProjects } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function StartupProject() {
  const { isDark } = useContext(StyleContext);

  if (!bigProjects.display || !Array.isArray(bigProjects.projects)) {
    return null;
  }

  return (
    <Fade bottom duration={1000} distance="20px">
      <section className="main" id="projects" aria-labelledby="featured-projects-heading">
        <div>
          <h1 className="skills-heading" id="featured-projects-heading">
            {bigProjects.title}
          </h1>
          <p
            className={
              isDark
                ? "dark-mode project-subtitle"
                : "subTitle project-subtitle"
            }
          >
            {bigProjects.subtitle}
          </p>

          <div className="featured-project-grid">
            {bigProjects.projects.map((project, i) => (
              <article
                key={project.projectName || i}
                className={isDark ? "featured-project-card dark-project-card" : "featured-project-card"}
              >
                {project.image && (
                  <div className="featured-project-image-wrap">
                    <img
                      alt={`${project.projectName || "Project"} project preview`}
                      src={project.image}
                      className="featured-project-image"
                    />
                  </div>
                )}

                <div className="featured-project-content">
                  {project.projectName && (
                    <h2 className="featured-project-title">{project.projectName}</h2>
                  )}

                  {project.projectDesc && (
                    <p className="featured-project-description">{project.projectDesc}</p>
                  )}

                  {project.tech && (
                    <p className="featured-project-tech">{project.tech}</p>
                  )}

                  {Array.isArray(project.footerLink) && (
                    <div className="featured-project-links">
                      {project.footerLink.map((item, linkIndex) => (
                        <a
                          key={`${item.name || "link"}-${linkIndex}`}
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="featured-project-link"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Fade>
  );
}
