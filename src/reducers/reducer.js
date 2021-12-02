import {generatePlayCards} from '../data/data.js';
import { useEffect, useState } from 'react';
import { OPEN_CARD, RESTART_GAME } from '../constants.js';
const cardIcons = ['./icons/spaghetti.png',
               './icons/beer.png',
               './icons/chicken.png',
               './icons/dorada.png',
               './icons/fast-food.png',
               './icons/pineapple.png',
               './icons/papaya.png',
               './icons/wine-and-glass.png',
               './icons/hot-dog.png',
               './icons/banana.png']

const defaultState = {
  player: null,
  isOpenedCards: [],
  cards: generatePlayCards(cardIcons),
  timer: {
    start: false,
    time: {
      minutes: 0,
      seconds: 0,
    }
  }
};
  
const reducer = (state = defaultState, action) => {
  let newState;
  switch (action.type) {
    case OPEN_CARD: 

    
      newState = {...state,
                    cards: [...state.cards],
                    isOpenedCards: [...state.isOpenedCards]
                  } 
     
      const openedCard = newState.cards.find(card => card === action.payload);
      if(newState.isOpenedCards.length >= 0) {
        
        newState.isOpenedCards.push(openedCard);
        openedCard.isOpened = true;

        if(newState.isOpenedCards.length === 2) {
          newState.cards.forEach(element => {
            element.isDisabled = true;
          });
          const [first, second] = newState.isOpenedCards;
          if (first.url === second.url) {
            newState.cards = [...newState.cards.filter(card => card.url !== first.url)];
            newState.isOpenedCards = []
          }
        }
      }
      return newState;
    

    case RESTART_GAME: 
      newState = {
       ...state,
          isOpenedCards: [],
          cards: generatePlayCards(cardIcons),
          
 
  }
  newState.timer.start = true,
   newState.timer.time = {
      minutes: 0,
      seconds: 0,

        }
        console.log(newState.timer)

       let interval
      
       let {seconds, minutes} = newState.timer.time
      if (newState.timer.start == true) {
       
        console.log(seconds)
        interval = setInterval(() => {
          if (seconds >= 0) {
            seconds += 1;

        console.log(seconds)
          if (seconds === 59) {
            seconds = 0;
            minutes += 1
            }
          }
        }, 1000);
        
      }
      else(clearInterval(interval))

   
        
      

    
      console.log(newState)  
      return newState;
  
    default: return state
  }
}
  

export {reducer};