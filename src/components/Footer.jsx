import React from "react";

const Footer = () => {
     // Set current year
     const currentYear = new Date().getFullYear();

     return (
          <>
               <footer className="footer footer-center border-t border-gray-700 text-base-content p-4">
                    <aside>
                         <p>Copyright © {currentYear} - Created by <span className="font-bold capitalize">nabil anugerah pangestu</span></p>
                    </aside>
               </footer>
          </>
     )
}

export default Footer;
