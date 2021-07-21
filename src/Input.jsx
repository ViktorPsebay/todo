import React from 'react';
import PropTypes from 'prop-types';

class InputDeal extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const { props } = this;
    props.addTask(e.target[0].value);
    e.target[0].value = '';
  }

  render() {
    const input = document.querySelector('.app__input');
    const { props } = this;
    const className = props.isAllChosen ? 'chooseAll chooseAll_clicked' : 'chooseAll';
    return (
      <div className="wrapForInput">
        <div
          role="button"
          tabIndex="0"
          aria-label="markAll"
          className={className}
          onClick={() => props.chooseAllTasks()}
          onKeyPress={() => props.chooseAllTasks()}
        />
        <form action="" onSubmit={this.handleSubmit}>
          <input
            className="app__input"
            type="text"
            placeholder="What needs to be done"
          />
        </form>
      </div>

    );
  }
}

InputDeal.propTypes = {
  addTask: PropTypes.func.isRequired,
  chooseAllTasks: PropTypes.func.isRequired,
  isAllChosen: PropTypes.bool.isRequired,
};

export default InputDeal;
