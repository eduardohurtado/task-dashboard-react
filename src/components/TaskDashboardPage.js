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
        <TaskForm />
        <TasksContainer />
      </div>
    );
  }
}
