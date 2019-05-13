import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = (props) => {
  return (
    <React.Fragment>

    <nav>
    <div className="nav-wrapper indigo">
      <a href="#!" className="brand-logo">Bon App</a>
      <a href="/" data-target="mobile-nav" className="sidenav-trigger"><i class="fas fa-bars"></i></a>
      <ul className="right hide-on-med-and-down">
        <li><a href="/">Planner</a></li>
        <li><a href="/">Recipes</a></li>
        <li><a href="/">New Recipe</a></li>
      </ul>
    </div>
  </nav>

  <ul className="sidenav" id="mobile-nav">
    <li><a href="/">Planner</a></li>
    <li><a href="/">Recipes</a></li>
    <li><a href="/">New Recipet</a></li>
  </ul>
    </React.Fragment>
  )
}

export default Navbar;