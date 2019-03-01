import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <div className="navbar-fixed">
    <nav className="site-navbar blue darken-4">
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo"><i className="material-icons left">library_books</i> NYT React App</Link>
        <ul className="right">
          <li><Link to="/"><i className="material-icons left tiny">home</i> Home</Link></li>
          <li><Link to="/saved"><i className="material-icons left tiny">save</i> Saved Articles</Link></li>
        </ul>
      </div>
    </nav>
  </div>
)

export default Navbar;