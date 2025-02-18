import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import About from "./pages/Article";
import Contact from "./pages/Contact";
import List from "./pages/List";
import Article from "./pages/Article";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/List",
          element: <List />,
        },
        {
          path: "/Contact",
          element: <Contact />,
        },
        {
          path: "/Article",
          element: <Article />,
        },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
