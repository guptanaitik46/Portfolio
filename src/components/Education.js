import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';

const TimelineContainer = styled.section`
  background: #0f0f0f;
  color: white;
  padding: 2rem;
`;

const Path = styled(motion.div)`
  margin: 2rem auto;
  padding: 1rem;
  background: #1c1c1c;
  border-radius: 10px;
  width: 80%;
  display: flex;
  flex-direction: ${({ left }) => (left ? 'row' : 'row-reverse')};
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 0 15px rgba(0, 255, 255, 0.1);
  &:hover {
    transform: rotateX(4deg) rotateY(-4deg) scale(1.02);
    box-shadow: 0 0 20px rgba(0, 255, 255, 0.4);
  }
`;

const Content = styled.div`
  max-width: 70%;
`;

const education = [
  { year: '2022 - Present', title: 'B.Tech - NIT Kurukshetra', detail: 'Electrical Engineering - 8.23 CGPA' },
  { title: 'BSVP Sr. Sec. School, Bharatpur', detail: 'Senior Secondary - 85.6%' },
  { title: 'Arya Public Sr. Sec. School, Bharatpur', detail: 'Secondary - 86.5%' },
];

function Education() {
  return (
    <TimelineContainer id="education">
      <h2>Education</h2>
      {education.map((edu, i) => (
        <Path
          key={i}
          left={i % 2 === 0}
          initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <FaGraduationCap size={40} color="#00ffff" />
          <Content>
            <h3>{edu.title}</h3>
            <p>{edu.detail}</p>
            <small>{edu.year}</small>
          </Content>
        </Path>
      ))}
    </TimelineContainer>
  );
}

export default Education;
