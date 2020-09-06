import React, { Component } from "react";

//Global state REDUX
import { connect } from "react-redux";

//Style SCSS
import "../sass/taskForm.scss";

class TaskForm extends Component {
  constructor(props) {
    super(props);
    this.props = props;

    this.state = {
      title: "",
      description: "",
    };
  }

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.title === "" || this.state.description === "") {
      alert("Please, fill all the requested information.");
    } else {
      this.props.addTaskRedux(
        this.state.title.toUpperCase(),
        this.state.description
      );
    }
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
          <button type="submit">Save task</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  //Passing the current state of "store.js" because
  Redux: state, //mapDispatchToProps don't work without
}); //define mapStateToProps.

const mapDispatchToProps = (dispatch) => ({
  addTaskRedux(title, description) {
    dispatch({
      type: "ADD_NEW_TASK",
      title,
      description,
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);
