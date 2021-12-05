import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import Button from '../button/button.js';
import Grid from '../grid/grid.jsx';
import Timer from '../timer/timer.js';
import Input from '../input/input.js';
import Table from '../table/table.js';
import {openCard, restartGame, tick} from '../../actions.js';

import './app.css';

const mapStateToProps = (state) => {
  return {
    cards: state.cards,
    openedCards: state.isOpenedCards,
    seconds: state.numberOfSeconds,
    player: state.player,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    openCard: (card) => {dispatch(openCard(card))},
    restartGame: () => {dispatch(restartGame())},
    tick: () => {dispatch(tick())}
    }
};

 
const App = (props) => {
  useEffect(() => {
    const timer = setTimeout(
      () => props.tick(),
      1000
    );
    return () => clearTimeout(timer);
  },[props.seconds]);


  return (
    <div className="app" >
      <Input 
        type="text"
        placeholder="nickname"
        onChange={evt => console.log(evt.target.value)}/>
      <Button onClick={props.restartGame}>New game</Button>
      <Timer tick={props.tick} seconds={props.seconds}></Timer>
      <Grid 
        cards = {props.cards}
        openedCards = {props.openedCards}
        openCard={props.openCard}/>
      <Table
        //rows={id}
        />
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);