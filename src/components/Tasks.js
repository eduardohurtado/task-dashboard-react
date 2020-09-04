import React, { Component } from "react";

//Global state REDUX
import { connect } from "react-redux";

//Components
import Task from "./Task.js";

class Tasks extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return this.props.Redux.map((e) => (
      <Task
        key={e.id}
        propTask={e}
        // deleteTask={this.props.deleteTask}
      />
    ));
  }
}

const mapStateToProps = (state) => ({
  Redux: state.tasks,
});

export default connect(mapStateToProps, null)(Tasks);
