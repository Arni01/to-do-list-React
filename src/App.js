import { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import NewTask from './components/NewTask/NewTask';
import TaskListContainer from './components/TaskList/TaskListContainer';

class App extends Component {
  state = {
    searchValue: '',
    navigator: [
      { id: 1, name: 'All', isActive: true },
      { id: 2, name: 'Active', isActive: false },
      { id: 3, name: 'Done', isActive: false },
    ],
    newTaskText: '',
    taskList: [{ id: 1, text: null, isMark: false, isDone: false }],
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
      ...this.state,
      taskList: [
        ...this.state.taskList,
        { id: 1, text: state.newTaskText, isMark: false, isDone: false },
      ],
      newTaskText: '',
    }));
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
        <TaskListContainer />
      </div>
    );
  }
}

export default App;
