const createCards = (urls) => {
  const cards = [];
  urls.map((url) => {
    const card = {
      url: url,
      isDisabled: false,
    };
    cards.push(card, Object.assign({}, card));
  });
  return shuffleCards(cards);
};

const generatePlayCards = (urls) => {
  const cards = createCards(urls);
  cards.map((card) => {
    let i = cards.indexOf(card, 0);
    let newKey = 'pk';
    const ind = i;
    card[newKey] = ind;
  });
  return cards;
};
 
const shuffleCards = (cards) => {
  for(let i = cards.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    const tempValue = cards[i];
    cards[i] = cards[j];
    cards[j] = tempValue;
  }
  return cards;
};

export {generatePlayCards};