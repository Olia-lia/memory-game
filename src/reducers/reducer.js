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
  id: 1,
  isOpenedCards: [],
  isDeletedCards: [],
  timerStart: false,
  numberOfSeconds: 0,
  firstOpenedAt: null,
  secondOpenedAt: null,
  cards: generatePlayCards(cardIcons),
  results: null,
};

const reducer = (state = defaultState, action) => {
  let newState;
  switch (action.type) {
  case OPEN_CARD: 
    newState = {...state,
      cards: [...state.cards],
      isOpenedCards: [...state.isOpenedCards],
      isDeletedCards: [...state.isDeletedCards]
    }; 
    

    let openedCard = newState.cards.find(card => card === action.payload);
  
    switch (newState.isOpenedCards.length){
    case(0): 
      newState.isOpenedCards.push(openedCard);
      newState.firstOpenedAt = state.numberOfSeconds;
      break;
    case(1):
      newState.isOpenedCards.push(openedCard);
      newState.secondOpenedAt = state.numberOfSeconds;
      const [first, second] = newState.isOpenedCards;

      if (first.url === second.url) {
        newState.isDeletedCards = [...state.isDeletedCards, first, second];
      }
      break;
    default: return newState;
    }
    
    return newState;
  
  case RESTART_GAME: 
    newState = {
      ...state,
      numberOfSeconds: 0,
      isOpenedCards: [],
      timerStart: true,
      cards: generatePlayCards(cardIcons),
    };
    

    return newState;

  case TICK: 
    newState = {
      ...state,
      isOpenedCards: [...state.isOpenedCards],
    };

    let {isOpenedCards, numberOfSeconds, firstOpenedAt, secondOpenedAt} = newState;

    newState.numberOfSeconds = state.numberOfSeconds +=1;
  

    if (isOpenedCards.length === 1) {
      if (numberOfSeconds - firstOpenedAt >= 5) 
        newState.isOpenedCards = [];
    }
    else if (isOpenedCards.length === 2){
      if(numberOfSeconds - secondOpenedAt >= 1) {
        newState.isOpenedCards = [];
      }
    } 

    return newState;
    
  default: return state;
  }
};
  

export {reducer};