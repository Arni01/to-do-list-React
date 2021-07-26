import { PureComponent } from 'react';
import TaskItem from './TaskItem/TaskItem';
import style from './TaskList.module.css';

class TaskListContainer extends PureComponent {
  render() {
    return (
      <div className={style.task}>
        <ul className={style.taskList}>
          {this.props.taskList.length > 0
            ? this.props.taskList.map((item) => (
                <TaskItem
                  key={item.id}
                  text={item.text}
                  isDone={item.isDone}
                  isMark={item.isMark}
                  taskDone={this.props.taskDone}
                  taskMark={this.props.taskMark}
                  id={item.id}
                />
              ))
            : ''}
        </ul>
      </div>
    );
  }
}

export default TaskListContainer;
