import React, { createContext, useState, useEffect } from 'react';
import enData from '../../content/en.json';
import esData from '../../content/es.json';

// 1. Creamos el contexto
export const LanguageContext = createContext();

// 2. Creamos el "Proveedor" que envolverá nuestra aplicación
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en'); // Idioma por defecto: inglés
  const [content, setContent] = useState(enData);   // Contenido por defecto: en.json

  // 3. Esta función se ejecuta cada vez que el estado 'language' cambia
  useEffect(() => {
    if (language === 'en') {
      setContent(enData);
    } else {
      setContent(esData);
    }
  }, [language]);

  // La función que los botones usarán para cambiar el idioma
  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  // 4. Hacemos que el idioma, el contenido y la función estén disponibles para todos los componentes hijos
  return (
    <LanguageContext.Provider value={{ language, content, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
