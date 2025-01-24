import React from 'react'
import './Hero.css'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitleCards from '../TitileCards/TitleCards'
const Hero = () => {
  return (
    <div className='hero'>
      <img src={hero_banner} alt="" className='banner-img' />
      <div className='hero-caption'>
        <img src={hero_title} alt="" className='caption-img' />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis consectetur alias impedit quae ea ut. Eum inventore quibusdam officia illum facere? Sapiente hic provident, nulla laboriosam aliquam est cupiditate dignissimos?
        </p>
        <div className='hero-btn'>
          <button className='btn' ><img src={play_icon} alt="" />Play</button>
          <button className='btn dark-btn'><img src={info_icon} alt="" />More Info</button>
        </div>
        <div className='title-card'>

          <TitleCards></TitleCards>
        </div>
      </div>
    </div>
  )
}

export default Hero