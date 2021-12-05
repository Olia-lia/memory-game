import { OPEN_CARD, RESTART_GAME, TICK } from './constants';

const openCard = (card) => {
  return {
    type: OPEN_CARD,
    payload: card,
  };
};

const restartGame = () => {
  return {
    type: RESTART_GAME,
  };
};

const tick = () => {
  return {
    type: TICK,
  };
};

export {openCard, restartGame, tick};