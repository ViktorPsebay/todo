import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button.jsx';
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
    const classNames = {
      all: props.view === modesOfView.ALL ? 'chosen' : 'notChosen',
      active: props.view === modesOfView.ACTIVE ? 'chosen' : 'notChosen',
      completed: props.view === modesOfView.COMPLETED ? 'chosen' : 'notChosen',
    };
    return (
      <div className="statistics">
        <span className="count_items">{`${props.countOfActiveTasks} items lest`}</span>

        <div className="links">
          <Button
            name="All"
            className={classNames.all}
            onClick={() => this.handleClick(modesOfView.ALL)}
          />

          <Button
            name="Active"
            className={classNames.active}
            onClick={() => this.handleClick(modesOfView.ACTIVE)}
          />

          <Button
            name="Completed"
            className={classNames.completed}
            onClick={() => this.handleClick(modesOfView.COMPLETED)}
          />
        </div>

        <div className="links">
          <Button
            hidden={!props.countOfCompletedTasks}
            name={`Clear completed[${props.countOfCompletedTasks}]`}
            className="notChosen"
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
  view: PropTypes.string.isRequired,
};

export default Footer;
