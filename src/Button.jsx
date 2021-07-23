import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { modesOfView } from './consts';
import { handleFilterButton } from './action/index.js';

function Button(props) {
  const { hidden, name } = props;
  const dispatch = useDispatch();

  const view = useSelector(state => state.view);

  const classNames = {
    all: view === modesOfView.ALL ? 'chosen' : 'notChosen',
    active: view === modesOfView.ACTIVE ? 'chosen' : 'notChosen',
    completed: view === modesOfView.COMPLETED ? 'chosen' : 'notChosen',
  };

  if (hidden) return null;
  return (
    <div className="button">
      <button
        type="button"
        className={classNames[name]}
        onClick={() => dispatch(handleFilterButton(name))}
      >
        {name}
      </button>
    </div>
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  hidden: PropTypes.bool,
};

Button.defaultProps = {
  hidden: false,
};

export default Button;
