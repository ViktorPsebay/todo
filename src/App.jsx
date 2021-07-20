import './style/App.css';
import React from 'react';
import InputDeal from './Input.jsx';
import Task from './Task.jsx';
import Footer from './Footer.jsx';
import { modesOfView } from './consts';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      view: modesOfView.ALL,
      countOfCompletedTasks: 0
    };
  }

  setView(view) {
    this.setState({
      view,
    });
  }

  deleteTask(task) {
    const { tasks } = this.state;
    const index = tasks.indexOf(task);
    if (index === -1) return;

    if (tasks[index].complited) {
      this.setState(prevState => ({
        countOfCompletedTasks: prevState.countOfCompletedTasks - 1,
      }));
    }
    tasks.splice(index, 1);
    this.setState({
      tasks,
    });
  }

  deleteCompletedTasks() {
    const tasks = [];
    const { state } = this;
    for (const item of state.tasks) {
      if (!item.complited) tasks.push(item);
    }
    this.setState({
      tasks,
      countOfCompletedTasks: 0,
    });
  }

  addTask(newDeal) {
    if (!newDeal) return;
    const { tasks } = this.state;
    tasks.push({
      value: newDeal,
      complited: false,
      id: Math.random(),
    });
    this.setState({
      tasks,
    });
  }

  chooseTask(task) {
    const { tasks } = this.state;
    const index = tasks.indexOf(task);
    if (index === -1) return;

    if (tasks[index].complited) {
      this.setState(prevState => ({
        countOfCompletedTasks: prevState.countOfCompletedTasks - 1,
      }));
    } else {
      this.setState(prevState => ({
        countOfCompletedTasks: prevState.countOfCompletedTasks + 1,
      }));
    }

    tasks.splice(index, 1, {
      value: task.value,
      complited: !task.complited,
      id: task.id,
    });
    this.setState({
      tasks,
    });
  }

  chooseAllTasks() {
    const tasks = [];
    let completed = false;
    const { state } = this;

    if (state.countOfCompletedTasks < state.tasks.length) {
      completed = true;
    }

    for (const item of state.tasks) {
      tasks.push({
        value: item.value,
        complited: completed,
        id: item.id,
      });
    }

    this.setState({
      tasks,
      countOfCompletedTasks: completed ? tasks.length : 0,
    });
  }

  render() {
    console.log(this.state);
    const { state } = this;
    return (
      <div className="app">
        <div className="toDo">
          <h1 className="app__header">todos</h1>
          <InputDeal
            addTask={(newDeal) => this.addTask(newDeal)}
            chooseAllTasks={(e) => this.chooseAllTasks(e)}
            isAllChosen={state.tasks.length === state.countOfCompletedTasks}
          />
          <div className="tasks">
            {state.tasks.map(item => {
              if (state.view === modesOfView.ACTIVE) {
                if (item.complited) return null;
              } else if (state.view === modesOfView.COMPLETED) {
                if (!item.complited) return null;
              }
              return (
                <Task
                  key={item.id}
                  task={item}
                  deleteTask={(item) => this.deleteTask(item)}
                  chooseTask={(item) => this.chooseTask(item)}
                />
              );
            })}
          </div>
          <div className="footer">
            <Footer
              changeFilter={(filter) => this.setView(filter)}
              countOfActiveTasks={state.tasks.length - state.countOfCompletedTasks}
              countOfCompletedTasks={state.countOfCompletedTasks}
              deleteCompletedTasks={() => this.deleteCompletedTasks()}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
