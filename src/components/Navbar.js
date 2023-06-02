import React from "react";
import PropTypes from "prop-types";

export default function Navbar(props) {
  
  return (
    <nav
      className={`navbar navbar-expand-lg  bg-${props.mode} sticky-top`}
      data-bs-theme={`${props.mode}`}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link active" aria-current="page" href="/">
              Home
            </a>
            <a className="nav-link" href="/">
              {props.aboutText}
            </a>
          </div>
        </div>
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            onClick={props.toggleMode}
          />
          <label className={`form-check-labe text-${props.mode==='light'?'dark':'light'}`}  htmlFor="flexSwitchCheckDefault">
            Enable Dark Mode
          </label>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired, //It is required
  aboutText: PropTypes.string,
};

Navbar.defaultProps = {
  title: "Set Title Here",
  aboutText: "About",
};
