import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./Components/Body";
import Navbar from "./Components/Navbar";
import RestaurantCard from "./Components/RestaurantCards";

const AppLayout = () => {
  return (
    <>
      <Navbar />
      <Body />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
