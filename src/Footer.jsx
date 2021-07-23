import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button.jsx';
import { modesOfView } from './consts.js';
import { useSelector, } from 'react-redux';

function Footer(props) {
  const { countOfActiveTasks, countOfCompletedTasks } = props;
  const view = useSelector(state => state.view);
  const classNames = {
    all: view === modesOfView.ALL ? 'chosen' : 'notChosen',
    active: view === modesOfView.ACTIVE ? 'chosen' : 'notChosen',
    completed: view === modesOfView.COMPLETED ? 'chosen' : 'notChosen',
  };
  return (
    <div className="statistics">
      <span className="count_items">{`${countOfActiveTasks} items lest`}</span>

      <div className="links">
        <Button
          name="all"
          className={classNames.all}
        />

        <Button
          name="active"
          className={classNames.active}
        />

        <Button
          name="completed"
          className={classNames.completed}
        />
      </div>

      <div className="links">
        <Button
          hidden={!countOfCompletedTasks}
          name={`Clear completed[${countOfCompletedTasks}]`}
          className="notChosen"
        />
      </div>
    </div>
  );
}

Footer.propTypes = {
  countOfActiveTasks: PropTypes.number.isRequired,
  countOfCompletedTasks: PropTypes.number.isRequired,
};

export default Footer;
