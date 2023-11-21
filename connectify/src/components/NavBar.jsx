import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Connect
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Aboutus">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link enabled" to="/Contactus">
                  Complaints
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="/services"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Services
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="/utilities">
                      Utilities
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/housing-services">
                      Housing Services
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/grocery-services">
                      Grocery and Food Services
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/healthcare-services">
                      Healthcare Services
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/educational-services">
                      Educational Institutions
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/transportation-services"
                    >
                      Transportation Services
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/community-services">
                      Community Services
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/financial-services">
                      Financial Services
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/emergency-services">
                      Emergency Services
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/government-services">
                      Government Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/entertainment-services"
                    >
                      Entertainment and Leisure
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/technology-services">
                      Technology Services
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
