import React, { Component } from "react";

//Components
import Tasks from "./Tasks.js";

//Style CSS
import "../css/tasksContainer.scss";

export default class TasksContainer extends Component {
  render() {
    return (
      <div className="tasksArea">
        <p>My tasks:</p>
        <div className="tasksArea__tasksContainer">
          <Tasks
            tasks={this.props.tasks}
            deleteTask={this.props.deleteTask}
            checkDone={this.props.checkDone}
          />
        </div>
      </div>
    );
  }
}
