
import HomePage from "./routes/homepage/homePage";
import "leaflet/dist/leaflet.css";

// import './layout.css';
import { 
  createBrowserRouter, 
  RouterProvider
} from "react-router-dom";
import ListPage from "./routes/listpage/listPage";
import Layout from "./routes/layout/layout";
import SinglePage from "./routes/SinglePage/singlePage";
// import Slider from "./routes/slider/Slider";

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
        // When we use Single Items we are gonna need id, which will be dynamic and can be a string or a number
        {
          path: "/:id",
          element: <SinglePage />,
        }
        
      ],
    },
  ]);

  return <RouterProvider router={router1} />;
}

export default App;
