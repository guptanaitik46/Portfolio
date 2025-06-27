import React from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';
import { FaHome, FaCode, FaGraduationCap, FaEnvelope, FaMedal, FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.7);
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-right: 3rem;
  
  a {
    color: white;
    font-size: 1.2rem;
    transition: 0.3s;

    &:hover {
      color: #00ffff;
      transform: scale(1.2);
    }
  }
`;

const NavLink = styled(Link)`
  color: white;
  cursor: pointer;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    color: #00ffff;
  }
`;

function Navbar() {
  return (
    <Nav>
      <NavLinks>
        <NavLink to="hero" smooth duration={500}><FaHome /> Home</NavLink>
        <NavLink to="skills" smooth duration={500}><FaCode /> Skills</NavLink>
        <NavLink to="projects" smooth duration={500}><FaCode /> Projects</NavLink>
        <NavLink to="education" smooth duration={500}><FaGraduationCap /> Education</NavLink>
        <NavLink to="achievements" smooth duration={500}><FaMedal /> Achievements</NavLink>
        <NavLink to="contact" smooth duration={500}><FaEnvelope /> Contact</NavLink>
      </NavLinks>

      <SocialLinks>
        <a href="https://github.com/guptanaitik46" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://linkedin.com/in/gupta-naitik/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="https://www.youtube.com/@conceptfeelers" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
        <a href="https://leetcode.com/u/guptanaitik46/" target="_blank" rel="noopener noreferrer"><SiLeetcode /></a>
        <a href="mailto:guptanaitik46@gmail.com"><FaEnvelope /></a>
      </SocialLinks>
    </Nav>
  );
}

export default Navbar;
