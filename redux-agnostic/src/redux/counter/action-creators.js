import { actionTypes } from "./action-types";

export const changeCounter = (payload) => ({
  type: actionTypes.change,
  payload,
});

export const resetCounter = () => ({
  type: actionTypes.reset,
  payload: 0,
});
