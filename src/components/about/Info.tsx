
import React from 'react';
import { t } from 'i18next';

const Info: React.FunctionComponent = () => {

  function getBirthdate(date:any) {
    var birthday_arr = date.split("/");
    var birthday_date = new Date(birthday_arr[2], birthday_arr[1] - 1, birthday_arr[0]);
    var ageDifMs = Date.now() - birthday_date.getTime();
    var ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  const facts = [
    {icon: "calendar", title: `${t("about.birthdate", {
      year: getBirthdate(t("birthdate")),
    })}`},
    {icon: "briefcase-alt", title: `${t("about.freelance")}`},
    {icon: "coffee", title: `${t("about.coffee")}`},
    {icon: "globe", title: `${t("about.languages")}`},
  ]

  const ExpDataComp = ({data}: any) => {
    return(
      <div className="about__box">
        <i className={`bx bx-${data.icon}`}></i>
        <h3 className="about__title">{data.title}</h3>
      </div>
    )
  }

  return (
    <div className="about__info grid">
      {facts.map((fact, i) => (
        <ExpDataComp 
          key={`exp-${i}`}
          data={fact}
        />
      ))}
    </div>
  )
}

export default Info