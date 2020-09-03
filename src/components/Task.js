import React, { Component } from "react";
// import propTypes from "prop-types";

//Global state REDUX
import { connect } from "react-redux";

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
  constructor(props) {
    super(props);
    this.props = props;

    // this.state = {
    //   lol: false,
    // }
  }

  // alertTestState(){
  //   alert(this.state.lol);
  // }

  styleCompleted() {
    return {
      fontSize: "15px",
      padding: "5px",
      color: this.props.tasksFromRedux.done ? "gray" : "white",
      textDecoration: this.props.tasksFromRedux.done ? "line-through" : "none",
    };
  }

  // componentDidMount(){
  //   this.alertTestState();
  // }

  render() {
    const task = this.props.tasksFromRedux;

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
            // onChange={this.props.checkDone.bind(this, task.id)}
            onChange={() => {
              this.props.checkDoneFromRedux(task.id);
            }}
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

const mapStateToProps = (state) => ({
  tasksFromRedux: state.tasks[0],
});

const mapDispatchToProps = (dispatch) => ({
  checkDoneFromRedux(id) {
    dispatch({
      type: "TASK_TEXT_STYLE",
      id,
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Task);
