import React, { Component } from "react";

//Images
import logoGit from "../img/github.png";
import logoLink from "../img/linkedin.png";

//Style SCSS
import "../sass/footer.scss";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer__items">
          <p>Social media: </p>

          <a
            href="https://github.com/eduardohurtado"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img src={logoGit} alt="Github" height="40px" width="40px" />
          </a>
          <a
            href="https://www.linkedin.com/in/eduardo-hurtado-g/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img src={logoLink} alt="LinkedIn" height="40px" width="40px" />
          </a>
        </div>
      </div>
    );
  }
}
