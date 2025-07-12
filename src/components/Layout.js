import React from 'react';
import Header from './Header';
import { LanguageProvider } from '../context/LanguageContext';
import styled from 'styled-components';

const MainContent = styled.main`
  padding-top: 60px; // Adjustment for the fixed header
`;

const Layout = ({ children }) => {
  return (
    <LanguageProvider>
      <Header />
      <MainContent>
        {children}
      </MainContent>
    </LanguageProvider>
  );
};

export default Layout;
