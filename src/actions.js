import { OPEN_CARD, RESTART_GAME, TICK } from './constants';

const openCard = (card) => {
  return {
    type: OPEN_CARD,
    payload: {
      card,
      //openedAt: currentTime,
    }
  };
};

const restartGame = () => {
  return {
    type: RESTART_GAME,
    //payload: timer
  };
};

const tick = () => {
  return {
    type: TICK,
   // payload: new Date().getTime()
  };
};

export {openCard, restartGame, tick};