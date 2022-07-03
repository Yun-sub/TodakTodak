/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Navbar = () => {
  return (
    <nav className="nav">
      <a href="/" className="title">
        ToDot-List
      </a>
      <ul>
        <li className="nav_contents">
          <a href="/Calendar">Calendar</a>
        </li>
        <li className="nav_contents">
          <a href="/Analysis">Analysis</a>
        </li>
        <li className="nav_contents">
          <a href="/Setting">Setting</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
