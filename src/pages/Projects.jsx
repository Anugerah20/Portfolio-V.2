import apiPortfolio from "../services/api";

const Projects = () => {
     return (
          <>
               <div className="m-10 text-center">
                    <h1 className="text-4xl font-bold text-orange-500 p-2">My Projects</h1>
               </div>
               <div className="max-w-7xl mx-auto my-5 px-5 lg:px-10 md:px-7 gap-x-4 gap-y-4 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">

                    {apiPortfolio.map((item) => (
                         <a href={item.url} key={item.id} className="card border border-gray-700 shadow-xl">

                              <figure>
                                   <img
                                        src={item.image}
                                        alt={item.title} />
                              </figure>
                              <div className="card-body">
                                   <h2 className="card-title text-2xl">
                                        {item.title}
                                   </h2>
                                   <span className="text-sm font-bold mt-4">Tech Stack:</span>
                                   <div className="flex flex-wrap gap-2 mt-2">
                                        {item.stack.split(', ').map((tech, index) => (
                                             <div key={index} className="badge badge-neutral">
                                                  {tech}
                                             </div>
                                        ))}
                                   </div>
                              </div>
                         </a>
                    ))}
               </div>
          </>

     )
}

export default Projects;