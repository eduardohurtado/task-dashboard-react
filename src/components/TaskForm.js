import React, { Component } from "react";

//Style SCSS
import "../sass/taskForm.scss";

export default class TaskForm extends Component {
  state = {
    title: "",
    description: "",
  };

  onSubmit = (e) => {
    this.props.addTask(this.state.title, this.state.description);
    e.preventDefault();
  };

  onChange = (e) => {
    //Asign the new valor everytime something is typed.
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <div className="taskForm">
        <h1>Add a new task</h1>
        <p>Complete the requested information:</p>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            name="title"
            placeholder="Write the task title."
            maxLength="20"
            size="25"
            onChange={this.onChange}
            value={this.state.title}
          />{" "}
          <br />
          <br />
          <textarea
            name="description"
            placeholder="Write the task description."
            cols="30"
            rows="3"
            maxLength="40"
            style={{ resize: "none" }}
            onChange={this.onChange}
            value={this.state.description}
          ></textarea>
          <br />
          <button type="submit">Save the task</button>
        </form>
      </div>
    );
  }
}
