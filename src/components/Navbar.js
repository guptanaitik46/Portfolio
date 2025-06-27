import React, { useState } from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';
import { FaHome, FaCode, FaGraduationCap, FaEnvelope, FaMedal, FaGithub, FaLinkedin, FaYoutube, FaBars, FaTimes } from 'react-icons/fa';
import { SiLeetcode, SiGeeksforgeeks } from 'react-icons/si';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.85);
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;

  @media (max-width: 768px) {
    display: ${({ open }) => (open ? 'flex' : 'none')};
    position: absolute;
    top: 100%;
    left: 0;
    flex-direction: column;
    background: #111;
    width: 100%;
    padding: 1rem;
  }
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

  @media (max-width: 768px) {
    display: ${({ open }) => (open ? 'flex' : 'none')};
    flex-direction: row;
    justify-content: center;
    width: 100%;
    margin-top: 1rem;
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

const ToggleButton = styled.div`
  display: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Nav>
      <ToggleButton onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </ToggleButton>

      <NavLinks open={menuOpen}>
        <NavLink to="hero" smooth duration={500} onClick={() => setMenuOpen(false)}><FaHome /> Home</NavLink>
        <NavLink to="skills" smooth duration={500} onClick={() => setMenuOpen(false)}><FaCode /> Skills</NavLink>
        <NavLink to="projects" smooth duration={500} onClick={() => setMenuOpen(false)}><FaCode /> Projects</NavLink>
        <NavLink to="education" smooth duration={500} onClick={() => setMenuOpen(false)}><FaGraduationCap /> Education</NavLink>
        <NavLink to="achievements" smooth duration={500} onClick={() => setMenuOpen(false)}><FaMedal /> Achievements</NavLink>
        <NavLink to="contact" smooth duration={500} onClick={() => setMenuOpen(false)}><FaEnvelope /> Contact</NavLink>
      </NavLinks>

      <SocialLinks open={menuOpen}>
        <a href="https://github.com/guptanaitik46" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://linkedin.com/in/gupta-naitik/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="https://www.youtube.com/@conceptfeelers" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
        <a href="https://leetcode.com/u/guptanaitik46/" target="_blank" rel="noopener noreferrer"><SiLeetcode /></a>
        <a href="https://auth.geeksforgeeks.org/user/guptanaitik46/practice" target="_blank" rel="noopener noreferrer"><SiGeeksforgeeks /></a>
        <a href="mailto:guptanaitik46@gmail.com"><FaEnvelope /></a>
      </SocialLinks>
    </Nav>
  );
}

export default Navbar;
