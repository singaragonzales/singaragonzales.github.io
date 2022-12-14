import React from 'react';
import Social from './Social';
import Data from './Data';
import "./home.scss";
import { ProfileImage } from '../../assets/svg';

const Home: React.FunctionComponent = () => {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
            <Social />
            <div className="home__img">
              <ProfileImage />
            </div>
            <Data />
        </div>
      </div>
    </section>
  )
}

export default Home;