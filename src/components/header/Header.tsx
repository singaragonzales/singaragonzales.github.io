import React from 'react'
import "./header.scss";
import { useTranslation } from "react-i18next";
import { FlagSpain, FlagUSA } from '../../assets/svg';
import { t } from 'i18next';

const Header: React.FunctionComponent = () => {
  const [themeColor, setThemeColor] = React.useState<string>("light");
  const [linkActive, setLinkActive] = React.useState<string>("Home");
  const [showMenu, setShowMenu] = React.useState<boolean>(false);

  const { i18n } = useTranslation();

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
      name:t("menu.home"),
      href:"#home",
    },
    {
      classname:"user",
      name:t("menu.about"),
      href:"#about",
    },
    {
      classname:"file-alt",
      name:t("menu.skills"),
      href:"#skills",
    },
    {
      classname:"message",
      name:t("menu.contact"),
    },
    // {
    //   classname:"scenery",
    //   name:"Portfolio",
    //   href:"#portfolio",
    // },
  ]

  const changeLocalLanguage = (e: string) => {
    localStorage.setItem("language", e);
  };

  const LiComponent = ({classname, name, href, active}:any) => {
    return (
      <li className="nav__item">
        <a href={href} className={`nav__link ${active ? "active-link" : ""}`}
          onClick={() => {
            setLinkActive(name)
            if(name === t("menu.contact")){
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
        <a href="#home" className="nav__logo">{t("name")}</a>
        <div className={`nav__menu ${showMenu ? "show-menu" : ""}`}>
          <ul className="nav__list grid">
            {menu.map((link, i) => (
              <LiComponent 
                key={`li-${i}`}
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
            <div className='header-languages flex justify-center items-center'>
              {i18n.language === "es" ? (
                <FlagUSA className='cursor-pointer' onClick={() => {
                  i18n.changeLanguage("en");
                  changeLocalLanguage("en")
                  }} 
                />
              ) : (
                <FlagSpain className='cursor-pointer' onClick={() => {
                  i18n.changeLanguage("es");
                  changeLocalLanguage("es")
                  }} 
                />
              )}
            </div>
          </ul>
          <i className="uil uil-times nav__close" onClick={() => {setShowMenu(!showMenu)}}></i>
        </div>
        <div className="nav__toggle">
          <i className="uil uil-apps"
            onClick={() => {
              setShowMenu(!showMenu)
            }}
          ></i>
          <i className={`uil uil-${themeColor === "light" ? "sun" : "moon"} pl-[10px]`}
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
          {i18n.language === "es" ? (
            <FlagUSA className='cursor-pointer w-[20px] ml-[10px]' onClick={() => {
              i18n.changeLanguage("en");
              changeLocalLanguage("en")
              }} 
            />
          ) : (
            <FlagSpain className='cursor-pointer w-[20px] ml-[10px]' onClick={() => {
              i18n.changeLanguage("es");
              changeLocalLanguage("es")
              }} 
            />
          )}
        </div>
      </nav>
    </header>
  )
}

export default Header;