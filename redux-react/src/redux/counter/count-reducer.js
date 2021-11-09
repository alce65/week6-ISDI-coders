import { CounterModel } from '../../models/counter-model';
import { actionTypes } from './action-types';

/* const initialState = {
  counter: 0,
  clicks: 0,
}; */

const initialState = new CounterModel();

export const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.change:
      return {
        ...state,
        counter: state.counter + action.payload,
        clicks: state.clicks + 1,
      };
    case actionTypes.reset:
      return {
        ...state,
        counter: action.payload,
        clicks: state.clicks + 1,
      };
    default:
      return state;
  }
};
