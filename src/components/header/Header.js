import React, { useContext } from 'react';
import Headroom from 'react-headroom';
import './Header.css';
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';
import StyleContext from '../../contexts/StyleContext';
import {
  greeting,
  workExperiences,
  skillsSection,
  educationInfo,
  bigProjects,
} from '../../portfolio';

function Header() {
  const { isDark } = useContext(StyleContext);

  return (
    <Headroom>
      <header className={isDark ? 'dark-menu header' : 'header'}>
        <a href="#greeting" className="logo" aria-label="Back to top">
          <span className="grey-color"> &lt;</span>
          <span className="logo-name">{greeting.username}</span>
          <span className="grey-color">/&gt;</span>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{ color: 'white' }}
        >
          <span className={isDark ? 'navicon navicon-dark' : 'navicon'}></span>
        </label>
        <ul className={isDark ? 'dark-menu menu' : 'menu'}>
          {skillsSection.display && (
            <li><a href="#skills">Skills</a></li>
          )}
          {educationInfo.display && (
            <li><a href="#education">Education</a></li>
          )}
          {workExperiences.display && (
            <li><a href="#experience">Experience</a></li>
          )}
          {bigProjects.display && (
            <li><a href="#projects">Projects</a></li>
          )}
          <li><a href="#contact">Contact</a></li>
          <li>
            <a aria-label="Toggle color theme">
              <ToggleSwitch />
            </a>
          </li>
        </ul>
      </header>
    </Headroom>
  );
}

export default Header;
