import { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import NewTask from './components/NewTask/NewTask';
import TaskListContainer from './components/TaskList/TaskListContainer';
import { nanoid } from 'nanoid';

const createId = () => {
  return nanoid();
};

class App extends Component {
  state = {
    searchValue: '',
    navigator: [
      { id: 1, name: 'All', isActive: true },
      { id: 2, name: 'Active', isActive: false },
      { id: 3, name: 'Done', isActive: false },
    ],
    newTaskText: '',
    taskList: [],
  };

  handleSearch = (value) => {
    this.setState({
      ...this.state,
      searchValue: value,
    });
  };

  handleActiveLInk = (nameLink) => {
    this.setState((state) => ({
      navigator: state.navigator.map((item) => ({
        ...item,
        isActive: item.name === nameLink.innerText,
      })),
    }));
  };

  handleNewTaskText = (text) => {
    this.setState({
      ...this.state,
      newTaskText: text,
    });
  };
  handleCreateNewTask = () => {
    this.setState((state) => ({
      ...state,
      taskList: [
        ...state.taskList,
        {
          id: createId(),
          text: state.newTaskText,
          isMark: false,
          isDone: false,
        },
      ],
      newTaskText: '',
    }));
  };

  handleTaskDone = (id) => {
    const index = this.state.taskList.findIndex((el) => el.id === id);
    this.setState((prevState) => {
      let taskList = [...prevState.taskList];
      taskList[index] = {
        ...prevState.taskList[index],
        isDone: !prevState.taskList[index].isDone,
      };
      return { taskList };
    });
  };
  handleTaskMark = (id) => {
    const index = this.state.taskList.findIndex((el) => el.id === id);
    this.setState((prevState) => {
      let taskList = [...prevState.taskList];
      taskList[index] = {
        ...prevState.taskList[index],
        isMark: !prevState.taskList[index].isMark,
      };
      return { taskList };
    });
  };

  render() {
    return (
      <div className="container">
        <Header
          searchValue={this.state.searchValue}
          searchTask={this.handleSearch}
        />
        <Navigation
          nav={this.state.navigator}
          activeLink={this.handleActiveLInk}
        />
        <NewTask
          textTask={this.state.newTaskText}
          createNewTask={this.handleCreateNewTask}
          handleNewTaskText={this.handleNewTaskText}
        />
        <TaskListContainer
          taskList={this.state.taskList}
          taskDone={this.handleTaskDone}
          taskMark={this.handleTaskMark}
        />
      </div>
    );
  }
}

export default App;
