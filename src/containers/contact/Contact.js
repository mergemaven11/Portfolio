import React, { useContext } from "react";
import "./Contact.css";
import { contactInfo, socialMediaLinks } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Contact() {
  const { isDark } = useContext(StyleContext);

  return (
    <Fade bottom duration={1000} distance="20px">
      <section className="main contact-section" id="contact">
        <div className={isDark ? "contact-panel contact-panel-dark" : "contact-panel"}>
          <div className="contact-copy">
            <span className="contact-eyebrow">LET'S BUILD SOMETHING RELIABLE</span>
            <h1 className="heading contact-title">{contactInfo.title}</h1>
            <p className={isDark ? "dark-mode contact-subtitle" : "contact-subtitle"}>
              {contactInfo.subtitle}
            </p>

            <div className="contact-status" aria-label="Availability">
              <span className="contact-status-dot" aria-hidden="true" />
              Open to platform engineering, software engineering, cloud operations, and developer tooling opportunities
            </div>

            <div className="contact-actions">
              <a className="contact-primary-action" href={`mailto:${contactInfo.emailAddress}`}>
                Email Me
              </a>
              <a
                className={isDark ? "contact-secondary-action contact-secondary-action-dark" : "contact-secondary-action"}
                href={socialMediaLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                className={isDark ? "contact-secondary-action contact-secondary-action-dark" : "contact-secondary-action"}
                href={socialMediaLinks.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>

            <a className={isDark ? "contact-email contact-email-dark" : "contact-email"} href={`mailto:${contactInfo.emailAddress}`}>
              {contactInfo.emailAddress}
            </a>
          </div>

          <div className="contact-signal" aria-hidden="true">
            <div className="contact-signal-orbit contact-signal-orbit-one" />
            <div className="contact-signal-orbit contact-signal-orbit-two" />
            <div className="contact-signal-core">TS</div>
            <span className="contact-signal-label">Platform • Cloud • APIs</span>
          </div>
        </div>
      </section>
    </Fade>
  );
}
