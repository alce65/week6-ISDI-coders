import { taskActionTypes } from './action-types';
import * as http from '../../services/http-tasks';

// eslint-disable-next-line arrow-body-style
export const loadTasks = () => {
  return (dispatch) => {
    http.getTasks().then((listTasks) => {
      dispatch({
        type: taskActionTypes.load,
        tasks: listTasks,
      });
    });
  };
};

// eslint-disable-next-line arrow-body-style
export const addTask = (task) => {
  return (dispatch) => {
    http.setTask(task).then((addedTask) =>
      dispatch({
        type: taskActionTypes.add,
        task: addedTask,
      })
    );
  };
};

// eslint-disable-next-line arrow-body-style
export const toggleTask = (item) => {
  return (dispatch) => {
    http.updateTask(item).then((taskUpdated) =>
      dispatch({
        type: taskActionTypes.toggle,
        id: taskUpdated.id,
      })
    );
  };
};

// eslint-disable-next-line arrow-body-style
export const deleteTasks = (id) => {
  return (dispatch) => {
    http.removeTask(id).then((resp) => {
      if (resp.ok) {
        dispatch({
          type: taskActionTypes.remove,
          id,
        });
      }
    });
  };
};
