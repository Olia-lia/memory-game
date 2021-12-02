import React from 'react';
import {connect} from 'react-redux';
import Button from '../button/button.js';
import Grid from '../grid/grid.jsx';
import Timer from '../timer/timer.js';
import Input from '../input/input.js';
import Table from '../table/table.js';
import store from '../../store.js';
import {openCard, restartGame} from '../../actions.js';

import './app.css';

const mapStateToProps = (state) => {
  return {
    cards: state.cards,
    timerStart: state.timer.start,
    time: state.timer.time
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    openCard: (card) => {dispatch(openCard(card))},
    restartGame: () => {dispatch(restartGame())}
    }
};

const App = (props) => {

  return (
    <div className="app">
      <Input 
        type="text"
        placeholder="nickname"
        onChange={evt => console.log(evt.target.value)}/>
      <Button onClick={props.restartGame}>New game</Button>
      <Timer time={props.time}></Timer>
      <Grid 
        cards = {props.cards}
        openCard={props.openCard}/>
      <Table
        //rows={id}
        />
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);