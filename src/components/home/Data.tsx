import { Scroll, Send } from '../../assets/svg';
import { TypeAnimation } from 'react-type-animation';
import { t } from 'i18next';

const Data = () => {
  
  return (
    <div className="home__data">
      <h1 className="home__hello_thin">{t("home.greeting")}</h1>
        <TypeAnimation
          sequence={[`${t("name")}`, 2000]}
          className="home__title"
          wrapper="div"
          repeat={0}
          cursor={false}
        />
      <p className="home__description flex items-center">
        {t("home.description")}
      </p>
      <div className="button button--flex"
        onClick={() =>{
          window.scrollTo(0, document.body.scrollHeight);
        }}
      >
        {t("home.contact.button")}<Send />
      </div>
      <div className="home__scroll">
        <a href="#about" className="home__scroll-button" aria-label="Go to about me section">
          <Scroll />
          <span className="home__scroll-name">{t("scroll.down")}</span>
          <i className="uil uil-arrow-down home"></i>
        </a>
      </div>
    </div>
  )
}

export default Data