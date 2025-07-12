import React, { useContext } from 'react';
import styled from 'styled-components';
import { LanguageContext } from '../context/LanguageContext';
import profileImage from '../images/profile.jpg';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import DownloadButton from './DownloadButton'; // Import the DownloadButton

// --- Estilos para la nueva sección ---

const LandingWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: stretch;
  gap: 2rem;
  background-color: #e5e7eb;
  padding: 4rem 2rem;
  position: relative;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    padding: 2rem 1rem;
  }
`;

const Card = styled.div`
  background-color: #ffffff;
  padding: 3rem;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  border: 1px solid #e5e7eb;
  width: 100%;
  max-width: 450px;
  display: flex;
  flex-direction: column;
`;

const LeftPanel = styled(Card)`
  align-items: center;
  text-align: center;
`;

const ProfileImage = styled.img`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1.5rem;
`;

const Name = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: #111827;
`;

const Title = styled.h2`
  font-size: 1.25rem;
  font-weight: 400;
  color: #1E40AF;
  margin-top: 0.5rem;
  margin-bottom: 2rem;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: auto;
  padding-top: 1.5rem;
`;

const SocialLink = styled.a`
  font-size: 2rem;
  color: #374151;
  transition: color 0.2s;
  &:hover {
    color: #1E40AF;
  }
`;

const RightPanel = styled(Card)`
  justify-content: center;
`;

const AboutTitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  color: #111827;
`;

const BioList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const BioListItem = styled.li`
  font-size: 1.1rem;
  line-height: 1.7;
  color: #374151;
  margin-bottom: 1rem;
  
  &::before {
    content: '▪';
    color: #1E40AF;
    margin-right: 10px;
    font-size: 1.2em;
  }
`;

const Highlight = styled.span`
  font-weight: 600;
  color: #111827;
`;

const Landing = () => {
  const { content } = useContext(LanguageContext);
  const { hero, about, contact, headings } = content;

  const renderHighlightedText = (text) => {
    return text.split('*').map((part, index) => 
      index % 2 === 1 ? <Highlight key={index}>{part}</Highlight> : part
    );
  };

  return (
    <LandingWrapper>
      <LeftPanel>
        <ProfileImage src={profileImage} alt="Foto de perfil de Cristóbal Haye" />
        <Name>{hero.name}</Name>
        <Title>{hero.title}</Title>
        <DownloadButton /> {/* Download button moved here */}
        <SocialLinks>
          <SocialLink href={contact.linkedin} target="_blank" rel="noopener noreferrer" title="LinkedIn"><FaLinkedin /></SocialLink>
          <SocialLink href={contact.github} target="_blank" rel="noopener noreferrer" title="GitHub"><FaGithub /></SocialLink>
          <SocialLink href={`mailto:${contact.email}`} title={contact.email}><FaEnvelope /></SocialLink>
        </SocialLinks>
      </LeftPanel>
      <RightPanel>
        <AboutTitle>{headings.about}</AboutTitle>
        <BioList>
          {about.bio.map((item, index) => (
            <BioListItem key={index}>
              {renderHighlightedText(item)}
            </BioListItem>
          ))}
        </BioList>
      </RightPanel>
    </LandingWrapper>
  );
};

export default Landing;
