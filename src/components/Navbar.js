import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Alert from "./Alert";

Navbar.propTypes = {
  title: PropTypes.string.isRequired, // To make sure our pros are not undefined then use this
  aboutText: PropTypes.string,
};

Navbar.defaultProps = {
  title: "Set title here",
  aboutText: "About text here",
};

export default function Navbar(props) {
  return (
    <>
      <div>
        <nav
          className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
        >
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              {props.title}
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    {props.aboutText}
                  </Link>
                </li>
              </ul>
              <div className="d-flex">
                <div
                  className="bg-primary rounded mx-2"
                  style={{ height: "25px", width: "25px", cursor: "pointer" }}
                  onClick={() => props.toggleMode("primary")}
                ></div>
                <div
                  className="bg-danger rounded mx-2"
                  style={{ height: "25px", width: "25px", cursor: "pointer" }}
                  onClick={() => props.toggleMode("danger")}
                ></div>
                <div
                  className="bg-success rounded mx-2"
                  style={{ height: "25px", width: "25px", cursor: "pointer" }}
                  onClick={() => props.toggleMode("success")}
                ></div>
                <div
                  className="bg-warning rounded mx-2"
                  style={{ height: "25px", width: "25px", cursor: "pointer" }}
                  onClick={() => props.toggleMode("warning")}
                ></div>
                <div
                  className="bg-light rounded mx-2"
                  style={{ height: "25px", width: "25px", cursor: "pointer" }}
                  onClick={() => props.toggleMode("light")}
                ></div>
                <div
                  className="bg-dark rounded mx-2"
                  style={{ height: "25px", width: "25px", cursor: "pointer" }}
                  onClick={() => props.toggleMode("dark")}
                ></div>
              </div>
              {/* <div
                className={`form-check form-switch text-${
                  props.mode === "dark" ? "light" : "dark"
                }`}
              >
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                  onClick={() => props.toggleMode("dark")}
                />
                <label
                  className="form-check-label"
                  htmlFor="flexSwitchCheckDefault"
                >
                  Toggle mode
                </label>
              </div> */}
            </div>
          </div>
        </nav>
      </div>
      <Alert alert={props.alert} />
    </>
  );
}
