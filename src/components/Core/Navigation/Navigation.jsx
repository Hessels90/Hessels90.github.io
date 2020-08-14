import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import PropTypes from "prop-types";
import {
  faFutbol,
  faTrophy,
  faBook,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Navigation.css";

const Navigation = ({ children }) => {
  return (
    <>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="style.css" />
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Router>
          <nav className="navbar">
            <ul className="navbar-nav">
              <li className="logo">
                <a href="/" className="nav-link">
                  <FontAwesomeIcon icon={faHome} className="fa-primary" />
                  <span className="link-text">Home</span>
                </a>
              </li>

              <li className="nav-item">
                <a href="/participants" className="nav-link">
                  <FontAwesomeIcon icon={faFutbol} className="fa-primary" />
                  <span className="link-text">Football</span>
                </a>
              </li>

              <li className="nav-item">
                <a href="/winners" className="nav-link">
                  <FontAwesomeIcon icon={faTrophy} className="fa-primary" />
                  <span className="link-text">Vinnere</span>
                </a>
              </li>

              <li className="nav-item">
                <a href="/rules" className="nav-link">
                  <FontAwesomeIcon icon={faBook} className="fa-primary" />
                  <span className="link-text">Rules</span>
                </a>
              </li>
            </ul>
          </nav>
        </Router>

        <div className="main-content">{children}</div>
      </body>
    </>
  );
};

Navigation.propTypes = {
  children: PropTypes.node,
};

export default Navigation;
