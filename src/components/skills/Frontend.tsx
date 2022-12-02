import React from 'react'

const Frontend = () => {

    const skills = [
        {title: "JavaScript", text: "Advanced"},
        {title: "TypeScript", text: "Advanced"},
        {title: "ReactJS", text: "Advanced"},
        {title: "Redux", text: "Advanced"},
        {title: "Angular", text: "Intermediate"},
        {title: "SCSS", text: "Advanced"},
        {title: "Tailwind", text: "Advanced"}
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
        <h3 className="skills__title">Frontend developer</h3>
        <div className="skills__box">
            <div className="skills__group">
                {skills.map((skill, i) => (
                    <React.Fragment>
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
                    <React.Fragment>
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