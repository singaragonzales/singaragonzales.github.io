import React from 'react'
import Backend from './Backend';
import Frontend from './Frontend';
import "./skills.scss";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
        <h2 className="section__title">Skills</h2>
        <span className="separator"></span>
        <span className="section__subtitle"></span>
        <div className="skills__container container grid">
            <Frontend />
            <Backend />
        </div>
    </section>
  )
}

export default Skills;