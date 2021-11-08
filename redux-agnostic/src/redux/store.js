import { createStore } from 'redux';
import { countReducer } from './counter/count-reducer';

export const counterStore = createStore(
  countReducer,
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
