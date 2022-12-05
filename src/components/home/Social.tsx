const Social = () => {

  const links = [
    {
      classname:"uil uil-github",
      href:"https://github.com/singaragonzales",
      aria: "Go to my github profile"
    },
    {
      classname:"uil uil-linkedin",
      href:"https://www.linkedin.com/in/singara-gonzales-ojeda-174256213/",
      aria: "Go to my linkedin profile"
    },
    {
      classname:"bx bxl-upwork",
      href:"https://www.upwork.com/freelancers/~013ae06c4e2c1444f7",
      aria: "Go to my upwork profile"
    }
  ]

  const ALinkComponent = ({classname, href, aria}:any) => {
    return (
      <a href={href} className={`home__social-icon`} rel="noreferrer" target="_blank" aria-label={aria}>
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
            aria={link.aria}
          />
        ))}
    </div>
  )
}

export default Social