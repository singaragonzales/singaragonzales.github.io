import React from "react";
import { useTranslation } from "react-i18next";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Qualifications from "./components/qualification/Qualifications";
import Contact from "./components/contact/Contact";
import Scrollup from "./components/scrollup/Scrollup";
import './App.scss';

const App: React.FunctionComponent = () => {
  const { i18n } = useTranslation();

  React.useEffect(() => {
    const language = localStorage.getItem("language") || "en";
    if (
      language !== undefined &&
      language !== null &&
      language !== "" &&
      language !== "null"
    ) {
      i18n.changeLanguage(language);
    }
    
  }, [i18n]);

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
      <Scrollup />
    </div>
  );
};

export default App;
