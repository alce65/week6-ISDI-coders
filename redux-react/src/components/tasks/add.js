import { useState } from 'react';
import { useDispatch } from 'react-redux';
import TaskModel from '../../models/task-model';
import * as action from '../../redux/tasks/action-creators';
import { setTask } from '../../services/http-tasks';

export function Add() {
  const [newTaskState, setNewTaskState] = useState(new TaskModel());
  const dispatch = useDispatch();

  const addTask = (task) => {
    console.log(task);
    setTask(task).then((addedTask) => dispatch(action.addTask(addedTask)));
  };
  const handleChange = (evt, control) => {
    setNewTaskState({ ...newTaskState, [control]: evt.target.value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    addTask(newTaskState);
    setNewTaskState(new TaskModel());
  };

  const template = (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="task-title">Titulo</label>
        <input
          type="text"
          className="form-control"
          name="task-title"
          id="task-title"
          value={newTaskState.title}
          onChange={(ev) => handleChange(ev, 'title')}
        />
      </div>
      <div className="form-group">
        <label htmlFor="task-responsible">Responsable</label>
        <input
          type="text"
          className="form-control"
          name="task-responsible"
          id="task-responsible"
          value={newTaskState.responsible}
          onChange={(ev) => handleChange(ev, 'responsible')}
        />
      </div>
      <button type="submit">Añadir</button>
    </form>
  );
  return template;
}
