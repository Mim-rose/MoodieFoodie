import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-red-700 text-white py-6 mt-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-8">
        {/* ✅ Brand / Copyright */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold">Moodie Foodie</h2>
          <p className="text-sm text-gray-400">© {new Date().getFullYear()} All rights reserved.</p>
        </div>

        {/* ✅ Social Media Links */}
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500 transition">
            <FaFacebookF size={20} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition">
            <FaTwitter size={20} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-700 transition">
            <FaLinkedinIn size={20} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-500 transition">
            <FaInstagram size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;