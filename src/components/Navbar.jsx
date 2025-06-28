import { Link } from "react-router-dom";
import { BiCartAlt } from "react-icons/bi";
import { useState, useEffect } from "react";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`min-h-[70px] px-[30px] lg:px-[80px] py-[20px] flex items-center justify-between fixed w-full top-0 left-0 z-50 bg-white transition-all duration-300 ${
          isScrolled ? "border-b-2 border-[#E2E8F0] shadow-md" : "border-b"
        } md:px-4`}
      >
        <div className="flex items-center justify-between w-full md:w-auto">
          <Link to="/">
            <img src="/logo.svg" alt="Byway Logo" />
          </Link>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-bywayTextDark"
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        <div className="hidden md:flex items-center justify-center">
          {/* Desktop Navigation */}
          <Link to="/categories">Categories</Link>
          <div className="relative">
            <FaSearch className="absolute left-[45px] top-1/2 transform -translate-y-1/2 text-bywayBtnColor" />
            <input
              type="search"
              name="search-courses"
              placeholder="Search Courses"
              className="w-[300px] lg:w-[622px] h-[40px] mx-[33px] border-2 border-bywayTextLight/50 rounded-md pl-12 pr-5 placeholder:text-bywayBtnColor"
            />
          </div>
          <Link to="/teach-on-byway">Teach On Byway</Link>
        </div>

        <div className="hidden md:flex space-x-6 items-center">
          <BiCartAlt size={30} />
          <Link to="/login">
            <button className="min-w-[61px] h-[40px] font-medium border-2 border-bywayBtnColor bg-transparent text-bywayTextDark hover:bg-bywayTextDark/5">
              Login
            </button>
          </Link>
          <Link to="/signup">
            <button className="min-w-[73px] h-[40px] font-medium border-none text-white bg-bywayTextDark hover:bg-bywayTextDark/85">
              Signup
            </button>
          </Link>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed top-[70px] left-0 w-full bg-white z-40 shadow-lg md:hidden">
          <div className="flex flex-col p-4 space-y-4">
            <Link to="/categories" className="py-2 px-4">
              Categories
            </Link>
            <div className="relative mb-4">
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-bywayBtnColor" />
              <input
                type="search"
                name="search-courses"
                placeholder="Search Courses"
                className="w-full h-[40px] border-2 border-bywayTextLight/50 rounded-md pl-10 pr-5 placeholder:text-bywayBtnColor"
              />
            </div>
            <Link to="/teach-on-byway" className="py-2 px-4">
              Teach On Byway
            </Link>
            <div className="flex items-center space-x-4 pt-4 border-t">
              <BiCartAlt size={30} />
              <Link to="/login" className="flex-1">
                <button className="w-full h-[40px] font-medium border-2 border-bywayBtnColor bg-transparent text-bywayTextDark hover:bg-bywayTextDark/5">
                  Login
                </button>
              </Link>
              <Link to="/signup" className="flex-1">
                <button className="w-full h-[40px] font-medium border-none text-white bg-bywayTextDark hover:bg-bywayTextDark/85">
                  Signup
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
