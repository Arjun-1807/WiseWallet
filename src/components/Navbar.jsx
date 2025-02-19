import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-900 text-white px-4">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
        <NavLink to="/" className="flex items-center space-x-3">
          <span className="text-2xl font-bold">Wise Wallet</span>
        </NavLink>
        <div className="flex md:order-2 space-x-3">
          <NavLink
            to="/Login"
            className="text-white bg-blue-500 hover:bg-blue-600 font-medium rounded-lg text-sm px-4 py-2 text-center"
          >
            <button
            type="button"
            className="text-white bg-blue-500 hover:bg-blue-600 font-medium rounded-lg text-sm px-4 py-2 text-center"
          >
            Get Started
          </button>
          </NavLink>
          
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-400 rounded-lg md:hidden hover:bg-gray-800"
            aria-controls="navbar-sticky"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
              aria-hidden="true"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } items-center justify-between w-full md:flex md:w-auto md:order-1`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-900 md:flex-row md:space-x-8 md:mt-0 md:border-0">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `block py-2 px-3 ${
                    isActive ? "text-blue-500" : "text-white"
                  } hover:text-blue-500`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `block py-2 px-3 ${
                    isActive ? "text-blue-500" : "text-white"
                  } hover:text-blue-500`
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  `block py-2 px-3 ${
                    isActive ? "text-blue-500" : "text-white"
                  } hover:text-blue-500`
                }
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `block py-2 px-3 ${
                    isActive ? "text-blue-500" : "text-white"
                  } hover:text-blue-500`
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
