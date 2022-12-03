import React from 'react'
import { AboutImg } from '../../assets/image';
import CV_en from "../../assets/pdf/Resume__Singara_Gonzales_en.pdf";
import CV_es from "../../assets/pdf/Resume__Singara_Gonzales_es.pdf";
import { Files } from '../../assets/svg';
import "./about.scss";
import { t } from 'i18next';
import Info from './Info';

const About = () => {

  return (
    <section className="about section" id="about">
        <h2 className="section__title">{t("menu.about")}</h2>
        <span className="separator"></span>
        <div className="about__container container grid">
          <img className="about__img" src={AboutImg} alt="" />
          <div className="about__data">
            <p className="about__description">
              {t("about.me.description.1")}
            </p>
            <p className="about__description">
              {t("about.me.description.2")}
            </p>
            <Info />
            <a 
              download="" 
              href={localStorage.getItem("language") === "es" ? CV_es : CV_en} 
              className="button button--flex"
            >
              {t("download.cv")} <Files />
            </a>
          </div>
        </div>
    </section>
  )
}

export default About