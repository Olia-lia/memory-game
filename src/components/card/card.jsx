import React from 'react';
import './card.css';


const Card = (props) => {

  const {card, openCard, checkIsOpened} = props;

  
  let classNames = 'card';
  
  if (checkIsOpened(card)) {
      classNames += ' card--opened';
      classNames += ' card--disabled'
  }

  
  return (
    <div className={classNames} onClick={() => openCard(card)}>
      <div className="card--inner"> 
        <div className="card--back">{props.card.id}</div> 
        <div className="card--front">{props.card.id}</div>
      </div>
    </div>
  )
}

export default Card