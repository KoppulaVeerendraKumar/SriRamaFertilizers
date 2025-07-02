import React from 'react'
import "./Hero.css"
import HeroImg from '../../assets/Hero.jpg'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='Hero'  id="Hero">
       <img src={HeroImg} alt="" className="hero-image" />
        <div className="hero-text">
          <h1>Grow More With Sri Rama Fertilizers</h1>
          <p>Providing quality fertilizers to boost your farm's productivity naturally and sustainably.</p>
          <button className="btn">Explore more <img src={dark_arrow} alt=""/> </button>
        </div>
    </div>
  )
}

export default Hero