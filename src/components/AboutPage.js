import React, { Component } from "react";

//Style CSS
import "../css/aboutPage.scss";

export default class AboutPage extends Component {
  render() {
    return (
      <div className='aboutPage'>
        <h1 className='aboutTitle'>I'm glad to have you here!</h1>
        <p>
          This is a practice aplication to improve skills in ReactJS and the
          Node environment, also this project was bootstrapped with
          Create-React-App.
        </p>
      </div>
    );
  }
}
