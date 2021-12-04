import {generatePlayCards} from '../data/data.js';
import { OPEN_CARD, RESTART_GAME, TICK} from '../constants.js';

const cardIcons = ['./icons/spaghetti.png',
  './icons/beer.png',
  './icons/chicken.png',
  './icons/dorada.png',
  './icons/fast-food.png',
  './icons/pineapple.png',
  './icons/papaya.png',
  './icons/wine-and-glass.png',
  './icons/hot-dog.png',
  './icons/banana.png'];

const defaultState = {
  player: null,
  isOpenedCards: [],
  timerStart: false,
  numberOfSeconds: 0,
  firstOpenedAt: null,
  secondOpenedAt: null,
  cards: generatePlayCards(cardIcons),
};

const reducer = (state = defaultState, action) => {
  let newState;
  switch (action.type) {
  case OPEN_CARD: 
    newState = {...state,
      cards: [...state.cards],
      isOpenedCards: [...state.isOpenedCards]
    }; 
    
    let openedCard = newState.cards.find(card => card === action.payload.card);
    
    switch (newState.isOpenedCards.length){
    case(0): 
      newState.isOpenedCards.push(openedCard);
      newState.firstOpenedAt = state.numberOfSeconds;
      break;
    case(1):
      newState.isOpenedCards.push(openedCard);
      newState.secondOpenedAt = state.numberOfSeconds;
      break;
    default: return newState;
    }
    
    if(newState.isOpenedCards.length === 2) {
      const [first, second] = newState.isOpenedCards;
      if (first.url === second.url) {
        newState.cards = [...newState.cards.filter(card => card.url !== first.url)];
        newState.isOpenedCards = [];
      }
    }
    return newState;
  
  case RESTART_GAME: 
    newState = {
      ...state,
      numberOfSeconds: 0,
      isOpenedCards: [],
      cards: generatePlayCards(cardIcons),
    };

  
    return newState;

  case TICK: 
    newState = {
      ...state,
      isOpenedCards: [...state.isOpenedCards],
      numberOfSeconds: state.numberOfSeconds +1,
    };
    let {isOpenedCards, numberOfSeconds, firstOpenedAt, secondOpenedAt} = newState;

    if (isOpenedCards.length === 1) {
      if (numberOfSeconds - firstOpenedAt >= 5) 
        newState.isOpenedCards = [];
    }
    else if (isOpenedCards.length === 2){
      if(numberOfSeconds - secondOpenedAt >= 2) {
        newState.isOpenedCards = [];
      }
    } 

    return newState;
    
  default: return state;
  }
};
  

export {reducer};