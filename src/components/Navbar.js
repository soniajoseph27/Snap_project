import React, { useState } from 'react';
import '../styles/Navbar.css';
import logo from '../assets/logo.svg';
import dropdownIcon from '../assets/icon-arrow-down.svg';
import upArrowIcon from '../assets/icon-arrow-up.svg';
import todo from '../assets/icon-todo.svg';
import calendar from '../assets/icon-calendar.svg';
import reminder from '../assets/icon-reminders.svg';
import planning from '../assets/icon-planning.svg';


const Navbar = () => {
  const [isFeaturesDropdownOpen, setIsFeaturesDropdownOpen] = useState(false);
  const [isCompanyDropdownOpen, setIsCompanyDropdownOpen] = useState(false);

  const toggleFeaturesDropdown = () => {
    setIsFeaturesDropdownOpen(!isFeaturesDropdownOpen);
  };

  const toggleCompanyDropdown = () => {
    setIsCompanyDropdownOpen(!isCompanyDropdownOpen);
  };

  return (
  
    <nav className="navbar navbar-expand-lg ">
      <div className="container">
        {/* Brand/logo */}
        <a className="navbar-brand" href="#">
          <img src={logo} height="30" alt="Your Logo" />
        </a>

        {/* Navbar toggler for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            {/* Features dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="featuresDropdown"
                role="button"
                data-bs-toggle="dropdown"
                onClick={toggleFeaturesDropdown}
                aria-expanded={isFeaturesDropdownOpen ? "true" : "false"}
              >
                Features <img src={isFeaturesDropdownOpen ? upArrowIcon : dropdownIcon} alt="Dropdown Icon" />
              </a>
              <ul className={`dropdown-menu ${isFeaturesDropdownOpen ? 'show' : ''}`} aria-labelledby="featuresDropdown">
                <li>
                  <a className="dropdown-item" href="#features/todo">
                  <img src={todo} className="me-2" alt="Todo Icon" />
                    Todo List
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#features/calendar">
                  <img src={calendar} className="me-2" alt="Todo Icon" />
                    Calendar
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#features/reminder">
                  <img src={reminder} className="me-2" alt="Todo Icon" />
                    Reminder
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#features/planning">
                  <img src={planning} className="me-2" alt="Todo Icon" />
                    Planning
                  </a>
                </li>
              </ul>
            </li>

            {/* Company dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="companyDropdown"
                role="button"
                data-bs-toggle="dropdown"
                onClick={toggleCompanyDropdown}
                aria-expanded={isCompanyDropdownOpen ? "true" : "false"}
              >
                Company <img src={isCompanyDropdownOpen ? upArrowIcon : dropdownIcon} alt="Dropdown Icon" />
              </a>
              <ul className={`dropdown-menu ${isCompanyDropdownOpen ? 'show' : ''}`} aria-labelledby="companyDropdown">
                <li>
                  <a className="dropdown-item" href="#company/history">
                    History
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#company/team">
                    Our Team
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#company/blog">
                    Blog
                  </a>
                </li>
              </ul>
            </li>

            {/* Other links */}
            <li className="nav-item">
              <a className="nav-link" href="#career">
                Career
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">
                About
              </a>
            </li>
          </ul>

          {/* Right side */}
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#login">
                Login
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link btn btn-register" href="#register">
                Register
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    
  );
};

export default Navbar;
