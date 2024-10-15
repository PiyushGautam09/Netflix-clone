import React from 'react'
import "./TitleCards.css"
import Bollywood from '../../assets/Bollywood/BollyWood'

const BollyWood = ({title,category}) => {
  return (
    <div className='title-cards'> 
      <h2>Bollywood Movies</h2>
      <div className="card-list">
        {Bollywood.map((card, index) => {
         return <div className="card" key={index}>
          <img src={card.image} alt="" />
          {/* <p>{card.name}</p> */}
         </div>
        })}
      </div>
    </div>
  )
}

export default BollyWood;