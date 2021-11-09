// import { useState, useEffect } from 'react';
import { useStore, useSelector, useDispatch } from 'react-redux';
import * as actions from '../../redux/counter/action-creators';

import './counter.css';

export function Counter() {
  const dispatch = useDispatch();
  console.log(useStore());
  // dispatch: ƒ dispatch(action)
  // getState: ƒ getState()
  // subscribe: ƒ subscribe(listener)

  /* store.subscribe(() => {
    console.log('Desde Counter', store.getState());
  });

  useEffect(() => {
    console.log(store.getState());
    store.dispatch(actions.changeCounter(1));
    store.dispatch(actions.changeCounter(1));
    store.dispatch(actions.changeCounter(1));
  }, []); */

  /* const [state, setState] = useState({
    counter: 0,
    clicks: 0,
  }); */

  const counterState = useSelector((state) => state.countStore);

  /* useEffect(() => {
    store.subscribe(() => {
      console.log('Desde Counter', store.getState());
      setState(store.getState().countStore);
    });
  }, []); */

  const handleChange = (increment) => {
    console.log('Hecho Click');
    if (increment === 0) {
      dispatch(actions.resetCounter());
    } else {
      dispatch(actions.changeCounter(increment));
    }
  };

  const template = (
    <>
      <div className="counter__h3">{counterState.counter}</div>
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
      <div className="counter__h3">Clicks: {counterState.clicks}</div>
    </>
  );
  return template;
}
