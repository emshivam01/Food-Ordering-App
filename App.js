import React, { useContext, useState } from "react";
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
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Faq from "./src/Components/Faq";
import Footer from "./src/Components/Footer";
import BrandNameContext from "./utlis/BrandNameContext";
import ChangeBrandName from "./src/Components/ChangeBrandName";

const QuoteOfTheDay = lazy(() => import("./src/Components/QuoteOfTheDayClass"));

const AppLayout = () => {
  const value = useContext(BrandNameContext);

  const [name, setName] = useState("Meal Magic");
  return (
    <>
      <BrandNameContext.Provider value={{ name, setName }}>
        <Navbar />
        <ChangeBrandName />
        <Outlet />
        <Footer />
      </BrandNameContext.Provider>
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
        path: "/faqs",
        element: <Faq />,
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
