import './navbar.css'
import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg nav">
      <div className="container">
        <div className="row navbarContent align-items-center justify-content-center">
          <div className="col-8">
          <Link className="navbar-brand" to={"/"}>
            Dash Board
          </Link>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse col-4 navBarLinks" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to={"/"} className="nav-link" aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"about"} className="nav-link">
                  About
                </Link>
              </li>

              <li className="nav-item">
                <Link to={"blog"} className="nav-link">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
