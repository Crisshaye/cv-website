import React, { useContext } from 'react';
import styled from 'styled-components';
import { LanguageContext } from '../context/LanguageContext';

// --- Estilos para la sección ---

const AboutWrapper = styled.section`
  background-color: #ffffff;
  padding: 4rem 2rem;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  color: #111827;
`;

const Bio = styled.p`
  max-width: 800px;
  margin: 0 auto;
  font-size: 1.125rem;
  line-height: 1.8;
  color: #374151;
`;

// --- El componente About ---

const About = () => {
  const { content } = useContext(LanguageContext);
  // Asumimos que agregaremos una sección "about" a nuestros archivos JSON
  const { headings, about } = content;

  return (
    <AboutWrapper>
      <SectionTitle>{headings.about || 'About Me'}</SectionTitle>
      <Bio>{about ? about.bio : 'Loading...'}</Bio>
    </AboutWrapper>
  );
};

export default About;
