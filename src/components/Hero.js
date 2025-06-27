import React from 'react';
import styled from 'styled-components';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import myphoto from '../assets/myphoto.jpg';

const HeroSection = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  text-align: center;
`;

function Hero() {
  return (
    <HeroSection id="hero">
      <motion.div initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
        <h1>Hi, I'm Naitik Gupta from NIT Kurukshetra</h1>
        <h2>
          <Typewriter
            options={{
              strings: ['Full Stack Developer', 'Programming Enthusiast', 'DSA Problem Solver', 'Open Source Contributor'],
              autoStart: true,
              loop: true,
            }}
          />
        </h2>
      </motion.div>
      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
        <Tilt options={{ max: 25 }}>
          <img src={myphoto} alt="Profile" style={{ width: '160px', borderRadius: '50%', marginTop: '2rem' }} />
        </Tilt>
      </motion.div>
    </HeroSection>
  );
}

export default Hero;
