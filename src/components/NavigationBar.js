import React, { Component } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";

//Style CSS
import "../css/navigationBar.scss";

//Images
import openMenu from "../img/open-menu.png";

export default class NavigationBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuChecked: false,
    };
  }

  componentDidMount() {
    $("#btn-menu").click(() => {
      this.setState({ menuChecked: !this.state.menuChecked });
      if (this.state.menuChecked === true) {
        $(".navigationBar").show("fast");
      } else {
        $(".navigationBar").hide("fast");
      }
    });

    $(window).resize(() => {
      if ($(window).width() >= 769) {
        $(".navigationBar").show();
        $(".navigationBar_responsive").hide();
        this.setState({ menuChecked: false });
      } else {
        $(".navigationBar").hide();
        $(".navigationBar_responsive").show();
      }
    });
  }
  render() {
    return (
      <>
        <div className="navigationBar_responsive">
          <input type="checkbox" id="btn-menu" />
          <label for="btn-menu">
            <img src={openMenu} alt="open-menu" />
          </label>
        </div>

        <div className="navigationBar">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/TaskDashboard">Task Dashboard</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
            <li className="navigationBar__item-r">
              <Link to="/Contact">Contact</Link>
            </li>
          </ul>
        </div>
      </>
    );
  }
}
