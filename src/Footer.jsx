import React from 'react';
import PropTypes from 'prop-types';
import Buttons from './Buttons.jsx';
import { modesOfView } from './consts.js';

class Footer extends React.Component {
  handleClick = (filter) => {
    const { props } = this;
    props.changeFilter(filter);
  }

  handleClickOnClear = () => {
    const { props } = this;
    props.deleteCompletedTasks();
  }

  render() {
    const { props } = this;
    return (
      <div className="statistics">
        <span className="count_items">{`${props.countOfActiveTasks} items lest`}</span>

        <div className="links">
          <Buttons
            name="All"
            class="allChoisen"
            onClick={() => this.handleClick(modesOfView.ALL)}
          />

          <Buttons
            name="Active"
            class="active"
            onClick={() => this.handleClick(modesOfView.ACTIVE)}
          />

          <Buttons
            name="Completed"
            class="completed"
            onClick={() => this.handleClick(modesOfView.COMPLETED)}
          />

          <Buttons
            hidden={!props.countOfCompletedTasks}
            name={`Clear completed[${props.countOfCompletedTasks}]`}
            class="clearCompleted"
            onClick={() => props.deleteCompletedTasks()}
          />
        </div>
      </div>
    );
  }
}

Footer.propTypes = {
  countOfActiveTasks: PropTypes.number.isRequired,
  countOfCompletedTasks: PropTypes.number.isRequired,
  changeFilter: PropTypes.func.isRequired,
  deleteCompletedTasks: PropTypes.func.isRequired,
};

export default Footer;
