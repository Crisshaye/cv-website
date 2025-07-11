import React, { useContext } from 'react';
import styled from 'styled-components';
import { LanguageContext } from '../context/LanguageContext';
import { FaLightbulb } from 'react-icons/fa';

// --- Estilos para la sección ---

const ProjectsWrapper = styled.section`
  background-color: #ffffff;
  padding: 4rem 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 3rem;
  color: #111827;
`;

const ProjectsContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const ProjectItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  padding: 1.5rem;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
`;

const IconWrapper = styled.div`
  font-size: 1.5rem;
  color: #1E40AF;
  margin-top: 5px;
`;

const ProjectDetails = styled.div`
  flex: 1;
`;

const ProjectName = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #1E40AF;
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  color: #374151;
  margin-top: 0.5rem;
  line-height: 1.6;
`;

// --- El componente Projects ---

const Projects = () => {
  const { content } = useContext(LanguageContext);
  const { headings, projects } = content;

  return (
    <ProjectsWrapper>
      <SectionTitle>{headings.projects}</SectionTitle>
      <ProjectsContainer>
        {projects.map((project, index) => (
          <ProjectItem key={index}>
            <IconWrapper>
              <FaLightbulb />
            </IconWrapper>
            <ProjectDetails>
              <ProjectName>{project.name}</ProjectName>
              <ProjectDescription>{project.description}</ProjectDescription>
            </ProjectDetails>
          </ProjectItem>
        ))}
      </ProjectsContainer>
    </ProjectsWrapper>
  );
};

export default Projects;
