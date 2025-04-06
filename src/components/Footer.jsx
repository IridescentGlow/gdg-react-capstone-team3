import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faLinkedinIn,
  faXTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div>
      <footer className="bg-black text-white py-10">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between space-y-10 md:space-y-0">
          {/* Social Icons */}
          <div className="flex space-x-10 text-white text-xl">
            <a href="#" aria-label="Facebook">
              <FontAwesomeIcon icon={faFacebookF} transform={"shrink-2"} />
            </a>
            <a href="#" aria-label="Twitter">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a href="#" aria-label="X">
              <FontAwesomeIcon icon={faXTwitter} />
            </a>
            <a href="#" aria-label="Instagram">
              <FontAwesomeIcon icon={faInstagram} />
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
                placeholder="Enter your email here *"
                className="bg-black border border-white px-4 py-2 w-64 placeholder-white text-white text-sm"
              />
              <label className="flex items-center space-x-2 text-sm">
                <input type="checkbox" className="form-checkbox text-black" />
                <span>Yes, subscribe me to your newsletter. *</span>
              </label>
              <button
                type="submit"
                className="border border-white px-4 py-2 text-sm hover:bg-white hover:text-black transition"
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
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
