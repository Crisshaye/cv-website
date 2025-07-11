import React, { useContext } from 'react';
import styled from 'styled-components';
import { LanguageContext } from '../context/LanguageContext';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';

// --- Estilos para el Footer ---

const FooterWrapper = styled.footer`
  background-color: #111827; // Dark background
  color: #d1d5db; // Light gray text
  padding: 3rem 2rem;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2rem;
  color: #ffffff;
`;

const ContactLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 2rem;
`;

const ContactLink = styled.a`
  font-size: 2.5rem;
  color: #d1d5db;
  transition: color 0.2s;

  &:hover {
    color: #1E40AF; // Primary color on hover
  }
`;

const Copyright = styled.p`
  font-size: 0.9rem;
  color: #9ca3af;
  margin-top: 3rem;
`;

// --- El componente Footer ---

const Footer = () => {
  const { content } = useContext(LanguageContext);
  const { headings, contact } = content;

  return (
    <FooterWrapper>
      <SectionTitle>{headings.contact}</SectionTitle>
      <ContactLinks>
        <ContactLink href={`mailto:${contact.email}`} title={contact.email}>
          <FaEnvelope />
        </ContactLink>
        <ContactLink href={contact.linkedin} target="_blank" rel="noopener noreferrer" title="LinkedIn">
          <FaLinkedin />
        </ContactLink>
        <ContactLink href={contact.github} target="_blank" rel="noopener noreferrer" title="GitHub">
          <FaGithub />
        </ContactLink>
        <ContactLink href={`tel:${contact.phone}`} title={contact.phone}>
          <FaPhone />
        </ContactLink>
      </ContactLinks>
      <Copyright>&copy; {new Date().getFullYear()} Cristóbal Haye. All rights reserved.</Copyright>
    </FooterWrapper>
  );
};

export default Footer;
