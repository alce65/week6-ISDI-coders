/* eslint-disable no-param-reassign */
import { useState, useEffect } from 'react';
import { Card } from '../core/card';
import { Add } from './add';
import { Task } from './task';

import './list.css';
import { TASKS } from '../../models/task.data';
import { store } from '../../redux/store';
import * as action from '../../redux/tasks/action-creators';

export function List() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // console.log(store);
    // console.log(store.getState());
    // console.log(store.getState());
    store.subscribe(() => {
      setTasks(store.getState().taskStore.tasks);
    });
    store.dispatch(action.loadTasks(TASKS));
  }, []);

  /* useEffect(() => {
    store.getTasks().then((response) => {
      setTasks(response);
    });
  }, []); */

  const htmlTasks = tasks.map((item) => <Task key={item.id} item={item} />);
  const template = (
    <div className="tasks-container">
      <h2>
        Lista de tareas
        <span className="badget">
          {tasks.filter((item) => !item.isCompleted).length}
        </span>
      </h2>
      <div id="formAddTask">
        <Card title="Añadir tarea">
          <Add />
        </Card>
      </div>
      <ul className="list-container">{htmlTasks}</ul>
    </div>
  );

  return template;
}
