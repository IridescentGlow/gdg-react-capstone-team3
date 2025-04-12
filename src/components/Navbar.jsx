import React, { useState } from "react";
import { PiMagnifyingGlassBold } from "react-icons/pi";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link } from "react-router-dom";
import {
  PackagesDropdown,
  BlogsDropdown,
  DestinationsDropdown,
} from "./Dropdown";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div>
      <nav className="flex bg-gray-800 text-teal-50 items-center justify-between px-8 py-4 border-b border-white-300">
        <Link to="/" className="text-2xl font-bold text-white-700">
          COMPANY NAME
        </Link>
        <ul>
          {/* Packages Dropdown */}
          <li
            className="inline-block mx-4"
            onMouseEnter={() => {
              setDropdown(true);
              setHoveredIndex(1);
            }}
            onMouseLeave={() => {
              setDropdown(false);
              setHoveredIndex(null);
            }}
          >
            <span
              className="text-white-700 font-medium hover:text-white-500 hover:underline transition-all ease-in-out duration-300 cursor-pointer"
            >
              Packages
              <IoMdArrowDropdown className="inline" />
            </span>
            {dropdown && hoveredIndex === 1 && <PackagesDropdown />}
          </li>

          {/* Blogs Dropdown */}
          <li
            className="inline-block mx-4"
            onMouseEnter={() => {
              setDropdown(true);
              setHoveredIndex(2);
            }}
            onMouseLeave={() => {
              setDropdown(false);
              setHoveredIndex(null);
            }}
          >
            <span
              className="text-white-700 font-medium hover:text-white-500 hover:underline transition-all ease-in-out duration-300 cursor-pointer"
            >
              Blogs
              <IoMdArrowDropdown className="inline" />
            </span>
            {dropdown && hoveredIndex === 2 && <BlogsDropdown />}
          </li>

          {/* Destinations Dropdown */}
          <li
            className="inline-block mx-4"
            onMouseEnter={() => {
              setDropdown(true);
              setHoveredIndex(3);
            }}
            onMouseLeave={() => {
              setDropdown(false);
              setHoveredIndex(null);
            }}
          >
            <span
              className="text-white-700 font-medium hover:text-white-500 hover:underline transition-all ease-in-out duration-300 cursor-pointer"
            >
              Destinations
              <IoMdArrowDropdown className="inline" />
            </span>
            {dropdown && hoveredIndex === 3 && <DestinationsDropdown />}
          </li>

          {/* Static Links */}
          <li className="inline-block mx-4">
            <Link
              to="/contact"
              className="text-white-700 font-medium hover:text-white-500 hover:underline transition-all ease-in-out duration-300"
            >
              Contact
            </Link>
          </li>
        </ul>
        <div className="flex items-center">
          <PiMagnifyingGlassBold className="mr-0" />
          <input
            type="text"
            placeholder=""
            className="p-2 mb-1 focus:outline-none ml-0"
          ></input>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;