import { taskStore } from '../../redux/store';
import './task.css';
import * as action from '../../redux/tasks/action-creators';

export function Task({ item }) {
  const toggleCompleteTask = () => {
    taskStore.dispatch(action.toggleTask(item.id));
  };
  const deleteTask = () => {
    taskStore.dispatch(action.deleteTasks(item.id));
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
