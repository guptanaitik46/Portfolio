import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Achievements from './components/Achievements';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    background: transparent; /* ✅ lets stars show */
    color: #ffffff;
  }
`;



const AppContainer = styled.div`
  background-color: #0f0f0f;
  color: #ffffff;
`;

function App() {
  return (
    <AppContainer>
      <GlobalStyle />
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Achievements />
      <Education />
      <Contact />
    </AppContainer>
  );
}

export default App;
