import {createStore} from 'redux';
import {reducer} from './reducers/reducer.js';

//let reducers = combineReducers()
const store = createStore(reducer);

export default store;