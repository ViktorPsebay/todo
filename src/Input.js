import React from 'react';
import PropTypes from 'prop-types';

class InputDeal extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleSubmit(e) {
    e.preventDefault();
    this.props.addTask(e.target[0].value);
    e.target[0].value = '';
  }

  render() {
    const input = document.querySelector('.app__input');
    return (
      <form action="" onSubmit={this.handleSubmit}>
        <input 
          className="app__input" 
          type="text" 
          placeholder="What needs to be done"          
        ></input>
      </form> 
    );      
  }
}

InputDeal.propTypes = {
  addTask: PropTypes.func,
};

export default InputDeal;