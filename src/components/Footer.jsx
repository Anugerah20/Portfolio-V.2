import React from "react";

const Footer = () => {
     // Set current year
     const currentYear = new Date().getFullYear();

     return (
          <>
               <footer className="footer footer-center bg-base-300 text-base-content p-4">
                    <aside>
                         <p>Copyright © {currentYear} - All right reserved by N A P</p>
                    </aside>
               </footer>
          </>
     )
}

export default Footer;
