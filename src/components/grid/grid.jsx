import React from 'react';
import Frame from '../frame/frame.js';
import Card from '../card/card.jsx';

const Grid = (props) => {
    const {cards, openCard, openedCards} = props;

  return (
  <Frame rows={4} columns={5}>
    {cards.map((card) => (
      <Card 
        key={card.pk}
        card={card} 
        openedCards={openedCards}
        openCard={openCard}
        />))}
  </Frame>)
}
    
export default Grid