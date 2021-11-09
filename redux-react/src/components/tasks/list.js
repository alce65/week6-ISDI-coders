/* eslint-disable no-param-reassign */
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card } from '../core/card';
import { Add } from './add';
import { Task } from './task';
import * as action from '../../redux/tasks/action-creators';

import './list.css';

export function List() {
  // const [tasks, setTasks] = useState([]);

  const { tasks } = useSelector((state) => state.taskStore);
  const dispatch = useDispatch();

  useEffect(
    () =>
      // console.log(store);
      // console.log(store.getState());
      // console.log(store.getState());
      /* store.subscribe(() => {
      setTasks(store.getState().taskStore.tasks);
    }); */
      dispatch(action.loadTasks()),
    [dispatch]
  );

  /* useEffect(() => {
    store.getTasks().then((response) => {
      setTasks(response);
    });
  }, []); */

  console.log(tasks);
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
