import { Link } from "react-router-dom";

const NotFound = () => {
     return (
          <div className="min-h-screen grid grid-cols-1 text-center">
               <div className="flex flex-col items-center justify-center gap-y-5">
                    <h1 className="text-8xl font-extrabold text-orange-500">4 0 4</h1>
                    <p className="text-3xl font-medium text-white">Sorry, the page you are looking for was not found.</p>
                    <Link to="/" className="underline mt-4 text-white">Back to Home</Link>
               </div>
          </div>
     )
}

export default NotFound;
