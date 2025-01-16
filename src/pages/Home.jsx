import { useRef } from "react";
import { IoChevronDown } from "react-icons/io5";
import { toast } from "sonner";
import Portfolio from "./Projects";
import CV from "../uploads/CV_Nabil Anugerah Pangestu.pdf";
import TypingEffect from "react-typing-effect";

const Home = () => {

     // Download File CV
     const downloadFile = () => {
          try {
               window.open(CV, "_blank");

          } catch (error) {
               console.log(error);
               toast.error("Gagal mendownload file");
          }
     };

     // use ref scroll portfolio
     const portfolioRef = useRef(null);

     // Scroll to portfolio
     const scrollToPortfolio = () => {
          if (portfolioRef.current) {
               portfolioRef.current.scrollIntoView({ behavior: "smooth" });
          }
     }

     return (
          <>
               <section className="flex flex-col px-8 py-20 bg-base-200 min-h-screen">
                    <main className="flex">
                         <div className="w-full">
                              <h1 className="lg:text-3xl md:text-3xl text-2xl  font-bold my-5">Hey, i&apos;m <span className="border-b-2 border-orange-500 text-orange-500"><TypingEffect text="Nabil Anugerah Pangestu." speed={80} eraseDelay={1000} /></span></h1>
                              <h1 className="py-3 lg:text-6xl md:text-4xl text-4xl font-semibold">
                                   <span className="text-orange-500">I specialize</span> in both building <span className="text-orange-500">web interfaces</span> and <span className="text-orange-500">backend systems.</span>
                              </h1>

                              <div className="flex mt-2">
                                   <button onClick={downloadFile} className="btn btn-outline">Download CV</button>
                              </div>
                              <span className="flex justify-center text-center animate-bounce mt-14">
                                   <button onClick={scrollToPortfolio} className="text-center flex justify-center items-center gap-2 text-md font-bold transition hover:delay-100 hover:text-orange-500"> <IoChevronDown /> Show Projects</button>
                              </span>
                         </div>
                    </main>
               </section>
               <div className="mt-24 lg:mt-28" ref={portfolioRef}>
                    <Portfolio />
               </div>
          </>
     )
}

export default Home;