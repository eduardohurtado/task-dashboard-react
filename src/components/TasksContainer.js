import React, { Component } from "react";

//Components
import Tasks from "./Tasks.js";

//Style CSS
import "../sass/tasksContainer.scss";

export default class TasksContainer extends Component {
  render() {
    return (
      <div className="tasksArea">
        <p>My tasks:</p>
        <div className="tasksArea__tasksContainer">
          <Tasks deleteTask={this.props.deleteTask} />
        </div>
      </div>
    );
  }
}
