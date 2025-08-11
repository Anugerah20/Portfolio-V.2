import { useRef } from "react";
import { IoChevronDown } from "react-icons/io5";
// import { toast } from "sonner";
import Portfolio from "./Projects";
// import CV from "../uploads/CV_NabilAnugerahPangestu.pdf";
import TypingEffect from "react-typing-effect";
import { Parallax } from "react-scroll-parallax";
import Background from "../assets/background.jpg";

export default function Home() {
     const portfolioRef = useRef(null);

     // const downloadFile = () => {
     //      try {
     //           window.open(CV, "_blank");
     //      } catch (e) {
     //           console.error(e);
     //           toast.error("Gagal mendownload file");
     //      }
     // };

     const scrollToPortfolio = () => {
          portfolioRef.current?.scrollIntoView({ behavior: "smooth" });
     };

     return (
          <>
               <section className="relative min-h-screen md:min-h-[100svh] overflow-hidden">
                    <Parallax translateY={[-160, 160]} className="absolute inset-0 -z-10 h-full w-full">
                         <img
                              src={Background}
                              alt="Parallax-Background"
                              className="h-full w-full object-cover"
                              loading="eager"
                         />
                    </Parallax>

                    <div className="absolute inset-0 -z-10 bg-black/40" />

                    <div className="relative z-10 mx-auto max-w-6xl min-h-screen md:min-h-[100svh] px-6
                        flex flex-col items-center justify-center text-center">
                         <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
                              Hey, i&apos;m{" "}
                              <span className="border-b-2 border-orange-500 text-orange-400">
                                   <TypingEffect text="Nabil Anugerah Pangestu." speed={80} eraseDelay={1000} />
                              </span>
                         </h1>

                         <h2 className="mt-6 font-semibold leading-tight text-white text-4xl md:text-5xl lg:text-6xl">
                              <span className="text-orange-400">I specialize</span> in both building{" "}
                              <span className="text-orange-400">web interfaces</span> and{" "}
                              <span className="text-orange-400">backend systems.</span>
                         </h2>

                         {/* <div className="mt-10">
                              <button onClick={downloadFile} className="btn btn-outline">
                                   Download CV
                              </button>
                         </div> */}

                         <button
                              onClick={scrollToPortfolio}
                              className="mt-12 flex items-center gap-2 text-white font-semibold hover:text-orange-500 transition animate-bounce"
                         >
                              <IoChevronDown /> Show Projects
                         </button>

                         <div className="pointer-events-none absolute inset-0 rounded-[2rem]" />
                    </div>
               </section>

               <section className="bg-base-200 py-24 px-6" ref={portfolioRef}>
                    <div className="mx-auto max-w-6xl">
                         <Portfolio />
                    </div>
               </section>
          </>
     );
}
