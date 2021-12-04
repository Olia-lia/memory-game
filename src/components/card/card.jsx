import React from 'react';

import './card.css';


const Card = (props) => {

  const {card, openCard, openedCards} = props;
  
  let classNames = 'card';
  
  const checkIsOpened = (card) => {
    return openedCards.includes(card)
  };

  if (checkIsOpened(card)) {
      classNames += ' card--opened';
      classNames += ' card--disabled'
  }

  if (card.isDisabled == true) {
    classNames += ' card--disabled'
  }

  
  return (
    <div className={classNames}
        onClick={() => openCard(card)}>
      <div className="card--inner"> 
        <div className="card--back">{card.url}</div> 
        <div className="card--front">
          <img src={card.url} height="50" width="50"></img>
        </div>
      </div>
    </div>
  )
}

export default Card