import React from "react";
import About from "../components/AboutMe";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Portfolio from "../components/Portfolio";

const Home = () => {
  return (
    <div>
      <main className="main">
        <About />
        <Skills />
        <Experience />
        <Portfolio />
      </main>
    </div>
  );
};

export default Home;
