import React from 'react';
import Layout from '../components/Layout';
import styled from 'styled-components';

const PageWrapper = styled.div`
  padding: 4rem 2rem;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  margin-top: 1rem;
  color: #6b7280;
`;

const PortfolioPage = () => {
  return (
    <Layout>
      <PageWrapper>
        <Title>Portfolio</Title>
        <Subtitle>Esta sección está en construcción. ¡Vuelve pronto!</Subtitle>
      </PageWrapper>
    </Layout>
  );
};

export default PortfolioPage;

export const Head = () => <title>Portfolio</title>;
