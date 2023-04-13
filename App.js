import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./src/Components/Body";
import Navbar from "./src/Components/Navbar";
import RestaurantCard from "./src/Components/RestaurantCards";
import Contact from "./src/Components/Contact";
import About from "./src/Components/About";
import CustomError from "./src/Components/customError";
import Restaurant from "./src/Components/Restaurant";
import Signup from "./src/Components/Signup";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <CustomError />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:id",
        element: <Restaurant />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
