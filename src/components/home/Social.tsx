const Social = () => {

    const links = [
        {
          classname:"uil uil-github",
          href:"#about",
        },
        {
          classname:"uil uil-linkedin",
          href:"#skills",
        },
        {
          classname:"bx bxl-upwork",
          href:"#skills",
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
        {links.map(link => (
            <ALinkComponent 
            classname={link.classname}
            href={link.href}
            />
        ))}
    </div>
  )
}

export default Social