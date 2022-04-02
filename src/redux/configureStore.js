import { combineReducers, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger'
import reducer from '../redux/reducer/Reducer';

const Allreducers = combineReducers({
  cart: reducer,
});

const store = createStore(
  Allreducers,
  applyMiddleware(logger),
);

export default store;
