import { useState, useEffect } from 'react';
import { counterStore } from '../../redux/store';
import * as actions from '../../redux/counter/action-creators';

import './counter.css';

export function Counter() {
  console.log(counterStore);
  // dispatch: ƒ dispatch(action)
  // getState: ƒ getState()
  // subscribe: ƒ subscribe(listener)

  /* counterStore.subscribe(() => {
    console.log('Desde Counter', counterStore.getState());
  });

  useEffect(() => {
    console.log(counterStore.getState());
    counterStore.dispatch(actions.changeCounter(1));
    counterStore.dispatch(actions.changeCounter(1));
    counterStore.dispatch(actions.changeCounter(1));
  }, []); */

  const [state, setState] = useState({
    counter: 0,
    clicks: 0,
  });

  const handleChange = (increment) => {
    if (increment === 0) {
      //
    } else {
      //
    }
  };

  const template = (
    <>
      <div className="counter__h3">{state.counter}</div>
      <div className="counter-buttons">
        <button
          type="button"
          className="counter-buttons__button"
          onClick={(evt) => handleChange(+1)}
        >
          +
        </button>
        <button
          type="button"
          className="counter-buttons__button"
          onClick={(evt) => handleChange(-1)}
        >
          -
        </button>
        <button
          type="button"
          className="counter-buttons__button"
          onClick={(evt) => handleChange(0)}
        >
          Reset
        </button>
      </div>
      <div className="counter__h3">Clicks: {state.clicks}</div>
    </>
  );
  return template;
}
