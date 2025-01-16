import React from "react";

const Footer = () => {
     // Set current year
     const currentYear = new Date().getFullYear();

     return (
          <>
               <footer className="footer footer-center dark:bg-base-100 light:bg-base-100 text-base-content p-4">
                    <aside>
                         <p>Copyright © {currentYear} - All right reserved by N A P</p>
                    </aside>
               </footer>
          </>
     )
}

export default Footer;
