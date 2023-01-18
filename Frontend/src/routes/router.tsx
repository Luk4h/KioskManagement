import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Create from "./create/create";
import Home from "./home/home";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/Edit",
      element: <></>,
    },
    {
      path: "/Create",
      element: <Create />,
    },
    {
      path: "/*",
      element: <Home />,
    }
]);

export default function Router() {
return (
    <RouterProvider router={router}/>
);
}