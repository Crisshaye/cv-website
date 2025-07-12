import React, { useContext } from 'react';
import Layout from '../components/Layout';
import styled from 'styled-components';
import { LanguageContext } from '../context/LanguageContext';

// 1. Import the images and GIF
import staffsyncroImg from '../images/staffsyncro.jpg';
import staffattendanceImg from '../images/staffattendance.jpg';
import supplysyncroImg from '../images/supplysyncro.jpg';
import videoAnalysisGif from '../images/video_analysis.gif';

const PageWrapper = styled.div`
  background-color: #f3f4f6;
  padding: 4rem 2rem;
`;

const PageTitle = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 1rem;
`;

const PageSubtitle = styled.h2`
  font-size: 1.5rem;
  text-align: center;
  color: #6b7280;
  margin-bottom: 4rem;
`;

const PortfolioGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const ProjectCard = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 15px rgba(0,0,0,0.1);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 1.5rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const ProjectTitle = styled.a`
  font-size: 1.5rem;
  font-weight: 600;
  color: #1E40AF;
  text-decoration: none;
  margin-bottom: 0.5rem;
  
  &:hover {
    text-decoration: underline;
  }
`;

const ProjectType = styled.p`
  font-weight: 500;
  color: #6b7280;
  margin-bottom: 1rem;
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #374151;
  flex-grow: 1;
`;

// New component to safely access the context
const PortfolioContent = () => {
  const { content } = useContext(LanguageContext);

  if (!content || !content.portfolio_projects) {
    return <div>Loading...</div>;
  }

  const projects = [
    {
      title: content.portfolio_projects.staffsyncro.title,
      url: "https://www.gpisoftware.cl/staff-syncro/",
      type: content.portfolio_projects.staffsyncro.type,
      description: content.portfolio_projects.staffsyncro.description,
      image: staffsyncroImg
    },
    {
      title: content.portfolio_projects.staffattendance.title,
      url: "https://www.staffattendance.cl/",
      type: content.portfolio_projects.staffattendance.type,
      description: content.portfolio_projects.staffattendance.description,
      image: staffattendanceImg
    },
    {
      title: content.portfolio_projects.supplysyncro.title,
      url: "https://www.gpisoftware.cl/supply-syncro/",
      type: content.portfolio_projects.supplysyncro.type,
      description: content.portfolio_projects.supplysyncro.description,
      image: supplysyncroImg
    },
    {
      title: content.portfolio_projects.video_analysis.title,
      url: null,
      type: content.portfolio_projects.video_analysis.type,
      description: content.portfolio_projects.video_analysis.description,
      image: videoAnalysisGif
    }
  ];

  return (
    <PageWrapper>
      <PageTitle>{content.headings.portfolio_title}</PageTitle>
      <PageSubtitle>{content.headings.portfolio_subtitle}</PageSubtitle>
      <PortfolioGrid>
        {projects.map((project, index) => (
          <ProjectCard key={index}>
            <CardContent>
              <ProjectTitle href={project.url} target="_blank" rel="noopener noreferrer">
                {project.title}
              </ProjectTitle>
              <ProjectType>{project.type}</ProjectType>
              <ProjectDescription>{project.description}</ProjectDescription>
            </CardContent>
            <ProjectImage src={project.image} alt={project.title} />
          </ProjectCard>
        ))}
      </PortfolioGrid>
    </PageWrapper>
  );
};


const PortfolioPage = () => {
  return (
    <Layout>
      <PortfolioContent />
    </Layout>
  );
};

export default PortfolioPage;
