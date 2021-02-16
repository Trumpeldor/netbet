import { combineReducers, createStore } from 'redux';
import lotteries from './reducers/lotteries';

export default createStore(combineReducers({
  lotteries
}));
