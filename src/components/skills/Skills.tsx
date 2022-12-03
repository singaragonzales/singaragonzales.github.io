import { t } from 'i18next';
import React from 'react'
import Backend from './Backend';
import Frontend from './Frontend';
import "./skills.scss";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
        <h2 className="section__title">{t("menu.skills")}</h2>
        <span className={`separator ${localStorage.getItem("language") === "es" ? "!w-[320px]" : "!w-[200px]"}`}></span>
        <div className="skills__container container grid">
            <Frontend />
            <Backend />
        </div>
    </section>
  )
}

export default Skills;