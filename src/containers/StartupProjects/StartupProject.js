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
      <div className="main" id="projects">
        <div>
          <h1 className="skills-heading">{bigProjects.title}</h1>
          <p
            className={
              isDark
                ? "dark-mode project-subtitle"
                : "subTitle project-subtitle"
            }
          >
            {bigProjects.subtitle}
          </p>

          <div className="startup-projects-main">
            <div className="startup-project-text">
              {bigProjects.projects.map((project, i) => (
                <div key={project.projectName || i} className="health-div">
                  {project.image && (
                    <img
                      alt={`${project.projectName || "Project"} preview`}
                      src={project.image}
                    />
                  )}

                  {project.projectName && <h2>{project.projectName}</h2>}
                  {project.projectDesc && <p>{project.projectDesc}</p>}

                  {Array.isArray(project.footerLink) && (
                    <div>
                      {project.footerLink.map((item, linkIndex) => (
                        <a
                          key={`${item.name || "link"}-${linkIndex}`}
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(event) => event.stopPropagation()}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  )}

                  {!project.footerLink && project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Project
                    </a>
                  )}
                </div>
              ))}
            </div>
            <div className="startup-project-image" />
          </div>
        </div>
      </div>
    </Fade>
  );
}
