import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <div className="navbar-header">
          <p className="navbar-brand">DAILY JOURNAL</p>
        </div>
        <ul className="nav navbar-nav list-inline navbar-right">
          <li className="list-inline-item" id="home">
            <Link to="/home">Home</Link>
          </li>
          <li className="list-inline-item" id="about">
            <Link to="/compose">Compose</Link>
          </li>
          <li className="list-inline-item" id="contact">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
