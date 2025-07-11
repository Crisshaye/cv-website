import * as React from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Education from "../components/Education";
import Projects from "../components/Projects";
import Footer from "../components/Footer";

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Education />
      <Projects />
      <Footer />
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>CV de Cristóbal Haye</title>;
