import React, { Component } from "react";

//Style SCSS
import "../sass/aboutPage.scss";

export default class AboutPage extends Component {
  render() {
    return (
      <div className="aboutPage">
        <h1 className="aboutTitle">I'm glad to have you here!</h1>
        <p>
          This software was born as a personal practice to improve skills in
          ReactJS and the Node environment, also, this is a React-Router multi
          tab and mobile first application.
        </p>
      </div>
    );
  }
}
