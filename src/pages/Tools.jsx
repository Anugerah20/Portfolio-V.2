import { RiReactjsFill } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { SiJavascript } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { FaGitSquare } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { DiMongodb } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { FaFigma } from "react-icons/fa";

const Tools = () => {
     return (
          <>
               <div className="flex flex-row justify-center items-center">
                    <div className="m-10 text-center">
                         <h1 className="text-4xl font-bold text-orange-500 p-2">My Tools</h1>
                    </div>
               </div>
               <div className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 gap-5 my-10">
                    <div className="flex flex-col items-center justify-center gap-y-2">
                         <FaHtml5 className="text-8xl" />
                         <h1 className="text-2xl font-bold">HTML5</h1>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-y-2">
                         <FaCss3Alt className="text-8xl" />
                         <h1 className="text-2xl font-bold">CSS3</h1>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-y-2">
                         <SiJavascript className="text-8xl" />
                         <h1 className="text-2xl font-bold">JavaScript</h1>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-y-2">
                         <RiReactjsFill className="text-8xl" />
                         <h1 className="text-2xl font-bold">React js</h1>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-y-2">
                         <FaNodeJs className="text-8xl" />
                         <h1 className="text-2xl font-bold">Node js</h1>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-y-2">
                         <SiExpress className="text-8xl" />
                         <h1 className="text-2xl font-bold">Express</h1>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-y-2">
                         <SiMysql className="text-8xl" />
                         <h1 className="text-2xl font-bold">MySQL</h1>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-y-2">
                         <BiLogoPostgresql className="text-8xl" />
                         <h1 className="text-2xl font-bold">PostgreSQL</h1>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-y-2">
                         <DiMongodb className="text-8xl" />
                         <h1 className="text-2xl font-bold">MongoDB</h1>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-y-2">
                         <FaBootstrap className="text-8xl" />
                         <h1 className="text-2xl font-bold">Bootstrap</h1>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-y-2">
                         <RiTailwindCssFill className="text-8xl" />
                         <h1 className="text-2xl font-bold">Tailwind CSS</h1>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-y-2">
                         <FaGitSquare className="text-8xl" />
                         <h1 className="text-2xl font-bold">Git</h1>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-y-2">
                         <SiPostman className="text-8xl" />
                         <h1 className="text-2xl font-bold">Postman</h1>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-y-2">
                         <FaFigma className="text-8xl" />
                         <h1 className="text-2xl font-bold">Figma</h1>
                    </div>
               </div>
          </>
     )
}

export default Tools;