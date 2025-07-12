import React from 'react';
import styled from 'styled-components';

const SectionWrapper = styled.section`
  padding: 4rem 2rem;
  background-color: ${({ dark }) => (dark ? '#f3f4f6' : '#ffffff')};
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 3rem;
  color: #111827;
`;

const Section = ({ title, children, dark, id }) => {
  return (
    <SectionWrapper dark={dark} id={id}>
      <SectionTitle>{title}</SectionTitle>
      <div>{children}</div>
    </SectionWrapper>
  );
};

export default Section;
