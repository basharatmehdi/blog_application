import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  return (
    <>
      <div className="fixed top-0 w-full bg-[#03170A] z-10">
        <div className="text-white items-center h-20 flex justify-between lg:container px-6 md:px-12 mx-auto navbar">
          <Link to="/">
            <h1 className="w-full flex text-2xl md:text-3xl text-[#00df9a] font-bold">
              Blog
            </h1>
          </Link>
          <nav className="hidden md:flex uppercase font-light tracking-wide md:tracking-widest space-x-6">
            <NavLink
              to="/"
              className="py-2 hover:text-[#00df9a] hover:border-b-2 hover:border-[#00df9a] hover:ease-in-out hover:duration-300"
            >
              Home
            </NavLink>

            <NavLink
              to="/portfolio"
              className="py-2 hover:text-[#00df9a] hover:border-b-2 hover:border-[#00df9a] hover:ease-in-out hover:duration-300"
            >
              Portfolio
            </NavLink>

            <NavLink
              to="/about"
              className="py-2 hover:text-[#00df9a] hover:border-b-2 hover:border-[#00df9a] hover:ease-in-out hover:duration-300"
            >
              About
            </NavLink>

            <NavLink
              to="/contact"
              className="py-2 hover:text-[#00df9a] hover:border-b-2 hover:border-[#00df9a] hover:ease-in-out hover:duration-300"
            >
              Contact
            </NavLink>
          </nav>
          <div
            onClick={handleClick}
            className="block md:hidden cursor-pointer z-[100]"
          >
            {!click ? <FaBars size={20} /> : <FaTimes size={20} />}
          </div>
          <div
            className={
              !click
                ? "fixed right-[-200%] ease-in-out duration-500 "
                : "fixed right-0 top-0 w-[60%] h-full bg-[#03170A] ease-in-out duration-500"
            }
          >
            <h1 className="text-2xl text-[#00df9a] font-bold tracking-wider leading-10 mx-8 mt-14 border-b border-[#00df9a]/80">
              Blog
            </h1>
            <ul className="uppercase font-light tracking-wide md:tracking-[100px] pt-10 px-4">
              <NavLink to="/">
                <li
                  className="p-4 hover:border-b hover:border-[#00df9a] ease-in-out"
                  onClick={() => setClick(false)}
                >
                  Home
                </li>
              </NavLink>

              <NavLink to="/portfolio">
                <li
                  className="p-4 hover:border-b hover:border-[#00df9a] ease-in-out"
                  onClick={() => setClick(false)}
                >
                  Portfolio
                </li>
              </NavLink>

              <NavLink to="/about">
                <li
                  className="p-4 hover:border-b hover:border-[#00df9a] ease-in-out"
                  onClick={() => setClick(false)}
                >
                  About
                </li>
              </NavLink>

              <NavLink to="/contact">
                <li
                  className="p-4 hover:border-b hover:border-[#00df9a] ease-in-out"
                  onClick={() => setClick(false)}
                >
                  Contact
                </li>
              </NavLink>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
