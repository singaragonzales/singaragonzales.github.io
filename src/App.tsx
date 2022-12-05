import React from "react";
import { useTranslation } from "react-i18next";
import './App.scss';

const App: React.FunctionComponent = () => {
  const { i18n } = useTranslation();
  const Header = React.lazy(() => import('./components/header/Header'));
  const Home = React.lazy(() => import('./components/home/Home'));
  const About = React.lazy(() => import('./components/about/About'));
  const Skills = React.lazy(() => import('./components/skills/Skills'));
  const Qualifications = React.lazy(() => import('./components/qualification/Qualifications'));
  const Contact = React.lazy(() => import('./components/contact/Contact'));
  const Scrollup = React.lazy(() => import('./components/scrollup/Scrollup'));
  
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
