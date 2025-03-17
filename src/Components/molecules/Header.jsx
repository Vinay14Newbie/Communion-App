import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react"; // For hamburger and close icons
import logo from "../../assets/logo.jpg";

export const Header = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow px-6 lg:px-[140px]">
      <nav className="flex justify-between items-center py-4">
        {/* Logo */}
        <div className="cursor-pointer" onClick={() => navigate("/")}>
          <img src={logo} alt="Logo" className="h-10" />
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="lg:hidden">
          {isOpen ? (
            <X
              className="w-8 h-8 cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <Menu
              className="w-8 h-8 cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>

        {/* Nav Links */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } lg:flex absolute lg:static top-16 left-0 w-full lg:w-auto bg-white shadow-md lg:shadow-none transition duration-300`}
        >
          <ul className="flex flex-col lg:flex-row lg:space-x-8 font-medium p-6 lg:p-0">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `block py-2 ${
                    isActive ? "text-blue-500" : "text-gray-600"
                  } hover:text-blue-500`
                }
                onClick={() => setIsOpen(false)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/events"
                className={({ isActive }) =>
                  `block py-2 ${
                    isActive ? "text-blue-500" : "text-gray-600"
                  } hover:text-blue-500`
                }
                onClick={() => setIsOpen(false)}
              >
                Events
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `block py-2 ${
                    isActive ? "text-blue-500" : "text-gray-600"
                  } hover:text-blue-500`
                }
                onClick={() => setIsOpen(false)}
              >
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
