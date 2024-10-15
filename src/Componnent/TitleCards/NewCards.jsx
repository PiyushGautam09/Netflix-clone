import React from 'react'
import "./TitleCards.css"
import New_Cards from '../../assets/Hollywood/Hollywood'

const NewCards = ({title,category}) => {
  return (
    <div className='title-cards'> 
      <h2>Hollywood Movies</h2>
      <div className="card-list">
        {New_Cards.map((card, index) => {
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
