import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="bg-yellow-200">
      <div className="navbar container mx-auto bg-yellow-200">
        <div className="navbar-start ">
          <a href="/" className="normal-case text-2xl">
            Quiz Cracker_
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li className="text-xl">
              <Link to="/">Topics</Link>
            </li>
            <li className="text-xl">
              <Link to="/statistics">Statistics</Link>
            </li>
            {/* <li className="text-xl">
              <Link to="/blog">Blog</Link>
            </li> */}
            <li className="text-xl">
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link
            className="btn max-sm:hidden border-b-2 border-indigo-500 rounded-3xl"
            to="/blog"
          >
            Blog Here
          </Link>
          <div className="dropdown dropdown-left dropdown-bottom">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box"
            >
              <li className="text-xl">
                <Link to="/">Topics</Link>
              </li>
              <li className="text-xl">
                <Link to="/statistics">Statistics</Link>
              </li>
              {/* <li className="text-xl">
                <Link to="/blog">Blog</Link>
              </li> */}
              <li className="text-xl">
                <Link to="/about">About</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
