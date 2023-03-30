import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./Components/Navbar";
import RestaurantCard from "./Components/RestaurantCards";
import SearchBar from "./Components/SearchBar";
import { restaurantList } from "./config";

const AppLayout = () => {
  return (
    <>
      <Navbar />
      <SearchBar />
      <div className="Cards">
        {restaurantList.map((restaurant) => {
          return <RestaurantCard {...restaurant.data} />;
        })}
      </div>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
