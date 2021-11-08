import { createStore } from 'redux';
import { countReducer } from './counter/count-reducer';

export const counterStore = createStore(countReducer);
