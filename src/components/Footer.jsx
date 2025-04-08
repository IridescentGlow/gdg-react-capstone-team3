import React from "react";
import image from "../assets/images/Newsletter.jpg";
import { Link } from "react-router-dom";

const Footer = () => {
  const footerImage = {
    backgroundImage: "url('../assets/images/Newsletter.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    position: "relative",
  };

  const containerStyle = {
    display: "flex",
    boxAlign: "center",
    alignItems: "center",
    boxPack: "center",
    justifyContent: "center",
  };

  return (
    <div style={containerStyle}>
      <footer class="bg-gray-100 text-gray-700 py-8 px-4">
        <img
          src={image}
          alt="Newsletter"
          style={footerImage}
          class="w-full h-64 object-cover rounded-lg mb-4 bg-center bg-clip-text"
        />
        <div class="max-w-6xl mx-auto">
          {/* Newsletter Section */}
          <div class="mb-8">
            <h2 class="text-2xl font-bold mb-2">
              Subscribe to get special price
            </h2>
            <p class="mb-4">
              Don't wanna miss something? subscribe right now and get special
              promotion and monthly newsletter
            </p>
            <div class="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Type your email here"
                class="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 flex-grow"
              />
              <button class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-medium transition-colors">
                Subscribe
              </button>
            </div>
          </div>

          <div class="border-t border-gray-300 pt-6"></div>

          {/* Footer Columns */}
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
            {/* Contact Information */}
            <div>
              <h3 class="text-lg font-semibold mb-3">Contact Information</h3>
              <ul class="space-y-2">
                <li>732 Despard St, Atlanta</li>
                <li>+97 888 8888</li>
                <li>info@traveller.com</li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 class="text-lg font-semibold mb-3">Quick Link</h3>
              <ul class="space-y-2">
                <li>
                  <a href="#" class="hover:text-blue-600 transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:text-blue-600 transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:text-blue-600 transition-colors">
                    Tours
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:text-blue-600 transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Follow Us */}
            <div>
              <h3 class="text-lg font-semibold mb-3">Follow Us</h3>
              <div class="flex space-x-4 text-2xl">
                <span>💬</span>
                <span>💮</span>
                <span>💯</span>
                <span>💰</span>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div class="border-t border-gray-300 pt-6 text-sm text-center">
            <p>
              Copyright © All rights reserved (Website Developed & Managed by
              CREATIVECHROMA)
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
