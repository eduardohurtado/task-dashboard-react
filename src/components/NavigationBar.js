import React, { Component } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";

//Style SCSS
import "../sass/navigationBar.scss";

//Images
import openMenu from "../img/open-menu.png";

export default class NavigationBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuChecked: false,
    };
  }

  toggleMenuRes() {
    this.setState({ menuChecked: !this.state.menuChecked });
    if (this.state.menuChecked === true) {
      $(".navigationBar").show("fast");
    } else {
      $(".navigationBar").hide("fast");
    }
  }

  componentDidMount() {
    $("#btn-menu").click(() => {
      this.toggleMenuRes();
    });

    //Adjust the app in diferent screen sizes.
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

    //Code to hide the menu when a click event happend outside this variables:
    const $menu = $(".navigationBar");
    const $navigationBarResponsive = $(".navigationBar_responsive");
    const $labelButton = $(".labelButton");
    const $imageMenu = $(".imageMenu");

    $(document).mouseup((e) => {
      if (
        !$menu.is(e.target) && // if the target of the click isn't the container...
        !$navigationBarResponsive.is(e.target) &&
        !$labelButton.is(e.target) &&
        !$imageMenu.is(e.target) &&
        $menu.has(e.target).length === 0 // ... nor a descendant of the container
      ) {
        //Check if Menu responsive isn't visible, that means app is in dektop mode.
        if ($(".navigationBar_responsive:hidden").length === 0) {
          $menu.hide("fast");
          this.setState({ menuChecked: false });
        }
      }
    });
  }
  render() {
    return (
      <>
        <div className="navigationBar_responsive">
          <input type="checkbox" id="btn-menu" />
          <label htmlFor="btn-menu" className="labelButton">
            <img src={openMenu} alt="open-menu" className="imageMenu" />
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
