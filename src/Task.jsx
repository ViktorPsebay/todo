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

  handleDoubleClick = (event) => {
    const { props } = this;
    const view = event.target;

    view.contentEditable = true;
    view.focus();

    view.onkeydown = (event) => {
      if (event.key === 'Enter') {
        view.blur();
      }
    };

    view.onblur = () => {
      props.editTask(props.task, view.innerHTML);
    };
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
          <div className={label} onDoubleClick={this.handleDoubleClick}>{props.task.value}</div>
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
  task: PropTypes.shape({
    value: PropTypes.string.isRequired,
    complited: PropTypes.bool.isRequired,
  }).isRequired,
  deleteTask: PropTypes.func.isRequired,
  chooseTask: PropTypes.func.isRequired,
  editTask: PropTypes.func.isRequired,
};

export default Task;
