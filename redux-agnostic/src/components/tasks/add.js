import { useState } from 'react';
import TaskModel from '../../models/task-model';

export function Add() {
  const [newTaskState, setNewTaskState] = useState(new TaskModel());

  const addTask = () => {};
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
