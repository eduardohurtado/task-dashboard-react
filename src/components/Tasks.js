import React, { Component } from "react";
// import propTypes from "prop-types";

//Components
import Task from "./Task.js";

class Tasks extends Component {
  render() {
    return (
      <Task
        deleteTask={this.props.deleteTask}
        checkDone={this.props.checkDone}
      />
    );

    // this.props.tasks.map((e) => (
    //   <Task
    //     task={e}
    //     key={e.id}
    //     deleteTask={this.props.deleteTask}
    //     checkDone={this.props.checkDone}
    //   />
    // ));
  }
}

// Tasks.propTypes = {
//   //Validating the type of propertie needed.

//   tasks: propTypes.array.isRequired,
// };

export default Tasks;
