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
          <div
            role="button"
            tabIndex="0"
            aria-label="choose"
            className={checked}
            onClick={this.handleClickOnChoose}
            onKeyPress={this.handleClickOnChoose}
          />
          <div className={label}>{props.task.value}</div>
        </div>
        <div
          role="button"
          tabIndex="0"
          aria-label="delete"
          className="delete"
          onClick={this.handleClickOnDelete}
          onKeyPress={this.handleClickOnDelete}
        />
      </div>
    );
  }
}

Task.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  task: PropTypes.object.isRequired,
  deleteTask: PropTypes.func.isRequired,
  chooseTask: PropTypes.func.isRequired,
};

export default Task;
