import React from "react";
import "./StoryVideo.css";

export default function StoryVideo() {
  const scrollToFeaturedWork = (event) => {
    event.preventDefault();
    const projects = document.getElementById("projects");
    if (projects) {
      projects.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.replaceState(null, "", "#projects");
    }
  };

  return (
    <section className="story-section" id="story" aria-labelledby="story-title">
      <div className="story-copy">
        <p className="story-eyebrow">MY STORY → TECH</p>
        <h2 id="story-title">How I found my way into technology.</h2>
        <p className="story-description">
          I did not take a perfectly straight path into engineering. Curiosity,
          problem-solving, and a drive to build better systems pulled me from
          technical support into software engineering, cloud infrastructure,
          backend APIs, and platform work.
        </p>

        <div className="story-actions" aria-label="Portfolio links">
          <a
            className="story-primary-link"
            href="#projects"
            onClick={scrollToFeaturedWork}
          >
            See featured engineering work ↓
          </a>
          <a
            className="story-secondary-link"
            href="https://boasted.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Explore Boasted.io ↗
          </a>
        </div>
      </div>

      <aside className="story-proof" aria-label="Engineering focus">
        <p className="story-proof-label">ENGINEERING FOCUS</p>
        <div className="story-proof-grid">
          <span>Docker + Kubernetes</span>
          <span>Python + FastAPI</span>
          <span>Cloud + CI/CD</span>
          <span>Reliability + Automation</span>
        </div>
        <p className="story-proof-note">
          Today I build and troubleshoot production-minded systems across
          containers, APIs, infrastructure, data, and developer workflows.
        </p>
      </aside>
    </section>
  );
}
