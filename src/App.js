import './style/App.css';
import React from 'react'; 
import InputDeal from './Input';
import Task from './tasks';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
    };
  }

  addTask(newDeal) {
    if (!newDeal) return;
    const deals = this.state.tasks;
    deals.push({value: newDeal, complited: false});
    this.setState({
      tasks: deals
    });
  }

  deleteTask(task) {
    const index = this.state.tasks.indexOf(task);
    if (index === -1) return;
    const tasks = this.state.tasks;
    tasks.splice(index, 1);
    this.setState({
      tasks: tasks,
    });
  }

  chooseTask(task) {
    const index = this.state.tasks.indexOf(task);
    if (index === -1) return;
    const tasks = this.state.tasks;
    tasks.splice(index, 1, {
      value: task.value,
      complited: !task.complited,
    });
    this.setState({
      tasks: tasks,
    });
  }

  render() {
    console.log(this.state.tasks);
    return (
      <div className="app">
        <div className="toDo">
          <h1 className="app__header">todos</h1>
          <InputDeal addTask={(newDeal) => this.addTask(newDeal)} />
          <div className="tasks">
            {this.state.tasks.map(item => {
              return (              
                <Task 
                  key={item.value}
                  task={item}
                  deleteTask={(item) => this.deleteTask(item)}
                  chooseTask={(item) => this.chooseTask(item)}                
                />
              );
            })}
          </div>         
          <div className="footer">
            <div className="statistics">
              <span className="count_items">{this.state.tasks.length + ' items lest'}</span>
              <div className="links">
                <div className="button">
                  <button className="allChoisen">All</button>
                </div>
                <div className="button">
                  <button className="active">Active</button>
                </div>
                <div className="button">
                  <button className="completed">Completed</button>
                </div>
                <div className="button">
                  <button hidden={false} className="clearCompleted">Clear completed</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
  

export default App;
