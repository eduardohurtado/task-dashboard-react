import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

//Global state Redux
import { Provider } from "react-redux";
import store from "./store/store";

//Components
import HomePage from "./components/HomePage";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";
import TaskDashboardPage from "./components/TaskDashboardPage";

//Style Global CSS
import "./sass/normalize.scss";
import "./sass/app.scss";

class App extends Component {

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
                return <HomePage />;
              }}
            ></Route>
            <Route
              exact
              path="/About"
              render={() => {
                return <AboutPage />;
              }}
            ></Route>
            <Route
              exact
              path="/Contact"
              render={() => {
                return <ContactPage />;
              }}
            ></Route>
            <Route
              path="/TaskDashboard"
              render={() => {
                return <TaskDashboardPage />;
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
