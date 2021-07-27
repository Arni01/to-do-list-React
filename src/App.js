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
    sortType: 'All',
  };

  componentDidMount() {
    if (localStorage.getItem('todoList')) {
      console.log('DID_MOUNT');
      this.setState({ taskList: JSON.parse(localStorage.getItem('todoList')) });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.taskList !== this.state.taskList) {
      console.log('DID_UPDATE');
      localStorage.setItem('todoList', JSON.stringify(this.state.taskList));
      // this.forceUpdate();
    }
  }

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
      sortType: nameLink.innerText,
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
  hadnleTaskDelete = (id) => {
    this.setState((prevState) => ({
      taskList: prevState.taskList.filter((item) => item.id !== id),
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
        {this.state.sortType !== 'Done' && (
          <NewTask
            textTask={this.state.newTaskText}
            createNewTask={this.handleCreateNewTask}
            handleNewTaskText={this.handleNewTaskText}
          />
        )}
        <TaskListContainer
          taskList={this.state.taskList}
          taskDone={this.handleTaskDone}
          taskMark={this.handleTaskMark}
          taskDelete={this.hadnleTaskDelete}
          sortType={this.state.sortType}
          searchValue={this.state.searchValue}
        />
      </div>
    );
  }
}

export default App;
