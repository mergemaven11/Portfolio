import React from 'react';
import { Fade } from 'react-reveal';
import './StoryVideo.css';

export default function StoryVideo() {
  return (
    <Fade bottom duration={900} distance="30px">
      <section className="story-section" id="story" aria-labelledby="story-title">
        <div className="story-copy">
          <p className="story-eyebrow">MY STORY → TECH</p>
          <h2 id="story-title">How I found my way into technology.</h2>
          <p className="story-description">
            A short story about where I started, what technology gave me, and how
            that path became a career built around solving problems and building
            reliable systems.
          </p>
        </div>

        <div className="story-video-frame" aria-label="My Story to Tech video placeholder">
          <div className="story-video-placeholder">
            <span className="story-play-icon" aria-hidden="true">▶</span>
            <span className="story-video-label">My Story to Tech</span>
            <span className="story-video-note">Video slot ready</span>
          </div>
        </div>
      </section>
    </Fade>
  );
}
