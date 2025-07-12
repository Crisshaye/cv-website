import React, { useContext } from 'react';
import styled from 'styled-components';
import { LanguageContext } from '../context/LanguageContext';
// Import your GIF here. Make sure the path is correct.
import videoAnalysisGif from '../images/video_analysis.gif'; 

// Map project names to their imported GIFs
const projectGifs = {
  'Video Analysis': videoAnalysisGif,
  'Análisis de Video': videoAnalysisGif, // For Spanish version
};

const ProjectItem = styled.div`
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
  max-width: 800px;
  margin: 0 auto;
  text-align: center; // Center content
`;

const ProjectGif = styled.img`
  width: 100%;
  max-width: 600px; // Set a max-width for the GIF
  border-radius: 8px;
  margin-top: 1.5rem; // Changed from margin-bottom to margin-top
`;

const ProjectDetails = styled.div`
  text-align: left; // Align text to the left for readability
  max-width: 600px;
  margin: 0 auto;
`;

const ProjectName = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #1E40AF;
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  color: #374151;
  margin-top: 0.5rem;
  line-height: 1.6;
`;

const Projects = () => {
  const { content } = useContext(LanguageContext);
  const { projects } = content;

  return (
    <div>
      {projects.map((project, index) => (
        <ProjectItem key={index}>
          {/* Details are now rendered before the GIF */}
          <ProjectDetails>
            <ProjectName>{project.name}</ProjectName>
            <ProjectDescription>{project.description}</ProjectDescription>
          </ProjectDetails>
          {projectGifs[project.name] && (
            <ProjectGif src={projectGifs[project.name]} alt={`${project.name} demo`} />
          )}
        </ProjectItem>
      ))}
    </div>
  );
};

export default Projects;
