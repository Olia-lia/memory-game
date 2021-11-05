import React from 'react';
import Frame from '../frame/frame.js';
import Card from '../card/card.jsx';
import styled from 'styled-components';

const Grid = ({cards, openCard, checkIsOpened}) => {
 
   
  return (
  <Frame rows={6} columns={6}>
    {cards.map((card) => (
      <Card 
        key={card.pk}
        card={card} 
        checkIsOpened={checkIsOpened}
        openCard={openCard}/>))}
  </Frame>)
}
    
export default Grid