import React from 'react'
import "./TitleCards.css"
import Net from "../../assets/Netflix/Net"
const NewCards = ({title,category}) => {
  return (
    <div className='title-cards'> 
      <h2>New On Netflix</h2>
      <div className="card-list">
        {Net.map((card, index) => {
         return <div className="card" key={index}>
          <img src={card.image} alt="" />
          {/* <p>{card.name}</p> */}
         </div>
        })}
      </div>
    </div>
  )
}

export default NewCards;