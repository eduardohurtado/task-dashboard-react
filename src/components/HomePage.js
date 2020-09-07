import React, { Component } from "react";

//Tools
import LazyImage from "./tools/LazyImage";

//Style SCSS
import "../sass/homePage.scss";

//Images
import LogoHtml from "../img/html-5.png";
import LogoScss from "../img/scss.png";
import LogoJs from "../img/js.png";
import LogoReact from "../img/react.png";
import LogoRedux from "../img/redux.png";
import LogojQuery from "../img/jquery.png";

export default class HomePage extends Component {
  render() {
    const imageLogoHtml = {
      alt: "Html5",
      height: "110px",
      src: LogoHtml,
    };
    const imageLogoScss = {
      alt: "Sass",
      height: "110px",
      src: LogoScss,
    };
    const imageLogoJs = {
      alt: "Javascript",
      height: "110px",
      src: LogoJs,
    };
    const imageLogoReact = {
      alt: "ReactJs",
      height: "110px",
      src: LogoReact,
    };
    const imageLogoRedux = {
      alt: "Redux",
      height: "110px",
      src: LogoRedux,
    };
    const imageLogojQuery = {
      alt: "jQuery",
      height: "110px",
      src: LogojQuery,
    };

    return (
      <div className="homePage">
        <h1 className="homeTitle">Welcome :)</h1>
        <p>
          Welcome to my application, this app is useful to create dialy tasks
          that can be deleted and/or marked as complete, please enjoy.
        </p>
        <h2>Main technologies:</h2>
        <div className="rowWrap">
          <LazyImage image={imageLogoHtml} />
          <LazyImage image={imageLogoJs} />
          <LazyImage image={imageLogoScss} />
          <LazyImage image={imageLogojQuery} />
          <LazyImage image={imageLogoReact} />
          <LazyImage image={imageLogoRedux} />
        </div>

        {/* <img className="incoming" src={logoRedux} alt="Redux" height="110px" />
        <p>*Gray icons means that feature is in current develop.</p> */}
      </div>
    );
  }
}
