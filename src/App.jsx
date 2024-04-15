// import Navbar from "./components/navbar/navbar";
import HomePage from "./routes/homepage/homePage";
// import './layout.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ListPage from "./routes/listpage/listPage";
import Layout from "./routes/layout/layout";

function App() {
  const router1 = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/list",
          element: <ListPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router1} />;
}

export default App;
