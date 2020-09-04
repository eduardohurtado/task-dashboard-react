import React, { Component } from "react";

//Components
import TasksContainer from "./TasksContainer";
import TaskForm from "./TaskForm.js";

//Style SCSS
import "../sass/taskDashboardPage.scss";

export default class TaskDashboardPage extends Component {
  render() {
    return (
      <div className="taskDashboardPage">
        <TaskForm addTask={this.props.addTask} />
        <TasksContainer
          // tasks={this.props.tasks}
          deleteTask={this.props.deleteTask}
        />
      </div>
    );
  }
}
