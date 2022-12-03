import { t } from 'i18next'
import React from 'react'

const Frontend = () => {

    const skills = [
        {title: "JavaScript", text: `${t("skills.advanced")}`},
        {title: "TypeScript", text: `${t("skills.advanced")}`},
        {title: "ReactJS", text: `${t("skills.advanced")}`},
        {title: "Redux", text: `${t("skills.advanced")}`},
        {title: "Angular", text: `${t("skills.intermediate")}`},
        {title: "SCSS", text: `${t("skills.advanced")}`},
        {title: "Tailwind", text: `${t("skills.advanced")}`},
        {title: "Figma", text: `${t("skills.basic")}`}
    ]

    const FrontSkills = ({data}: any) => {
        return(
            <div className="skills__data">
                <i className="bx bx-badge-check"></i>
                <div>
                    <h3 className="skills__name">{data.title}</h3>
                    <span className="skills__level">{data.text}</span>
                </div>
            </div>
        )
    }

  return (
    <div className="skills__content">
        <h3 className="skills__title">{t("frontend")}</h3>
        <div className="skills__box">
            <div className="skills__group">
                {skills.map((skill, i) => (
                    <React.Fragment key={`ft1-${i}`}>
                        {i % 2 === 0 && (
                            <FrontSkills 
                                data={skill}
                            />
                        )}
                    </React.Fragment>
                ))}
            </div>
            <div className="skills__group">
                {skills.map((skill, i) => (
                    <React.Fragment key={`ft2-${i}`}>
                        {i % 2 !== 0 && (
                            <FrontSkills 
                                data={skill}
                            />
                        )}
                    </React.Fragment>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Frontend