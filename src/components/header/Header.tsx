import React from 'react'
import "./header.scss";
import { useTranslation } from "react-i18next";
import Contact from '../contact/Contact';

const Header: React.FunctionComponent = () => {
  const [themeColor, setThemeColor] = React.useState<string>("light");
  const [linkActive, setLinkActive] = React.useState<string>("Home");
  const [showMenu, setShowMenu] = React.useState<boolean>(false);

  window.addEventListener("scroll", function() {
    const header = document.querySelector(".header");
    if(this.scrollY >= 80){
      header?.classList.add("scroll-header");
    }else{
      header?.classList.remove("scroll-header");
    }
  })

  const menu = [
    {
      classname:"estate",
      name:"Home",
      href:"#home",
    },
    {
      classname:"user",
      name:"About",
      href:"#about",
    },
    {
      classname:"file-alt",
      name:"Skills",
      href:"#skills",
    },
    {
      classname:"message",
      name:"Contact",
    },
    // {
    //   classname:"scenery",
    //   name:"Portfolio",
    //   href:"#portfolio",
    // },
  ]

  const LiComponent = ({classname, name, href, active}:any) => {
    return (
      <li className="nav__item">
        <a href={href} className={`nav__link ${active ? "active-link" : ""}`}
          onClick={() => {
            setLinkActive(name)
            if(name === "Contact"){
              window.scrollTo(0, document.body.scrollHeight);
            }
          }}
        >
          <i className={`uil nav__icon uil-${classname}`}></i>{name}
        </a>
      </li>
    )
  }

  return (
    <header className="header">
      <nav className="nav container">
        <a href="#home" className="nav__logo">Singara Gonzales</a>
        <div className={`nav__menu ${showMenu ? "show-menu" : ""}`}>
          <ul className="nav__list grid">
            {menu.map(link => (
              <LiComponent 
                classname={link.classname}
                name={link.name}
                href={link.href}
                active={linkActive === link.name}
              />
            ))}
            <div className='header-switch'>
              <i className={`uil uil-${themeColor === "light" ? "sun" : "moon"} px-[10px]`}
                onClick={() => {
                  const header = document.querySelector(".theme__page");
                  if(themeColor === "dark"){
                    header?.classList.add("light");
                    header?.classList.remove("dark");
                  }else{
                    header?.classList.add("dark");
                    header?.classList.remove("light");
                  }
                  setThemeColor(themeColor === "light" ? "dark" : "light")
                }}
              ></i>
            </div>
          </ul>
          <i className="uil uil-times nav__close" onClick={() => {setShowMenu(!showMenu)}}></i>
        </div>
        <div className="nav__toggle">
          <i className={`uil uil-${themeColor === "light" ? "sun" : "moon"} px-[10px]`}
             onClick={() => {
              const header = document.querySelector(".theme__page");
                if(themeColor === "dark"){
                  header?.classList.add("light");
                  header?.classList.remove("dark");
                }else{
                  header?.classList.add("dark");
                  header?.classList.remove("light");
                }
              setThemeColor(themeColor === "light" ? "dark" : "light")
            }}
          ></i>
          <i className="uil uil-apps"
            onClick={() => {
              setShowMenu(!showMenu)
            }}
          ></i>
        </div>
      </nav>
    </header>
  )
}

export default Header;