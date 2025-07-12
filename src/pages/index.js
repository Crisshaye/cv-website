import React from "react";
import Layout from "../components/Layout";
import Landing from "../components/Landing";
// DownloadButton is no longer imported or used here as it's part of Landing.js
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Education from "../components/Education";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import Section from "../components/Section";
import styled from 'styled-components';

// Wrapper for the two-card layout
const TwoCardWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  align-items: stretch;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  background: #ffffff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
  height: 100%;
`;

const IndexPage = () => {
  return (
    <Layout>
      <Landing />
      {/* The standalone DownloadButton component has been removed from here */}
      <Section id="experience" dark>
        <Experience />
      </Section>
      
      <Section id="education-skills">
        <TwoCardWrapper>
          <Card>
            <Education />
          </Card>
          <Card>
            <Skills />
          </Card>
        </TwoCardWrapper>
      </Section>
      
      <Section id="projects" dark>
        <Projects />
      </Section>

      <Footer />
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>CV de Cristóbal Haye</title>;
