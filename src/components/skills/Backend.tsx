import { t } from 'i18next'
import React from 'react'

const Backend = () => {

    const skills = [
        {title: "NodeJS", text: `${t("skills.intermediate")}`},
        {title: "Express", text: `${t("skills.intermediate")}`},
        {title: "Golang", text: `${t("skills.basic")}`},
        {title: "MongoDB", text: `${t("skills.advanced")}`},
        {title: "MySQL", text: `${t("skills.intermediate")}`},
        {title: "Git", text: `${t("skills.advanced")}`},
    ]

    const BackSkills = ({data}: any) => {
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
        <h3 className="skills__title">{t("backend")}</h3>
        <div className="skills__box">
            <div className="skills__group">
                {skills.map((skill, i) => (
                    <React.Fragment key={`bk1-${i}`}>
                        {i % 2 === 0 && (
                            <BackSkills
                                data={skill}
                            />
                        )}
                    </React.Fragment>
                ))}
            </div>
            <div className="skills__group">
                {skills.map((skill, i) => (
                    <React.Fragment key={`bk2-${i}`}>
                        {i % 2 !== 0 && (
                            <BackSkills 
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

export default Backend