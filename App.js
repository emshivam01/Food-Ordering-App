import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./src/Components/Body";
import Navbar from "./src/Components/Navbar";
import RestaurantCard from "./src/Components/RestaurantCards";

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
