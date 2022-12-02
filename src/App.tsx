import React, { useEffect } from "react";
import './App.scss';
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Qualifications from "./components/qualification/Qualifications";
import Contact from "./components/contact/Contact";
import Scrollup from "./components/scrollup/Scrollup";
import Footer from "./components/footer/Footer";

const App: React.FunctionComponent = () => {

  return (
    <div className={`theme__page light`}>
      <Header />
      <main className="main">
          <Home />
          <About />
          <Skills />
          <Qualifications />
      </main>
      <Contact />
      {/* <Footer /> */}
      <Scrollup />
    </div>
  );
};

export default App;
