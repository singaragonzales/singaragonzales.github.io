
import React from 'react';

const Info: React.FunctionComponent = () => {

  const facts = [
    {icon: "bx bx-calendar", title: "December 20th, 1996"},
    {icon: "bx bx-briefcase-alt", title: "Freelance Available"},
    {icon: "bx bx-coffee", title: "Coffee Lover"},
  ]

  const ExpDataComp = ({data}: any) => {
    return(
      <div className="about__box">
        <i className={`${data.icon}`}></i>
        <h3 className="about__title">{data.title}</h3>
      </div>
    )
  }

  return (
    <div className="about__info grid">
      {facts.map(fact => (
        <ExpDataComp 
          data={fact}
        />
      ))}
    </div>
  )
}

export default Info