import { Component } from 'react';
import style from './TaskList.module.css';

class TaskListContainer extends Component {
  render() {
    return (
      <div className={style.task}>
        <ul className={style.taskList}></ul>
      </div>
    );
  }
}

export default TaskListContainer;
