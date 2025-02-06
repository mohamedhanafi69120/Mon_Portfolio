import React from "react";
import About from "../components/AboutMe";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <div>
      <main className="main">
        <About />
        <Skills />
        <Experience />
        <Portfolio />
        <Contact />
      </main>
    </div>
  );
};

export default Home;
