import {createStore} from 'redux';

const defaultState = {
    cards: []
  }
  
  const reducer = (state = defaultState, action) => {
    switch (action.type) {
      case "OPEN_CARD":
        return {cards: action.payload}
      case "RESTART_GAME":
        return {...state, cash: state.cash - action.payload}
      default: return state
    }
  }

export {reducer};