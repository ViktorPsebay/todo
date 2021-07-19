import React from 'react';
import PropTypes from 'prop-types';

// class Tasks extends React.Component {
//   constructor(props) {
//     super(props);
//     // this.handleSubmit = this.handleSubmit.bind(this);
//   }
  
//   renderTask(item) {
//     return (
//       <Task key={item} task={item} />
//     );
//   }

//   render() {
//     const tasks = this.props.tasks;
//     return (
//       <div className="tasks">
//         {tasks.map(item => {
//           return (
//             <div 
//               key={item}
//               className="new_task"
//             >
//               {this.renderTask(item)}
//               <div className="delete"></div>
//             </div>
//           );
//         })}
//       </div> 
//     );      
//   }
// }

class Task extends React.Component {
  constructor(props) {
    super(props);
    this.handleClickOnDelete = this.handleClickOnDelete.bind(this);
    this.handleClickOnChoose = this.handleClickOnChoose.bind(this);
  }

  handleClickOnDelete(event) {
    if (event.target.className !== 'delete') return;
    this.props.deleteTask(this.props.task);
  }

  handleClickOnChoose() {
    this.props.chooseTask(this.props.task);
  }
  // const className = props.highlighted ? 'highlightedSquare' : 'square';
  render() {
    const checked = this.props.task.complited ? 'complete checked' : 'complete no_checked';
    return (
      <div 
        className="new_task"
      >
        <div className="wrapForTask">
          <div className={checked} onClick={this.handleClickOnChoose}></div>
          <label className="label" >{this.props.task.value}</label>
        </div> 
        <div className="delete" onClick={this.handleClickOnDelete}></div>
      </div>
    
    );
  }
}

// Tasks.propTypes = {
//   tasks: PropTypes.array,
// };

Task.propTypes = {
  task: PropTypes.object,
  deleteTask: PropTypes.func,
  chooseTask: PropTypes.func,
};


export default Task;