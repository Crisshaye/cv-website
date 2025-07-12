import React, { useContext } from 'react';
import styled from 'styled-components';
import { LanguageContext } from '../context/LanguageContext';
import {
  FaPython, FaAws, FaGoogle, FaDatabase, FaGithub, FaSlack, FaTrello, FaCode
} from 'react-icons/fa';
import { SiDjango, SiFirebase, SiNotion, SiGooglesheets } from 'react-icons/si';

const skillIcons = {
  python: <FaPython />,
  django: <SiDjango />,
  aws: <FaAws />,
  pyspark: <FaCode />,
  'google cloud': <FaGoogle />,
  sql: <FaDatabase />,
  firebase: <SiFirebase />,
  'google app script': <FaCode />,
  excel: <SiGooglesheets />,
  'google sheets': <SiGooglesheets />,
  github: <FaGithub />,
  slack: <FaSlack />,
  trello: <FaTrello />,
  notion: <SiNotion />,
};

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 1.5rem;
`;

const SkillCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background-color: #f9fafb;
  border-radius: 8px;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
  }
`;

const SkillIcon = styled.div`
  font-size: 2.5rem;
  color: #1E40AF;
  margin-bottom: 0.75rem;
`;

const SkillName = styled.p`
  font-size: 0.9rem;
  font-weight: 500;
  color: #374151;
  text-align: center;
`;

const Skills = () => {
  const { content } = useContext(LanguageContext);
  const { skills } = content;

  return (
    <SkillsGrid>
      {skills.map((skill, index) => (
        <SkillCard key={index}>
          <SkillIcon>
            {skillIcons[skill.toLowerCase()] || <FaCode />}
          </SkillIcon>
          <SkillName>{skill}</SkillName>
        </SkillCard>
      ))}
    </SkillsGrid>
  );
};

export default Skills;
