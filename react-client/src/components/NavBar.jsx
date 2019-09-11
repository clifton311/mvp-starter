import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <header>
        <ul className="headerButtons">
          <li className="navButton"><Link to="" style={{color:"white"}}>Home</Link></li>
          <li className="navButton"><Link to="/login" style={{color:"white"}}>Login</Link></li>
          <li className="navButton"><Link to="/register" style={{color:"white"}}>Register Here</Link></li>
        </ul>
      </header>
    )
  }
}

export default NavBar;

