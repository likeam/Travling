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
      <div className="fixed top-0 right-0 w-full text-black bg-white shadow-md z-[9999]">
        <div className="text-white bg-gradient-to-r from-primary to-secondary">
          <div className=" container py-[2px] sm:block hidden ">
            <div className="flex justify-between">
              <p>20% off on next booking</p>
              <p>Mobile No. +92-300-6644123</p>
            </div>
          </div>
        </div>
        <div className="container py-3 sm:py-0">
          <div className="flex justify-between">
            <div>
              <Link to="/" onClick={() => window.scrollTo(0, 0)}>
                <img src={Logo} alt="logo" className="h-16 " />
              </Link>
            </div>
            <div className="hidden md:block">
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
                <li className="relative py-4 cursor-pointer group">
                  <div className="flex items-center dropdown">
                    <span>Quick Links</span>
                    <span>
                      <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                    </span>
                  </div>
                  <div className=" absolute -left-9 z-[9999] hidden group-hover:block shadow-md text-black w-[150px] bg-white p-2">
                    <ul>
                      {dropdownLinks.map(({ name, link }) => {
                        return (
                          <li key={name}>
                            <a
                              className="inline-block w-full p-2 rounded-md hover:bg-primary/20"
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
            <div className="flex gap-4 md:pt-4 ">
            <div>
              <button className="px-3 py-1 text-white transition-all duration-500 rounded-full bg-gradient-to-r from-primary to-secondary hover: bg-bg-gradient-to-r hover:from-secondary hover:bg-primary">
                Book Now
              </button>
            </div>
            <div className="block md:hidden">
              {showMenu ? (
                <HiMenuAlt1
                  onClick={toggleMenu}
                  className="transition-all cursor-pointer "
                  size={30}
                />
              ) : (
                <HiMenuAlt3
                  onClick={toggleMenu}
                  className="transition-all cursor-pointer "
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
