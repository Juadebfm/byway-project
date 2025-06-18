import { Link } from "react-router-dom";
import { BiCartAlt } from "react-icons/bi";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`min-h-[70px] px-[80px] py-[20px] flex items-center justify-between sticky top-0 left-0 z-50 bg-white transition-all duration-300 ${
        isScrolled ? "border-b border-gray-200 shadow-md" : ""
      }`}
    >
      <Link to="/">
        <img src="/logo.svg" alt="Byway Logo" />
      </Link>
      <div className="flex items-center justify-center">
        <Link to="/categories">Categories</Link>
        <div>
          <input
            type="search"
            name="search-courses"
            placeholder="Search Courses"
            className="w-[622px] h-[40px] mx-[33px] border-2 border-bywayTextLight/50 rounded-md px-5 placeholder:text-bywayBtnColor"
          />
        </div>
        <Link to="/teach-on-byway">Teach On Byway</Link>
      </div>
      <div className="space-x-6 flex items-center">
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
  );
};

export default Navbar;
