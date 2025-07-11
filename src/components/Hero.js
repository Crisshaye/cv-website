import React, { useContext } from 'react'; // 1. Importa useContext
import styled from 'styled-components';
import { LanguageContext } from '../context/LanguageContext'; // 2. Importa el contexto
import profileImage from '../images/profile.jpg';

// --- Estilos (sin cambios) ---
const HeroWrapper = styled.section`
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  gap: 3rem;
  text-align: center;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 2rem 1rem;
    gap: 1.5rem;
  }
`;

const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #1E40AF;
`;

const TextContainer = styled.div`
  text-align: left;
  @media (max-width: 768px) {
    text-align: center;
  }
`;

const Name = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  color: #111827;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 400;
  color: #1E40AF;
  margin-top: 0.5rem;
`;

// --- Componente Hero ---

const Hero = () => {
  // 3. Usa el contexto para obtener el contenido del idioma actual
  const { content } = useContext(LanguageContext);
  const { name, title } = content.hero;

  return (
    <HeroWrapper>
      <ProfileImage src={profileImage} alt="Foto de perfil de Cristóbal Haye" />
      <TextContainer>
        <Name>{name}</Name>
        <Title>{title}</Title>
      </TextContainer>
    </HeroWrapper>
  );
};

export default Hero;
