import { useEffect, useState } from "react";
import logo from "../assets/logo.svg";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  const handleNavbar = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 10) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <>
      <div className="relative">
        <div
          className={
            shadow
              ? "fixed w-screen flex items-center justify-between px-10 lg:justify-around py-2 shadow-sm bg-white z-[9999]"
              : "fixed w-screen flex items-center justify-between px-10 lg:justify-around py-2 "
          }
        >
          <div>
            <img src={logo} alt="logo" width={70} />
          </div>
          <ul className="items-center lg:space-x-6 text-gray-400 hidden md:flex ">
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="hover:bg-[#ff7a57] hover:text-white px-4 py-1 hover:rounded-full cursor-pointer"
            >
              Home
            </Link>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="hover:bg-[#ff7a57] hover:text-white px-4 py-1 hover:rounded-full cursor-pointer"
            >
              About
            </Link>
            <Link
              to="service"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="hover:bg-[#ff7a57] hover:text-white px-4 py-1 hover:rounded-full cursor-pointer"
            >
              Service
            </Link>
            <Link
              to="skills"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="hover:bg-[#ff7a57] hover:text-white px-4 py-1 hover:rounded-full cursor-pointer"
            >
              Skills
            </Link>
            <Link
              to="testimonial"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="hover:bg-[#ff7a57] hover:text-white px-4 py-1 hover:rounded-full cursor-pointer"
            >
              Testimonial
            </Link>
            <Link
              to="blogs"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="hover:bg-[#ff7a57] hover:text-white px-4 py-1 hover:rounded-full cursor-pointer"
            >
              Blog
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="hover:bg-[#ff7a57] hover:text-white px-4 py-1 hover:rounded-full cursor-pointer"
            >
              Contact
            </Link>
            <li className="flex px-5 py-1 bg-[#ff7a57] rounded-full text-white cursor-pointer">
              Login
            </li>
          </ul>
          <RxHamburgerMenu
            className="md:hidden text-3xl cursor-pointer"
            onClick={handleNavbar}
          />
        </div>
        <div
          className={`fixed top-0 left-0 shadow-md bg-white md:hidden z-[9999] ${
            nav ? "w-80" : "w-0"
          } transition-all duration-500 ease-in-out overflow-hidden`}
        >
          <div className="flex items-center justify-between p-4">
            <img src={logo} alt="logo" width={70} />
            <RxHamburgerMenu
              className="md:hidden text-3xl cursor-pointer"
              onClick={handleNavbar}
            />
          </div>
          <ul className="flex flex-col items-center space-y-7 text-gray-400 shadow-lg h-screen">
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="hover:bg-[#ff7a57] hover:text-white px-4 py-1 hover:rounded-full cursor-pointer"
            >
              Home
            </Link>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="hover:bg-[#ff7a57] hover:text-white px-4 py-1 hover:rounded-full cursor-pointer"
            >
              About
            </Link>
            <Link
              to="service"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="hover:bg-[#ff7a57] hover:text-white px-4 py-1 hover:rounded-full cursor-pointer"
            >
              Service
            </Link>
            <Link
              to="skills"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="hover:bg-[#ff7a57] hover:text-white px-4 py-1 hover:rounded-full cursor-pointer"
            >
              Skills
            </Link>
            <Link
              to="testimonial"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="hover:bg-[#ff7a57] hover:text-white px-4 py-1 hover:rounded-full cursor-pointer"
            >
              Testimonial
            </Link>
            <Link
              to="blogs"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="hover:bg-[#ff7a57] hover:text-white px-4 py-1 hover:rounded-full cursor-pointer"
            >
              Blog
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="hover:bg-[#ff7a57] hover:text-white px-4 py-1 hover:rounded-full cursor-pointer"
            >
              Contact
            </Link>
            <li className="flex px-5 py-1 bg-[#ff7a57] rounded-full text-white">
              Login
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Navbar;
