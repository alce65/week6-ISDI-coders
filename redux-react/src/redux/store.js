/* eslint-disable no-underscore-dangle */
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { countReducer } from './counter/count-reducer';
import { tasksReducer } from './tasks/task-reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  combineReducers({
    countStore: countReducer,
    taskStore: tasksReducer,
  }),
  composeEnhancers(applyMiddleware(thunk))
);

/* Metodos del objeto cevuelto por createStore

dispatch: ƒ dispatch(action)
getState: ƒ getState()
subscribe: ƒ subscribe(listener)

liftedStore: {dispatch: ƒ, subscribe: ƒ, getState: ƒ, replaceReducer: ƒ, Symbol(observable): ƒ}
replaceReducer: ƒ replaceReducer(nextReducer)
Symbol(observable): ƒ () */
