const Social = () => {

  const links = [
    {
      classname:"uil uil-github",
      href:"https://github.com/singaragonzales",
    },
    {
      classname:"uil uil-linkedin",
      href:"https://www.linkedin.com/in/singara-gonzales-ojeda-174256213/",
    },
    {
      classname:"bx bxl-upwork",
      href:"https://www.upwork.com/freelancers/~013ae06c4e2c1444f7",
    }
  ]

  const ALinkComponent = ({classname, href}:any) => {
    return (
      <a href={href} className={`home__social-icon`} rel="noreferrer" target="_blank">
        <i className={`${classname}`}></i>
      </a>
    )
  }
  
  return (
    <div className="home__social">
        {links.map((link, i) => (
          <ALinkComponent 
            key={`link-${i}`}
            classname={link.classname}
            href={link.href}
          />
        ))}
    </div>
  )
}

export default Social