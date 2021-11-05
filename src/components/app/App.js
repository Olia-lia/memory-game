import React, { useState, useEffect } from 'react';
import Button from '../button/button.js'
import Grid from '../grid/grid.jsx';
import Timer from '../timer/timer.js';
import Input from '../input/input.js';
import Table from '../table/table.js';
import './app.css';


const App = () => {

  const icons = ['../public/icons/spagetti.png']

  const createCard = (id) => {
    
      return {
        id,
        isDisabled: true,
      }
    };


  const createCards = (n) => {
    const loadedCards = [];
    for (let i = 1; i <= n; i++) {
      loadedCards.push(createCard(i))
    }
    return loadedCards
  };
  
  const createPairedArrayOfCards = (array) => {
    const cards = []
    array.map((element) => cards.push(element, Object.assign({}, element)))
    return cards;
  };

  const setUniqueIdToCardsArray = (cards) => {
    cards.map((card) => {
      let i = cards.indexOf(card, 0);
      let newKey = 'pk';
      const ind = i;
      card[newKey] = ind;
    })
    return cards
  }
 
  const loadedCards = createCards(18);
  const pairedCards = setUniqueIdToCardsArray(createPairedArrayOfCards(loadedCards));


const shuffleCards = (cards) => {
  for(let i = cards.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1))
    const tempValue = cards[i];
    cards[i] = cards[j];
    cards[j] = tempValue;
  }
  return cards
}

let minId = 1;

const [game, setGame] = useState({
  nickname: `player${minId}`,
  time: 0,
  defaultCards: shuffleCards(pairedCards),
})



const {defaultCards, time, nickname} = game;

const [cards, setCards] = useState(defaultCards);
const [isOpenedArray, setOpenCardsArray] = useState([]);
const [disabledCard, setDisabledCard] = useState(true);
const [name, setNickname] = useState(nickname);
const [timer, setTimer] = useState(time)


const onButtonClick = () => {
  //evt.preventDefault();
  setGame(game)
  //setTimer(time + 1)
}

const openCard = (card) => {
  setOpenCardsArray(isOpenedArray.concat(card))
  console.log(isOpenedArray);
}

const checkIsOpened = (card) => {
  return isOpenedArray.includes(card)
};

const checkMatchedCards = () => {
  const [first, second] = isOpenedArray;
  if (first.id === second.id) {
    setCards(cards.filter(c => c.id !== first.id))
    setOpenCardsArray([]);
  }

  const ti = setTimeout(() => {
    setOpenCardsArray([]);
  }, 100);
 
};


useEffect(() => {
  if (isOpenedArray.length === 1) {
    setTimeout(() => {
      setOpenCardsArray([])
    }, 5000)
  }

  if (isOpenedArray.length === 2) {
    setTimeout(checkMatchedCards, 300);
  }
  return () => {
    clearTimeout(() => {setOpenCardsArray([])}, [isOpenedArray])};
});




  return (
    <div className="app">
      <Input 
        type="text"
        placeholder="Nickname"
        onChange={evt => setNickname(evt.target.value)}/>
      <Button onClick={onButtonClick}>New game</Button>
      <Timer>{timer}</Timer>
      <Grid 
        cards={cards} 
        openCard={openCard}
        checkIsOpened={checkIsOpened}/>
      <Table
        name={name}
        time={time}/>
    </div>
  );
};

export default App;