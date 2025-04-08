import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  const [dropDown, setDropDown] = useState(false);

  return (
    <div>
      <nav className="flex bg-gray-800 text-teal-50 items-center justify-between px-8 py-4 border-b border-white-300">
        <Link to="/">
          <div onClick={handleClick}>
            <a className="text-2xl font-bold text-white-700">COMPANY NAME</a>
          </div>
        </Link>
        <section className={click ? "nav-menu active" : "nav-menu"}>
          <div className="flex items-center space-x-6">
            <Link to="/">
              <a
                href="#"
                className="text-white-700 hover:text-white-500 hover:underline transition-all ease-in-out duration-300"
                onClick={closeMobileMenu}
              >
                Home
              </a>
            </Link>
            <Link to="/packages">
              <a
                href="#"
                className="text-white-700 ml-100 hover:text-white-500 hover:underline transition-all ease-in-out duration-300"
                onClick={closeMobileMenu}
              >
                Packages <IoMdArrowDropdown className="inline" />
              </a>
            </Link>
            {dropDown && <Dropdown />}
            <Link to="/destinations">
              <a
                href="#"
                className="text-white-700 hover:text-white-500 hover:underline transition-all ease-in-out duration-300"
                onClick={closeMobileMenu}
              >
                Destinations <IoMdArrowDropdown className="inline" />
              </a>
            </Link>
            <Link to="/blogs">
              <a
                href="#"
                className="text-white-700 hover:text-white-500 hover:underline transition-all ease-in-out duration-300"
                onClick={closeMobileMenu}
              >
                Blogs <IoMdArrowDropdown className="inline" />
              </a>
            </Link>
            <Link to="/contact">
              <a
                href="#"
                className="text-white-700 hover:text-white-500 hover:underline transition-all ease-in-out duration-300"
                onClick={closeMobileMenu}
              >
                Contact
              </a>
            </Link>
          </div>
        </section>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <FontAwesomeIcon icon={faMagnifyingGlass} transform="" />
            <input
              type="text"
              placeholder=""
              className="p-2 mb-1 focus:outline-none"
            />
          </div>

          {click ? (
            <a href="#" onClick={handleClick}>
              <FaTimes />
            </a>
          ) : (
            <a href="#" onClick={handleClick}>
              <FaBars />
            </a>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
