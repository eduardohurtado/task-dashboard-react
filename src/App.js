import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

//Global state Redux
import { Provider } from "react-redux";
import store from "./data/store";

//Data
import tasks from "./data/tasks.json";

//Components
import HomePage from "./components/HomePage";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";
import TaskDashboardPage from "./components/TaskDashboardPage";

//Style Global CSS
import "./css/normalize.scss";
import "./css/app.scss";

class App extends Component {
  state = {
    tasksRecieved: tasks,
  };

  //Creating a new Task, the function is called from TaskForm.
  addTask = (title, description) => {
    const newTask = {
      id: this.state.tasksRecieved.length,
      title: title,
      description: description,
    };
    //Sets the new "Task".
    //[...this.state.tasksRecieved "<---Whatever was here before", newTask "<---Add this"],
    this.setState({
      tasksRecieved: [...this.state.tasksRecieved, newTask],
    });
  };

  //Remove a task from the local state
  deleteTask = (id) => {
    //Filter the data creating a new array without the one that the id matches.
    const newTasks = this.state.tasksRecieved.filter(
      (tasksRecieved) => tasksRecieved.id !== id
    );
    this.setState({
      tasksRecieved: newTasks,
    });
  };

  //.map below runs all over "tasksRecieved" change the ".done" prop and returns the new state.
  checkDone = (id) => {
    const newTasksDone = this.state.tasksRecieved.map((tasksRecieved) => {
      if (tasksRecieved.id === id) {
        tasksRecieved.done = !tasksRecieved.done;
      }
      return tasksRecieved;
    });
    this.setState({
      tasksRecieved: newTasksDone,
    });
  };

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="gridContainer">
            <NavigationBar />
            <Route
              exact
              path="/"
              render={() => {
                return (
                  <>
                    <HomePage />
                  </>
                );
              }}
            ></Route>
            <Route
              exact
              path="/About"
              render={() => {
                return (
                  <>
                    <AboutPage />
                  </>
                );
              }}
            ></Route>
            <Route
              exact
              path="/Contact"
              render={() => {
                return (
                  <>
                    <ContactPage />
                  </>
                );
              }}
            ></Route>
            <Route
              path="/TaskDashboard"
              render={() => {
                return (
                  <>
                    <TaskDashboardPage
                      addTask={this.addTask}
                      tasks={this.state.tasksRecieved}
                      deleteTask={this.deleteTask}
                      checkDone={this.checkDone}
                    />
                  </>
                );
              }}
            />
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;