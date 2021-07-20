import React from 'react';
import PropTypes from 'prop-types';

function Buttons(props) {
  if (props.hidden) return null;
  return (
    <div className="button">
      <button type="button" className={props.class} onClick={props.onClick}>{props.name}</button>
    </div>
  );
}

Buttons.propTypes = {
  class: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  hidden: PropTypes.bool,
};

Buttons.defaultProps = {
  hidden: false,
};

export default Buttons;
