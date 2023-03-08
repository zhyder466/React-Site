import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <>
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-10 mx-auto">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
              <div className="container-fluid">
                <NavLink className="navbar-brand" to="#">
                  Hyder
                </NavLink>
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
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li>
                      <NavLink
                        exact
                        activeClassName="active"
                        to="/"
                        className="nav-link"
                      >
                        Home
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        exact
                        activeClassName="active"
                        to="/service"
                        className="nav-link"
                      >
                        Services
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        exact
                        activeClassName="active"
                        to="/about"
                        className="nav-link"
                      >
                        About
                      </NavLink>
                    </li>
                    <li >
                      <NavLink
                        exact
                        activeClassName="active"
                        to="/contact"
                        className="nav-link"
                      >
                        Contact
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
