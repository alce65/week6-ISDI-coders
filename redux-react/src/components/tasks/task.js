import { useDispatch } from 'react-redux';
import './task.css';
import * as action from '../../redux/tasks/action-creators';
import { updateTask, removeTask } from '../../services/http-tasks';

export function Task({ item }) {
  const dispatch = useDispatch();

  const toggleCompleteTask = () => {
    updateTask(item).then((taskUpdated) =>
      dispatch(action.toggleTask(taskUpdated.id))
    );
  };
  const deleteTask = () => {
    removeTask(item.id).then((resp) => {
      if (resp.ok) {
        dispatch(action.deleteTasks(item.id));
      }
    });
  };

  const template = (
    <li className="task-container">
      <input
        type="checkbox"
        checked={item.isCompleted}
        id={`task-is-completed-${item.id}`}
        onChange={() => {
          toggleCompleteTask(item);
        }}
      />
      {item.title} | {item.responsible}
      <span
        role="button"
        tabIndex="-1"
        className="task__delete-button"
        onClick={() => {
          deleteTask(item);
        }}
      >
        🗑
      </span>
    </li>
  );
  return template;
}
