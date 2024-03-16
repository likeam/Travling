import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/logo.jpg";
import { FaCaretDown } from "react-icons/fa";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import ResponsiveMenu  from './RsponsiveMenu'

export const NavbarLinks = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Blogs",
    link: "/blogs",
  },
  {
    name: "Best Places",
    link: "/best-places",
  },
];


const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const dropdownLinks = [
    {
      name: "Our Services",
      link: "/services",
    },
    {
      name: "Top Brands",
      link: "/#mobile_brands",
    },
    {
      name: "Location",
      link: "/#location",
    },
  ];

  return (
    <>
      <div className=" fixed top-0 right-0 w-full bg-white text-black shadow-md">
        <div className="bg-gradient-to-r from-primary to-secondary text-white">
          <div className=" container py-[2px] sm:block hidden ">
            <div className="flex">
              <p>20% off on next booking</p>
              <p>Mobile No. +92-300-6644123</p>
            </div>
          </div>
        </div>
        <div className=" container py-3 sm:py-0">
          <div className="flex justify-between">
            <div>
              <Link to="/" onClick={() => window.scrollTo(0, 0)}>
                <img src={Logo} alt="logo" className=" h-16" />
              </Link>
            </div>
            <div className=" hidden md:block">
              <ul className="flex items-center gap-6">
                <li className="py-4">
                  <NavLink
                    activeclassname="active"
                    to="/"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    Home
                  </NavLink>
                </li>
                <li className="py-4">
                  <NavLink
                    activeclassname="active"
                    to="/blogs"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    Blogs
                  </NavLink>
                </li>
                <li className="py-4">
                  <NavLink
                    activeclassname="active"
                    to="/places"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    Places
                  </NavLink>
                </li>
                <li className="py-4">
                  <NavLink
                    activeclassname="active"
                    to="/about"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    About
                  </NavLink>
                </li>
                <li className=" py-4 relative group cursor-pointer">
                  <div className=" dropdown flex items-center">
                    <span>Quick Links</span>
                    <span>
                      <FaCaretDown className=" transition-all duration-200 group-hover:rotate-180" />
                    </span>
                  </div>
                  <div className=" absolute -left-9 z-[9999] hidden group-hover:block shadow-md text-black w-[150px] bg-white p-2">
                    <ul>
                      {dropdownLinks.map(({ name, link }) => {
                        return (
                          <li key={name}>
                            <a
                              className=" inline-block w-full rounded-md p-2 hover:bg-primary/20"
                              href={link}
                            >
                              {name}
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
            <div className=" flex  text-center gap-4">
            <div>
              <button className=" bg-gradient-to-r from-primary to-secondary hover: bg-bg-gradient-to-r hover:from-secondary hover:bg-primary transition-all duration-500 text-white px-3 py-1 rounded-full">
                Book Now
              </button>
            </div>
            <div className=" md:hidden block">
              {showMenu ? (
                <HiMenuAlt1
                  onClick={toggleMenu}
                  className=" cursor-pointer transition-all"
                  size={30}
                />
              ) : (
                <HiMenuAlt3
                  onClick={toggleMenu}
                  className=" cursor-pointer transition-all"
                  size={30}
                />
              )}
            </div>
            </div>
          </div>
        </div>
        <ResponsiveMenu setShowMenu={setShowMenu} showMenu={showMenu} />
      </div>
    </>
  );
};

export default Navbar;
