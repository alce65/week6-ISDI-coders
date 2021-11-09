import { createStore, combineReducers } from 'redux';
import { countReducer } from './counter/count-reducer';
import { tasksReducer } from './tasks/task-reducer';

export const store = createStore(
  combineReducers({
    countStore: countReducer,
    taskStore: tasksReducer,
  }),
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

/* Metodos del objeto cevuelto por createStore

dispatch: ƒ dispatch(action)
getState: ƒ getState()
subscribe: ƒ subscribe(listener)

liftedStore: {dispatch: ƒ, subscribe: ƒ, getState: ƒ, replaceReducer: ƒ, Symbol(observable): ƒ}
replaceReducer: ƒ replaceReducer(nextReducer)
Symbol(observable): ƒ () */
