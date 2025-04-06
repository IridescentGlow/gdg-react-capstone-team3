import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faLinkedinIn,
  faXTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="bg-black text-white py-10">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between space-y-10 md:space-y-0">
          {/* Social Icons */}
          <div className="flex space-x-10 text-white text-xl hover:cursor-pointer">
            <a href="#" aria-label="Facebook">
              <FontAwesomeIcon
                icon={faFacebookF}
                className="hover:text-gray-200 hover:text-2xl transition-all ease-in-out duration-300"
                transform={"grow-5"}
              />
            </a>
            <a href="#" aria-label="Twitter">
              <FontAwesomeIcon
                icon={faLinkedinIn}
                className="hover:text-gray-200 hover:text-2xl transition-all ease-in-out duration-300"
                transform={"grow-7"}
              />
            </a>
            <a href="#" aria-label="X">
              <FontAwesomeIcon
                icon={faXTwitter}
                className="hover:text-gray-200 hover:text-2xl transition-all ease-in-out duration-300"
                transform={"grow-7"}
              />
            </a>
            <a href="#" aria-label="Instagram">
              <FontAwesomeIcon
                icon={faInstagram}
                className="hover:text-gray-200 hover:text-2xl transition-all ease-in-out duration-300"
                transform={"grow-7"}
              />
            </a>
          </div>

          {/* Divider (optional) */}
          <div className="hidden md:block h-32 border-l border-gray-600 mx-6"></div>

          {/* Newsletter */}
          <div className="text-center">
            <h2 className="text-lg font-light mb-4 tracking-widest">
              COMPANY NAME
            </h2>
            <form className="flex flex-col items-center space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-black border border-white px-4 py-2 w-64 placeholder-white text-white text-sm"
              />
              <label className="flex items-center space-x-2 text-sm">
                <input type="checkbox" className="form-checkbox text-black" />
                <span>Yes, subscribe me to your newsletter. *</span>
              </label>
              <button
                type="submit"
                className="border border-white px-4 py-2 text-sm hover:bg-white hover:cursor-pointer hover:text-black transition-all ease-in-out duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Divider (optional) */}
          <div className="hidden md:block h-32 border-l border-gray-600 mx-6"></div>

          {/* Copyright */}
          <div className="text-sm text-center md:text-right">
            <p>© 2025 by Company name.</p>
            <Link to="/contact">
              <a className="text-sm text-center md:text-right hover:underline hover:cursor-pointer">
                Contact us
              </a>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
