import React from 'react';
import { Fade } from 'react-reveal';
import './StoryVideo.css';

const STORY_VIDEO_URL =
  'https://d2ol7oe51mr4n9.cloudfront.net/user_3Ik0w5J4NgW764WUePk1YWEyQuB/9efd0998-6dbb-4bb5-9295-144e851a83a1.mp4';

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

        <div className="story-video-frame">
          <video
            className="story-video"
            controls
            playsInline
            preload="metadata"
            aria-label="My Story to Tech"
          >
            <source src={STORY_VIDEO_URL} type="video/mp4" />
            Your browser does not support HTML5 video.
          </video>
        </div>
      </section>
    </Fade>
  );
}
