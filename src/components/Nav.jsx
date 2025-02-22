import React from "react";
import NavList from "./NavList";
import { NavLink } from "react-router-dom";
import IconName from "../assets/icon-nabil.svg"

const Nav = () => {
     return (
          <div className="navbar dark:bg-base-100 light:bg-base-100">
               <div className="navbar-start">
                    {/* Logo or Branding */}
                    <NavLink to="/" className="btn btn-ghost text-2xl">
                         <img src={IconName} className="w-10 h-10" alt="Icon Name" />
                    </NavLink>
               </div>

               {/* Hamburger menu for small screens */}
               <div className="navbar-end lg:hidden dark:bg-base-100 light:bg-base-100">
                    <div className="dropdown dropdown-left">
                         <div tabIndex={0} role="button" className="btn btn-ghost">
                              <svg
                                   xmlns="http://www.w3.org/2000/svg"
                                   className="h-5 w-5"
                                   fill="none"
                                   viewBox="0 0 24 24"
                                   stroke="currentColor">
                                   <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16"
                                   />
                              </svg>
                         </div>
                         <ul
                              tabIndex={0}
                              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                              <NavList />
                         </ul>
                    </div>
               </div>

               {/* Navigation for large screens */}
               <div className="navbar-end hidden lg:flex dark:bg-base-100 light:bg-base-100">
                    <ul className="menu menu-horizontal px-1">
                         <NavList />
                    </ul>
               </div>
          </div>
     );
};

export default Nav;
