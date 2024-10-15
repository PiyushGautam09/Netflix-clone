import React from 'react'
import "./Home.css"
import Navbar from "../../Componnent/Navbar/Navbar"
import hero_bannner from "../../assets/hero.webp"
import title from "../../assets/title.png"
import play from "../../assets/play_icon.png"
import info from "../../assets/info_icon.png"
import TitleCards from '../../Componnent/TitleCards/TitleCards'
import Footer from '../../Componnent/Footer/Footer'
import NewCards from '../../Componnent/TitleCards/NewCards'
import BollyWood from '../../Componnent/TitleCards/Bollywood'
import South from '../../Componnent/TitleCards/South'
import NetFlix from "../../Componnent/TitleCards/Netflix"




const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <div className="hero">
        <img src={hero_bannner} alt="" className='banner-img'/>
       
        <div className="hero-caption">
          <img src={title} alt="" className='caption-img' />
         <p>Lucifer is a TV series based on the Vertigo characters. It centers on Lucifer, who resigns his throne as the Lord of Hell and opens an exclusive piano bar called Lux in Los Angeles.</p>
         <div className="hero-btns">
          <button className='btn'><img src={play} alt="" />Play</button>
          <button className='btn dark-btn'><img src={info} alt="" />More info</button>
         </div>
         <TitleCards/>
        </div>
      </div>
      <div className="more-cards">
     
    <BollyWood/>
<NewCards/>
<South/>
<TitleCards/>
<NetFlix/>


      {/* <TitleCards title={"Blockbuster Movies"}/>
      <TitleCards title={"Only On Netflix"}/>
      <TitleCards title={"Upcoming"}/>
      <TitleCards title={"Top Pick For You"}/> */}
      </div>
      <Footer/>
    </div>
  )
}

export default Home
