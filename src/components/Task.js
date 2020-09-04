import React, { Component } from "react";

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
  }

  debugger() {
    console.log("Debuggin local state fomr Redux: ");
    console.log(this.props.task);
  }

  styleCompleted() {
    return {
      fontSize: "15px",
      padding: "5px",
      color: this.props.propTask.done ? "gray" : "white",
      textDecoration: this.props.propTask.done ? "line-through" : "none",
    };
  }

  componentDidMount() {}

  render() {
    let task = this.props.propTask;

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
            onChange={() => {
              this.props.checkDoneFromRedux(task.id);
              // this.debugger();
            }}
          />{" "}
          {"Delete: "}
          <button
            style={btnDelete}
            // onClick={this.props.deleteTask.bind(this, task.id)}
            onClick={() => {}}
          >
            X
          </button>
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  //Passing the current state of "store.js" because
  Redux: state, //mapDispatchToProps don't work without
}); //define mapStateToProps.

const mapDispatchToProps = (dispatch) => ({
  checkDoneFromRedux(id) {
    dispatch({
      type: "TASK_TEXT_STYLE",
      id,
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Task);
