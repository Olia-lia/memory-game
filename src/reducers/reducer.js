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

// const startTimer = (start) => {
//   const tick = {seconds: 0, 
//     minutes: 0};
//   let interval;

//   if (start == true) {
//     let interval = setInterval(() => {
//       if (tick.seconds >= 0) {
//         tick.seconds += 1;
        
//         if (tick.seconds === 59) {
//           tick.seconds = 0;
//           tick.minutes += 1;
//         }
//       }
//     }, 1000);
    
//   }
//   else(clearInterval(interval));
// };

const defaultState = {
  player: null,
  isOpenedCards: [],
  timerStart: false,
  numberOfSeconds: 0,
  openedAt: null,
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
      openedCard.isOpened = true;
      newState.openedAt = state.numberOfSeconds;
      //console.log(newState.openedAt)
      break;
    case(1):
      newState.isOpenedCards.push(openedCard);
      openedCard.isOpened = true;
      console.log(newState.openedAt);
       
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
    console.log(newState.isOpenedCard);
    if (newState.numberOfSeconds - newState.openedAt > 5) {
      newState.isOpenedCards = [];
    }

    return newState;
    
  default: return state;
  }
};
  

export {reducer};