/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Navbar = ({ onSelect }) => {
  return (
    <nav className="nav">
      <button
        value="0"
        className="title"
        onClick={(event) => onSelect(event.target.value)}
      >
        ToDot-List
      </button>
      <ul>
        <li className="nav_contents">
          <button value="0" onClick={(event) => onSelect(event.target.value)}>
            Calendar
          </button>
        </li>
        <li className="nav_contents">
          <button value="1" onClick={(event) => onSelect(event.target.value)}>
            Analysis
          </button>
        </li>
        <li className="nav_contents">
          <button value="2" onClick={(event) => onSelect(event.target.value)}>
            Setting
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
