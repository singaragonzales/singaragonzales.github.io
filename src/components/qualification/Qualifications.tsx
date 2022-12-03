import { t } from 'i18next';
import React from 'react';
import "./qualification.scss";

const Qualifications = () => {

    const [toggleState, setToggleState] = React.useState<number>(0);

    const toggleTab = (index:number) => {
        setToggleState(index)
    }

    const ExperienceData = [
        {id: 1, date: `${t("experience.date.1")}`, company: "Fulltimeforce ", company_subtitle: `- ${t("company.software")}`, job: `${t("frontend.dev")}`},
        {id: 2, date: `${t("experience.date.2")}`, company: "Lilab ", company_subtitle: `- ${t("company.software")}`, job: `${t("frontend.dev")}`},
        {id: 3, date: `${t("experience.date.3")}`, company: "SDSharp", company_subtitle: `- ${t("company.software")}`, job: `${t("fullstack.dev")}`},
    ]

    const ExperienceBox = ({data}: any) => {
        return(
            <div className="timeline__item">
                <div className="circle__dot"></div>
                <span className="timeline__date">{data.date}
                    <i className="bx bx-calendar"></i>
                </span>
                <h3 className="timeline__title">{data.company}{" "} <span>{data.company_subtitle}</span></h3>
                <p className="timeline__text">{data.job}</p>
                <span className="viewmore__button"
                    onClick={() => {
                        toggleTab(data.id) 
                    }}
                >{t("view.more")}
                    <i className="uil uil-arrow-right viewmore__button-icon"></i>
                </span>
            </div>
        )
    }

  return (
    <section className="qualification section">
        <h2 className="section__title">{t("menu.experience")}</h2>
        <span className="separator"></span>
        <div className="qualification__container container grid">
            <div className="experience-left">
                <div className="timeline">
                    {ExperienceData.map((experience, i) => (
                        <React.Fragment key={`exp1-${i}`}>
                            {i % 2 === 0 && (
                                <ExperienceBox
                                    data={experience}
                                />
                            )}
                        </React.Fragment>
                    ))}            
                </div>
            </div>
            <div className="experience-right mt-[7rem]">
                <div className="timeline">
                    {ExperienceData.map((experience, i) => (
                        <React.Fragment key={`exp2-${i}`}>
                            {i % 2 !== 0 && (
                                <ExperienceBox 
                                    data={experience}
                                />
                            )}
                        </React.Fragment>
                    ))}            
                </div>
            </div>
        </div>
        <div className="qualification__container_small container grid">
            {ExperienceData.map((experience, i) => (
                <ExperienceBox 
                    key={`exp0-${i}`}
                    data={experience}
                />
            ))}  
        </div>
        {/* <div className={`services__modal ${toggleState !== 0 ? "active-modal" : ""}`}>
            <div className="services__modal-content">
                <i className="uil uil-times services__modal-close"
                        onClick={() => {
                        toggleTab(0) 
                    }}
                ></i>
                <h3 className="services__modal-title">Visual Design</h3>
                <p className='services__modal-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, exercitationem illo praesentium delectus earum asperiores maxime aperiam dicta numquam deserunt? Soluta facere inventore deserunt modi error laborum quae animi aliquid.</p>
                <ul className="services__modal-services grid">
                    <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p className="services__modal-info">Lorem, ipsum dolor sit </p>
                    </li>
                    <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p className="services__modal-info">Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
                    </li>
                    <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p className="services__modal-info">Lorem, ipsum dolor sit amet consectetur.</p>
                    </li>
                </ul>
            </div>
        </div> */}
    </section>
  )
}

export default Qualifications