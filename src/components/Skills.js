import React, { useContext } from 'react';
import styled from 'styled-components';
import { LanguageContext } from '../context/LanguageContext';
import {
  FaPython, FaAws, FaGoogle, FaDatabase, FaGithub, FaSlack, FaTrello, FaCode
} from 'react-icons/fa';
// Se eliminaron SiPyspark y SiGoogleappscript porque no existen
import { SiDjango, SiFirebase, SiNotion, SiGooglesheets } from 'react-icons/si';

// --- Mapeo de habilidades a íconos ---
const skillIcons = {
  python: <FaPython />,
  django: <SiDjango />,
  aws: <FaAws />,
  pyspark: <FaCode />, // Usando un ícono genérico como respaldo
  'google cloud': <FaGoogle />,
  sql: <FaDatabase />,
  firebase: <SiFirebase />,
  'google app script': <FaCode />, // Usando un ícono genérico como respaldo
  excel: <SiGooglesheets />,
  'google sheets': <SiGooglesheets />,
  github: <FaGithub />,
  slack: <FaSlack />,
  trello: <FaTrello />,
  notion: <SiNotion />,
};

// --- Estilos para la sección ---

const SkillsWrapper = styled.section`
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

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 1.5rem;
  max-width: 800px;
  margin: 0 auto;
`;

const SkillCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  background-color: #f9fafb;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  }
`;

const SkillIcon = styled.div`
  font-size: 3rem;
  color: #1E40AF;
  margin-bottom: 0.75rem;
`;

const SkillName = styled.p`
  font-size: 1rem;
  font-weight: 500;
  color: #374151;
  text-align: center;
`;

// --- El componente Skills ---

const Skills = () => {
  const { content } = useContext(LanguageContext);
  const { headings, skills } = content;

  return (
    <SkillsWrapper>
      <SectionTitle>{headings.skills}</SectionTitle>
      <SkillsGrid>
        {skills.map((skill, index) => (
          <SkillCard key={index}>
            <SkillIcon>
              {/* Se actualizó el ícono de respaldo a FaCode */}
              {skillIcons[skill.toLowerCase()] || <FaCode />}
            </SkillIcon>
            <SkillName>{skill}</SkillName>
          </SkillCard>
        ))}
      </SkillsGrid>
    </SkillsWrapper>
  );
};

export default Skills;
