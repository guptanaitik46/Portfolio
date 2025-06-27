import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaTrophy, FaUsers, FaMedal } from 'react-icons/fa';

const Section = styled.section`
  background-color: #111;
  color: white;
  padding: 2rem;
`;

const Card = styled(motion.div)`
  background: #1c1c1c;
  margin: 1rem 0;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 255, 255, 0.1);
  &:hover {
    transform: rotateX(4deg) rotateY(-4deg) scale(1.02);
    box-shadow: 0 0 20px rgba(0, 255, 255, 0.4);
  }
`;

const achievements = [
  { icon: <FaTrophy />, title: 'Solved 500+ DSA Problems', desc: 'Across LeetCode, GFG, CodeForces, and CodeChef' },
  { icon: <FaMedal />, title: 'Global Rank 329', desc: 'Among 38,000+ Participants' },
  { icon: <FaUsers />, title: 'Mentored 600+ Students', desc: '52,000+ Views on YouTube' },
];

function Achievements() {
  return (
    <Section id="achievements">
      <h2>Achievements</h2>
      {achievements.map((ach, i) => (
        <Card key={i} whileHover={{ scale: 1.05 }}>
          <h3>{ach.icon} {ach.title}</h3>
          <p>{ach.desc}</p>
        </Card>
      ))}
    </Section>
  );
}

export default Achievements;
