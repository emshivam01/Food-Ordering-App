import React from "react";
import { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import Body from "./src/Components/Body";
import Navbar from "./src/Components/Navbar";
import RestaurantCard from "./src/Components/RestaurantCards";
import Contact from "./src/Components/Contact";
import About from "./src/Components/About";
import CustomError from "./src/Components/customError";
import Restaurant from "./src/Components/Restaurant";
import Login from "./src/Components/Login";
// import QuoteOfTheDay from "./src/Components/QuoteOfTheDayClass";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const QuoteOfTheDay = lazy(() => import("./src/Components/QuoteOfTheDayClass"));

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
        path: "/quote",
        element: (
          <Suspense>
            <QuoteOfTheDay name={"Quote"} />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:id",
        element: <Restaurant />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
