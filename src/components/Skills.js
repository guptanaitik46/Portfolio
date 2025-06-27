import React from 'react';
import { Tilt } from 'react-tilt';
import styled from 'styled-components';
import { SiTailwindcss, SiNextdotjs, SiVite, SiExpress, SiMongodb, SiPostgresql, SiPrisma, SiCplusplus, SiC, SiTypescript } from 'react-icons/si';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaGithub, FaDocker, FaDatabase, FaCuttlefish, FaPlus } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Section = styled.section`
  background-color: #111;
  color: white;
  padding: 2rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const Card = styled(motion.div)`
  background: #1c1c1c;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 0 15px rgba(0, 255, 255, 0.1);
  transform-style: preserve-3d;
  transition: all 0.3s ease;
  will-change: transform, box-shadow;

  &:hover {
    transform: rotateX(4deg) rotateY(-4deg) scale(1.02);
    box-shadow: 0 0 20px rgba(0, 255, 255, 0.4);
  }
`;

const SkillGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1rem;
`;

const Badge = styled.div`
  display: flex;
  align-items: center;
  background: #222;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-size: 0.9rem;
  gap: 0.5rem;
  box-shadow: 0 0 8px rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;

  &:hover {
    background: #00ffff33;
    color: #00ffff;
    transform: translateY(-2px);
  }
`;

const categories = [
  {
    title: 'Languages',
    skills: [
      { name: 'C', icon: <SiC size={16} color="#ffffff" /> },
      { name: 'C++', icon: <SiCplusplus size={16} color="#ffffff" /> },
      { name: 'TypeScript', icon: <SiTypescript size={13} color="#ffffff" /> },
      { name: 'JavaScript', icon: <FaJs /> },
    ],
  },
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', icon: <FaHtml5 /> },
      { name: 'CSS', icon: <FaCss3Alt /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
      { name: 'React', icon: <FaReact /> },
      { name: 'Next.js', icon: <SiNextdotjs /> },
      { name: 'Vite', icon: <SiVite /> },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', icon: <FaNodeJs /> },
      { name: 'Express.js', icon: <SiExpress /> },
      { name: 'MongoDB', icon: <SiMongodb /> },
      { name: 'PostgreSQL', icon: <SiPostgresql /> },
      { name: 'Prisma', icon: <SiPrisma /> },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'GitHub', icon: <FaGithub /> },
      { name: 'Docker', icon: <FaDocker /> },
      { name: 'Photoshop', icon: <FaDatabase /> },
    ],
  },
];

function Skills() {
  return (
    <Section id="skills">
      <h2>Skills</h2>
      <Grid>
        {categories.map((cat, i) => (
          <Tilt options={{ max: 15, scale: 1.02, speed: 400 }}>
          <Card key={i}>
            <h3>{cat.title}</h3>
            <SkillGrid>
              {cat.skills.map((skill, j) => (
                <Badge key={j}>{skill.icon} {skill.name}</Badge>
              ))}
            </SkillGrid>
          </Card>
        </Tilt>
        ))}
      </Grid>
    </Section>
  );
}

export default Skills;
