import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button.jsx';

function Footer(props) {
  const { countOfActiveTasks, countOfCompletedTasks } = props;
  return (
    <div className="statistics">
      <span className="count_items">{`${countOfActiveTasks} items lest`}</span>

      <div className="links">
        <Button name="all" />
        <Button name="active" />
        <Button name="completed" />
      </div>

      <div className="links">
        <Button
          hidden={!countOfCompletedTasks}
          name={`Clear completed[${countOfCompletedTasks}]`}
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
