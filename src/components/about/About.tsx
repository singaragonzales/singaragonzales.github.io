import React from 'react'
import { AboutImg } from '../../assets/image';
import CV from "../../assets/pdf/Resume__Singara_Gonzales.pdf";
import { Files } from '../../assets/svg';
import "./about.scss";
import Info from './Info';

const About = () => {
  return (
    <section className="about section" id="about">
        <h2 className="section__title">About Me</h2>
        <span className="separator"></span>
        <span className="section__subtitle"></span>

        <div className="about__container container grid">
          <img className="about__img" src={AboutImg} alt="" />
          <div className="about__data">
            <p className="about__description">
              I am a web developer specialized in MEAN and MERN. I work in specialized data management systems, which have increased the productivity of companies and user satisfaction. <br/><br/> 
              I consider myself a responsible person, with initiative and the ability to work in a team, in order to achieve the proposed objectives in the short and long term.
            
            </p>
            <Info />
            <a download="" href={CV} className="button button--flex">Download CV <Files /></a>
          </div>
        </div>
    </section>
  )
}

export default About