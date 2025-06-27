import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const projects = [
  { title: 'Portfolio Website', description: 'Built using React and Three.js' },
  { title: 'E-commerce Site', description: 'Full stack MERN project' },
];

const ProjectCard = styled(motion.div)`
  background: #222;
  color: white;
  padding: 1rem;
  margin: 1rem;
  border-radius: 10px;
  box-shadow: 0 0 10px #00ffff50;
  &:hover {
    transform: rotateX(4deg) rotateY(-4deg) scale(1.02);
    box-shadow: 0 0 20px rgba(0, 255, 255, 0.4);
  }
`;

function Projects() {
  return (
    <section id="projects" style={{ padding: '2rem', background: '#0f0f0f' }}>
      <h2 style={{ color: 'white' }}>Projects</h2>
      {projects.map((p, i) => (
        <ProjectCard key={i} whileHover={{ scale: 1.05 }}>
          <h3>{p.title}</h3>
          <p>{p.description}</p>
        </ProjectCard>
      ))}
    </section>
  );
}

export default Projects;