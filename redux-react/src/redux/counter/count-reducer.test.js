import { countReducer } from './count-reducer';

describe('reducers', () => {
  let initial;
  beforeEach(() => {
    initial = { counter: 0, clicks: 21 };
  });

  test('action change', () => {
    const state = countReducer(initial, {
      type: '@counter/changeValue',
      payload: 1,
    });
    expect(state).toEqual({ counter: 1, clicks: 22 });
  });

  test('action reset', () => {
    const state = countReducer(initial, {
      type: '@counter/resetValue',
      payload: 0,
    });
    expect(state).toEqual({ counter: 0, clicks: 22 });
  });
});
