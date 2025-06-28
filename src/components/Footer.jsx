import React from "react";
import { FaFacebook, FaGithub, FaGoogle, FaMicrosoft } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="min-h-screen lg:min-h-[50vh] bg-[#1E293B] text-[#CBD5E1] p-[30px] lg:p-[80px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[28.5%_20%_20%_28.5%] items-start justify-start lg:justify-center gap-[2%]">
      <div>
        <img src="/footer_logo.svg" alt="Company Logo" className="mb-[10px]" />
        <p className="text-[13px] leading-relaxed w-[90%]">
          Empowering learners through accessible and engaging online education.
          <br />
          Byway is a leading online learning platform dedicated to providing
          high-quality, flexible, and affordable educational experiences.
        </p>
      </div>

      <ul className="space-y-3 pl-0 lg:pl-20">
        <span className="text-lg text-white font-semibold leading-[1.6]">
          Get Help
        </span>
        <li className="text-[13px] hover:text-white hover:underline duration-300 transition-all ease-linear">
          <Link to="/contact">Contact Us</Link>
        </li>
        <li className="text-[13px] hover:text-white hover:underline duration-300 transition-all ease-linear">
          <Link to="/latest-articles">Latest Articles</Link>
        </li>
        <li className="text-[13px] hover:text-white hover:underline duration-300 transition-all ease-linear">
          <Link to="/faq">FAQ</Link>
        </li>
      </ul>

      <ul className="space-y-3 pl-0 lg:pl-16">
        <span className="text-lg text-white font-semibold leading-[1.6]">
          Programs
        </span>
        <li className="text-[13px] hover:text-white hover:underline duration-300 transition-all ease-linear">
          <Link to="/art-design">Art & Design</Link>
        </li>
        <li className="text-[13px] hover:text-white hover:underline duration-300 transition-all ease-linear">
          <Link to="/business">Business</Link>
        </li>
        <li className="text-[13px] hover:text-white hover:underline duration-300 transition-all ease-linear">
          <Link to="/it-software">IT & Software</Link>
        </li>
        <li className="text-[13px] hover:text-white hover:underline duration-300 transition-all ease-linear">
          <Link to="/languages">Languages</Link>
        </li>
        <li className="text-[13px] hover:text-white hover:underline duration-300 transition-all ease-linear">
          <Link to="/programming">Programming</Link>
        </li>
      </ul>

      <div className="space-y-3">
        <div className="space-y-3">
          <span className="text-lg text-white font-semibold leading-[1.6]">
            Contact Us
          </span>

          <p>Address: 123 Main Street, Anytown, CA 12345</p>
          <Link to="tel:+1234567890">Tel: +(123) 456-7890</Link>
          <Link to="mailto:bywayedu@webkul.in">Mail: bywayedu@webkul.in</Link>
        </div>

        <div className="flex items-center justify-start gap-7 mt-10">
          <FaFacebook className="text-2xl cursor-pointer " />
          <FaGithub className="text-2xl cursor-pointer " />
          <FaGoogle className="text-2xl cursor-pointer " />
          <FaX className="text-2xl cursor-pointer " />
          <FaMicrosoft className="text-2xl cursor-pointer " />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
