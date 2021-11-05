const openCard = (cards) => {
  return {
    type: 'OPEN__CARD',
    payload: cards
  }
}

const restartGame = () => {
  return {
    type: 'RESTART_GAME',
  }
}

export {openCard, restartGame}