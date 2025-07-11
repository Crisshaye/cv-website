import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby'; // 1. Importa el componente Link de Gatsby
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { LanguageContext } from '../context/LanguageContext';

// --- Estilos ---
// (Se añade un nuevo estilo para el enlace del portfolio)

const Nav = styled.nav`
  background-color: #ffffff;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  color: #1E40AF;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

// Nuevo estilo para el enlace de texto
const PortfolioLink = styled(Link)`
  font-weight: 600;
  color: #374151;
  text-decoration: none;
  transition: color 0.2s;

  &:hover {
    color: #1E40AF;
  }
`;

const SocialLink = styled.a`
  color: #374151;
  font-size: 1.75rem;
  &:hover {
    color: #1E40AF;
  }
`;

const LangSelector = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const LangButton = styled.button`
  background: ${({ isActive }) => (isActive ? '#1E40AF' : 'none')};
  color: ${({ isActive }) => (isActive ? 'white' : 'black')};
  border: 1px solid #d1d5db;
  border-radius: 4px;
  padding: 0.25rem 0.5rem;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.2s;

  &:hover {
    background-color: #e5e7eb;
    color: black;
  }
`;

// --- Componente Header ---

const Header = () => {
  const { language, changeLanguage } = useContext(LanguageContext);

  return (
    <Nav>
      <Title>Cristóbal</Title>
      <NavLinks>
        {/* 2. Añade el enlace al Portfolio aquí */}
        <PortfolioLink to="/portfolio">Portfolio</PortfolioLink>
        <SocialLink href="https://github.com/Crisshaye" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </SocialLink>
        <SocialLink href="https://www.linkedin.com/in/cristobal-haye-leon" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </SocialLink>
        <LangSelector>
          <LangButton onClick={() => changeLanguage('en')} isActive={language === 'en'}>
            EN
          </LangButton>
          <LangButton onClick={() => changeLanguage('es')} isActive={language === 'es'}>
            ES
          </LangButton>
        </LangSelector>
      </NavLinks>
    </Nav>
  );
};

export default Header;
