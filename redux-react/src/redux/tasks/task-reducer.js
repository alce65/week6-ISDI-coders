import { taskActionTypes } from './action-types';

const initialState = {
  tasks: [],
};

export const tasksReducer = (state = initialState, action) => {
  console.log('Usando tasksReducer');
  switch (action.type) {
    case taskActionTypes.load:
      return { ...state, tasks: [...action.tasks] };
    case taskActionTypes.add:
      return { ...state, tasks: [...state.tasks, action.task] };
    case taskActionTypes.toggle:
      return {
        ...state,
        tasks: state.tasks.map((item) =>
          item.id === action.id
            ? { ...item, isCompleted: !item.isCompleted }
            : { ...item }
        ),
      };
    case taskActionTypes.remove:
      return {
        ...state,
        tasks: state.tasks.filter((item) => item.id !== action.id),
      };
    default:
      return state;
  }
};
