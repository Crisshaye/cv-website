import React from 'react';
import Header from './Header';
import { LanguageProvider } from '../context/LanguageContext'; // <-- 1. Importa el proveedor

const Layout = ({ children }) => {
  return (
    // 2. Envuelve todo con el LanguageProvider
    <LanguageProvider>
      <Header />
      <main>{children}</main>
    </LanguageProvider>
  );
};

export default Layout;
