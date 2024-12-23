import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css';
import { LOGO_URL, Avatar_URL } from "../utilits/CONSTANTS";

const Header = () => {
  const location = useLocation();
  
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <nav className="navbar navbar-expand-lg navbar-light bg-white px-3">
            <a className="navbar-brand d-flex align-items-center" href="#">
              <img src={LOGO_URL} alt="Logo" />
            </a>

            {/* Toggle button for mobile view */}
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* Navbar links */}
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 ui_header_navbar">
                <li className="nav-item">
                  <Link
                    className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`nav-link ${location.pathname === '/bookings' ? 'active' : ''}`}
                    to="/bookings"
                  >
                    Bookings
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`nav-link ${location.pathname === '/projects' ? 'active' : ''}`}
                    to="/projects"
                  >
                    Projects
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`nav-link ${location.pathname === '/tasks' ? 'active' : ''}`}
                    to="/tasks"
                  >
                    Tasks
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`nav-link ${location.pathname === '/reporting' ? 'active' : ''}`}
                    to="/reporting"
                  >
                    Reporting
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`nav-link ${location.pathname === '/users' ? 'active' : ''}`}
                    to="/users"
                  >
                    Users
                  </Link>
                </li>
              </ul>
            </div>

            {/* Icons and Profile */}
            <div className="d-flex align-items-center">
              <i className="bi bi-bell me-3 d-none d-lg-block"></i> {/* Bell icon hidden on smaller screens */}
              <i className="bi bi-bell me-3 d-lg-none"></i> {/* Bell icon visible on smaller screens */}
              
              {/* Dropdown for Profile */}
              <div className="dropdown ">
                <img 
                  src={Avatar_URL} 
                  alt="Profile" 
                  className="rounded-circle  dropdown-toggle" 
                  id="profileDropdown" 
                  data-bs-toggle="dropdown" 
                  aria-expanded="false"
                  style={{ cursor: 'pointer' }}
                />
                <ul className="dropdown-menu profile_dropdown dropdown-menu-end" aria-labelledby="profileDropdown">                  
                  <li><a className="dropdown-item" href="#">Logout</a></li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
