

  const createCards = (urls) => {
    const cards = []
    urls.map((url) => {
      const card = {
        url: url,
        isDisabled: false,
        isOpened: false,
      }
      cards.push(card, Object.assign({}, card));
    })
    return shuffleCards(cards)
  };


  // const createCards = (n) => {
  //   const loadedCards = [];
  //   for (let i = 1; i <= n; i++) {
  //     loadedCards.push(createCard(i))
  //   }
  //   return loadedCards
  // };
  
  // const createPairedArrayOfCards = (array) => {
  //   const cards = []
  //   array.map((element) => cards.push(element, Object.assign({}, element)))
  //   return cards;
  // };

  const generatePlayCards = (urls) => {
    const cards = createCards(urls)
    cards.map((card) => {
      let i = cards.indexOf(card, 0);
      let newKey = 'pk';
      const ind = i;
      card[newKey] = ind;
    })
    return cards
  }
 
  // const loadedCards = createCards(18);
  // const pairedCards = setUniqueIdToCardsArray(createPairedArrayOfCards(loadedCards));


const shuffleCards = (cards) => {
  for(let i = cards.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1))
    const tempValue = cards[i];
    cards[i] = cards[j];
    cards[j] = tempValue;
  }
  return cards
}

export {generatePlayCards}