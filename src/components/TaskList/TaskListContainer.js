import { PureComponent } from 'react';
import TaskItem from './TaskItem/TaskItem';
import style from './TaskList.module.css';

class TaskListContainer extends PureComponent {
  state = {
    taskList: this.props.taskList,
  };

  searchTask = (task, searhText) => {
    return task.text.toLowerCase().indexOf(searhText) !== -1;
  };

  componentDidUpdate(prevProps) {
    if (
      this.props.sortType !== prevProps.sortType ||
      this.props.taskList !== prevProps.taskList ||
      this.props.searchValue !== prevProps.searchValue
    ) {
      if (this.props.searchValue !== '' && this.props.taskList.length !== 0) {
        this.setState({
          taskList: this.props.taskList.filter((item) =>
            this.searchTask(item, this.props.searchValue)
          ),
        });
        return;
      }
      if (this.props.sortType === 'Active') {
        this.setState({
          taskList: this.props.taskList.filter((item) => !item.isDone),
        });
      }
      if (this.props.sortType === 'Done') {
        this.setState({
          taskList: this.props.taskList.filter((item) => item.isDone),
        });
      }
      if (this.props.sortType === 'All') {
        this.setState({
          taskList: [...this.props.taskList],
        });
      }
    }
  }

  render() {
    return (
      <div className={style.task}>
        <ul className={style.taskList}>
          {this.state.taskList.length > 0
            ? this.state.taskList.map((item) => (
                <TaskItem
                  key={item.id}
                  text={item.text}
                  isDone={item.isDone}
                  isMark={item.isMark}
                  taskDone={this.props.taskDone}
                  taskMark={this.props.taskMark}
                  id={item.id}
                  taskDelete={this.props.taskDelete}
                />
              ))
            : ''}
        </ul>
      </div>
    );
  }
}

export default TaskListContainer;
