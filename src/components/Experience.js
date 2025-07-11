import React, { useContext } from 'react';
import styled from 'styled-components';
import { LanguageContext } from '../context/LanguageContext';

// --- Estilos para la sección ---

const ExperienceWrapper = styled.section`
  background-color: #f9fafb; // Un gris muy claro
  padding: 4rem 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 3rem;
  color: #111827;
`;

const JobWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto; // Centra el contenedor del trabajo
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const JobHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  border-bottom: 2px solid #e5e7eb;
  padding-bottom: 1rem;
  margin-bottom: 1.5rem;
`;

const JobTitle = styled.h3`
  font-size: 1.75rem;
  font-weight: 600;
  color: #1E40AF;
`;

const JobPeriod = styled.p`
  font-style: italic;
  color: #6b7280;
`;

const PlatformTitle = styled.h4`
  font-size: 1.25rem;
  font-weight: 600;
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
`;

const DescriptionList = styled.ul`
  list-style-type: disc;
  padding-left: 20px;
  color: #374151;
`;

const DescriptionItem = styled.li`
  margin-bottom: 0.5rem;
  line-height: 1.6;
`;


// --- El componente Experience ---

const Experience = () => {
  const { content } = useContext(LanguageContext);
  const { headings, experience } = content;

  return (
    <ExperienceWrapper>
      <SectionTitle>{headings.experience}</SectionTitle>
      {experience.map((job, index) => (
        <JobWrapper key={index}>
          <JobHeader>
            <div>
              <JobTitle>{job.title}</JobTitle>
              <p>{job.company}</p>
            </div>
            <JobPeriod>{job.period}</JobPeriod>
          </JobHeader>
          
          {job.platforms.map((platform, pIndex) => (
            <div key={pIndex}>
              <PlatformTitle>{platform.name}</PlatformTitle>
              <DescriptionList>
                {platform.description.map((desc, dIndex) => (
                  <DescriptionItem key={dIndex}>{desc}</DescriptionItem>
                ))}
              </DescriptionList>
            </div>
          ))}
        </JobWrapper>
      ))}
    </ExperienceWrapper>
  );
};

export default Experience;
