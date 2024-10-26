import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Tools from "./pages/Tools";
import PublicLayout from "./layout/PublicLayout";
import NotFound from "./pages/NotFound";

// Manage react router dom
const router = createBrowserRouter([
  {
    path: '/',
    element: <PublicLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'project',
        element: <Projects />,
      },
      {
        path: 'tools',
        element: <Tools />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: '*',
        element: <NotFound />,
      }
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />
}

export default App;
