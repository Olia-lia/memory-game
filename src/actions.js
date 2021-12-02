import { OPEN_CARD, RESTART_GAME } from "./constants"

const openCard = (card) => {
  return {
    type: OPEN_CARD,
    payload: card
  }
}

const restartGame = () => {
  return {
    type: RESTART_GAME,
    //payload: timer
  }
}

export {openCard, restartGame}