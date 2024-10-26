import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";

const Contact = () => {
     return (
          <section className="m-10 flex justify-center items-center">
               <div className="mx-auto max-w-7xl">
                    <div className="text-center">
                         <h1 className="text-4xl font-bold text-orange-500 mb-10">Get in Touch</h1>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mx-auto">
                         <div className="text-center lg:text-left lg:text-4xl text-3xl font-bold">
                              <span className="block leading-tight">Want to <span className="text-orange-500">Hire Me?</span></span>
                              <span className="block leading-tight">Interested in Working</span>
                              <span className="block leading-tight">Together</span>
                              <span className="block leading-tight">or Discuss <span className="text-orange-500">With Me?</span></span>
                              <div className="flex justify-center lg:justify-start mt-4">
                                   <a href="mailto:nabilanugerah20@gmail.com" className="btn btn-neutral flex items-center gap-2">
                                        <FaEnvelope className="text-2xl" /> Hire Me
                                   </a>
                              </div>
                         </div>
                         <div>
                              <ul className="menu rounded-box">
                                   <h1 className="text-3xl font-bold text-orange-500 text-left lg:text-left ml-3">Contact Information</h1>
                                   <li className="text-xl font-bold flex items-start gap-3 mt-3">
                                        <a href="mailto:nabilanugerah20@gmail.com"><FaEnvelope className="text-3xl" /> nabilanugerah20@gmail.com</a>
                                   </li>
                                   <li className="text-xl font-bold flex items-start gap-3 mt-3">
                                        <a href="https://www.linkedin.com/in/nabil-anugerah-pangestu/"><FaLinkedin className="text-3xl" /> Nabil Anugerah Pangestu</a>
                                   </li>
                                   <li className="text-xl font-bold flex items-start gap-3 mt-3">
                                        <a href="https://instagram.com/anugerah_est/"><FaInstagram className="text-3xl" /> anugerah_est</a>
                                   </li>
                                   <li className="text-xl font-bold flex items-start gap-3 mt-3">
                                        <a href="https://github.com/Anugerah20/"><FaGithub className="text-3xl" /> Anugerah20</a>
                                   </li>
                              </ul>
                         </div>
                    </div>
               </div>
          </section>
     );
};

export default Contact;
