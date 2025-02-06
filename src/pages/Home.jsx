import React from "react";
import About from "../components/AboutMe";
import Skills from "../components/Skills";

const Home = () => {
  return (
    <div>
      <main className="main">
        <About />
        <Skills />
      </main>
    </div>
  );
};

export default Home;
