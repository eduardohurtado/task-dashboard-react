import React, { Component } from "react";

//Global state REDUX
import { connect } from "react-redux";

//Style SCSS
import "../sass/task.scss";

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
          {"Done: "}
          <input
            type="checkbox"
            onChange={() => {
              this.props.checkDoneRedux(task.id);
            }}
          />{" "}
          {"Delete: "}
          <button
            style={btnDelete}
            onClick={() => {
              this.props.deleteTaskRedux(task.id);
            }}
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
  checkDoneRedux(id) {
    dispatch({
      type: "TASK_TEXT_STYLE",
      id,
    });
  },

  deleteTaskRedux(id) {
    dispatch({
      type: "TASK_DELETE",
      id,
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Task);
