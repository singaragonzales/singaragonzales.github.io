import React from 'react'
import { Scroll } from '../../assets/svg'

const ScrollDown = () => {
  return (
    <div className="home__scroll">
        <a href="#about" className="home__scroll-button button--flex">
            <Scroll />
            <span className="home__scroll-name">Scroll down</span>
            <i className="uil uil-arrow-down home"></i>
        </a>
    </div>
  )
}

export default ScrollDown;