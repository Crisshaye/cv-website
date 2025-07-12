import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link as ScrollLink } from 'react-scroll';
import { Link as GatsbyLink } from 'gatsby';
import { LanguageContext } from '../context/LanguageContext';

const Nav = styled.nav`
  background-color: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  padding: 0.75rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
`;

const Title = styled(GatsbyLink)`
  font-size: 1.25rem;
  font-weight: bold;
  color: #1E40AF;
  text-decoration: none;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

const NavLink = styled(ScrollLink)`
  font-weight: 600;
  color: #374151;
  text-decoration: none;
  cursor: pointer;
  transition: color 0.2s;

  &:hover, &.active {
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
`;

const Header = () => {
  const { language, changeLanguage, content } = useContext(LanguageContext);

  if (!content || !content.headings) {
    return null; // Don't render header if content is not loaded
  }

  return (
    <Nav>
      <Title to="/">Cristóbal Haye</Title>
      <NavLinks>
        <NavLink to="experience" smooth={true} duration={500} spy={true} activeClass="active">
          {content.headings.experience}
        </NavLink>
        <NavLink to="education-skills" smooth={true} duration={500} spy={true} activeClass="active">
          {content.headings.education_skills || 'Education / Skills'}
        </NavLink>
        <NavLink to="projects" smooth={true} duration={500} spy={true} activeClass="active">
          {content.headings.projects}
        </NavLink>
        <GatsbyLink to="/portfolio" style={{fontWeight: 600, color: '#374151', textDecoration: 'none'}}>Portfolio</GatsbyLink>
        <LangSelector>
          <LangButton onClick={() => changeLanguage('en')} isActive={language === 'en'}>EN</LangButton>
          <LangButton onClick={() => changeLanguage('es')} isActive={language === 'es'}>ES</LangButton>
        </LangSelector>
      </NavLinks>
    </Nav>
  );
};

export default Header;
