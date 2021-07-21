import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  const { hidden, className, onClick, name } = props;
  if (hidden) return null;
  return (
    <div className="button">
      <button
        type="button"
        className={className}
        onClick={onClick}
      >
        {name}
      </button>
    </div>
  );
}

Button.propTypes = {
  className: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  hidden: PropTypes.bool,
};

Button.defaultProps = {
  hidden: false,
};

export default Button;