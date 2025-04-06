import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  return (
    <div>
      <nav className="flex items-center justify-between px-8 py-4 border-b border-gray-300">
        <div className="flex items-center space-x-4">
          <div className="relative">
          <FontAwesomeIcon icon={faMagnifyingGlass} transform=""/>
            <input
              type="text"
              placeholder="SEARCH..."
              className="p-2 mb-1 focus:outline-none"
            />
          </div>
        </div>
        <div className="flex flex-grow justify-center">
          <h1 className="text-3xl font-bold text-center uppercase">
            Design for Life
          </h1>
        </div>
        <div className="flex items-center space-x-6">
          <a href="#" className="text-gray-700 hover:text-gray-500 hover:underline transition-all ease-in-out duration-300">
            Home
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-500 hover:underline transition-all ease-in-out duration-300">
            Blogs
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-500 hover:underline transition-all ease-in-out duration-300">
            Contact
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-500 hover:underline transition-all ease-in-out duration-300">
            About
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
