import { createStore, combineReducers } from 'redux';
import DevTools from './DevTools';

const store = createStore(
  reducer,
  DevTools.instrument()
);

export default store;