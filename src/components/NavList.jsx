import React from "react";
import { NavLink } from "react-router-dom";

const links = [
     { id: 1, url: 'project', text: 'Projects' },
     { id: 2, url: 'tools', text: 'Tools' },
     { id: 3, url: 'contact', text: 'Contact' },
]

const NavList = () => {
     return (
          <>
               {links.map((link) => {
                    const { id, url, text } = link;
                    return (
                         <li key={id}>
                              <NavLink to={url}>
                                   {text}
                              </NavLink>
                         </li>
                    );
               })}
          </>
     );
}

export default NavList;