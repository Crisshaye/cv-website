import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { LanguageContext } from '../context/LanguageContext';
import { FaDownload } from 'react-icons/fa';

const DownloadWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 1rem 0;
`;

const MainButton = styled.button`
  background-color: #1E40AF;
  color: white;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  transition: background-color 0.2s;
  width: 100%;
  justify-content: center;

  &:hover {
    background-color: #1c3a94;
  }
`;

const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.5rem;
  margin-top: 0.5rem;
  transition: all 0.3s ease-in-out;
  max-height: ${({ isOpen }) => (isOpen ? '100px' : '0')};
  overflow: hidden;
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
`;

const OptionLink = styled.a`
  background-color: #f3f4f6;
  color: #1E40AF;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
  text-align: center;

  &:hover {
    background-color: #e5e7eb;
  }
`;

const DownloadButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { content } = useContext(LanguageContext);

  const cv_en_url = '/cv_en.pdf';
  const cv_es_url = '/cv_es.pdf';

  return (
    <DownloadWrapper>
      <MainButton onClick={() => setIsOpen(!isOpen)}>
        <FaDownload />
        {content.headings.download_cv || 'Download CV'}
      </MainButton>
      <OptionsContainer isOpen={isOpen}>
        <OptionLink href={cv_en_url} download>English CV</OptionLink>
        <OptionLink href={cv_es_url} download>CV en Español</OptionLink>
      </OptionsContainer>
    </DownloadWrapper>
  );
};

export default DownloadButton;
