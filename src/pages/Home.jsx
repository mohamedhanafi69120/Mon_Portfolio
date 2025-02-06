import React from "react";
import About from "../components/AboutMe";
import Skills from "../components/Skills";
import Experience from "../components/Experience";

const Home = () => {
  return (
    <div>
      <main className="main">
        <About />
        <Skills />
        <Experience />
      </main>
    </div>
  );
};

export default Home;
