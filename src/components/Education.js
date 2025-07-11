import React, { useContext } from 'react';
import styled from 'styled-components';
import { LanguageContext } from '../context/LanguageContext';
import { FaGraduationCap } from 'react-icons/fa';

// --- Estilos para la sección ---

const EducationWrapper = styled.section`
  background-color: #f9fafb; // Un gris muy claro, igual que Experiencia
  padding: 4rem 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 3rem;
  color: #111827;
`;

const EducationContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const EducationItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  background-color: #ffffff;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
  }
`;

const IconWrapper = styled.div`
  font-size: 2rem;
  color: #1E40AF;
  margin-top: 5px;
`;

const EducationDetails = styled.div`
  flex: 1;
`;

const Degree = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #1E40AF;
`;

const Institution = styled.p`
  font-size: 1rem;
  color: #374151;
  margin-top: 0.25rem;
`;

const Period = styled.p`
  font-size: 0.9rem;
  color: #6b7280;
  margin-top: 0.5rem;
  font-style: italic;
`;


// --- El componente Education ---

const Education = () => {
  const { content } = useContext(LanguageContext);
  const { headings, education } = content;

  return (
    <EducationWrapper>
      <SectionTitle>{headings.education}</SectionTitle>
      <EducationContainer>
        {education.map((edu, index) => (
          <EducationItem key={index}>
            <IconWrapper>
              <FaGraduationCap />
            </IconWrapper>
            <EducationDetails>
              <Degree>{edu.degree}</Degree>
              <Institution>{edu.institution}</Institution>
              <Period>{edu.period}</Period>
            </EducationDetails>
          </EducationItem>
        ))}
      </EducationContainer>
    </EducationWrapper>
  );
};

export default Education;
