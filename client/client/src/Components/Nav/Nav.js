import React from "react";
import { Link } from 'react-router-dom';
import './Nav.css'

const Nav =(props) => {
  return (
    <div>
    <nav id = "custom-nav-style">
    <div className="nav-wrapper ">
      
      <ul id="nav-mobile slide-out" className="right hide-on-med-and-down custom-link-style sidenav-fixed" data-target="slide-out">
      <a href="#" className="brand-logo brand-text custom-brand-text" data-target="slide-out" >The Lucky Starr</a>
      <li className="text-color"><Link className={window.location.pathname === "/" ? "active" : ""}  to="/">   Home </Link></li>
      <li className="text-color"><Link className={window.location.pathname === "/cabin" ? "active" : ""}  to="/cabin">   Cabin Rental </Link></li>
      <li className="text-color"><Link className={window.location.pathname === "/venue" ? "active" : ""}  to="/venue">  The Venue </Link></li>
      <li className="text-color"><Link className={window.location.pathname === "/form" ? "active" : ""} to="/form">   Contact Us </Link></li>
      </ul>
      
      </div>
      
    </nav>
          
      </div>
  )
};

export default Nav;