import React from "react";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import My_work from "../components/Mywork/My_work";
import Skills from "../components/Skills/Skills";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <My_work />
    </div>
  );
};

export default Home;
