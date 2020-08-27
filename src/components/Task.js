import React, { Component } from "react";
import propTypes from "prop-types";

//Global state REDUX
// import { connect } from "react-redux";

//Style CSS
import "../css/task.scss";

//Internal CSS Style
const btnDelete = {
  background: "#e44336",
  color: "#FFF",
  border: "none",
  padding: "8px 20px",
  borderRadius: "20%",
  cursor: "pointer",
  fontSize: "10px",
};

class Task extends Component {
  styleCompleted() {
    //Internal CSS "Style" that can be mofifyed by code
    return {
      fontSize: "15px",
      padding: "5px",
      color: this.props.task.done ? "gray" : "white",
      textDecoration: this.props.task.done ? "line-through" : "none",
    };
  }

  render() {
    const task  = this.props.task;

    // const task = tasks[0];

    // console.log(this.props.taskFromRedux);

    //.bind below sends the parameter value inserted to the functions "checkDone" and "deleteTask".
    return (
      <div className="task">
        <p style={this.styleCompleted()}>
          {"Number: "}
          {task.id}
          {" / "}
          {"Title: "}
          {task.title}
          <br />
          <br />
          {task.description}
          <br />
          {"Mark as done: "}
          <input
            type="checkbox"
            onChange={this.props.checkDone.bind(this, task.id)}
          />{" "}
          {"Delete: "}
          <button
            style={btnDelete}
            onClick={this.props.deleteTask.bind(this, task.id)}
          >
            X
          </button>
        </p>
      </div>
    );
  }
}

 Task.propTypes = {
   //Validating the type of propertie needed.

   task: propTypes.object.isRequired,
 };

 export default Task;

// const mapStateToProps = (state) => ({
//   tasks: state.tasks,
// });

// const mapDispatchToProps = (dispatch) => ({});

// export default connect(mapStateToProps, mapDispatchToProps)(Task);
