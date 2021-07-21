import React from 'react';
import PropTypes from 'prop-types';

function Buttons(props) {
  const { hidden, className, onClick, name } = props;
  if (hidden) return null;
  return (
    <div className="button">
      <button type="button" className={className} onClick={onClick}>{name}</button>
    </div>
  );
}

Buttons.propTypes = {
  className: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  hidden: PropTypes.bool,
};

Buttons.defaultProps = {
  hidden: false,
};

export default Buttons;
