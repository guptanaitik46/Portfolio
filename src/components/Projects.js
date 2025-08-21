import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const projects = [
  { 
    title: 'CrackAI - AI-Powered Career Platform', 
    description: 'Full-stack AI career assistant built with Next.js, Prisma, PostgreSQL & Gemini API.',
    github: 'https://github.com/guptanaitik46/CrackAI',
    live: 'https://crackai-eight.vercel.app'
  },
  { 
    title: 'PrepFeelers - CBSE Exam Simulator', 
    description: 'AI-based CBSE test simulator with secure login, performance feedback & PDF reports.',
    github: 'https://github.com/guptanaitik46/PrepFeelers',
    live: 'https://prepfeelers.netlify.app'
  }
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
          <p>
            <a href={p.github} target="_blank" rel="noopener noreferrer" style={{ color: '#00ffff' }}>GitHub</a> |{' '}
            <a href={p.live} target="_blank" rel="noopener noreferrer" style={{ color: '#00ffff' }}>Live</a>
          </p>
        </ProjectCard>
      ))}
    </section>
  );
}

export default Projects;
