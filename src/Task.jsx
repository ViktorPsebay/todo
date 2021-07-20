import React from 'react';
import PropTypes from 'prop-types';

class Task extends React.Component {
  handleClickOnDelete = (event) => {
    const { props } = this;
    if (event.target.className !== 'delete') return;
    props.deleteTask(props.task);
  }

  handleClickOnChoose = () => {
    const { props } = this;
    props.chooseTask(props.task);
  }

  render() {
    const { props } = this;
    const checked = props.task.complited ? 'complete checked' : 'complete no_checked';
    const label = props.task.complited ? 'label label_checked' : 'label';

    return (
      <div
        className="new_task"
      >
        <div className="wrapForTask">
          <div className={checked} onClick={this.handleClickOnChoose} />
          <label className={label}>{props.task.value}</label>
        </div>
        <div className="delete" onClick={this.handleClickOnDelete} />
      </div>
    );
  }
}

Task.propTypes = {
  task: PropTypes.object.isRequired,
  deleteTask: PropTypes.func.isRequired,
  chooseTask: PropTypes.func.isRequired,
};

export default Task;
