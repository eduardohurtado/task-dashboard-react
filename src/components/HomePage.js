import React, { Component } from "react";

//Style CSS
import "../css/homePage.scss";

//Images
import logoHtml from "../img/html-5.png";
import logoScss from "../img/scss.png";
import logoJs from "../img/js.png";
import logoReact from "../img/react.png";
import logoRedux from "../img/redux.png";

export default class HomePage extends Component {
  render() {
    return (
      <div className="homePage">
        <h1 className="homeTitle">Welcome :)</h1>
        <p>
          Welcome to my application, this app is useful to create dialy tasks
          that can be deleted, and marked as complete, please enjoy.
        </p>
        <h2>Main technologies:</h2>

        <img src={logoHtml} alt="Html5" height="110px" />
        <img src={logoJs} alt="Javascript" height="110px" />
        <img src={logoScss} alt="SCSS" height="110px" />
        <img src={logoReact} alt="React" height="110px" />
        <img className="incoming" src={logoRedux} alt="Redux" height="110px" />
        <p className="incomingText">
          *Gray icons means that feature is in current develop.
        </p>
      </div>
    );
  }
}
