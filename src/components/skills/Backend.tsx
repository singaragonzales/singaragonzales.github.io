import React from 'react'

const Backend = () => {

    const skills = [
        {title: "NodeJS", text: "Intermediate"},
        {title: "Express", text: "Intermediate"},
        {title: "Golang", text: "Basic"},
        {title: "MongoDB", text: "Advanced"},
        {title: "MySQL", text: "Intermediate"},
        {title: "Git", text: "Advanced"},
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
        <h3 className="skills__title">Backend Developer</h3>
        <div className="skills__box">
            <div className="skills__group">
                {skills.map((skill, i) => (
                    <React.Fragment>
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
                    <React.Fragment>
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