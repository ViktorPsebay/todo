import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import InputDeal from './Input.jsx';
import Task from './Task.jsx';
import Footer from './Footer.jsx';
import { modesOfView } from '../consts';
import '../style/App.css';

class App extends React.Component {
  countCompletedTasks(tasks) {
    return tasks.reduce((countOfCompletedTasks, currentTask) => {
      if (currentTask.completed) return countOfCompletedTasks + 1;
      return countOfCompletedTasks;
    }, 0);
  }

  filterTasks(task, view) {
    if (view === modesOfView.ACTIVE) {
      if (task.completed) return false;
      return true;
    } if (view === modesOfView.COMPLETED) {
      if (!task.completed) return false;
    }
    return true;
  }

  render() {
    const { props } = this;
    return (
      <div className="app">
        <div className="toDo">
          <h1 className="app__header">todos</h1>
          <InputDeal isAllChosen={props.tasks.length === this.countCompletedTasks(props.tasks)} />
          <div className="tasks">
            {props.tasks.filter(item => this.filterTasks(item, props.view)).map(item => {
              return (
                <Task key={item.id} task={item} />
              );
            })}
          </div>
          <div className="footer">
            <Footer
              countOfActiveTasks={props.tasks.length - this.countCompletedTasks(props.tasks)}
              countOfCompletedTasks={this.countCompletedTasks(props.tasks)}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  view: state.view,
  tasks: state.tasks,
});

App.propTypes = {
  view: PropTypes.string.isRequired,
  tasks: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired,
  })).isRequired,
};

export default connect(mapStateToProps)(App);
