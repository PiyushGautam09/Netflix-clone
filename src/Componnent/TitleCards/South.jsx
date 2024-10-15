import React from 'react'
import "./TitleCards.css"
import SouthData from '../../assets/South/South'

const South = () => {
  return (
    <div className='title-cards'> 
      <h2>South Indian Movies Dubbed In Hindi</h2>
      <div className="card-list">
        {SouthData.map((card, index) => {
         return <div className="card" key={index}>
          <img src={card.image} alt="" />
          {/* <p>{card.name}</p> */}
         </div>
        })}
      </div>
    </div>
  )
}

export default South;