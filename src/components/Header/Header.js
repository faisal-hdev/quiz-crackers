import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="text-2xl flex justify-evenly bg-yellow-200">
      <div className="navbar container bg-yellow-200">
        <div className="flex-1">
          <a href="/" className="btn btn-ghost normal-case  text-2xl">
            Quiz Cracker_
          </a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li className="text-xl">
              <Link to="/">Topics</Link>
            </li>
            <li className="text-xl">
              <Link to="/statistics">Statistics</Link>
            </li>
            <li className="text-xl">
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
