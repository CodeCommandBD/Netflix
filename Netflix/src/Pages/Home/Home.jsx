import React from 'react'
import './Home.css'
import Navbar from '../../Components/Navbar/Navbar'
import Hero from '../../Components/Hero/Hero'
import TitleCards from '../../Components/TitileCards/TitleCards'
import Footer from '../../Components/Footer/Footer'

const Home = () => {
  return (
    <div className='home'>
      <Navbar></Navbar>
      <Hero></Hero>
      <div className='more-card'>
        <TitleCards title={"blockbuster Movies"} category={"top_rated"}></TitleCards>
        <TitleCards title={"Only on Netflix"} category={"popular"}></TitleCards>
        <TitleCards title={"Upcoming"} category={"upcoming"}></TitleCards>
        <TitleCards title={"Top Pics for you"} category={"now_playing"}></TitleCards>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Home