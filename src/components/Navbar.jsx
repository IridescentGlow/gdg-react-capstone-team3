import React, { useState } from "react";
import { PiMagnifyingGlassBold } from "react-icons/pi";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link } from "react-router-dom";
import { NavItems } from "./NavItems";
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
          {NavItems.map((item, index) => {
            const isHovered = hoveredIndex === index;
            if (item.title === "Packages") {
              return (
                <li
                  key={index}
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
                  <Link
                    to={item.path}
                    className="text-white-700 font-medium hover:text-white-500 hover:underline transition-all ease-in-out duration-300"
                  >
                    {item.title}
                    {(item.title === "Packages" ||
                      item.title === "Destinations" ||
                      item.title === "Blogs") && (
                      <IoMdArrowDropdown className="inline" />
                    )}
                  </Link>
                  {dropdown && isHovered && <PackagesDropdown />}
                </li>
              );
            }
            if (item.title === "Blogs") {
              return (
                <li
                  key={index}
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
                  <Link
                    to={item.path}
                    className="text-white-700 font-medium hover:text-white-500 hover:underline transition-all ease-in-out duration-300"
                  >
                    {item.title}
                    {(item.title === "Packages" ||
                      item.title === "Destinations" ||
                      item.title === "Blogs") && (
                      <IoMdArrowDropdown className="inline" />
                    )}
                  </Link>
                  {isHovered && <BlogsDropdown />}
                </li>
              );
            }
            if (item.title === "Destinations") {
              return (
                <li
                  key={index}
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
                  <Link
                    to={item.path}
                    className="text-white-700 font-medium hover:text-white-500 hover:underline transition-all ease-in-out duration-300"
                  >
                    {item.title}
                    {(item.title === "Packages" ||
                      item.title === "Destinations" ||
                      item.title === "Blogs") && (
                      <IoMdArrowDropdown className="inline" />
                    )}
                  </Link>
                  {isHovered && <DestinationsDropdown />}
                </li>
              );
            }

            return (
              <div className="inline-block mx-4">
                <li key={index} className="inline-block mx-4">
                  <Link
                    to={item.path}
                    className="text-white-700 m-10 font-medium hover:text-white-500 hover:underline transition-all ease-in-out duration-300"
                  >
                    {item.title}
                    {(item.title === "Packages" ||
                      item.title === "Destinations" ||
                      item.title === "Blogs") && (
                      <IoMdArrowDropdown className="inline" />
                    )}
                  </Link>
                </li>
              </div>
            );
          })}
        </ul>
        <div className="flex items-center">
          <PiMagnifyingGlassBold className=" mr-0" />
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
