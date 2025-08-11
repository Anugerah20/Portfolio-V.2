import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";

const Contact = () => {
     return (
          <section className="m-4 md:m-10 flex justify-center items-center">
               <div className="w-full max-w-4xl">
                    <div className="text-center">
                         <h1 className="text-2xl md:text-4xl font-bold text-orange-500 mb-6 md:mb-10">
                              Get in Touch
                         </h1>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 border border-gray-700 rounded-md p-4 md:p-10">
                         <div className="text-center lg:text-left text-xl md:text-3xl lg:text-4xl font-bold">
                              <span className="block leading-tight">
                                   Want to <span className="text-orange-500">Hire Me?</span>
                              </span>
                              <span className="block leading-tight">Interested in Working</span>
                              <span className="block leading-tight">Together</span>
                              <span className="block leading-tight">
                                   or Discuss <span className="text-orange-500">With Me?</span>
                              </span>

                              <div className="flex justify-center lg:justify-start mt-4">
                                   <a
                                        href="mailto:nabilanugerah20@gmail.com"
                                        className="btn btn-neutral md:btn-md flex items-center gap-2 text-sm md:text-base"
                                   >
                                        <FaEnvelope className="text-xl md:text-1xl" /> Hire Me
                                   </a>
                              </div>
                         </div>
                         <div className="mb-8 flex flex-col flex-wrap justify-center items-center">
                              <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-orange-500 text-left ml-1 md:ml-3">
                                   Contact Information
                              </h1>
                              <ul className="mt-3 space-y-3">
                                   <li className="flex items-start gap-3 text-base md:text-xl font-bold">
                                        <a
                                             href="mailto:nabilanugerah20@gmail.com"
                                             className="flex items-center gap-3"
                                        >
                                             <FaEnvelope className="text-2xl md:text-3xl" /> nabilanugerah20@gmail.com
                                        </a>
                                   </li>
                                   <li className="flex items-start gap-3 text-base md:text-xl font-bold">
                                        <a
                                             href="https://github.com/Anugerah20/"
                                             className="flex items-center gap-3"
                                        >
                                             <FaGithub className="text-2xl md:text-3xl" /> Anugerah20
                                        </a>
                                   </li>
                                   <li className="flex items-start gap-3 text-base md:text-xl font-bold">
                                        <a
                                             href="https://instagram.com/anugerah_est/"
                                             className="flex items-center gap-3"
                                        >
                                             <FaInstagram className="text-2xl md:text-3xl" /> anugerah_est
                                        </a>
                                   </li>
                                   <li className="flex items-start gap-3 text-base md:text-xl font-bold">
                                        <a
                                             href="https://www.linkedin.com/in/nabil-anugerah-pangestu/"
                                             className="flex items-center gap-3"
                                        >
                                             <FaLinkedin className="text-2xl md:text-3xl" /> Nabil Anugerah Pangestu
                                        </a>
                                   </li>
                              </ul>
                         </div>
                    </div>
               </div>
          </section>
     );
};

export default Contact;
